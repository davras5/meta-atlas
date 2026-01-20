# Metadata Catalog Requirements Specification

## Table of Contents

1. [Project Overview](#1-project-overview)
2. [Architecture Layers (TOGAF Data Architecture)](#2-architecture-layers-togaf-data-architecture)
3. [Entity Types](#3-entity-types)
4. [Metadata Categories](#4-metadata-categories)
5. [Cross-Layer Traceability](#5-cross-layer-traceability)
6. [UI/UX Requirements](#6-uiux-requirements)
7. [Application Structure](#7-application-structure)
8. [User Roles and Personas](#8-user-roles-and-personas)
9. [User Stories](#9-user-stories)
10. [User Flows](#10-user-flows)
11. [Non-Functional Requirements](#11-non-functional-requirements)
12. [Feature Prioritization](#12-feature-prioritization)
13. [Acceptance Criteria](#13-acceptance-criteria)
14. [Glossary](#14-glossary)
15. [References](#15-references)

---

## 1. Project Overview

### 1.1 Purpose
Build an internal metadata catalog prototype that provides a unified view of data assets across all three TOGAF architecture layers (Conceptual, Logical, Physical). The solution should enable stakeholders to navigate from business concepts down to physical implementations while maintaining comprehensive metadata for governance, compliance, and lineage tracking.

### 1.2 Technical Approach
This prototype follows a **no-build, vanilla JavaScript** approach:
- Pure HTML5, CSS3, and ES6+ JavaScript
- No transpilation, bundling, or build tools required
- ES Modules for code organization (native browser support)
- JSON files for data storage
- Works directly from file system or simple HTTP server
- Zero external dependencies for core functionality (optional: D3.js for diagrams)

### 1.3 Inspiration
The UX is inspired by [dbdocs.io](https://dbdocs.io), which provides:
- Clean tree-based navigation
- Wiki-style documentation for schemas/tables
- ER diagram visualization
- Version control and changelog tracking
- Comparison between versions
- Embed and share capabilities

### 1.4 Gap Analysis (dbdocs.io vs. Requirements)
| Feature | dbdocs.io | This Solution |
|---------|-----------|---------------|
| Physical schema documentation | Yes | Yes |
| ER diagrams | Yes | Yes |
| Version control | Yes | Yes |
| Conceptual layer | No | Yes |
| Logical layer | No | Yes |
| Cross-layer traceability | No | Yes |
| Compliance metadata | No | Yes |
| Data lineage | No | Yes |
| Legal/standards references | No | Yes |
| Multi-language support | No | Yes (DE/FR/IT/EN) |

---

## 2. Architecture Layers (TOGAF Data Architecture)

### 2.1 Layer Definitions

```
┌─────────────────────────────────────────────────────────────┐
│                    CONCEPTUAL LAYER                         │
│  Business concepts, domains, terminology                    │
│  Audience: Business stakeholders, domain experts            │
├─────────────────────────────────────────────────────────────┤
│                     LOGICAL LAYER                           │
│  Technology-independent data models, entities, attributes   │
│  Audience: Data architects, analysts                        │
├─────────────────────────────────────────────────────────────┤
│                     PHYSICAL LAYER                          │
│  Database schemas, tables, columns, systems                 │
│  Audience: Developers, DBAs, system administrators          │
└─────────────────────────────────────────────────────────────┘
```

### 2.2 Conceptual Layer
**Purpose**: Define business concepts and their relationships independent of any data model or system.

**Contains**:
- Business Domains (e.g., "Immobilienverwaltung", "Mietermanagement")
- Business Concepts (e.g., "Gebäude", "Mietvertrag", "Grundstück")
- Business Terms / Glossary entries
- Business Rules
- Domain relationships

**Key Metadata**:
- Business definition (multilingual)
- Domain ownership
- Related regulations/laws
- Business process references
- Stakeholder contacts

### 2.3 Logical Layer
**Purpose**: Define technology-independent data structures that realize business concepts.

**Contains**:
- Logical Data Models
- Logical Entities (e.g., "Gebäude" entity with normalized structure)
- Logical Attributes
- Logical Relationships (1:1, 1:n, n:m)
- Reference Data / Value Domains

**Key Metadata**:
- Canonical data types
- Cardinality rules
- Business keys
- Derivation rules
- Mapping to conceptual concepts

### 2.4 Physical Layer
**Purpose**: Document actual system implementations.

**Contains**:
- Systems / Applications (e.g., "SAP RE-FX", "PostGIS DB")
- Schemas
- Tables / Views
- Columns
- Indexes, Constraints
- APIs / Interfaces

**Key Metadata**:
- Technical data types
- System-specific constraints
- Connection strings (reference)
- Performance characteristics
- Mapping to logical entities

---

## 3. Entity Types

### 3.1 Entity Hierarchy

```
Domain (Conceptual)
  └── Concept (Conceptual)
        └── Logical Entity (Logical)
              └── Logical Attribute (Logical)
                    └── Value Code / Enumeration (Logical/Physical)
                          
System (Physical)
  └── Schema (Physical)
        └── Table / View (Physical)
              └── Column (Physical)
```

### 3.2 Entity Type Specifications

#### 3.2.1 Domain
```yaml
id: uuid
name: string (multilingual)
description: string (multilingual)
owner: Person
steward: Person
concepts: [Concept]
created_at: datetime
updated_at: datetime
```

#### 3.2.2 Concept
```yaml
id: uuid
domain_id: uuid
name: string (multilingual)
synonyms: [string] (multilingual)
definition: string (multilingual)
business_rules: [string]
legal_references: [LegalReference]
standard_references: [StandardReference]
logical_entities: [LogicalEntity]  # mapping
created_at: datetime
updated_at: datetime
```

#### 3.2.3 Logical Entity
```yaml
id: uuid
concept_ids: [uuid]  # can realize multiple concepts
name: string
description: string (multilingual)
attributes: [LogicalAttribute]
relationships: [LogicalRelationship]
business_keys: [string]
physical_implementations: [PhysicalMapping]
created_at: datetime
updated_at: datetime
```

#### 3.2.4 Logical Attribute
```yaml
id: uuid
entity_id: uuid
name: string
description: string (multilingual)
logical_type: enum (String, Integer, Decimal, Date, DateTime, Boolean, Binary, Reference)
is_nullable: boolean
is_business_key: boolean
value_domain_id: uuid | null  # reference to enumeration
derivation_rule: string | null
physical_mappings: [ColumnMapping]
created_at: datetime
updated_at: datetime
```

#### 3.2.5 Value Domain (Enumeration / Reference Data)
```yaml
id: uuid
name: string
description: string (multilingual)
type: enum (Enumeration, ReferenceTable, External)
values: [ValueCode]
source_system: string | null
external_reference: url | null
created_at: datetime
updated_at: datetime
```

#### 3.2.6 Value Code
```yaml
id: uuid
domain_id: uuid
code: string
name: string (multilingual)
description: string (multilingual)
valid_from: date | null
valid_to: date | null
sort_order: integer
parent_code: string | null  # for hierarchical codes
```

#### 3.2.7 System
```yaml
id: uuid
name: string
description: string (multilingual)
type: enum (Database, Application, API, DataWarehouse, DataLake, FileSystem)
vendor: string | null
version: string | null
environment: enum (Production, Test, Development)
owner: Person
technical_contact: Person
schemas: [Schema]
interfaces: [Interface]
created_at: datetime
updated_at: datetime
```

#### 3.2.8 Schema
```yaml
id: uuid
system_id: uuid
name: string
description: string (multilingual)
tables: [Table]
created_at: datetime
updated_at: datetime
```

#### 3.2.9 Table
```yaml
id: uuid
schema_id: uuid
name: string
description: string (multilingual)
type: enum (Table, View, MaterializedView)
columns: [Column]
primary_key: [string]
indexes: [Index]
logical_entity_mappings: [uuid]
row_count_estimate: integer | null
created_at: datetime
updated_at: datetime
```

#### 3.2.10 Column
```yaml
id: uuid
table_id: uuid
name: string
description: string (multilingual)
physical_type: string  # e.g., "VARCHAR(255)", "NUMERIC(18,2)"
is_nullable: boolean
is_primary_key: boolean
is_foreign_key: boolean
foreign_key_reference: ColumnReference | null
default_value: string | null
logical_attribute_id: uuid | null  # mapping to logical layer
created_at: datetime
updated_at: datetime
```

---

## 4. Metadata Categories

### 4.1 Technical Metadata
| Field | Description | Applies To |
|-------|-------------|------------|
| `technical_id` | UUID or system-specific ID | All entities |
| `system_of_record` | Authoritative source system | Logical Entity, Table |
| `update_frequency` | How often data changes | Table, Column |
| `data_volume` | Estimated row count / size | Table |
| `retention_period` | How long data is kept | Table |
| `physical_type` | Database-specific type | Column |
| `logical_type` | Canonical type | Logical Attribute |

### 4.2 Business Metadata
| Field | Description | Applies To |
|-------|-------------|------------|
| `name` | Business name (multilingual) | All entities |
| `definition` | Business definition | Concept, Logical Entity |
| `synonyms` | Alternative terms | Concept |
| `business_rules` | Applicable rules | Concept, Logical Entity |
| `owner` | Business owner (Person/Org) | Domain, Concept, System |
| `steward` | Data steward | Domain, Logical Entity |
| `business_criticality` | Importance rating | Logical Entity, Table |

### 4.3 Legal & Standards References
| Field | Description | Example Values |
|-------|-------------|----------------|
| `legal_basis` | Applicable laws | DSG Art. 6, DSGVO Art. 5 |
| `retention_requirement` | Legal retention | "10 Jahre (OR Art. 958f)" |
| `processing_purpose` | Why data is processed | "Vertragserfüllung" |
| `standards` | Applicable standards | SIA 405, eCH-0129, ISO 19650 |
| `external_identifiers` | Standard IDs | EGID, EDID, EWID |

### 4.4 Compliance Metadata

#### 4.4.1 Information Security (ISG/ISchV)
```yaml
classification:
  confidentiality: enum (PUBLIC, INTERNAL, CONFIDENTIAL, SECRET)
  integrity: enum (LOW, MEDIUM, HIGH, VERY_HIGH)
  availability: enum (LOW, MEDIUM, HIGH, VERY_HIGH)
protection_needs_assessment: url | null
security_measures: [string]
```

#### 4.4.2 Data Protection (DSG/DSGVO)
```yaml
personal_data: boolean
special_categories: boolean  # Art. 5 DSG
data_subjects: [enum]  # EMPLOYEE, CUSTOMER, CITIZEN, etc.
processing_purposes: [string]
legal_basis: [LegalReference]
retention_period: string
deletion_concept: url | null
profiling: boolean
automated_decisions: boolean
third_country_transfer: boolean
```

#### 4.4.3 Data Quality
```yaml
quality_dimensions:
  completeness: percentage | null
  accuracy: percentage | null
  timeliness: string | null
  consistency: percentage | null
quality_rules: [QualityRule]
last_quality_assessment: datetime | null
quality_score: number | null
```

### 4.5 Data Lineage Metadata
```yaml
lineage:
  source_systems: [SystemReference]
  transformations: [Transformation]
  target_systems: [SystemReference]
  data_flow_diagram: url | null
  etl_jobs: [ETLJobReference]
  update_frequency: string
  last_updated: datetime
```

---

## 5. Cross-Layer Traceability

### 5.1 Mapping Structure

```
Concept ←──── realizes ────→ Logical Entity
                                   │
                                   │ implements
                                   ▼
                                Table/Column
                                   │
                                   │ hosted_in
                                   ▼
                                System
```

### 5.2 Traceability Matrix View
The UI should support a traceability matrix showing:

| Concept | Logical Entity | System | Table | Column |
|---------|---------------|--------|-------|--------|
| Gebäude | Building | SAP RE-FX | VIBDBE | * |
| Gebäude | Building | PostGIS | buildings | * |
| Mietvertrag | LeaseContract | SAP RE-FX | VICNCN | * |

### 5.3 Impact Analysis
Given any entity, users should be able to:
- **Trace up**: From column → table → logical entity → concept → domain
- **Trace down**: From concept → logical entities → tables → columns
- **Trace across**: From system A table → logical entity → system B table

---

## 6. UI/UX Requirements

### 6.1 Layout Structure (inspired by dbdocs.io)

```
┌──────────────────────────────────────────────────────────────────┐
│  Logo    [Layer Toggle: Conceptual | Logical | Physical]  [User]│
├──────────────────────────────────────────────────────────────────┤
│  [Search...]                                       [DE|FR|IT|EN]│
├────────────────┬─────────────────────────────────────────────────┤
│                │                                                 │
│  Tree Nav      │   Main Content Area                            │
│  (240px)       │                                                 │
│                │   ┌─────────────────────────────────────────┐  │
│  [Filter...]   │   │  Breadcrumb: Domain > Concept > Entity  │  │
│                │   ├─────────────────────────────────────────┤  │
│  CONCEPTUAL    │   │  Entity Title              [Actions v]  │  │
│  ▼ Domain      │   │  Type Badge | Layer Badge               │  │
│    ▼ Concept   │   ├─────────────────────────────────────────┤  │
│      Entity    │   │  [Wiki] [Diagram] [Lineage] [History]   │  │
│      Entity    │   ├─────────────────────────────────────────┤  │
│    ► Concept   │   │                                         │  │
│  ► Domain      │   │  Tab Content Area                       │  │
│                │   │                                         │  │
│  ─────────     │   │  - Metadata sections                    │  │
│  PHYSICAL      │   │  - Relationships                        │  │
│  ▼ System      │   │  - Child entities                       │  │
│    ▼ Schema    │   │  - Cross-layer mappings                 │  │
│      Table     │   │                                         │  │
│                │   └─────────────────────────────────────────┘  │
│                │                                                 │
└────────────────┴─────────────────────────────────────────────────┘
```

### 6.2 Navigation Components

#### 6.2.1 Layer Toggle
- Three-way toggle: Conceptual | Logical | Physical
- Switching layers changes tree view and available entity types
- "All Layers" view shows unified navigation

#### 6.2.2 Tree Navigation
- Hierarchical tree structure
- Expandable/collapsible nodes
- Icons indicating entity type
- Color coding by layer (e.g., blue=conceptual, green=logical, orange=physical)
- Badge showing mapping count (e.g., "3 systems" on a logical entity)
- Search/filter within tree

#### 6.2.3 Search
- Global full-text search across all entities
- Filter by layer, entity type, metadata fields
- Recent searches
- Saved searches

### 6.3 Detail Views

#### 6.3.1 Wiki View (Documentation) - Primary View

The Wiki view is the default and most important view, providing comprehensive documentation for any entity.

**Header Section**
```
┌─────────────────────────────────────────────────────────────────┐
│  Breadcrumb: Immobilienverwaltung > Gebäude > Building          │
├─────────────────────────────────────────────────────────────────┤
│  [LOGICAL]  Building                                            │
│             Logische Entität                                    │
│                                                                 │
│  Created: 2024-01-15 by davidrasner5    [Export v] [Share]     │
│  Updated: 2024-10-08                                            │
└─────────────────────────────────────────────────────────────────┘
```

Components:
- Breadcrumb navigation showing full path (clickable)
- Layer badge (color-coded: blue/green/orange)
- Entity type label
- Entity name (large, prominent)
- Subtitle showing entity type in current language
- Metadata bar: creation/update info, author
- Action buttons: Export dropdown, Share

**Metadata Sections (Collapsible Panels)**

Each section is a collapsible panel with a header and content area:

```
┌─────────────────────────────────────────────────────────────────┐
│  [v] Basic Information                                          │
├─────────────────────────────────────────────────────────────────┤
│  Name (DE)        Building                                      │
│  Name (FR)        Bâtiment                                      │
│  Description      Logische Entität für Gebäudedaten des...     │
│  Synonyms         Bauwerk, Liegenschaft                         │
│  Status           Active                                        │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│  [v] Business Metadata                                          │
├─────────────────────────────────────────────────────────────────┤
│  Domain           Immobilienverwaltung [link]                   │
│  Owner            Abteilung Immobilienmanagement, BBL           │
│  Steward          Max Mustermann                                │
│  Business Keys    egid                                          │
│  Criticality      High                                          │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│  [v] Compliance & Classification                                │
├─────────────────────────────────────────────────────────────────┤
│  Contains Personal Data    No                                   │
│  Confidentiality          INTERNAL                              │
│  Integrity                HIGH                                  │
│  Availability             MEDIUM                                │
│  Data Protection Notes    -                                     │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│  [v] Legal & Standards References                               │
├─────────────────────────────────────────────────────────────────┤
│  Legal Basis                                                    │
│    - GeoIG Art. 3: Geodaten des Bundes                         │
│                                                                 │
│  Standards                                                      │
│    - eCH-0129 v2.0: Datenstandard Gebäude                      │
│    - SIA 405: Geodaten zu Ver- und Entsorgungsleitungen        │
│                                                                 │
│  External Identifiers                                           │
│    - EGID (GWR): Eidgenössischer Gebäudeidentifikator          │
└─────────────────────────────────────────────────────────────────┘
```

**Child Entities Section**

For entities with children (e.g., Logical Entity with Attributes):

```
┌─────────────────────────────────────────────────────────────────┐
│  Attributes (12)                                    [+ Add]     │
├─────────────────────────────────────────────────────────────────┤
│  Name              Type        Nullable   Key   Value Domain    │
│  ─────────────────────────────────────────────────────────────  │
│  egid              Integer     No         PK    -               │
│  building_status   Reference   No         -     BuildingStatus  │
│  address_street    String      Yes        -     -               │
│  address_number    String      Yes        -     -               │
│  address_zip       String      Yes        -     -               │
│  address_city      String      Yes        -     -               │
│  construction_year Integer     Yes        -     -               │
│  floor_count       Integer     Yes        -     -               │
│  ...                                                            │
│                                              [Show all 12]      │
└─────────────────────────────────────────────────────────────────┘
```

Features:
- Sortable columns
- Click row to navigate to attribute detail
- Inline type badges
- Link to value domain if applicable
- Expandable to show all entries
- Search/filter within table

**Cross-Layer Mappings Section**

Shows relationships across architecture layers:

```
┌─────────────────────────────────────────────────────────────────┐
│  Cross-Layer Mappings                                           │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  CONCEPTUAL (realizes)                                          │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │ [C] Gebäude                                    [link]   │   │
│  │     Immobilienverwaltung                                │   │
│  └─────────────────────────────────────────────────────────┘   │
│                                                                 │
│  PHYSICAL (implemented by)                                      │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │ [P] SAP RE-FX > REFX > VIBDBE              [link]      │   │
│  │     12 columns mapped                                   │   │
│  ├─────────────────────────────────────────────────────────┤   │
│  │ [P] PostGIS > public > buildings           [link]      │   │
│  │     8 columns mapped                                    │   │
│  └─────────────────────────────────────────────────────────┘   │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

Features:
- Grouped by layer
- Shows relationship type (realizes, implements, etc.)
- Count of mapped sub-elements
- Click to navigate to related entity
- Visual layer indicators

**Related Entities Section**

Shows other relationships within the same layer:

```
┌─────────────────────────────────────────────────────────────────┐
│  Related Entities                                               │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  Relationships                                                  │
│  ─────────────────────────────────────────────────────────────  │
│  Building  ──[1:n]──>  BuildingUnit     "contains"             │
│  Building  ──[n:1]──>  Plot             "located on"           │
│  Building  ──[n:m]──>  LeaseContract    "subject of"           │
│                                                                 │
│  Referenced By                                                  │
│  ─────────────────────────────────────────────────────────────  │
│  MaintenanceRecord  ──[n:1]──>  Building                       │
│  EnergyMeasurement  ──[n:1]──>  Building                       │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

#### 6.3.2 Diagram View

Renders visual diagrams appropriate to the entity type and layer.

**For Logical Entities: Entity-Relationship Diagram**
```
┌─────────────────────────────────────────────────────────────────┐
│  [Zoom -] [100%] [Zoom +]  [Fit] [Reset]    [Export: SVG|PNG]  │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│    ┌──────────────┐         ┌──────────────┐                   │
│    │   Building   │────────>│    Plot      │                   │
│    ├──────────────┤   n:1   ├──────────────┤                   │
│    │ egid     PK  │         │ plot_id  PK  │                   │
│    │ status      │         │ area         │                   │
│    │ address     │         │ zone         │                   │
│    └──────────────┘         └──────────────┘                   │
│           │                                                     │
│           │ 1:n                                                 │
│           v                                                     │
│    ┌──────────────┐                                            │
│    │ BuildingUnit │                                            │
│    ├──────────────┤                                            │
│    │ unit_id  PK  │                                            │
│    │ floor        │                                            │
│    │ area_sqm     │                                            │
│    └──────────────┘                                            │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

Features:
- Pan and zoom controls
- Click entity to navigate
- Hover for quick info tooltip
- Highlight current entity
- Show/hide attributes toggle
- Auto-layout options (hierarchical, force-directed)
- Export as SVG or PNG

**For Physical Tables: Schema Diagram**
- Shows table with all columns
- Foreign key relationships as connecting lines
- Index indicators
- Constraint annotations

**For Concepts: Domain Model Diagram**
- Shows concept and related concepts
- Business relationships
- Color-coded by domain

#### 6.3.3 Lineage View

Shows data flow and transformation history.

```
┌─────────────────────────────────────────────────────────────────┐
│  Data Lineage: Building                      [Upstream|Both|Downstream]│
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  ┌─────────┐      ┌─────────────┐      ┌──────────┐            │
│  │  GWR    │─────>│  ETL Job    │─────>│ Building │            │
│  │ (Source)│      │  daily_sync │      │ (Target) │            │
│  └─────────┘      └─────────────┘      └──────────┘            │
│       │                                      │                  │
│       │           ┌─────────────┐            │                  │
│       └──────────>│  Staging    │────────────┘                  │
│                   │   Table     │                               │
│                   └─────────────┘                               │
│                                                                 │
│  ─────────────────────────────────────────────────────────────  │
│  Source Details                                                 │
│  - GWR (Gebäude- und Wohnungsregister): Daily extract via API  │
│  - Last sync: 2024-10-07 03:00 UTC                             │
│  - Records processed: 2,847,291                                 │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

Features:
- Visual flow diagram
- Toggle upstream/downstream view
- Click nodes to navigate
- Transformation details on hover
- Timestamp of last data movement

#### 6.3.4 History/Changelog View

Shows version history and changes over time.

```
┌─────────────────────────────────────────────────────────────────┐
│  History: Building                           [Filter by date v]│
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  Version 3 (Current)                        2024-10-08 14:23   │
│  Author: davidrasner5                                          │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │ + Added attribute: energy_rating (Reference)            │   │
│  │ ~ Modified attribute: floor_count (nullable: true)      │   │
│  │ + Added standard reference: SIA 380/1                   │   │
│  └─────────────────────────────────────────────────────────┘   │
│                                                    [Compare v2] │
│                                                                 │
│  Version 2                                       2024-06-15    │
│  Author: mmustermann                                           │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │ + Added physical mapping: PostGIS.public.buildings      │   │
│  │ ~ Modified description (DE)                             │   │
│  └─────────────────────────────────────────────────────────┘   │
│                                                    [Compare v1] │
│                                                                 │
│  Version 1                                       2024-01-15    │
│  Author: davidrasner5                                          │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │ Initial creation                                        │   │
│  │ + 8 attributes defined                                  │   │
│  │ + Physical mapping: SAP RE-FX.REFX.VIBDBE              │   │
│  └─────────────────────────────────────────────────────────┘   │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

Features:
- Chronological list of versions
- Change summary per version
- Change type indicators (added/modified/deleted)
- Author and timestamp
- Compare button to open diff view
- Filter by date range or change type

### 6.4 Additional UI Features

#### 6.4.1 Comparison Mode
- Compare two versions of same entity
- Compare two entities (e.g., two systems' implementations)
- Side-by-side or inline diff view

#### 6.4.2 Export & Sharing
- Export as JSON/YAML
- Export documentation as PDF
- Generate embed code
- Share link with specific view state

#### 6.4.3 Multilingual Support
- Language switcher (DE/FR/IT/EN)
- All user-facing metadata in selected language
- Fallback chain: selected → DE → EN

---

## 7. Application Structure

### 7.1 Technology Stack (Prototype)

**Frontend**:
- Vanilla JavaScript (no framework dependency)
- HTML5 / CSS3
- CSS Custom Properties for theming
- ES Modules for code organization (native browser support)

**Visualization**:
- SVG for diagrams
- Optional: D3.js for complex visualizations

**Data Storage (Prototype)**:
- JSON files for metadata (see DATABASE.md for schema details)
- LocalStorage for user preferences
- Future: REST API backend

**Build/Dev**:
- No build step required for prototype
- Works directly from file system or simple HTTP server
- Live Server for development

### 7.2 File Structure

```
metadata-catalog/
├── index.html                 # Main entry point
├── css/
│   ├── main.css              # Core styles
│   ├── variables.css         # CSS custom properties (see DESIGNGUIDE.md)
│   ├── layout.css            # Page layout, grid
│   ├── tree.css              # Tree navigation styles
│   ├── wiki.css              # Wiki/detail view styles
│   ├── diagram.css           # Diagram view styles
│   └── components.css        # Reusable component styles
├── js/
│   ├── app.js                # Application initialization
│   ├── state.js              # State management
│   ├── router.js             # URL routing and navigation
│   ├── components/
│   │   ├── header.js         # Header with layer toggle, search, language
│   │   ├── tree.js           # Tree navigation component
│   │   ├── wiki.js           # Wiki/detail view component
│   │   ├── diagram.js        # Diagram visualization component
│   │   ├── search.js         # Search component
│   │   ├── lineage.js        # Lineage view component
│   │   ├── history.js        # History/changelog component
│   │   └── breadcrumb.js     # Breadcrumb navigation
│   ├── services/
│   │   ├── dataService.js    # Data loading and caching
│   │   ├── searchService.js  # Search indexing and querying
│   │   └── exportService.js  # Export functionality
│   └── utils/
│       ├── i18n.js           # Internationalization utilities
│       ├── helpers.js        # General helper functions
│       └── dom.js            # DOM manipulation utilities
├── data/                      # JSON data files (see DATABASE.md)
│   ├── domains.json
│   ├── concepts.json
│   ├── logical-entities.json
│   ├── value-domains.json
│   ├── systems.json
│   ├── schemas.json
│   ├── tables.json
│   └── mappings.json
├── i18n/                      # Internationalization files
│   ├── de.json
│   ├── fr.json
│   ├── it.json
│   └── en.json
└── assets/
    ├── icons/                 # SVG icons
    └── images/                # Static images
```

### 7.3 Component Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                           app.js                                │
│                    (initialization, routing)                    │
├─────────────────────────────────────────────────────────────────┤
│                          state.js                               │
│              (centralized state management)                     │
├──────────────────────┬──────────────────────────────────────────┤
│                      │                                          │
│   ┌──────────────┐   │   ┌──────────────────────────────────┐  │
│   │   header.js  │   │   │         Main Content Area        │  │
│   │  - layer     │   │   │  ┌────────────┐ ┌────────────┐   │  │
│   │  - search    │   │   │  │  wiki.js   │ │ diagram.js │   │  │
│   │  - language  │   │   │  └────────────┘ └────────────┘   │  │
│   └──────────────┘   │   │  ┌────────────┐ ┌────────────┐   │  │
│   ┌──────────────┐   │   │  │ lineage.js │ │ history.js │   │  │
│   │   tree.js    │   │   │  └────────────┘ └────────────┘   │  │
│   │  - navigation│   │   └──────────────────────────────────┘  │
│   │  - filtering │   │                                          │
│   └──────────────┘   │                                          │
│                      │                                          │
├──────────────────────┴──────────────────────────────────────────┤
│                         services/                               │
│   ┌────────────────┐ ┌────────────────┐ ┌────────────────┐     │
│   │ dataService.js │ │searchService.js│ │exportService.js│     │
│   └────────────────┘ └────────────────┘ └────────────────┘     │
└─────────────────────────────────────────────────────────────────┘
```

### 7.4 State Management

The application uses a simple centralized state pattern:

**State Structure:**
```
state = {
  // Current view state
  currentLayer: 'conceptual' | 'logical' | 'physical',
  currentEntity: { type, id } | null,
  currentTab: 'wiki' | 'diagram' | 'lineage' | 'history',
  
  // Navigation state
  expandedNodes: Set<string>,
  breadcrumb: Array<{ type, id, name }>,
  
  // Search state
  searchQuery: string,
  searchFilters: { layer, type, ... },
  searchResults: Array,
  
  // User preferences
  language: 'de' | 'fr' | 'it' | 'en',
  
  // Data cache
  entities: Map<string, Entity>,
  loaded: Set<string>
}
```

**State Updates:**
- All state changes go through a central `setState()` function
- Components subscribe to state changes via `subscribe(callback)`
- URL is synchronized with navigation state

### 7.5 URL Routing

URLs follow a predictable pattern for direct linking:

| URL Pattern | Description |
|-------------|-------------|
| `/` | Home, default layer view |
| `/#/conceptual` | Conceptual layer root |
| `/#/logical` | Logical layer root |
| `/#/physical` | Physical layer root |
| `/#/conceptual/domain/{id}` | Domain detail |
| `/#/conceptual/concept/{id}` | Concept detail |
| `/#/logical/entity/{id}` | Logical entity detail |
| `/#/logical/attribute/{id}` | Attribute detail |
| `/#/physical/system/{id}` | System detail |
| `/#/physical/table/{id}` | Table detail |
| `/#/search?q={query}` | Search results |

Query parameters:
- `?tab=diagram` - Open specific tab
- `?lang=fr` - Override language

---

## 8. User Roles and Personas

### 8.1 Primary User Roles

#### Business Analyst / Domain Expert
- **Goals**: Understand business concepts, find authoritative definitions, validate terminology
- **Primary Layer**: Conceptual
- **Key Activities**: Browse domains, search for business terms, review concept definitions
- **Technical Skill**: Low to Medium

#### Data Architect
- **Goals**: Design logical data models, ensure consistency across systems, plan integrations
- **Primary Layer**: Logical (with cross-layer navigation)
- **Key Activities**: Model entities, define relationships, review physical implementations
- **Technical Skill**: High

#### Data Engineer / Developer
- **Goals**: Understand physical structures, find connection details, implement integrations
- **Primary Layer**: Physical
- **Key Activities**: Browse schemas, review column definitions, trace to source systems
- **Technical Skill**: High

#### Data Steward / Governance Officer
- **Goals**: Ensure compliance, maintain data quality, document ownership
- **Primary Layer**: All layers
- **Key Activities**: Review classifications, update compliance metadata, audit lineage
- **Technical Skill**: Medium

#### Project Manager / Stakeholder
- **Goals**: Get quick overview, understand data landscape, assess impact
- **Primary Layer**: Conceptual (overview)
- **Key Activities**: Browse high-level structure, export documentation, search
- **Technical Skill**: Low

---

## 9. User Stories

### 9.1 Navigation and Discovery

#### US-001: Browse by Architecture Layer
**As a** data architect  
**I want to** switch between conceptual, logical, and physical views  
**So that** I can focus on the appropriate level of abstraction for my current task

**Acceptance Criteria:**
- Layer toggle is always visible in the header
- Switching layers updates the tree navigation immediately
- Current selection is preserved if equivalent exists in new layer
- URL updates to reflect current layer

#### US-002: Navigate Entity Hierarchy
**As a** business analyst  
**I want to** expand and collapse the tree navigation  
**So that** I can explore the domain structure hierarchically

**Acceptance Criteria:**
- Tree nodes expand/collapse on click
- Expanded state persists during session
- Current entity is highlighted in tree
- Parent nodes auto-expand when navigating to child

#### US-003: Search Across All Entities
**As a** developer  
**I want to** search for entities by name or description  
**So that** I can quickly find relevant data elements without browsing

**Acceptance Criteria:**
- Search box is always accessible
- Results appear as user types (debounced, 300ms)
- Results grouped by layer with clear indicators
- Clicking result navigates to entity detail
- Recent searches are remembered

#### US-004: Filter Search Results
**As a** data steward  
**I want to** filter search results by layer, type, or metadata  
**So that** I can narrow down results to relevant entities

**Acceptance Criteria:**
- Filter panel accessible from search
- Can filter by: layer, entity type, owner, classification
- Filters can be combined
- Active filters shown as removable chips
- Result count updates with filters

### 9.2 Documentation and Detail Views

#### US-005: View Entity Documentation
**As a** business analyst  
**I want to** see comprehensive documentation for any entity  
**So that** I can understand its purpose, ownership, and constraints

**Acceptance Criteria:**
- Wiki view loads as default when selecting entity
- All metadata sections display with labels
- Sections are collapsible
- Empty sections show placeholder or are hidden
- Multilingual content displays in selected language

#### US-006: View Cross-Layer Mappings
**As a** data architect  
**I want to** see which physical tables implement a logical entity  
**So that** I can understand where data actually resides

**Acceptance Criteria:**
- Mappings section visible in wiki view
- Grouped by direction (up/down) and layer
- Shows count of mapped elements
- Each mapping is clickable to navigate
- Shows mapping completeness indicator

#### US-007: View Child Entities
**As a** developer  
**I want to** see all columns of a table in a sortable list  
**So that** I can quickly find specific fields

**Acceptance Criteria:**
- Child entities shown in tabular format
- Columns are sortable
- Can filter/search within table
- Click row to navigate to child detail
- Shows key indicators (PK, FK, nullable)

#### US-008: Navigate via Breadcrumb
**As a** user  
**I want to** see my current location in the hierarchy  
**So that** I can understand context and navigate to parents

**Acceptance Criteria:**
- Breadcrumb shows full path from root
- Each segment is clickable
- Current entity is not clickable
- Breadcrumb truncates gracefully on small screens

### 9.3 Cross-Layer Traceability

#### US-009: Trace Concept to Physical
**As a** data architect  
**I want to** start from a business concept and see all physical implementations  
**So that** I can assess the data landscape for that concept

**Acceptance Criteria:**
- From concept detail, can see linked logical entities
- From logical entity, can see linked physical tables
- Can navigate through chain via clicks
- Shows summary count at each level

#### US-010: Trace Column to Business Meaning
**As a** developer  
**I want to** start from a database column and understand its business meaning  
**So that** I can correctly interpret or transform the data

**Acceptance Criteria:**
- From column detail, can see linked logical attribute
- From attribute, can see linked concept
- Business definition is accessible within 2 clicks
- Shows value domain if applicable

#### US-011: Impact Analysis
**As a** data steward  
**I want to** see all entities affected by a change to a logical entity  
**So that** I can assess the impact of proposed modifications

**Acceptance Criteria:**
- Impact analysis accessible from entity detail
- Shows upstream dependencies (concepts)
- Shows downstream dependencies (physical tables)
- Shows count of affected systems
- Can export impact report

### 9.4 Diagrams and Visualization

#### US-012: View Entity Relationship Diagram
**As a** data architect  
**I want to** see a visual diagram of entity relationships  
**So that** I can understand the data model structure

**Acceptance Criteria:**
- Diagram tab available for logical entities
- Shows current entity and related entities
- Relationships labeled with cardinality
- Can zoom and pan
- Click entity to navigate

#### US-013: Export Diagram
**As a** data architect  
**I want to** export diagrams as images  
**So that** I can include them in documentation

**Acceptance Criteria:**
- Export button available in diagram view
- Supports SVG and PNG formats
- Exported image includes legend
- Reasonable file size and quality

### 9.5 Compliance and Governance

#### US-014: View Classification
**As a** data steward  
**I want to** see the security classification of any entity  
**So that** I can ensure appropriate handling

**Acceptance Criteria:**
- Classification section in wiki view
- Shows confidentiality, integrity, availability
- Visual indicators for classification level
- Shows personal data flag prominently

#### US-015: View Legal References
**As a** compliance officer  
**I want to** see which laws and standards apply to an entity  
**So that** I can ensure regulatory compliance

**Acceptance Criteria:**
- Legal references section in wiki view
- Shows law name, article, description
- External links where applicable
- Grouped by type (law, standard, identifier)

### 9.6 History and Versioning

#### US-016: View Change History
**As a** data steward  
**I want to** see the change history of an entity  
**So that** I can understand how it evolved

**Acceptance Criteria:**
- History tab available for all entities
- Shows chronological list of versions
- Each version shows: date, author, summary
- Changes categorized (added/modified/deleted)

#### US-017: Compare Versions
**As a** data architect  
**I want to** compare two versions of an entity  
**So that** I can see exactly what changed

**Acceptance Criteria:**
- Compare button on history entries
- Side-by-side or inline diff view
- Added content highlighted in green
- Removed content highlighted in red
- Can compare any two versions

### 9.7 Multilingual Support

#### US-018: Switch Display Language
**As a** French-speaking user  
**I want to** view the interface and content in French  
**So that** I can work in my preferred language

**Acceptance Criteria:**
- Language switcher in header
- Supports DE, FR, IT, EN
- UI labels change immediately
- Content displays in selected language
- Falls back to DE then EN if translation missing

### 9.8 Export and Sharing

#### US-019: Export Entity Documentation
**As a** project manager  
**I want to** export entity documentation as PDF or JSON  
**So that** I can share it with stakeholders

**Acceptance Criteria:**
- Export button in entity detail
- Supports JSON (machine-readable) and PDF (human-readable)
- Includes all visible metadata sections
- PDF has professional formatting

#### US-020: Share Direct Link
**As a** data architect  
**I want to** share a link to a specific entity  
**So that** colleagues can access it directly

**Acceptance Criteria:**
- Share button copies URL to clipboard
- URL contains entity identifier
- Opening URL navigates directly to entity
- URL includes current layer context

---

## 10. User Flows

### 10.1 Flow: Discover Business Concept Definition

**Actor:** Business Analyst  
**Goal:** Find the authoritative definition of "Mietobjekt"

```
Step 1: User opens application
        - Application loads with Conceptual layer selected
        - Tree shows domain hierarchy

Step 2: User types "Mietobjekt" in search box
        - Autocomplete shows matching concepts
        - Results show: "Mietobjekt" in Immobilienverwaltung

Step 3: User clicks search result
        - Wiki view opens for Mietobjekt concept
        - Definition displayed prominently
        - Synonyms shown (Mieteinheit, Rental Unit)

Step 4: User reviews related information
        - Sees domain ownership (BBL)
        - Sees linked logical entities
        - Notes legal reference to OR Art. 253ff

Step 5: User exports definition
        - Clicks Export > PDF
        - Downloads formatted definition document
```

### 10.2 Flow: Trace Physical Column to Business Meaning

**Actor:** Developer  
**Goal:** Understand what SAP column "VIESSION" represents

```
Step 1: User selects Physical layer
        - Layer toggle switches to Physical
        - Tree shows systems hierarchy

Step 2: User navigates to SAP RE-FX > REFX > VIBDBE
        - Expands tree nodes
        - Selects VIBDBE table
        - Wiki view shows table documentation

Step 3: User finds VIESSION in columns list
        - Scrolls or searches column list
        - Clicks VIESSION row
        - Column detail view opens

Step 4: User checks logical mapping
        - Cross-layer mappings section shows:
          "Maps to: Building.internal_key (Logical)"
        - Clicks link to logical attribute

Step 5: User traces to concept
        - Logical attribute shows parent entity
        - Entity shows concept mapping: "Gebaeude"
        - User now understands business meaning
```

### 10.3 Flow: Assess Impact of Logical Model Change

**Actor:** Data Architect  
**Goal:** Determine which systems are affected by adding a new attribute to Building

```
Step 1: User navigates to Building logical entity
        - Uses search or tree navigation
        - Opens Building in Logical layer

Step 2: User reviews current physical implementations
        - Cross-layer mappings section shows:
          - SAP RE-FX: VIBDBE (12 columns mapped)
          - PostGIS: buildings (8 columns mapped)
          - Data Warehouse: dim_building (15 columns)

Step 3: User opens Impact Analysis view
        - Clicks "Impact Analysis" action button
        - Visual diagram shows:
          Building -> 3 physical tables
          Building -> 2 downstream reports
          Building -> 1 external API

Step 4: User documents affected systems
        - Notes all systems requiring schema changes
        - Exports impact report as PDF
        - Shares with project team
```

### 10.4 Flow: Review Compliance Classification

**Actor:** Data Steward  
**Goal:** Verify all personal data entities have proper classification

```
Step 1: User performs filtered search
        - Opens search
        - Adds filter: "Contains Personal Data = Yes"
        - Adds filter: "Layer = Logical"
        - Executes search

Step 2: User reviews results list
        - Results show 8 logical entities
        - Each shows: name, domain, classification

Step 3: User checks each entity
        - Opens first entity: "Person"
        - Reviews Compliance section:
          - Personal Data: Yes
          - Special Categories: No
          - Confidentiality: CONFIDENTIAL
          - Data Subjects: EMPLOYEE
        - Verifies legal basis documented

Step 4: User identifies gap
        - Opens "ContactHistory" entity
        - Notices Classification is missing
        - Notes entity for follow-up

Step 5: User exports audit report
        - Exports search results as JSON
        - Includes for compliance documentation
```

### 10.5 Flow: Understand Data Lineage

**Actor:** Data Engineer  
**Goal:** Understand where Building data comes from and how it flows

```
Step 1: User navigates to Building logical entity
        - Opens Building in Logical layer

Step 2: User opens Lineage tab
        - Clicks Lineage tab in detail view
        - Visual lineage diagram loads

Step 3: User examines upstream sources
        - Diagram shows:
          GWR (external) --[API extract]-->
          staging.buildings --[ETL daily]-->
          Building entity
        - Notes GWR as authoritative source

Step 4: User examines downstream consumers
        - Switches to "Downstream" view
        - Diagram shows:
          Building entity --[sync]-->
          SAP RE-FX.VIBDBE
          Building entity --[replicate]-->
          Data Warehouse.dim_building

Step 5: User clicks transformation for details
        - Hovers over "ETL daily" node
        - Tooltip shows:
          - Job: building_sync_daily
          - Schedule: 03:00 UTC
          - Last run: Success (2024-10-07)
```

### 10.6 Flow: Compare Schema Versions

**Actor:** Developer  
**Goal:** See what changed in the last schema update

```
Step 1: User navigates to table
        - Opens SAP RE-FX > REFX > VIBDBE

Step 2: User opens History tab
        - Sees list of versions
        - Latest: Version 3 (2024-10-08)
        - Previous: Version 2 (2024-06-15)

Step 3: User clicks "Compare v2"
        - Diff view opens
        - Shows side-by-side comparison

Step 4: User reviews changes
        - Added columns highlighted in green:
          + ENERGY_RATING (VARCHAR(10))
          + LAST_RENOVATION_DATE (DATE)
        - Modified columns highlighted in yellow:
          ~ FLOOR_COUNT: nullable changed true->false
        - No deleted columns

Step 5: User notes changes for deployment
        - Understands schema migration requirements
        - Proceeds with implementation
```

---

## 11. Non-Functional Requirements

### 11.1 Performance

| Requirement | Target | Notes |
|-------------|--------|-------|
| Initial page load | < 2 seconds | On standard broadband connection |
| Tree expansion | < 100ms | For nodes with up to 100 children |
| Search response | < 300ms | For debounced input |
| Entity detail load | < 500ms | Including all metadata sections |
| Diagram rendering | < 1 second | For up to 50 entities |

### 11.2 Scalability (Prototype Scope)

The prototype should handle:
- Up to 50 domains
- Up to 500 concepts
- Up to 1,000 logical entities
- Up to 5,000 attributes
- Up to 100 systems
- Up to 10,000 tables/columns

### 11.3 Browser Compatibility

**Required Support:**
- Chrome/Edge (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)

**Features Used:**
- ES Modules (native)
- CSS Custom Properties
- CSS Grid and Flexbox
- Fetch API
- URL API for routing

### 11.4 Accessibility

**WCAG 2.1 Level AA Compliance:**
- Keyboard navigation for all interactive elements
- Focus indicators visible
- Color contrast ratio minimum 4.5:1 for text
- Screen reader compatible markup
- Skip links for main content areas
- ARIA labels where semantic HTML insufficient

**Specific Requirements:**
- Tree navigation operable via keyboard (arrow keys, Enter, Space)
- Search accessible without mouse
- Tab panels properly labeled
- Data tables with proper headers

### 11.5 Internationalization (i18n)

**Supported Languages:**
- German (de) - Primary, all content required
- French (fr) - Secondary
- Italian (it) - Secondary
- English (en) - Fallback

**Fallback Chain:**
1. Selected language
2. German (de)
3. English (en)
4. Raw key (for debugging)

**Requirements:**
- All UI labels externalized to i18n files
- Date/number formatting per locale
- Right-to-left support not required (prototype)
- Content metadata supports multilingual values

### 11.6 Security (Prototype)

**Prototype Scope:**
- Read-only application (no authentication required)
- No sensitive data in prototype dataset
- No server-side processing

**Future Considerations:**
- Role-based access control
- Audit logging
- Data encryption at rest
- HTTPS enforcement

### 11.7 Maintainability

**Code Quality:**
- Consistent code style (document conventions)
- JSDoc comments for public functions
- Modular component architecture
- Separation of concerns (data, view, logic)

**Documentation:**
- README with setup instructions
- Inline code comments for complex logic
- Architecture decision records for key choices

### 11.8 Offline Capability (Future)

Not required for prototype, but architecture should not preclude:
- Service Worker for caching
- IndexedDB for local storage
- Sync mechanism for updates

---

## 12. Feature Prioritization

### Phase 1: MVP (Prototype)
1. [x] Basic navigation tree (all three layers)
2. [x] Wiki view for all entity types
3. [x] Cross-layer mapping display
4. [x] Basic search
5. [x] Sample data (BBL context)
6. [x] Responsive layout

### Phase 2: Enhanced Visualization
1. [ ] ER diagram view (logical layer)
2. [ ] Physical schema diagram
3. [ ] Lineage visualization
4. [ ] Traceability matrix

### Phase 3: Collaboration
1. [ ] Version history
2. [ ] Comparison view
3. [ ] Export functionality
4. [ ] Embed code generation

### Phase 4: Advanced Features
1. [ ] Full-text search with filters
2. [ ] Impact analysis
3. [ ] Data quality dashboards
4. [ ] API for external integration

---

## 13. Acceptance Criteria

### 13.1 Navigation
- [ ] User can switch between Conceptual, Logical, Physical views
- [ ] Tree navigation displays correct hierarchy per layer
- [ ] Clicking entity navigates to detail view
- [ ] Breadcrumb shows current location
- [ ] Search returns relevant results across all layers

### 13.2 Documentation
- [ ] Wiki view displays all metadata categories
- [ ] Multilingual content displays in selected language
- [ ] Related entities are clickable links
- [ ] Cross-layer mappings are visible and navigable

### 13.3 Visualization
- [ ] Diagram view renders entity relationships
- [ ] Diagrams are interactive (click to navigate)
- [ ] Zoom/pan controls work correctly

### 13.4 Data Quality
- [ ] Sample data loads without errors
- [ ] All cross-references resolve correctly
- [ ] No broken links in navigation

---

## 14. Glossary

| Term | Definition |
|------|------------|
| **TOGAF** | The Open Group Architecture Framework |
| **DSG** | Datenschutzgesetz (Swiss Data Protection Act) |
| **ISG** | Informationssicherheitsgesetz (Information Security Act) |
| **EGID** | Eidgenössischer Gebäudeidentifikator (Federal Building ID) |
| **GWR** | Gebäude- und Wohnungsregister (Building and Dwelling Register) |
| **BBL** | Bundesamt für Bauten und Logistik |
| **SAP RE-FX** | SAP Real Estate Flexible Module |
| **eCH** | Swiss e-Government standards |

---

## 15. References

### Related Documents
- **DATABASE.md** - Data model schemas, JSON structures, sample data
- **DESIGNGUIDE.md** - Visual design system, colors, typography, icons

### Standards
- TOGAF 9.2 - Data Architecture
- eCH-0129 - Datenstandard Gebäudeadressen
- eCH-0130 - Datenstandard Unternehmensidentifikation
- ISO 19650 - BIM Information Management

### Inspiration
- [dbdocs.io](https://dbdocs.io) - Database documentation
- [dbt docs](https://docs.getdbt.com) - Data lineage
- [Alation](https://www.alation.com) - Enterprise data catalog
- [Collibra](https://www.collibra.com) - Data governance

---

*Document Version: 1.1*  
*Created: January 2026*  
*Last Updated: January 2026*  
*Status: Draft for Prototype Development*
