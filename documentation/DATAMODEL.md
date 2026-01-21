# Metadata Catalog - Data Model Specification

## 1. Overview

### 1.1 Purpose

This document defines the data model for the Metadata Catalog prototype. The model bridges:

- **TOGAF Data Architecture** layers (Conceptual, Logical, Physical)
- **Swiss Federal Standards** (I14Y, DCAT-AP CH, eCH)
- **International Standards** (W3C DCAT 3, Dublin Core, ISO 11179)

### 1.2 Design Principles

1. **Standards-Based**: Align with established metadata standards where possible
2. **Layer Separation**: Clear distinction between conceptual, logical, and physical entities
3. **Cross-Layer Traceability**: Enable navigation and impact analysis across layers
4. **Swiss Context**: Support Swiss federal compliance requirements (DSG, ISG)
5. **Multilingual**: Native support for DE/FR/IT/EN content
6. **Extensible**: Allow for additional metadata without schema changes

### 1.3 Data Storage Strategy

**Prototype Phase**: Static JSON files loaded at runtime
- Simple file-based storage
- No server required
- Easy to version control and edit

**Production Phase**: Supabase (PostgreSQL)
- Relational database with JSON support
- Row-level security
- Real-time subscriptions
- RESTful API auto-generation

---

## 2. Standards Alignment

### 2.1 Standards Overview

| Standard | Scope | Usage in This Model |
|----------|-------|---------------------|
| **TOGAF 9.2** | Enterprise Architecture | Layer structure (C/L/P), governance concepts |
| **W3C DCAT 3** | Data Catalogs | Dataset, Distribution, DataService classes |
| **DCAT-AP CH 2.0** | Swiss Application Profile | Swiss-specific properties, controlled vocabularies |
| **I14Y** | Swiss Federal Interoperability | Concept, Structure, DataElement hierarchy |
| **ISO 11179** | Metadata Registries | Concept definitions, value domains |
| **Dublin Core** | General Metadata | Basic descriptive properties |
| **eCH-0129** | Swiss Building Data | Domain-specific identifiers (EGID, EDID) |

### 2.2 I14Y Information Model Alignment

The I14Y platform (Swiss Federal Interoperability Platform) defines:

```
Catalog
  ├── Dataset (DCAT)
  │     ├── Structure
  │     │     └── DataElement
  │     │           └── Concept
  │     └── Distribution
  ├── DataService (API)
  └── PublicService (CPSV)
```

**Our Model Mapping:**

| I14Y Entity | Our Entity | Layer |
|-------------|------------|-------|
| Catalog | (implicit) | - |
| Dataset | Dataset | Logical/Physical |
| Structure | LogicalEntity | Logical |
| DataElement | Attribute | Logical |
| Concept | Concept | Conceptual |
| Distribution | Distribution | Physical |
| DataService | DataService | Physical |

### 2.3 DCAT 3 Class Alignment

```
dcat:Resource (abstract)
  ├── dcat:Dataset
  │     └── dcat:DatasetSeries
  ├── dcat:DataService
  └── dcat:Catalog

dcat:Distribution (representation of Dataset)
```

**Our Extensions:**

| DCAT Class | Our Extensions |
|------------|----------------|
| dcat:Dataset | Add compliance metadata, Swiss identifiers |
| dcat:DataService | Add endpoint types, authentication info |
| dcat:Distribution | Add Swiss license codes, format details |
| (new) Domain | Business domain grouping |
| (new) Concept | Business concept definition |
| (new) LogicalEntity | Technology-independent data structure |
| (new) System | Physical system container |

### 2.4 Property Namespace Mapping

| Prefix | Namespace | Usage |
|--------|-----------|-------|
| dct | http://purl.org/dc/terms/ | Dublin Core Terms |
| dcat | http://www.w3.org/ns/dcat# | DCAT vocabulary |
| foaf | http://xmlns.com/foaf/0.1/ | Agent descriptions |
| skos | http://www.w3.org/2004/02/skos/core# | Concept schemes |
| vcard | http://www.w3.org/2006/vcard/ns# | Contact information |
| xsd | http://www.w3.org/2001/XMLSchema# | Data types |
| i14y | https://i14y.admin.ch/ns/ | I14Y extensions |
| mdcat | https://example.org/mdcat/ | Our custom namespace |

---

## 3. Conceptual Data Model

### 3.1 Layer Overview

```mermaid
flowchart TB
    subgraph ORGANIZATION["ORGANIZATION LAYER"]
        direction TB
        O_DESC["Project management and governance<br/>Audience: Project managers, administrators"]
        Project["Project"]
        ProjectVersion["ProjectVersion"]
        Changelog["Changelog"]
        ProjectUser["ProjectUser"]
        Project -->|has_versions| ProjectVersion
        Project -->|has_members| ProjectUser
        Project -->|tracks_changes| Changelog
    end

    subgraph CONCEPTUAL["CONCEPTUAL LAYER"]
        direction TB
        C_DESC["Business-oriented, technology-independent<br/>Audience: Business stakeholders, domain experts"]
        Domain["Domain"]
        Concept["Concept"]
        Domain -->|contains| Concept
    end

    subgraph LOGICAL["LOGICAL LAYER"]
        direction TB
        L_DESC["Technology-independent data structures<br/>Audience: Data architects, analysts"]
        Dataset["Dataset"]
        LogicalEntity["LogicalEntity"]
        Attribute["Attribute"]
        ValueDomain["ValueDomain"]
        Relationship["Relationship"]
        Dataset -->|describes| LogicalEntity
        LogicalEntity -->|has| Attribute
        LogicalEntity -->|has| Relationship
        Attribute -->|uses| ValueDomain
    end

    subgraph PHYSICAL["PHYSICAL LAYER"]
        direction TB
        P_DESC["System-specific implementations<br/>Audience: Developers, DBAs"]
        System["System"]
        Schema["Schema"]
        Table["Table"]
        Column["Column"]
        DataService["DataService"]
        Distribution["Distribution"]
        System -->|contains| Schema
        Schema -->|contains| Table
        Table -->|has| Column
        DataService -->|serves| Dataset
        Dataset -->|distributed_via| Distribution
    end

    Project -->|scopes| Domain
    Project -->|scopes| Concept
    Project -->|scopes| LogicalEntity
    Project -->|scopes| ValueDomain
    Project -->|scopes| Dataset
    Concept -->|realizes| LogicalEntity
    LogicalEntity -->|implements| Table
    Attribute -->|maps_to| Column

    style ORGANIZATION fill:#fce7f3,stroke:#db2777
    style CONCEPTUAL fill:#dbeafe,stroke:#2563eb
    style LOGICAL fill:#d1fae5,stroke:#059669
    style PHYSICAL fill:#ffedd5,stroke:#d97706
    style Project fill:#f9a8d4,stroke:#db2777
    style ProjectVersion fill:#f9a8d4,stroke:#db2777
    style Changelog fill:#f9a8d4,stroke:#db2777
    style ProjectUser fill:#f9a8d4,stroke:#db2777
    style Domain fill:#93c5fd,stroke:#2563eb
    style Concept fill:#93c5fd,stroke:#2563eb
    style Dataset fill:#6ee7b7,stroke:#059669
    style LogicalEntity fill:#6ee7b7,stroke:#059669
    style Attribute fill:#6ee7b7,stroke:#059669
    style ValueDomain fill:#6ee7b7,stroke:#059669
    style Relationship fill:#6ee7b7,stroke:#059669
    style System fill:#fdba74,stroke:#d97706
    style Schema fill:#fdba74,stroke:#d97706
    style Table fill:#fdba74,stroke:#d97706
    style Column fill:#fdba74,stroke:#d97706
    style DataService fill:#fdba74,stroke:#d97706
    style Distribution fill:#fdba74,stroke:#d97706
```

