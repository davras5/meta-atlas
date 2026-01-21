-- ============================================================================
-- Meta-Atlas Database Schema
-- ============================================================================
-- This file contains the PostgreSQL schema definition for the Meta-Atlas
-- metadata catalog. It is designed for use with Supabase but can be adapted
-- for any PostgreSQL database.
--
-- Version: 1.0
-- Last Updated: January 2026
--
-- Related Documentation:
--   - DATAMODEL.md - Conceptual data model specification
--   - SUPABASE.md - Supabase-specific configuration (coming soon)
--
-- Usage:
--   Run this script against a PostgreSQL database to create all tables,
--   indexes, and constraints required for the metadata catalog.
-- ============================================================================

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ============================================================================
-- ORGANIZATION LAYER
-- ============================================================================

-- Projects table
CREATE TABLE projects (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name JSONB NOT NULL,
  description JSONB NOT NULL,
  owner JSONB NOT NULL,
  status VARCHAR(20) NOT NULL DEFAULT 'draft',
  current_version_id UUID,
  color VARCHAR(7),
  icon VARCHAR(50),
  domains UUID[],
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  created_by VARCHAR(100) NOT NULL,
  updated_at TIMESTAMPTZ,
  updated_by VARCHAR(100),
  last_activity TIMESTAMPTZ,
  version INTEGER NOT NULL DEFAULT 1
);

-- Project Versions table
CREATE TABLE project_versions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  project_id UUID NOT NULL REFERENCES projects(id) ON DELETE CASCADE,
  version_number VARCHAR(20) NOT NULL,
  name JSONB,
  description JSONB,
  status VARCHAR(20) NOT NULL DEFAULT 'draft',
  published_at TIMESTAMPTZ,
  published_by JSONB,
  snapshot JSONB,
  previous_version_id UUID REFERENCES project_versions(id),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  created_by VARCHAR(100) NOT NULL,
  updated_at TIMESTAMPTZ,
  updated_by VARCHAR(100),
  version INTEGER NOT NULL DEFAULT 1,
  UNIQUE(project_id, version_number)
);

-- Add foreign key for current_version after project_versions exists
ALTER TABLE projects
  ADD CONSTRAINT fk_current_version
  FOREIGN KEY (current_version_id)
  REFERENCES project_versions(id);

-- Changelogs table
CREATE TABLE changelogs (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  project_id UUID NOT NULL REFERENCES projects(id) ON DELETE CASCADE,
  version_id UUID REFERENCES project_versions(id),
  change_type VARCHAR(20) NOT NULL,
  entity_type VARCHAR(50) NOT NULL,
  entity_id UUID NOT NULL,
  entity_name VARCHAR(200),
  action VARCHAR(20) NOT NULL,
  summary JSONB NOT NULL,
  details JSONB,
  changed_fields TEXT[],
  reason TEXT,
  changed_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  changed_by JSONB NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  created_by VARCHAR(100) NOT NULL,
  version INTEGER NOT NULL DEFAULT 1
);

-- Project Users table
CREATE TABLE project_users (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  project_id UUID NOT NULL REFERENCES projects(id) ON DELETE CASCADE,
  user_id UUID,
  name VARCHAR(200) NOT NULL,
  email VARCHAR(200) NOT NULL,
  role VARCHAR(20) NOT NULL CHECK (role IN ('admin', 'editor', 'viewer')),
  status VARCHAR(20) NOT NULL DEFAULT 'active' CHECK (status IN ('active', 'inactive', 'invited')),
  joined_at TIMESTAMPTZ,
  invited_by UUID REFERENCES project_users(id),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  created_by VARCHAR(100) NOT NULL,
  updated_at TIMESTAMPTZ,
  updated_by VARCHAR(100),
  version INTEGER NOT NULL DEFAULT 1,
  UNIQUE(project_id, email)
);

