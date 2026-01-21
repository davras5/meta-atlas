# Meta-Atlas - Data Specification

## Table of Contents

1. [Overview](#1-overview)
2. [Data Files](#2-data-files)
3. [Entity Schemas](#3-entity-schemas)
4. [Cross-Layer Relationships](#4-cross-layer-relationships)
5. [Sample Data](#5-sample-data)

---

## 1. Overview

### 1.1 Purpose

This document defines the data model for Meta-Atlas. The model is based on the TOGAF three-layer architecture (Conceptual, Logical, Physical) and stores metadata as JSON files.

### 1.2 Design Principles

1. **Flat JSON Files**: Simple array-based JSON for easy editing
2. **Layer Separation**: Clear distinction between conceptual, logical, and physical entities
3. **Cross-Layer References**: ID-based references enable traceability
4. **Multilingual Support**: Name fields support DE/EN/FR variants
5. **Embedded Children**: Attributes and columns are embedded in parent entities

### 1.3 Data Files

| File | Layer | Description |
|------|-------|-------------|
| `projects.json` | Organization | Project/catalog containers |
| `domains.json` | Conceptual | Business domains |
| `concepts.json` | Conceptual | Business concepts/terms |
| `entities.json` | Logical | Logical entities with attributes |
| `systems.json` | Physical | Database/application systems |
| `tables.json` | Physical | Tables with columns |
| `value-domains.json` | Reference | Enumerations and code lists |

---

## 2. Data Files

### 2.1 projects.json

Projects are top-level containers that group related metadata.

```json
[
  {
    "id": "proj-bundesimmobilien",
    "type": "project",
    "name": "Bundesimmobilien Katalog",
    "nameEn": "Federal Real Estate Catalog",
    "description": "Metadatenkatalog für das Immobilienportfolio des Bundes",
    "status": "active",
    "owner": "BBL - Bundesamt für Bauten und Logistik",
    "created": "2024-01-15",
    "updated": "2024-12-01",
    "color": "#3B82F6",
    "icon": "building",
    "domains": ["dom-immo", "dom-project"],
    "lastActivity": "2025-01-18",
    "users": [
      { "name": "Anna Müller", "role": "owner", "email": "anna.mueller@admin.ch" }
    ]
  }
]
```

### 2.2 domains.json

Business domains group related concepts.

```json
[
  {
    "id": "dom-immo",
    "type": "domain",
    "layer": "conceptual",
    "name": "Immobilienverwaltung",
    "nameEn": "Real Estate Management",
    "description": "Verwaltung von Immobilien, Gebäuden und Grundstücken",
    "status": "active",
    "owner": "BBL",
    "created": "2024-01-15"
  }
]
```

### 2.3 concepts.json

Business concepts define terminology within a domain.

```json
[
  {
    "id": "con-gebaeude",
    "type": "concept",
    "layer": "conceptual",
    "name": "Gebäude",
    "nameEn": "Building",
    "nameFr": "Bâtiment",
    "description": "Ein dauerhaft errichtetes Bauwerk mit Dach und Wänden",
    "status": "active",
    "domain": "dom-immo",
    "synonyms": ["Bauwerk", "Liegenschaft"],
    "legalRefs": ["GeoIG Art. 3", "GWR-Verordnung"],
    "relatedConcepts": ["con-grundstueck", "con-mietobjekt"],
    "created": "2024-01-15"
  }
]
```

### 2.4 entities.json

Logical entities with embedded attributes.

```json
[
  {
    "id": "ent-building",
    "type": "entity",
    "layer": "logical",
    "name": "Building",
    "nameDE": "Gebäude",
    "description": "Logische Entität für Gebäudedaten des Bundes",
    "status": "active",
    "concept": "con-gebaeude",
    "domain": "dom-immo",
    "physicalTables": ["tbl-vibdbe", "tbl-geo-buildings"],
    "created": "2024-01-20",
    "attributes": [
      {
        "name": "egid",
        "type": "Integer",
        "nullable": false,
        "key": "PK",
        "description": "Eidgenössischer Gebäudeidentifikator"
      },
      {
        "name": "building_type",
        "type": "Reference",
        "nullable": false,
        "key": "",
        "valueDomain": "vd-building-type",
        "description": "Gebäudetyp"
      }
    ]
  }
]
```

### 2.5 systems.json

Physical systems (databases, applications).

```json
[
  {
    "id": "sys-sap",
    "type": "system",
    "layer": "physical",
    "name": "SAP RE-FX",
    "description": "SAP Real Estate Management",
    "status": "active",
    "technology": "SAP S/4HANA",
    "owner": "BBL IT",
    "created": "2024-01-15"
  }
]
```

### 2.6 tables.json

Physical tables with embedded columns.

```json
[
  {
    "id": "tbl-vibdbe",
    "type": "table",
    "layer": "physical",
    "name": "VIBDBE",
    "description": "SAP Gebäudetabelle",
    "status": "active",
    "system": "sys-sap",
    "logicalEntity": "ent-building",
    "rowCount": 25000,
    "created": "2024-01-20",
    "columns": [
      {
        "name": "EGID",
        "type": "INT",
        "nullable": false,
        "key": "PK",
        "description": "Gebäude-ID",
        "logicalAttribute": "egid"
      }
    ]
  }
]
```

### 2.7 value-domains.json

Enumeration and reference data.

```json
[
  {
    "id": "vd-building-type",
    "type": "valueDomain",
    "name": "BuildingType",
    "nameDE": "Gebäudetyp",
    "description": "Typen von Gebäuden",
    "status": "active",
    "values": [
      { "code": "RES", "name": "Wohngebäude", "nameEn": "Residential" },
      { "code": "COM", "name": "Geschäftsgebäude", "nameEn": "Commercial" },
      { "code": "IND", "name": "Industriegebäude", "nameEn": "Industrial" }
    ]
  }
]
```

---

## 3. Entity Schemas

### 3.1 Common Fields

All entities share these fields:

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `id` | string | Yes | Unique identifier (prefix + name) |
| `type` | string | Yes | Entity type (project, domain, concept, etc.) |
| `name` | string | Yes | Display name |
| `description` | string | No | Description text |
| `status` | string | Yes | active, draft, deprecated |
| `created` | string | No | Creation date (YYYY-MM-DD) |

### 3.2 Project

| Field | Type | Description |
|-------|------|-------------|
| `nameEn` | string | English name |
| `owner` | string | Responsible organization |
| `updated` | string | Last update date |
| `color` | string | Display color (hex) |
| `icon` | string | Icon identifier |
| `domains` | string[] | Associated domain IDs |
| `lastActivity` | string | Last activity date |
| `users` | object[] | Team members with roles |

### 3.3 Domain

| Field | Type | Description |
|-------|------|-------------|
| `layer` | string | Always "conceptual" |
| `nameEn` | string | English name |
| `owner` | string | Responsible organization |

### 3.4 Concept

| Field | Type | Description |
|-------|------|-------------|
| `layer` | string | Always "conceptual" |
| `nameEn` | string | English name |
| `nameFr` | string | French name |
| `domain` | string | Parent domain ID |
| `synonyms` | string[] | Alternative terms |
| `legalRefs` | string[] | Legal references |
| `relatedConcepts` | string[] | Related concept IDs |

### 3.5 Entity (Logical)

| Field | Type | Description |
|-------|------|-------------|
| `layer` | string | Always "logical" |
| `nameDE` | string | German name |
| `concept` | string | Realized concept ID |
| `domain` | string | Parent domain ID |
| `physicalTables` | string[] | Implementing table IDs |
| `attributes` | object[] | Embedded attributes |

### 3.6 Attribute (Embedded)

| Field | Type | Description |
|-------|------|-------------|
| `name` | string | Attribute name |
| `type` | string | Data type (String, Integer, etc.) |
| `nullable` | boolean | Allows null values |
| `key` | string | Key type (PK, FK, or empty) |
| `valueDomain` | string | Reference to value domain ID |
| `description` | string | Attribute description |

**Attribute Types:**
- `String` - Text data
- `Integer` - Whole numbers
- `Decimal` - Numbers with decimals
- `Boolean` - True/false
- `Date` - Date values
- `DateTime` - Date and time
- `Reference` - Foreign key or value domain reference

### 3.7 System

| Field | Type | Description |
|-------|------|-------------|
| `layer` | string | Always "physical" |
| `technology` | string | Technology stack |
| `owner` | string | Responsible team |

### 3.8 Table

| Field | Type | Description |
|-------|------|-------------|
| `layer` | string | Always "physical" |
| `system` | string | Parent system ID |
| `logicalEntity` | string | Implemented entity ID |
| `rowCount` | number | Estimated row count |
| `columns` | object[] | Embedded columns |

### 3.9 Column (Embedded)

| Field | Type | Description |
|-------|------|-------------|
| `name` | string | Column name |
| `type` | string | Physical data type |
| `nullable` | boolean | Allows null values |
| `key` | string | Key type (PK, FK, or empty) |
| `logicalAttribute` | string | Mapped attribute name |
| `description` | string | Column description |

### 3.10 Value Domain

| Field | Type | Description |
|-------|------|-------------|
| `nameDE` | string | German name |
| `values` | object[] | Code values |

**Value Structure:**

| Field | Type | Description |
|-------|------|-------------|
| `code` | string | Code value |
| `name` | string | Display name (German) |
| `nameEn` | string | English name |

---

## 4. Cross-Layer Relationships

### 4.1 Relationship Diagram

```
Project
  └── domains[] ──────────────────────┐
                                      │
Domain ◄──────────────────────────────┘
  │
  └── Concept.domain
        │
        └── Entity.concept ──► Concept
              │
              ├── Entity.physicalTables[] ──► Table[]
              │
              └── Entity.attributes[]
                    │
                    └── Column.logicalAttribute

System
  └── Table.system
        │
        └── Table.logicalEntity ──► Entity
              │
              └── Table.columns[]
```

### 4.2 Navigation Paths

**Top-Down (Business to Technical):**
1. Project → Domain (via `domains[]`)
2. Domain → Concept (via `concept.domain`)
3. Concept → Entity (via `entity.concept`)
4. Entity → Table (via `entity.physicalTables[]`)

**Bottom-Up (Technical to Business):**
1. Column → Table (parent)
2. Table → Entity (via `logicalEntity`)
3. Entity → Concept (via `concept`)
4. Concept → Domain (via `domain`)

---

## 5. Sample Data

The repository includes sample data for a Swiss Federal real estate context:

### 5.1 Projects
- Bundesimmobilien Katalog (Federal Real Estate)
- Geodaten Schweiz (Swiss Geodata)
- Finanzwesen Bund (Federal Finance)
- Personalwesen (Human Resources)
- Bauprojekte Management (Construction Projects)

### 5.2 Domains
- Immobilienverwaltung (Real Estate Management)
- Projektmanagement (Project Management)

### 5.3 Concepts
- Gebäude (Building)
- Grundstück (Plot)
- Mietobjekt (Rental Unit)
- Mietvertrag (Lease Agreement)

### 5.4 Entities
- Building
- Plot
- RentalUnit

### 5.5 Systems
- SAP RE-FX
- PostGIS Geodatenbank

### 5.6 Value Domains
- BuildingType
- BuildingStatus
- ZoneType

---

*Document Version: 2.0*
*Last Updated: January 2026*
*Status: Reflects Current Implementation*