### 3.2 Entity Relationship Diagram

```mermaid
erDiagram
    Project ||--o{ ProjectVersion : "has_versions"
    Project ||--o{ ProjectUser : "has_members"
    Project ||--o{ Changelog : "tracks_changes"
    Project ||--o{ Domain : "contains"
    Project ||--o{ Concept : "contains"
    Project ||--o{ LogicalEntity : "contains"
    Project ||--o{ ValueDomain : "contains"
    Project ||--o{ Dataset : "contains"
    ProjectVersion ||--o{ Changelog : "includes"

    Domain ||--o{ Concept : contains
    Concept ||--o{ LogicalEntity : "realizes"

    Dataset }o--o{ LogicalEntity : describes
    LogicalEntity ||--o{ Attribute : has
    Attribute }o--o| ValueDomain : uses
    LogicalEntity ||--o{ Relationship : has

    Dataset ||--o{ Distribution : "distributed_via"
    DataService }o--o{ Dataset : serves
    Distribution }o--o| DataService : "access_via"

    System ||--o{ Schema : contains
    System ||--o{ DataService : hosts
    Schema ||--o{ Table : contains
    Table ||--o{ Column : has

    LogicalEntity ||--o{ Table : "implements"
    Attribute ||--o{ Column : "maps_to"

    Project {
        uuid id PK
        jsonb name
        jsonb description
        jsonb owner
        uuid current_version_id FK
        enum status
    }

    ProjectVersion {
        uuid id PK
        uuid project_id FK
        string version_number
        jsonb name
        jsonb description
        jsonb snapshot
        enum status
        datetime published_at
        uuid previous_version_id FK
    }

    Changelog {
        uuid id PK
        uuid project_id FK
        uuid version_id FK
        enum change_type
        string entity_type
        uuid entity_id FK
        enum action
        jsonb summary
        jsonb details
        datetime changed_at
    }

    ProjectUser {
        uuid id PK
        uuid project_id FK
        string name
        string email
        enum role
        enum status
        datetime joined_at
    }

    GovernanceAssignment {
        uuid id PK
        string entity_type
        uuid entity_id FK
        enum role
        string person_name
        string person_email
        datetime assigned_at
    }

    Domain {
        uuid id PK
        uuid project_id FK
        jsonb name
        jsonb description
        string abbreviation
        jsonb owner
        uuid parent_id FK
        date valid_from
        date valid_to
        enum status
    }

    Concept {
        uuid id PK
        uuid project_id FK
        uuid domain_id FK
        jsonb name
        jsonb definition
        jsonb synonyms
        jsonb legal_references
        jsonb standard_references
        date valid_from
        date valid_to
        enum status
    }

    LogicalEntity {
        uuid id PK
        uuid project_id FK
        string name
        jsonb description
        array concept_ids
        enum entity_type
        array business_keys
        jsonb compliance
        date valid_from
        date valid_to
        enum status
    }

    Attribute {
        uuid id PK
        uuid entity_id FK
        string name
        jsonb description
        enum logical_type
        boolean is_nullable
        boolean is_business_key
        uuid value_domain_id FK
    }

    Relationship {
        uuid id PK
        string name
        jsonb description
        uuid source_entity_id FK
        uuid target_entity_id FK
        enum relationship_type
        enum cardinality
        boolean is_identifying
    }

    ValueDomain {
        uuid id PK
        uuid project_id FK
        boolean is_shared
        string name
        jsonb description
        enum domain_type
        jsonb values
        string external_source
        date valid_from
        date valid_to
        enum status
    }

    Dataset {
        uuid id PK
        uuid project_id FK
        jsonb name
        jsonb description
        jsonb publisher
        enum access_rights
        jsonb license
        date issued
        date valid_from
        date valid_to
        enum status
    }

    Distribution {
        uuid id PK
        uuid dataset_id FK
        jsonb name
        string access_url
        string download_url
        string media_type
        string format
        enum status
    }

    DataService {
        uuid id PK
        jsonb name
        jsonb description
        enum service_type
        string endpoint_url
        jsonb publisher
        enum access_rights
        enum status
    }

    System {
        uuid id PK
        string name
        jsonb description
        enum system_type
        string vendor
        string product
        enum environment
        enum status
    }

    Schema {
        uuid id PK
        uuid system_id FK
        string name
        jsonb description
        enum status
    }

    Table {
        uuid id PK
        uuid schema_id FK
        string name
        jsonb description
        enum table_type
        array logical_entity_ids
        array primary_key
        enum status
    }

    Column {
        uuid id PK
        uuid table_id FK
        string name
        jsonb description
        string physical_type
        boolean is_nullable
        boolean is_primary_key
        uuid logical_attribute_id FK
    }
```

---

## 4. Entity Specifications

### 4.1 Entity Overview by Layer

| Layer | Entity | Description | I14Y Mapping | DCAT Mapping |
|-------|--------|-------------|--------------|--------------|
| **Organization** | Project | Workspace container for metadata | - | dcat:Catalog |
| **Organization** | ProjectVersion | Version snapshot of a project | - | dcat:version |
| **Organization** | Changelog | Record of changes within a project | - | prov:Activity |
| **Organization** | ProjectUser | User membership and role in a project | - | foaf:Agent |
| **Conceptual** | Domain | Business domain grouping | - | dcat:Catalog (partial) |
| **Conceptual** | Concept | Business term definition | Konzept | skos:Concept |
| **Logical** | LogicalEntity | Technology-independent data structure | Struktur | - |
| **Logical** | Attribute | Data element within an entity | Datenelement | - |
| **Logical** | Relationship | Connection between logical entities | - | - |
| **Logical** | ValueDomain | Permissible values (code list) | Konzept (Codeliste) | skos:ConceptScheme |
| **Logical** | Dataset | Published data collection | Datensatz | dcat:Dataset |
| **Physical** | System | Application or database | - | - |
| **Physical** | Schema | Database namespace | - | - |
| **Physical** | Table | Physical table or view | - | - |
| **Physical** | Column | Physical column | - | - |
| **Physical** | DataService | API endpoint | Elektronische Schnittstelle | dcat:DataService |
| **Physical** | Distribution | Data access point | Distribution | dcat:Distribution |

### 4.2 Organization Layer Entities

#### 4.2.0 Project

A project represents a self-contained workspace or catalog that groups related metadata. Projects provide organizational boundaries for managing metadata across teams, departments, or initiatives. Each project creates isolated copies of all content (domains, concepts, entities, tables) enabling parallel development and versioning.

**Entity: Project**