-- Governance Assignments table (Data Governance roles at entity level)
CREATE TABLE governance_assignments (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  entity_type VARCHAR(50) NOT NULL CHECK (entity_type IN ('domain', 'concept', 'logical_entity', 'dataset')),
  entity_id UUID NOT NULL,
  role VARCHAR(20) NOT NULL CHECK (role IN ('data_owner', 'data_steward', 'data_custodian', 'data_consumer')),
  person_name VARCHAR(200) NOT NULL,
  person_email VARCHAR(200) NOT NULL,
  organization VARCHAR(200),
  assigned_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  assigned_by UUID REFERENCES project_users(id),
  notes TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  created_by VARCHAR(100) NOT NULL
);

-- ============================================================================
-- CONCEPTUAL LAYER
-- ============================================================================

-- Domains table
CREATE TABLE domains (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  project_id UUID NOT NULL REFERENCES projects(id) ON DELETE CASCADE,
  name JSONB NOT NULL,
  description JSONB NOT NULL,
  abbreviation VARCHAR(10),
  owner JSONB NOT NULL,
  steward JSONB,
  parent_id UUID REFERENCES domains(id),
  status VARCHAR(20) NOT NULL DEFAULT 'draft',
  valid_from DATE,
  valid_to DATE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  created_by VARCHAR(100) NOT NULL,
  updated_at TIMESTAMPTZ,
  updated_by VARCHAR(100),
  version INTEGER NOT NULL DEFAULT 1,
  UNIQUE(project_id, abbreviation)
);

-- Concepts table
CREATE TABLE concepts (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  project_id UUID NOT NULL REFERENCES projects(id) ON DELETE CASCADE,
  domain_id UUID NOT NULL REFERENCES domains(id),
  name JSONB NOT NULL,
  definition JSONB NOT NULL,
  synonyms JSONB,
  business_rules TEXT[],
  legal_references JSONB,
  standard_references JSONB,
  external_identifiers JSONB,
  related_concepts UUID[],
  status VARCHAR(20) NOT NULL DEFAULT 'draft',
  valid_from DATE,
  valid_to DATE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  created_by VARCHAR(100) NOT NULL,
  updated_at TIMESTAMPTZ,
  updated_by VARCHAR(100),
  version INTEGER NOT NULL DEFAULT 1
);

-- ============================================================================
-- LOGICAL LAYER
-- ============================================================================

-- Logical Entities table
CREATE TABLE logical_entities (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  project_id UUID NOT NULL REFERENCES projects(id) ON DELETE CASCADE,
  name VARCHAR(100) NOT NULL,
  description JSONB NOT NULL,
  concept_ids UUID[] NOT NULL,
  entity_type VARCHAR(20) NOT NULL,
  business_keys VARCHAR(100)[],
  compliance JSONB,
  status VARCHAR(20) NOT NULL DEFAULT 'draft',
  valid_from DATE,
  valid_to DATE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  created_by VARCHAR(100) NOT NULL,
  updated_at TIMESTAMPTZ,
  updated_by VARCHAR(100),
  version INTEGER NOT NULL DEFAULT 1,
  UNIQUE(project_id, name)
);

-- Attributes table
CREATE TABLE attributes (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  entity_id UUID NOT NULL REFERENCES logical_entities(id) ON DELETE CASCADE,
  name VARCHAR(100) NOT NULL,
  description JSONB NOT NULL,
  logical_type VARCHAR(20) NOT NULL,
  length INTEGER,
  precision INTEGER,
  scale INTEGER,
  is_nullable BOOLEAN NOT NULL DEFAULT true,
  is_business_key BOOLEAN NOT NULL DEFAULT false,
  default_value TEXT,
  value_domain_id UUID,
  derivation_rule TEXT,
  position INTEGER NOT NULL,
  status VARCHAR(20) NOT NULL DEFAULT 'active'
);

-- Relationships table
CREATE TABLE relationships (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name VARCHAR(100) NOT NULL,
  description JSONB,
  source_entity_id UUID NOT NULL REFERENCES logical_entities(id) ON DELETE CASCADE,
  target_entity_id UUID NOT NULL REFERENCES logical_entities(id) ON DELETE CASCADE,
  relationship_type VARCHAR(20) NOT NULL CHECK (relationship_type IN ('association', 'composition', 'aggregation', 'dependency', 'generalization')),
  cardinality VARCHAR(20) NOT NULL CHECK (cardinality IN ('one_to_one', 'one_to_many', 'many_to_one', 'many_to_many')),
  is_identifying BOOLEAN DEFAULT false,
  foreign_key_attributes UUID[],
  inverse_name VARCHAR(100),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  created_by VARCHAR(100) NOT NULL
);

-- Value Domains table
CREATE TABLE value_domains (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  project_id UUID NOT NULL REFERENCES projects(id) ON DELETE CASCADE,
  is_shared BOOLEAN NOT NULL DEFAULT false,
  name VARCHAR(100) NOT NULL,
  description JSONB NOT NULL,
  domain_type VARCHAR(20) NOT NULL,
  values JSONB,
  min_value TEXT,
  max_value TEXT,
  pattern TEXT,
  external_source TEXT,
  version VARCHAR(20),
  valid_from DATE,
  valid_to DATE,
  status VARCHAR(20) NOT NULL DEFAULT 'draft',
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  created_by VARCHAR(100) NOT NULL,
  version_num INTEGER NOT NULL DEFAULT 1,
  UNIQUE(project_id, name)
);

-- Datasets table
CREATE TABLE datasets (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  project_id UUID NOT NULL REFERENCES projects(id) ON DELETE CASCADE,
  name JSONB NOT NULL,
  description JSONB NOT NULL,
  publisher JSONB NOT NULL,
  contact_point JSONB,
  keywords JSONB,
  themes TEXT[],
  logical_entity_ids UUID[],
  access_rights VARCHAR(20) NOT NULL DEFAULT 'internal',
  license JSONB,
  spatial_coverage JSONB,
  temporal_coverage JSONB,
  accrual_periodicity VARCHAR(50),
  issued DATE,
  modified TIMESTAMPTZ,
  compliance JSONB,
  quality JSONB,
  valid_from DATE,
  valid_to DATE,
  status VARCHAR(20) NOT NULL DEFAULT 'draft',
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  created_by VARCHAR(100) NOT NULL,
  updated_at TIMESTAMPTZ,
  updated_by VARCHAR(100),
  version_num INTEGER NOT NULL DEFAULT 1,
  UNIQUE(project_id, (name->>'de'))
);

-- ============================================================================
-- PHYSICAL LAYER
-- ============================================================================

-- Systems table
CREATE TABLE systems (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name VARCHAR(100) NOT NULL,
  description JSONB NOT NULL,
  system_type VARCHAR(20) NOT NULL,
  vendor VARCHAR(100),
  product VARCHAR(100),
  version VARCHAR(50),
  environment VARCHAR(20) NOT NULL,
  owner JSONB NOT NULL,
  technical_contact JSONB,
  documentation_url TEXT,
  status VARCHAR(20) NOT NULL DEFAULT 'draft',
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  created_by VARCHAR(100) NOT NULL,
  updated_at TIMESTAMPTZ,
  updated_by VARCHAR(100),
  version_num INTEGER NOT NULL DEFAULT 1
);

-- Schemas table
CREATE TABLE schemas (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  system_id UUID NOT NULL REFERENCES systems(id) ON DELETE CASCADE,
  name VARCHAR(100) NOT NULL,
  description JSONB,
  status VARCHAR(20) NOT NULL DEFAULT 'active',
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  created_by VARCHAR(100) NOT NULL
);

-- Tables table
CREATE TABLE tables (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  schema_id UUID NOT NULL REFERENCES schemas(id) ON DELETE CASCADE,
  name VARCHAR(100) NOT NULL,
  description JSONB,
  table_type VARCHAR(20) NOT NULL,
  logical_entity_ids UUID[],
  primary_key VARCHAR(100)[],
  row_count_estimate BIGINT,
  size_bytes BIGINT,
  status VARCHAR(20) NOT NULL DEFAULT 'active',
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  created_by VARCHAR(100) NOT NULL,
  updated_at TIMESTAMPTZ,
  updated_by VARCHAR(100),
  version_num INTEGER NOT NULL DEFAULT 1
);