| Attribute | Type | Required | Description | Standard Mapping |
|-----------|------|----------|-------------|------------------|
| id | UUID | Yes | Unique identifier | dct:identifier |
| name | MultiLang | Yes | Project name in multiple languages | dct:title |
| description | MultiLang | Yes | Detailed project description | dct:description |
| owner | AgentRef | Yes | Responsible organization or team | dct:publisher |
| status | Enum | Yes | active, draft, archived | adms:status |
| current_version_id | UUID | No | Reference to current active version | dcat:version |
| color | String | No | Display color for UI (hex code) | - |
| icon | String | No | Icon identifier for UI | - |
| domains | UUID[] | No | Associated domain references | - |
| entities | Integer | No | Count of logical entities | - |
| tables | Integer | No | Count of physical tables | - |
| users | ProjectUser[] | No | Project team members with roles | - |
| created | Date | Yes | Creation date | dct:created |
| updated | Date | No | Last update date | dct:modified |
| lastActivity | Date | No | Date of last activity | - |
| metadata | Metadata | Yes | Audit trail (created, updated, version) | - |

**Status Values:**
- `active` - Project is actively maintained
- `draft` - Project is being set up or configured
- `archived` - Project is no longer active but preserved for reference

**Use Cases:**
- Separate metadata by department (HR, Finance, Real Estate)
- Isolate development and production catalogs
- Enable parallel metadata governance initiatives
- Support multi-tenant scenarios

---

#### 4.2.1 ProjectVersion

A project version represents a **complete, immutable snapshot** of a project's metadata state at a point in time. Versions enable tracking of project evolution, comparison between releases, rollback capabilities, and release management for metadata catalogs.

**Entity: ProjectVersion**

| Attribute | Type | Required | Description | Standard Mapping |
|-----------|------|----------|-------------|------------------|
| id | UUID | Yes | Unique identifier | dct:identifier |
| project_id | UUID | Yes | Parent project reference | - |
| version_number | String | Yes | Semantic version (e.g., "1.0.0", "2.1.0") | dcat:version |
| name | MultiLang | No | Version name/title (e.g., "Initial Release") | dct:title |
| description | MultiLang | No | Version description and release notes | dct:description |
| status | Enum | Yes | draft, published, deprecated | adms:status |
| published_at | DateTime | Cond. | Publication timestamp (required when published) | dct:issued |
| published_by | PersonRef | Cond. | User who published (required when published) | dct:publisher |
| snapshot | VersionSnapshot | Cond. | Complete frozen state (required when published) | - |
| previous_version_id | UUID | No | Reference to previous version | dct:replaces |
| metadata | Metadata | Yes | Audit trail (created, updated, version) | - |

**Status Values:**
- `draft` - Version is being prepared; snapshot is empty or partial; can be modified
- `published` - Version is finalized; snapshot is complete and **immutable**; cannot be modified
- `deprecated` - Version is superseded; still immutable but marked as not recommended

**Version Number Convention:**
Following semantic versioning (SemVer):
- **Major (X.0.0)** - Breaking changes, significant restructuring
- **Minor (x.Y.0)** - New entities, attributes, or features added
- **Patch (x.y.Z)** - Bug fixes, corrections, documentation updates

**VersionSnapshot Schema:**

The snapshot contains a complete copy of all project content at the time of publishing. This enables:
- Full comparison between any two versions
- Restoration of any historical state
- Audit trail of what was published

```json
{
  "snapshot_created_at": "2025-01-15T10:00:00Z",
  "snapshot_created_by": "anna.mueller@admin.ch",
  "content": {
    "domains": [
      { "id": "dom-001", "name": {...}, "description": {...}, ... }
    ],
    "concepts": [
      { "id": "con-001", "domain_id": "dom-001", "name": {...}, ... }
    ],
    "logical_entities": [
      { "id": "ent-001", "name": "Building", "attributes": [...], ... }
    ],
    "relationships": [
      { "id": "rel-001", "name": "belongs_to", "source_entity_id": "ent-001", "target_entity_id": "ent-002", ... }
    ],
    "value_domains": [
      { "id": "vd-001", "name": "BuildingType", "values": [...], ... }
    ],
    "datasets": [
      { "id": "ds-001", "name": {...}, ... }
    ],
    "systems": [
      { "id": "sys-001", "name": "SAP RE-FX", ... }
    ],
    "tables": [
      { "id": "tbl-001", "name": "VIBDBE", "columns": [...], ... }
    ],
    "mappings": [
      { "source_type": "concept", "source_id": "con-001", "target_id": "ent-001", ... }
    ],
    "governance_assignments": [
      { "entity_type": "domain", "entity_id": "dom-001", "role": "data_owner", ... }
    ]
  },
  "statistics": {
    "domains_count": 2,
    "concepts_count": 5,
    "logical_entities_count": 3,
    "relationships_count": 5,
    "value_domains_count": 6,
    "datasets_count": 1,
    "systems_count": 2,
    "tables_count": 4,
    "mappings_count": 12
  }
}
```

**Immutability Rules:**
1. When status changes to `published`, the snapshot must be populated
2. Once `published`, the snapshot cannot be modified
3. To make changes, create a new version (increment version_number)
4. The `deprecated` status can be set on published versions but content remains immutable

**Version Comparison:**
To compare versions, retrieve the snapshots of both versions and diff the `content` objects. Each entity in the snapshot includes its full state, enabling field-by-field comparison.

---

#### 4.2.2 Changelog

A changelog entry records a specific change made within a project. Changelogs provide an audit trail of modifications, enabling compliance tracking, impact analysis, and collaboration transparency.

**Entity: Changelog**

| Attribute | Type | Required | Description | Standard Mapping |
|-----------|------|----------|-------------|------------------|
| id | UUID | Yes | Unique identifier | dct:identifier |
| project_id | UUID | Yes | Parent project reference | - |
| version_id | UUID | No | Associated version (if part of a release) | - |
| change_type | Enum | Yes | Type of change (see below) | prov:Activity |
| entity_type | String | Yes | Type of entity changed (domain, concept, entity, etc.) | - |
| entity_id | UUID | Yes | Reference to the changed entity | - |
| entity_name | String | No | Name of the entity at time of change | - |
| action | Enum | Yes | create, update, delete, restore | - |
| summary | MultiLang | Yes | Brief description of the change | dct:description |
| details | JSON | No | Detailed change information (before/after values) | - |
| changed_fields | String[] | No | List of fields that were modified | - |
| reason | String | No | Reason or justification for the change | - |
| changed_at | DateTime | Yes | Timestamp of the change | dct:modified |
| changed_by | PersonRef | Yes | User who made the change | prov:wasAssociatedWith |
| metadata | Metadata | Yes | Audit trail | - |

**Change Types:**
| Type | Description |
|------|-------------|
| structure | Changes to entity structure (add/remove attributes) |
| content | Changes to content/values (descriptions, names) |
| relationship | Changes to relationships between entities |
| status | Status changes (draft → active, deprecation) |
| mapping | Changes to cross-layer mappings |
| compliance | Changes to compliance/classification metadata |

**Action Values:**
- `create` - New entity or attribute created
- `update` - Existing entity or attribute modified
- `delete` - Entity or attribute removed
- `restore` - Previously deleted entity restored

---

#### 4.2.3 ProjectUser

A project user represents a team member's membership and role within a specific project. This enables role-based access control for project management.

**Entity: ProjectUser**

| Attribute | Type | Required | Description | Standard Mapping |
|-----------|------|----------|-------------|------------------|
| id | UUID | Yes | Unique identifier | dct:identifier |
| project_id | UUID | Yes | Parent project reference | - |
| user_id | UUID | No | Reference to user account (if using auth system) | - |
| name | String | Yes | User's display name | foaf:name |
| email | String | Yes | User's email address | foaf:mbox |
| role | Enum | Yes | User's project role: admin, editor, viewer | - |
| status | Enum | Yes | active, inactive, invited | adms:status |
| joined_at | DateTime | No | When user joined the project | - |
| invited_by | UUID | No | User who invited this member | - |
| metadata | Metadata | Yes | Audit trail | - |

**Project Roles:**

| Role | Description | Permissions |
|------|-------------|-------------|
| admin | Project administrator with full control | Full access: create, read, update, delete all entities; manage users; manage versions; publish |
| editor | Can create and modify content | Create, read, update all entities; cannot manage users or publish versions |
| viewer | Read-only access | Read-only access to all project content |

---

#### 4.2.4 Data Governance Roles

Data governance roles are assigned at the **entity level** (Domain, Concept, LogicalEntity, Dataset) rather than at the project level. These roles define accountability and responsibility for data assets according to data governance best practices.

**GovernanceAssignment Structure:**

| Attribute | Type | Required | Description |
|-----------|------|----------|-------------|
| entity_type | String | Yes | Type of entity (domain, concept, logical_entity, dataset) |
| entity_id | UUID | Yes | Reference to the governed entity |
| role | Enum | Yes | Governance role (see below) |
| person | PersonRef | Yes | Assigned person |
| assigned_at | DateTime | Yes | When the assignment was made |
| assigned_by | UUID | No | User who made the assignment |

**Governance Roles:**

| Role | Description | Responsibilities |
|------|-------------|------------------|
| data_owner | Business accountability for data | Approves data definitions; accountable for data quality; decides access policies; typically a business executive or domain lead |
| data_steward | Day-to-day data management | Maintains metadata quality; enforces standards; resolves data issues; bridges business and technical teams |
| data_custodian | Technical management of data | Implements technical controls; manages physical storage; ensures security; handles backups and recovery |
| data_consumer | Uses data for business purposes | Consumes data according to policies; reports data quality issues; provides feedback on data usability |

**Governance Role Relationships:**

```
┌─────────────────────────────────────────────────────────────────┐
│                        DATA OWNER                                │
│         (Accountable - "What data do we need?")                 │
└─────────────────────────┬───────────────────────────────────────┘
                          │ delegates to
┌─────────────────────────▼───────────────────────────────────────┐
│                       DATA STEWARD                               │
│         (Responsible - "Is the data correct?")                  │
└─────────────────────────┬───────────────────────────────────────┘
                          │ works with
┌─────────────────────────▼───────────────────────────────────────┐
│                      DATA CUSTODIAN                              │
│         (Implements - "How is data stored/secured?")            │
└─────────────────────────────────────────────────────────────────┘
                          │ serves
┌─────────────────────────▼───────────────────────────────────────┐
│                      DATA CONSUMER                               │
│         (Uses - "How do I access and use the data?")            │
└─────────────────────────────────────────────────────────────────┘
```

**Example Assignments:**
- Domain "Immobilienverwaltung" → Data Owner: Head of Real Estate Division
- Concept "Gebäude" → Data Steward: Peter Schmidt
- LogicalEntity "Building" → Data Custodian: BBL IT Team
- Dataset "Building Register" → Data Consumer: Analytics Team

---

### 4.3 Conceptual Layer Entities

> **Project Scoping:** All entities in the Conceptual and Logical layers are scoped to a project via `project_id`. This enables multiple projects to define their own domains, concepts, and entities independently.

#### 4.3.1 Domain

A business domain represents a coherent area of business activity or knowledge within a project.

**Entity: Domain**

| Attribute | Type | Required | Description | Standard Mapping |
|-----------|------|----------|-------------|------------------|
| id | UUID | Yes | Unique identifier | dct:identifier |
| project_id | UUID | Yes | Parent project reference | - |
| name | MultiLang | Yes | Domain name in multiple languages | dct:title |
| description | MultiLang | Yes | Detailed domain description | dct:description |
| abbreviation | String(10) | No | Short code (e.g., "IMMO", "PROJ") | skos:notation |
| owner | AgentRef | Yes | Responsible organization | dct:publisher |
| steward | PersonRef | No | Data steward contact person | dcat:contactPoint |
| parent_id | UUID | No | Parent domain for hierarchy | skos:broader |
| status | Enum | Yes | active, deprecated, draft | adms:status |
| valid_from | Date | No | When this definition became valid | schema:validFrom |
| valid_to | Date | No | When this definition ceased to be valid | schema:validThrough |
| metadata | Metadata | Yes | Audit trail (created, updated, version) | - |

**Status Values:**
- `active` - Domain is in use
- `draft` - Domain is being defined
- `deprecated` - Domain is no longer recommended

**Unique Constraint:** `(project_id, abbreviation)` - Domain abbreviations must be unique within a project.

---

#### 4.3.2 Concept

A business concept represents a well-defined business term or notion within a domain.

**Entity: Concept**

| Attribute | Type | Required | Description | Standard Mapping |
|-----------|------|----------|-------------|------------------|
| id | UUID | Yes | Unique identifier | dct:identifier |
| project_id | UUID | Yes | Parent project reference | - |
| domain_id | UUID | Yes | Parent domain reference | skos:inScheme |
| name | MultiLang | Yes | Concept name (preferred label) | skos:prefLabel |
| definition | MultiLang | Yes | Formal business definition | skos:definition |
| synonyms | MultiLang[] | No | Alternative terms by language | skos:altLabel |
| business_rules | String[] | No | Associated business rules | - |
| legal_references | LegalRef[] | No | Applicable laws and regulations | dct:conformsTo |
| standard_references | StdRef[] | No | Relevant standards (eCH, SIA, ISO) | dct:conformsTo |
| external_identifiers | ExtId[] | No | Standard identifiers (EGID, EGRID) | adms:identifier |
| related_concepts | UUID[] | No | Related concept references | skos:related |
| status | Enum | Yes | active, deprecated, draft | adms:status |
| valid_from | Date | No | When this definition became valid | schema:validFrom |
| valid_to | Date | No | When this definition ceased to be valid | schema:validThrough |
| metadata | Metadata | Yes | Audit trail | - |

**Example - Concept "Gebäude":**
```
name: { de: "Gebäude", fr: "Bâtiment", en: "Building" }
definition: { de: "Ein dauerhaft errichtetes Bauwerk..." }
external_identifiers: [{ name: "EGID", source: "GWR" }]
legal_references: [{ law: "GeoIG", article: "Art. 3" }]
standard_references: [{ standard: "eCH-0129", version: "5.0" }]
```

---

### 4.4 Logical Layer Entities

> **Project Scoping:** All Logical Layer entities are scoped to a project. ValueDomains can optionally be shared across projects by setting `is_shared = true`.

#### 4.4.1 LogicalEntity

A technology-independent data structure that realizes one or more business concepts.

**Entity: LogicalEntity**