-- Columns table
CREATE TABLE columns (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  table_id UUID NOT NULL REFERENCES tables(id) ON DELETE CASCADE,
  name VARCHAR(100) NOT NULL,
  description JSONB,
  physical_type VARCHAR(100) NOT NULL,
  is_nullable BOOLEAN NOT NULL DEFAULT true,
  is_primary_key BOOLEAN NOT NULL DEFAULT false,
  is_foreign_key BOOLEAN NOT NULL DEFAULT false,
  foreign_key_ref JSONB,
  default_value TEXT,
  logical_attribute_id UUID REFERENCES attributes(id),
  position INTEGER NOT NULL,
  status VARCHAR(20) NOT NULL DEFAULT 'active'
);

-- ============================================================================
-- CROSS-LAYER MAPPINGS
-- ============================================================================

-- Cross-layer mappings table
CREATE TABLE mappings (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  source_type VARCHAR(50) NOT NULL,
  source_id UUID NOT NULL,
  target_type VARCHAR(50) NOT NULL,
  target_id UUID NOT NULL,
  mapping_type VARCHAR(50) NOT NULL,
  confidence VARCHAR(20) DEFAULT 'confirmed',
  notes TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  created_by VARCHAR(100) NOT NULL
);

-- ============================================================================
-- INDEXES
-- ============================================================================

-- Organization layer indexes
CREATE INDEX idx_project_versions_project ON project_versions(project_id);
CREATE INDEX idx_changelogs_project ON changelogs(project_id);
CREATE INDEX idx_changelogs_version ON changelogs(version_id);
CREATE INDEX idx_changelogs_entity ON changelogs(entity_type, entity_id);
CREATE INDEX idx_changelogs_changed_at ON changelogs(changed_at DESC);
CREATE INDEX idx_project_users_project ON project_users(project_id);
CREATE INDEX idx_project_users_email ON project_users(email);
CREATE INDEX idx_governance_entity ON governance_assignments(entity_type, entity_id);
CREATE INDEX idx_governance_role ON governance_assignments(role);

-- Conceptual layer indexes
CREATE INDEX idx_domains_project ON domains(project_id);
CREATE INDEX idx_concepts_project ON concepts(project_id);
CREATE INDEX idx_concepts_domain ON concepts(domain_id);

-- Logical layer indexes
CREATE INDEX idx_logical_entities_project ON logical_entities(project_id);
CREATE INDEX idx_attributes_entity ON attributes(entity_id);
CREATE INDEX idx_relationships_source ON relationships(source_entity_id);
CREATE INDEX idx_relationships_target ON relationships(target_entity_id);
CREATE INDEX idx_value_domains_project ON value_domains(project_id);
CREATE INDEX idx_value_domains_shared ON value_domains(is_shared) WHERE is_shared = true;
CREATE INDEX idx_datasets_project ON datasets(project_id);

-- Physical layer indexes
CREATE INDEX idx_schemas_system ON schemas(system_id);
CREATE INDEX idx_tables_schema ON tables(schema_id);
CREATE INDEX idx_columns_table ON columns(table_id);

-- Mapping indexes
CREATE INDEX idx_mappings_source ON mappings(source_type, source_id);
CREATE INDEX idx_mappings_target ON mappings(target_type, target_id);

-- Full-text search indexes (JSONB)
CREATE INDEX idx_projects_name_gin ON projects USING GIN (name jsonb_path_ops);
CREATE INDEX idx_domains_name_gin ON domains USING GIN (name jsonb_path_ops);
CREATE INDEX idx_concepts_name_gin ON concepts USING GIN (name jsonb_path_ops);
CREATE INDEX idx_concepts_definition_gin ON concepts USING GIN (definition jsonb_path_ops);