| Attribute | Type | Required | Description | Standard Mapping |
|-----------|------|----------|-------------|------------------|
| id | UUID | Yes | Unique identifier | dct:identifier |
| project_id | UUID | Yes | Parent project reference | - |
| name | String(100) | Yes | Technical entity name (e.g., "Building") | dct:title |
| description | MultiLang | Yes | Entity purpose and scope | dct:description |
| concept_ids | UUID[] | Yes | Realized business concepts (min 1) | - |
| entity_type | Enum | Yes | master, transaction, reference, lookup | dct:type |
| business_keys | String[] | No | Attributes forming business key | - |
| attributes | Attribute[] | Yes | Entity attributes (embedded) | i14y:dataElement |
| relationships | Relationship[] | No | Relationships to other entities | - |
| compliance | Compliance | No | Classification and compliance info | - |
| quality | QualityInfo | No | Data quality metrics | dqv:hasQualityMeasurement |
| status | Enum | Yes | active, deprecated, draft | adms:status |
| valid_from | Date | No | When this definition became valid | schema:validFrom |
| valid_to | Date | No | When this definition ceased to be valid | schema:validThrough |
| metadata | Metadata | Yes | Audit trail | - |

**Unique Constraint:** `(project_id, name)` - Entity names must be unique within a project.

**Entity Types:**
| Type | Description | Example |
|------|-------------|---------|
| master | Core business entities | Building, Person, Organization |
| transaction | Business events/activities | Contract, Payment, Inspection |
| reference | Lookup/reference data | Country, Currency, Status |
| lookup | Simple code tables | Yes/No, Gender, Priority |

---

#### 4.4.2 Attribute

A data element within a logical entity, describing a single piece of information.

**Entity: Attribute**

| Attribute | Type | Required | Description | Standard Mapping |
|-----------|------|----------|-------------|------------------|
| id | UUID | Yes | Unique identifier | dct:identifier |
| entity_id | UUID | Yes | Parent logical entity | - |
| name | String(100) | Yes | Technical attribute name | dct:title |
| description | MultiLang | Yes | Attribute meaning and usage | dct:description |
| logical_type | Enum | Yes | Data type (see below) | - |
| length | Integer | No | Maximum length (String) | - |
| precision | Integer | No | Total digits (Decimal) | - |
| scale | Integer | No | Decimal places (Decimal) | - |
| is_nullable | Boolean | Yes | Allows null/empty values | - |
| is_business_key | Boolean | Yes | Part of business identifier | - |
| default_value | String | No | Default value expression | - |
| value_domain_id | UUID | No | Reference to code list | i14y:concept |
| derivation_rule | String | No | Calculation/derivation formula | - |
| validation_rules | Rule[] | No | Validation constraints | - |
| status | Enum | Yes | active, deprecated, draft | adms:status |
| metadata | Metadata | Yes | Audit trail | - |

**Logical Types:**
| Type | Description | Example |
|------|-------------|---------|
| String | Text/character data | Name, Address, Code |
| Integer | Whole numbers | Count, Year, EGID |
| Decimal | Numbers with decimals | Area, Amount, Percentage |
| Date | Date without time | BirthDate, ValidFrom |
| DateTime | Date with time | CreatedAt, ModifiedAt |
| Boolean | True/False | IsActive, HasChildren |
| Binary | Binary data | Document, Image |
| Reference | Foreign key reference | StatusCode, CategoryId |

---

#### 4.4.3 ValueDomain (Codeliste)

A set of permissible values for an attribute, also known as a code list or enumeration.

**Entity: ValueDomain**

| Attribute | Type | Required | Description | Standard Mapping |
|-----------|------|----------|-------------|------------------|
| id | UUID | Yes | Unique identifier | dct:identifier |
| project_id | UUID | Yes | Parent project reference | - |
| is_shared | Boolean | Yes | If true, visible to all projects | - |
| name | String(100) | Yes | Value domain name | skos:prefLabel |
| description | MultiLang | Yes | Purpose and usage | skos:definition |
| domain_type | Enum | Yes | enumeration, range, pattern, external | - |
| values | ValueCode[] | Cond. | Code values (for enumeration) | skos:Concept |
| min_value | String | Cond. | Minimum value (for range) | - |
| max_value | String | Cond. | Maximum value (for range) | - |
| pattern | String | Cond. | Regex pattern (for pattern) | - |
| external_source | URL | Cond. | External source URL | dcat:accessURL |
| version | String | No | Version identifier | dcat:version |
| valid_from | Date | No | Validity start date | schema:validFrom |
| valid_to | Date | No | Validity end date | schema:validThrough |
| status | Enum | Yes | active, deprecated, draft | adms:status |
| metadata | Metadata | Yes | Audit trail | - |

**Unique Constraint:** `(project_id, name)` - Value domain names must be unique within a project.

**Sharing:** When `is_shared = true`, the value domain can be referenced by attributes in any project. This is useful for standard code lists (e.g., country codes, currencies) that should be consistent across the organization.

**Domain Types:**
| Type | Description | Required Fields |
|------|-------------|-----------------|
| enumeration | Fixed list of codes | values |
| range | Numeric or date range | min_value, max_value |
| pattern | Regex pattern match | pattern |
| external | External code list | external_source |

**ValueCode Structure:**
| Field | Type | Required | Description |
|-------|------|----------|-------------|
| code | String | Yes | Code value |
| name | MultiLang | Yes | Display name |
| description | MultiLang | No | Code description |
| parent_code | String | No | Parent for hierarchies |
| sort_order | Integer | No | Display order |
| valid_from | Date | No | Code validity start |
| valid_to | Date | No | Code validity end |

---

#### 4.4.4 Dataset

A collection of data published or curated by an organization (DCAT-aligned).

**Entity: Dataset**

| Attribute | Type | Required | Description | Standard Mapping |
|-----------|------|----------|-------------|------------------|
| id | UUID | Yes | Unique identifier | dct:identifier |
| project_id | UUID | Yes | Parent project reference | - |
| name | MultiLang | Yes | Dataset title | dct:title |
| description | MultiLang | Yes | Dataset description | dct:description |
| publisher | AgentRef | Yes | Publishing organization | dct:publisher |
| contact_point | ContactRef | No | Contact information | dcat:contactPoint |
| keywords | MultiLang[] | No | Keywords/tags | dcat:keyword |
| themes | String[] | No | Theme categories | dcat:theme |
| logical_entities | UUID[] | No | Described logical entities | - |
| access_rights | Enum | Yes | public, internal, restricted | dct:accessRights |
| license | LicenseRef | No | Usage license | dct:license |
| spatial_coverage | GeoRef | No | Geographic coverage | dct:spatial |
| temporal_coverage | PeriodRef | No | Time period covered | dct:temporal |
| accrual_periodicity | String | No | Update frequency | dct:accrualPeriodicity |
| issued | Date | No | Publication date | dct:issued |
| modified | DateTime | No | Last modification | dct:modified |
| distributions | UUID[] | No | Available distributions | dcat:distribution |
| compliance | Compliance | No | Compliance metadata | - |
| quality | QualityInfo | No | Quality metrics | dqv:hasQualityMeasurement |
| valid_from | Date | No | When this dataset became valid | schema:validFrom |
| valid_to | Date | No | When this dataset ceased to be valid | schema:validThrough |
| status | Enum | Yes | active, deprecated, draft | adms:status |
| metadata | Metadata | Yes | Audit trail | - |

**Unique Constraint:** `(project_id, name)` - Dataset names must be unique within a project.

**Access Rights:**
| Value | Description |
|-------|-------------|
| public | Open data, publicly accessible |
| internal | Internal use within organization |
| restricted | Restricted access with authorization |

---

#### 4.4.5 Relationship

A relationship defines how two logical entities are connected, capturing cardinality and semantic meaning.

**Entity: Relationship**

| Attribute | Type | Required | Description | Standard Mapping |
|-----------|------|----------|-------------|------------------|
| id | UUID | Yes | Unique identifier | dct:identifier |
| name | String(100) | Yes | Relationship name (e.g., "belongs_to", "contains") | dct:title |
| description | MultiLang | No | Relationship description | dct:description |
| source_entity_id | UUID | Yes | Source logical entity | - |
| target_entity_id | UUID | Yes | Target logical entity | - |
| relationship_type | Enum | Yes | Type of relationship (see below) | - |
| cardinality | Enum | Yes | Cardinality constraint | - |
| is_identifying | Boolean | No | If true, target identity depends on source | - |
| foreign_key_attributes | UUID[] | No | Attributes that form the foreign key | - |
| inverse_name | String | No | Name of inverse relationship | - |
| metadata | Metadata | Yes | Audit trail | - |

**Relationship Types:**
| Type | Description | Example |
|------|-------------|---------|
| association | General relationship | Building - Address |
| composition | Strong ownership (part cannot exist without whole) | Building - Floor |
| aggregation | Weak ownership (part can exist independently) | Department - Employee |
| dependency | One entity depends on another | Contract - Building |
| generalization | Inheritance/subtype relationship | Asset - Building |

**Cardinality Values:**
| Value | Description |
|-------|-------------|
| one_to_one | 1:1 - Each source has exactly one target |
| one_to_many | 1:n - Each source has many targets |
| many_to_one | n:1 - Many sources have one target |
| many_to_many | n:n - Many sources have many targets |

---

### 4.5 Physical Layer Entities

> **Organization-Wide Scope:** Physical Layer entities (System, Schema, Table, Column) represent actual infrastructure and are **organization-wide**, not project-scoped. Multiple projects can reference the same physical tables. The project-specific documentation is captured via:
> - LogicalEntity's `project_id` scopes the logical model
> - The mapping from LogicalEntity to Table(s) via `physical_table_ids` is inherently project-scoped
> - This design enables consistent physical layer documentation while allowing different logical interpretations per project.

#### 4.5.1 System

A physical system, application, or database that hosts data.

**Entity: System**

| Attribute | Type | Required | Description | Standard Mapping |
|-----------|------|----------|-------------|------------------|
| id | UUID | Yes | Unique identifier | dct:identifier |
| name | String(100) | Yes | System name | dct:title |
| description | MultiLang | Yes | System purpose and scope | dct:description |
| system_type | Enum | Yes | Type of system (see below) | dct:type |
| vendor | String | No | Vendor/manufacturer | - |
| product | String | No | Product name | - |
| version | String | No | Product version | dcat:version |
| environment | Enum | Yes | production, test, development | - |
| owner | AgentRef | Yes | System owner | dct:publisher |
| technical_contact | PersonRef | No | Technical contact | dcat:contactPoint |
| documentation_url | URL | No | Documentation link | foaf:page |
| status | Enum | Yes | active, deprecated, planned, decommissioned | adms:status |
| metadata | Metadata | Yes | Audit trail | - |

**System Types:**
| Type | Description | Example |
|------|-------------|---------|
| database | Relational or NoSQL database | PostgreSQL, Oracle, MongoDB |
| application | Business application | SAP, Salesforce |
| api | API platform | API Gateway, Kong |
| data_warehouse | Analytical data store | Snowflake, BigQuery |
| data_lake | Raw data storage | S3, Azure Data Lake |
| file_system | File-based storage | SharePoint, NAS |

---

#### 4.5.2 Schema

A database schema or namespace within a system.

**Entity: Schema**

| Attribute | Type | Required | Description | Standard Mapping |
|-----------|------|----------|-------------|------------------|
| id | UUID | Yes | Unique identifier | dct:identifier |
| system_id | UUID | Yes | Parent system | - |
| name | String(100) | Yes | Schema name | dct:title |
| description | MultiLang | No | Schema description | dct:description |
| status | Enum | Yes | active, deprecated, draft | adms:status |
| metadata | Metadata | Yes | Audit trail | - |

---

#### 4.5.3 Table

A physical table or view within a database schema.

**Entity: Table**

| Attribute | Type | Required | Description | Standard Mapping |
|-----------|------|----------|-------------|------------------|
| id | UUID | Yes | Unique identifier | dct:identifier |
| schema_id | UUID | Yes | Parent schema | - |
| name | String(100) | Yes | Table name | dct:title |
| description | MultiLang | No | Table description | dct:description |
| table_type | Enum | Yes | table, view, materialized_view | dct:type |
| logical_entity_ids | UUID[] | No | Implemented logical entities | - |
| columns | Column[] | Yes | Table columns (embedded) | - |
| primary_key | String[] | No | Primary key column names | - |
| indexes | Index[] | No | Table indexes | - |
| row_count_estimate | Integer | No | Estimated row count | - |
| size_bytes | Integer | No | Storage size in bytes | dcat:byteSize |
| status | Enum | Yes | active, deprecated, draft | adms:status |
| metadata | Metadata | Yes | Audit trail | - |

---

#### 4.5.4 Column

A physical column within a database table.

**Entity: Column**

| Attribute | Type | Required | Description | Standard Mapping |
|-----------|------|----------|-------------|------------------|
| id | UUID | Yes | Unique identifier | dct:identifier |
| table_id | UUID | Yes | Parent table | - |
| name | String(100) | Yes | Column name | dct:title |
| description | MultiLang | No | Column description | dct:description |
| physical_type | String | Yes | Database type (VARCHAR, INT, etc.) | - |
| is_nullable | Boolean | Yes | Allows NULL values | - |
| is_primary_key | Boolean | Yes | Part of primary key | - |
| is_foreign_key | Boolean | Yes | Is foreign key | - |
| foreign_key_ref | FKRef | No | Foreign key reference details | - |
| default_value | String | No | Default value | - |
| logical_attribute_id | UUID | No | Mapped logical attribute | - |
| position | Integer | Yes | Column ordinal position | - |
| status | Enum | Yes | active, deprecated, draft | adms:status |

---

#### 4.5.5 DataService

An API or service providing programmatic access to data.

**Entity: DataService**

| Attribute | Type | Required | Description | Standard Mapping |
|-----------|------|----------|-------------|------------------|
| id | UUID | Yes | Unique identifier | dct:identifier |
| name | MultiLang | Yes | Service name | dct:title |
| description | MultiLang | Yes | Service description | dct:description |
| service_type | Enum | Yes | API type (see below) | dct:type |
| endpoint_url | URL | Yes | Service endpoint URL | dcat:endpointURL |
| endpoint_description | URL | No | API documentation URL | dcat:endpointDescription |
| serves_datasets | UUID[] | No | Datasets served by this API | dcat:servesDataset |
| system_id | UUID | No | Hosting system | - |
| publisher | AgentRef | Yes | Service publisher | dct:publisher |
| contact_point | ContactRef | No | Contact information | dcat:contactPoint |
| access_rights | Enum | Yes | public, internal, restricted | dct:accessRights |
| authentication | AuthInfo | No | Authentication requirements | - |
| license | LicenseRef | No | Usage license | dct:license |
| conforms_to | String[] | No | API standards (OpenAPI, etc.) | dct:conformsTo |
| keywords | MultiLang[] | No | Keywords/tags | dcat:keyword |
| status | Enum | Yes | active, deprecated, planned | adms:status |
| metadata | Metadata | Yes | Audit trail | - |

**Service Types:**
| Type | Description |
|------|-------------|
| rest | RESTful API |
| soap | SOAP Web Service |
| graphql | GraphQL API |
| odata | OData API |
| sparql | SPARQL Endpoint |
| wfs | OGC Web Feature Service |
| wms | OGC Web Map Service |

---

#### 4.5.6 Distribution

A specific representation or access point for a dataset.

**Entity: Distribution**

| Attribute | Type | Required | Description | Standard Mapping |
|-----------|------|----------|-------------|------------------|
| id | UUID | Yes | Unique identifier | dct:identifier |
| dataset_id | UUID | Yes | Parent dataset | - |
| name | MultiLang | No | Distribution title | dct:title |
| description | MultiLang | No | Distribution description | dct:description |
| access_url | URL | Yes | Access URL (landing page or endpoint) | dcat:accessURL |
| download_url | URL | No | Direct download URL | dcat:downloadURL |
| media_type | String | No | MIME type (e.g., text/csv) | dcat:mediaType |
| format | String | No | File format (e.g., CSV, JSON) | dct:format |
| byte_size | Integer | No | File size in bytes | dcat:byteSize |
| checksum | String | No | File checksum (SHA-256) | spdx:checksum |
| access_service_id | UUID | No | Access via DataService | dcat:accessService |
| license | LicenseRef | No | Distribution-specific license | dct:license |
| rights | String | No | Rights statement | dct:rights |
| issued | Date | No | Publication date | dct:issued |
| modified | DateTime | No | Last modification | dct:modified |
| status | Enum | Yes | active, deprecated | adms:status |
| metadata | Metadata | Yes | Audit trail | - |

---

### 4.6 Supporting Types

#### 4.6.1 Type Definitions

**MultiLang** - Multilingual string with fallback support

```json
{
  "de": "German text (required)",
  "fr": "French text (optional)",
  "it": "Italian text (optional)",
  "en": "English text (optional)"
}
```

**Metadata** - Audit and versioning information

| Field | Type | Description |
|-------|------|-------------|
| created_at | DateTime | Creation timestamp (ISO 8601) |
| created_by | String | Creator identifier |
| updated_at | DateTime | Last update timestamp |
| updated_by | String | Last updater identifier |
| version | Integer | Version number (starts at 1) |

**Compliance** - Classification and compliance information

| Field | Type | Description |
|-------|------|-------------|
| personal_data | Boolean | Contains personal data (DSG) |
| special_categories | Boolean | Special categories (DSG Art. 5) |
| data_subjects | Enum[] | EMPLOYEE, CUSTOMER, CITIZEN, SUPPLIER, OTHER |
| confidentiality | Enum | PUBLIC, INTERNAL, CONFIDENTIAL, SECRET |
| integrity | Enum | LOW, MEDIUM, HIGH, VERY_HIGH |
| availability | Enum | LOW, MEDIUM, HIGH, VERY_HIGH |
| retention_period | String | Retention requirement (e.g., "10 years") |
| legal_basis | LegalRef[] | Processing legal basis |
| processing_purposes | String[] | Purpose descriptions |

**LegalRef** - Reference to a law or regulation

| Field | Type | Description |
|-------|------|-------------|
| law | String | Law identifier (DSG, OR, GeoIG) |
| article | String | Article reference (e.g., "Art. 3") |
| description | MultiLang | Description of relevance |
| url | URL | Link to official text |

**StdRef** - Reference to a standard

| Field | Type | Description |
|-------|------|-------------|
| standard | String | Standard identifier (eCH-0129, SIA 405) |
| version | String | Version number |
| description | MultiLang | Description of relevance |
| url | URL | Link to standard document |

**AgentRef** - Reference to an organization or person

| Field | Type | Description |
|-------|------|-------------|
| id | String | Agent identifier |
| name | String | Agent name |
| type | Enum | organization, person |
| email | String | Contact email |
| url | URL | Agent URL/website |

**PersonRef** - Reference to an individual person

| Field | Type | Description |
|-------|------|-------------|
| id | String | Person identifier |
| name | String | Full name |
| email | String | Email address |
| organization | String | Organization name |
| role | String | Role/title |

**ContactRef** - Contact point information (DCAT-aligned)

| Field | Type | Description |
|-------|------|-------------|
| name | String | Contact name or department |
| email | String | Contact email |
| phone | String | Phone number |
| address | String | Postal address |
| url | URL | Contact form or webpage |

**GeoRef** - Geographic coverage reference

| Field | Type | Description |
|-------|------|-------------|
| type | Enum | point, bbox, polygon, named |
| coordinates | Number[] | Coordinates (for point, bbox, polygon) |
| name | String | Named location (e.g., "Switzerland", "Bern") |
| uri | URL | URI reference (e.g., GeoNames, Wikidata) |
| srid | Integer | Spatial reference system ID (default: 2056 for LV95) |

**PeriodRef** - Temporal coverage reference

| Field | Type | Description |
|-------|------|-------------|
| start_date | Date | Period start date |
| end_date | Date | Period end date |
| description | String | Description (e.g., "Fiscal Year 2024") |

**QualityInfo** - Data quality metrics (DQV-aligned)

| Field | Type | Description |
|-------|------|-------------|
| completeness | Decimal | Percentage of non-null values (0-100) |
| accuracy | Decimal | Accuracy score (0-100) |
| timeliness | String | Data freshness description |
| consistency | Decimal | Consistency score (0-100) |
| validity | Decimal | Percentage passing validation rules (0-100) |
| last_assessed | DateTime | When quality was last measured |
| assessment_method | String | How quality was assessed |

**LicenseRef** - License reference

| Field | Type | Description |
|-------|------|-------------|
| id | String | License identifier (e.g., "CC-BY-4.0") |
| name | MultiLang | License name |
| url | URL | Link to license text |
| type | Enum | open, restricted, proprietary |

**FKRef** - Foreign key reference details

| Field | Type | Description |
|-------|------|-------------|
| target_table_id | UUID | Referenced table |
| target_column_name | String | Referenced column name |
| on_delete | Enum | CASCADE, SET_NULL, RESTRICT, NO_ACTION |
| on_update | Enum | CASCADE, SET_NULL, RESTRICT, NO_ACTION |

**Index** - Table index definition

| Field | Type | Description |
|-------|------|-------------|
| name | String | Index name |
| columns | String[] | Indexed column names |
| is_unique | Boolean | Whether index enforces uniqueness |
| type | Enum | btree, hash, gin, gist |
| where_clause | String | Partial index condition |

**Rule** - Validation rule definition

| Field | Type | Description |
|-------|------|-------------|
| name | String | Rule name |
| type | Enum | regex, range, list, custom |
| expression | String | Rule expression or pattern |
| error_message | MultiLang | Error message when validation fails |
| severity | Enum | error, warning, info |

**ExtId** - External identifier reference

| Field | Type | Description |
|-------|------|-------------|
| name | String | Identifier name (e.g., "EGID", "EGRID") |
| source | String | Source system or registry |
| pattern | String | Format pattern (regex) |
| url | URL | Link to identifier documentation |

---

## 5. Cross-Layer Relationships

### 5.1 Mapping Types

| Mapping | From | To | Cardinality | Description |
|---------|------|-----|-------------|-------------|
| realizes | Concept | LogicalEntity | 1:n | Concept realized by entities |
| implements | LogicalEntity | Table | 1:n | Entity implemented by tables |
| maps_to | Attribute | Column | 1:n | Attribute mapped to columns |
| uses | Attribute | ValueDomain | n:1 | Attribute uses value domain |
| describes | Dataset | LogicalEntity | n:n | Dataset describes entities |
| serves | DataService | Dataset | n:n | Service provides dataset access |
| distributes | Distribution | Dataset | n:1 | Distribution of dataset |

### 5.2 Traceability Example

The following diagram illustrates cross-layer traceability using a building data example:

```mermaid
flowchart LR
    subgraph Conceptual["CONCEPTUAL"]
        C1["Gebäude<br/>(Concept)"]
    end

    subgraph Logical["LOGICAL"]
        L1["Building<br/>(LogicalEntity)"]
        L1A["egid<br/>(Attribute)"]
        L1B["status<br/>(Attribute)"]
    end

    subgraph Physical["PHYSICAL"]
        P1["SAP RE-FX"]
        P1T["VIBDBE<br/>(Table)"]
        P1C1["EGID<br/>(Column)"]
        P1C2["ZSTATUS<br/>(Column)"]

        P2["PostGIS"]
        P2T["buildings<br/>(Table)"]
        P2C1["egid<br/>(Column)"]
    end

    C1 -->|realizes| L1
    L1 --> L1A
    L1 --> L1B

    L1 -->|implements| P1T
    L1 -->|implements| P2T

    L1A -->|maps_to| P1C1
    L1A -->|maps_to| P2C1
    L1B -->|maps_to| P1C2

    P1 --> P1T
    P1T --> P1C1
    P1T --> P1C2
    P2 --> P2T
    P2T --> P2C1

    style Conceptual fill:#dbeafe,stroke:#2563eb
    style Logical fill:#d1fae5,stroke:#059669
    style Physical fill:#ffedd5,stroke:#d97706
```

This example shows:
- **Concept → LogicalEntity**: The business concept "Gebäude" (Building) is realized by the logical entity "Building"
- **LogicalEntity → Table**: The Building entity is implemented by tables in two systems (SAP RE-FX and PostGIS)
- **Attribute → Column**: The `egid` attribute maps to columns in both physical tables

### 5.3 Mapping Table Structure

For explicit cross-layer mappings, a separate mapping collection is maintained:

```json
{
  "mappings": [
    {
      "id": "map-001",
      "source_type": "concept",
      "source_id": "c001",
      "target_type": "logical_entity",
      "target_id": "le001",
      "mapping_type": "realizes",
      "confidence": "confirmed",
      "notes": "Primary realization",
      "metadata": { ... }
    }
  ]
}
```

### 5.4 Lineage Information

Data lineage tracks the flow of data through systems:

```json
{
  "lineage": [
    {
      "id": "lin-001",
      "entity_id": "le001",
      "entity_type": "logical_entity",
      "sources": [
        {
          "system": "GWR",
          "type": "external",
          "description": "Gebäude- und Wohnungsregister"
        }
      ],
      "transformations": [
        {
          "name": "daily_sync",
          "type": "etl",
          "schedule": "0 3 * * *",
          "description": "Daily synchronization from GWR"
        }
      ],
      "targets": [
        {
          "system_id": "sys001",
          "table_id": "tbl001"
        }
      ]
    }
  ]
}
```

---

## 6. Implementation

### 6.1 Database Schema

The PostgreSQL database schema is defined in a separate file for easier maintenance and deployment:

**See:** [SCHEMA.sql](SCHEMA.sql)

The schema includes:
- All entity tables with proper constraints and indexes
- Foreign key relationships between tables
- CHECK constraints for enum values
- Full-text search indexes for JSONB fields

### 6.2 Sample Data

Sample data files demonstrating the data model are located in the `data/` folder:

| File | Description |
|------|-------------|
| `projects.json` | Project definitions |
| `project-versions.json` | Version snapshots |
| `changelogs.json` | Change history |
| `domains.json` | Business domains |
| `concepts.json` | Business concepts |
| `entities.json` | Logical entities |
| `value-domains.json` | Code lists and enumerations |
| `systems.json` | Physical systems |
| `tables.json` | Physical tables |

---

## 7. References

### 7.1 Related Documents

- **SCHEMA.sql** - PostgreSQL database schema
- **REQUIREMENTS.md** - Functional and non-functional requirements
- **DESIGNGUIDE.md** - Visual design system, colors, typography, icons

### 7.2 Standards

- [W3C DCAT 3](https://www.w3.org/TR/vocab-dcat-3/) - Data Catalog Vocabulary
- [DCAT-AP CH 2.0](https://www.dcat-ap.ch/) - Swiss Application Profile
- [I14Y Handbook](https://i14y-ch.github.io/handbook/de/) - Swiss Interoperability Platform
- [Dublin Core](https://www.dublincore.org/) - Metadata Terms
- [ISO 11179](https://www.iso.org/standard/78914.html) - Metadata Registries
- [TOGAF 9.2](https://www.opengroup.org/togaf) - Enterprise Architecture

### 7.3 Swiss Federal Standards

The following eCH standards define the conceptual framework for data architecture and interoperability in Switzerland:

- [eCH-0122 v2.0.0](https://www.ech.ch/de/ech/ech-0122/2.0.0) - **Architektur E-Government Schweiz: Grundlagen**
  Provides the foundational architecture framework for Swiss e-government systems, including business capability mapping and guidelines for enterprise and IT architecture design with emphasis on interoperability.

- [eCH-0200 v3.0.1](https://www.ech.ch/de/ech/ech-0200/3.0.1) - **DCAT-AP CH (DCAT Application Profile for Switzerland)**
  Swiss profile of the Data Catalog Vocabulary (DCAT) for describing data in Swiss data portals. Ensures compatibility with European data catalog standards while enabling standardized metadata description for data discoverability and reuse.

> **Note:** Content-specific standards (e.g., eCH-0129 Gebäudeadressen, eCH-0130 Unternehmensidentifikation) are domain-specific and should be referenced within the appropriate Domain or Concept definitions, not at this architectural level.

---

*Document Version: 2.0*
*Created: January 2026*
*Last Updated: January 2026*
*Status: Draft for Prototype Development*

### Changelog
- **v2.0** (January 2026): Restructured document, moved SQL to SCHEMA.sql, simplified structure
- **v1.1** (January 2026): Added Organization Layer entities (ProjectVersion, Changelog, ProjectUser)

