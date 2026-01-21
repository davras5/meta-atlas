// ========================================
// SVG Icons
// ========================================
const icons = {
    search: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>',
    chevronRight: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>',
    chevronDown: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>',
    panelLeft: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M9 3v18"/></svg>',
    sun: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>',
    moon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>',
    arrowRight: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>',
    folder: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"/></svg>',
    lightbulb: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/></svg>',
    box: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/></svg>',
    database: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5V19A9 3 0 0 0 21 19V5"/><path d="M3 12A9 3 0 0 0 21 12"/></svg>',
    server: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="8" x="2" y="2" rx="2" ry="2"/><rect width="20" height="8" x="2" y="14" rx="2" ry="2"/><line x1="6" x2="6.01" y1="6" y2="6"/><line x1="6" x2="6.01" y1="18" y2="18"/></svg>',
    table: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v18"/><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 9h18"/><path d="M3 15h18"/></svg>',
    hash: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" x2="20" y1="9" y2="9"/><line x1="4" x2="20" y1="15" y2="15"/><line x1="10" x2="8" y1="3" y2="21"/><line x1="16" x2="14" y1="3" y2="21"/></svg>',
    building: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="16" height="20" x="4" y="2" rx="2" ry="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01"/><path d="M16 6h.01"/><path d="M12 6h.01"/><path d="M12 10h.01"/><path d="M12 14h.01"/><path d="M16 10h.01"/><path d="M16 14h.01"/><path d="M8 10h.01"/><path d="M8 14h.01"/></svg>',
    map: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 6 6-3 6 3 6-3v15l-6 3-6-3-6 3z"/><path d="M9 3v15"/><path d="M15 6v15"/></svg>',
    chart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg>',
    users: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
    hammer: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 12-8.5 8.5c-.83.83-2.17.83-3 0 0 0 0 0 0 0a2.12 2.12 0 0 1 0-3L12 9"/><path d="M17.64 15 22 10.64"/><path d="m20.91 11.7-1.25-1.25c-.6-.6-.93-1.4-.93-2.25v-.86L16.01 4.6a5.56 5.56 0 0 0-3.94-1.64H9l.92.82A6.18 6.18 0 0 1 12 8.4v1.56l2 2h2.47l2.26 1.91"/></svg>',
    home: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>',
    layers: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"/><path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"/><path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"/></svg>',
    cube: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m21 16-9 5-9-5V8l9-5 9 5z"/><path d="m3 8 9 5 9-5"/><path d="M12 13v8"/></svg>',
    expandAll: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m7 20 5-5 5 5"/><path d="m7 4 5 5 5-5"/></svg>',
    collapseAll: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m7 15 5-5 5 5"/><path d="m7 9 5 5 5-5"/></svg>',
    sortAsc: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 8 4-4 4 4"/><path d="M7 4v16"/><path d="M11 12h4"/><path d="M11 16h7"/><path d="M11 20h10"/></svg>',
    sortDesc: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 16 4 4 4-4"/><path d="M7 20V4"/><path d="M11 4h10"/><path d="M11 8h7"/><path d="M11 12h4"/></svg>',
    x: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>',
    plus: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14"/><path d="M5 12h14"/></svg>',
    user: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>',
    logIn: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/><polyline points="10 17 15 12 10 7"/><line x1="15" x2="3" y1="12" y2="12"/></svg>',
    github: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>',
    code: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>',
    mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>',
    list: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="8" x2="21" y1="6" y2="6"/><line x1="8" x2="21" y1="12" y2="12"/><line x1="8" x2="21" y1="18" y2="18"/><line x1="3" x2="3.01" y1="6" y2="6"/><line x1="3" x2="3.01" y1="12" y2="12"/><line x1="3" x2="3.01" y1="18" y2="18"/></svg>',
    tag: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"/><circle cx="7.5" cy="7.5" r=".5" fill="currentColor"/></svg>',
    history: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/><path d="M12 7v5l4 2"/></svg>',
    externalLink: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" x2="21" y1="14" y2="3"/></svg>'
};

// ========================================
// Utilities
// ========================================
function escapeHtml(str) {
    if (str === null || str === undefined) return '';
    return String(str)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
}

// Safe DOM element getter with error handling
function getElement(id) {
    const element = document.getElementById(id);
    if (!element) {
        console.warn(`Element with id "${id}" not found`);
    }
    return element;
}

// Safe innerHTML setter with error handling
function setInnerHTML(elementOrId, html) {
    try {
        const element = typeof elementOrId === 'string'
            ? document.getElementById(elementOrId)
            : elementOrId;
        if (element) {
            element.innerHTML = html;
            return true;
        }
        console.warn(`Cannot set innerHTML: element not found`);
        return false;
    } catch (error) {
        console.error('Error setting innerHTML:', error);
        return false;
    }
}

// Safe class manipulation
function toggleClass(elementOrId, className, force) {
    try {
        const element = typeof elementOrId === 'string'
            ? document.getElementById(elementOrId)
            : elementOrId;
        if (element) {
            return element.classList.toggle(className, force);
        }
        return false;
    } catch (error) {
        console.error('Error toggling class:', error);
        return false;
    }
}

// ========================================
// Data Loading
// ========================================
const data = {
    catalogs: [],
    domains: [],
    entities: [],
    systems: [],
    schemas: [],
    valueDomains: []
};

async function loadData() {
    try {
        const [catalogs, domains, entities, systems, schemas, valueDomains] = await Promise.all([
            fetch('data/catalogs.json').then(r => r.json()),
            fetch('data/domains.json').then(r => r.json()),
            fetch('data/entities.json').then(r => r.json()),
            fetch('data/systems.json').then(r => r.json()),
            fetch('data/schemas.json').then(r => r.json()),
            fetch('data/value-domains.json').then(r => r.json())
        ]);

        data.catalogs = catalogs;
        data.domains = domains;
        data.entities = entities;
        data.systems = systems;
        data.schemas = schemas;
        data.valueDomains = valueDomains;

        return true;
    } catch (error) {
        console.error('Failed to load data:', error);
        return false;
    }
}

// ========================================
// State Management
// ========================================
let state = {
    currentCatalog: null,
    currentLayer: 'logical',
    currentView: 'wiki',
    catalogView: 'details',
    selectedItem: null,
    selectedAttribute: null,
    expandedNodes: new Set(['dom-immo', 'sys-sap']),
    expandedLayers: new Set(['logical', 'physical']),
    theme: 'light',
    sidebarCollapsed: false,
    searchQuery: '',
    searchResults: [],
    showCatalogsOverview: true,
    groupBy: 'layer',
    treeSearchQuery: '',
    treeSort: 'name-asc',
    allExpanded: true
};

// ========================================
// URL Routing
// ========================================
function parseRoute() {
    const hash = window.location.hash.slice(1) || '/';
    const [path, queryString] = hash.split('?');
    const parts = path.split('/').filter(Boolean);
    const params = new URLSearchParams(queryString || '');

    return { parts, params };
}

function navigateTo(path, replace = false) {
    const method = replace ? 'replaceState' : 'pushState';
    // Preserve current tab parameter
    const tabParam = state.currentView && state.currentView !== 'wiki' ? `?tab=${state.currentView}` : '';
    history[method](null, '', `#${path}${tabParam}`);
    handleRoute();
}

function updateUrlWithTab(tabId) {
    const hash = window.location.hash.slice(1) || '/';
    const [path] = hash.split('?');
    const newUrl = tabId === 'wiki' ? `#${path}` : `#${path}?tab=${tabId}`;
    history.replaceState(null, '', newUrl);
}

function handleRoute() {
    const { parts, params } = parseRoute();

    if (parts.length === 0) {
        // Default route - show catalogs overview
        state.currentLayer = 'logical';
        state.selectedItem = null;
        state.currentCatalog = null;
        state.showCatalogsOverview = true;
    } else if (parts.length === 1) {
        // Layer route: /logical, /physical
        if (['logical', 'physical'].includes(parts[0])) {
            state.currentLayer = parts[0];
            state.selectedItem = null;
            state.showCatalogsOverview = false;
        }
    } else if (parts.length >= 2) {
        // Entity route: /logical/domain/dom-immo or /catalog/proj-id
        const [layer, type, id] = parts;
        state.showCatalogsOverview = false;
        if (['logical', 'physical'].includes(layer)) {
            state.currentLayer = layer;
            if (id) {
                const item = findItemById(id);
                if (item) {
                    state.selectedItem = item;
                    expandParents(item);
                }
            }
        } else if (layer === 'catalog' && type) {
            const catalog = data.catalogs.find(c => c.id === type);
            if (catalog) {
                state.currentCatalog = catalog;
                state.selectedItem = catalog;
            }
        }
    }

    // Handle query params
    if (params.has('tab')) {
        state.currentView = params.get('tab');
    }

    updateLayoutForView();
    renderAll();
}

function expandParents(item) {
    // Expand parent nodes in tree
    if (item.domain) state.expandedNodes.add(item.domain);
    if (item.system) state.expandedNodes.add(item.system);
}

// ========================================
// Utility Functions
// ========================================
function findItemById(id) {
    for (const catalog of data.catalogs) {
        if (catalog.id === id) return catalog;
    }
    for (const domain of data.domains) {
        if (domain.id === id) return domain;
    }
    for (const entity of data.entities) {
        if (entity.id === id) return entity;
    }
    for (const system of data.systems) {
        if (system.id === id) return system;
    }
    for (const schema of data.schemas) {
        if (schema.id === id) return schema;
    }
    return null;
}

function getEntitiesForDomain(domainId) {
    return data.entities.filter(e => e.domain === domainId);
}

function getSchemasForSystem(systemId) {
    return data.schemas.filter(s => s.system === systemId);
}

function getParentChain(item) {
    const chain = [];
    if (item.layer === 'logical') {
        if (item.type === 'entity') {
            const domain = data.domains.find(d => d.id === item.domain);
            if (domain) chain.push(domain);
        }
    } else if (item.layer === 'physical') {
        if (item.type === 'schema') {
            const system = data.systems.find(sys => sys.id === item.system);
            if (system) chain.push(system);
        }
    }
    return chain;
}

function getTypeLabel(type) {
    const labels = {
        catalog: 'Katalog',
        domain: 'Domäne',
        entity: 'Logische Entität',
        system: 'System',
        schema: 'Schema'
    };
    return labels[type] || type;
}

function getLayerLabel(layer) {
    const labels = {
        logical: 'Logisch',
        physical: 'Physisch'
    };
    return labels[layer] || layer;
}

function getStatusLabel(status) {
    const labels = {
        active: 'Aktiv',
        draft: 'Entwurf',
        deprecated: 'Veraltet',
        planned: 'Geplant'
    };
    return labels[status] || status;
}

function getRoleLabel(role) {
    const labels = {
        owner: 'Katalogverantwortliche',
        steward: 'Data Steward',
        engineer: 'Data Engineer',
        analyst: 'Business Analyst',
        viewer: 'Betrachter'
    };
    return labels[role] || role;
}

function getRoleDescription(role) {
    const descriptions = {
        owner: 'Vollständiger Administratorzugriff, kann Benutzer und Einstellungen verwalten',
        steward: 'Kann Metadateneinträge erstellen, bearbeiten und genehmigen',
        engineer: 'Kann physische Schicht-Entitäten und Zuordnungen verwalten',
        analyst: 'Kann konzeptuelle Schicht-Einträge erstellen und bearbeiten',
        viewer: 'Lesezugriff auf alle Katalogdaten'
    };
    return descriptions[role] || '';
}

function getUserAvatar(name) {
    const parts = name.split(' ');
    return parts.map(p => p[0]).join('').substring(0, 2).toUpperCase();
}

function getTypeIcon(type) {
    const iconMap = {
        catalog: 'K',
        domain: 'D',
        entity: 'E',
        system: 'S',
        schema: 'S'
    };
    return iconMap[type] || '?';
}

function getTreeIcon(type) {
    const iconMap = {
        domain: icons.folder,
        entity: icons.cube,
        system: icons.server,
        schema: icons.database
    };
    return iconMap[type] || '';
}

// ========================================
// Search with Debounce
// ========================================
let searchTimeout = null;

function handleSearch(query) {
    clearTimeout(searchTimeout);
    state.searchQuery = query;

    if (!query || query.length < 2) {
        state.searchResults = [];
        renderSearchResults();
        return;
    }

    searchTimeout = setTimeout(() => {
        const q = query.toLowerCase();
        state.searchResults = getAllItems()
            .filter(item =>
                item.name.toLowerCase().includes(q) ||
                item.description?.toLowerCase().includes(q) ||
                item.nameDE?.toLowerCase().includes(q) ||
                item.nameEn?.toLowerCase().includes(q)
            )
            .slice(0, 10);
        renderSearchResults();
    }, 300);
}

function getAllItems() {
    return [
        ...data.catalogs,
        ...data.domains,
        ...data.entities,
        ...data.systems,
        ...data.schemas
    ];
}

// ========================================
// Render Functions
// ========================================
function renderAll() {
    renderVersionSelector();
    renderTree();
    renderContent();
}

function renderApp() {
    const app = document.getElementById('app');
    app.className = 'app-container';
    app.innerHTML = `
        <!-- Header -->
        <header class="header" role="banner">
            <a href="#/" class="logo" onclick="goToCatalogsOverview(); return false;">
                <div class="logo-icon" aria-hidden="true">${icons.layers}</div>
                <span>Meta-Atlas</span>
            </a>
            <div class="header-branding">
                <span>Bundesamt für Bauten und Logistik</span>
                <span>Abteilung für Digital Real Estate und Support</span>
            </div>

            <div class="header-right">
                <div class="search-container">
                    <button class="search-toggle" id="searchToggle" aria-label="Search">
                        ${icons.search}
                    </button>
                    <div class="search-wrapper">
                        <input type="search"
                               class="search-input"
                               id="searchInput"
                               placeholder="Suchen..."
                               aria-label="Metadatenkatalog durchsuchen"
                               autocomplete="off">
                        <div class="search-results" id="searchResults" role="listbox"></div>
                    </div>
                </div>
                <button class="icon-btn" id="themeToggle" aria-label="Toggle dark/light theme">
                    ${icons.sun}
                </button>
                <select class="lang-selector" aria-label="Language">
                    <option value="de">DE</option>
                    <option value="fr">FR</option>
                    <option value="it">IT</option>
                    <option value="en">EN</option>
                </select>
                <button class="btn-login" id="loginBtn">
                    ${icons.logIn}
                    <span>Anmelden</span>
                </button>
            </div>
        </header>

        <!-- Main Layout -->
        <div class="main-layout">
            <div class="sidebar-overlay" id="sidebarOverlay"></div>

            <!-- Sidebar -->
            <aside class="sidebar" id="sidebar" role="navigation" aria-label="Entity navigation">
                <div class="sidebar-header">
                    <!-- Search Input -->
                    <div class="sidebar-search">
                        <span class="sidebar-search-icon">${icons.search}</span>
                        <input type="text" class="sidebar-search-input" id="treeSearch" placeholder="Suchen..." aria-label="Search entities">
                        <button class="sidebar-search-clear" id="treeSearchClear" aria-label="Clear search">${icons.x}</button>
                    </div>
                </div>
                <div class="sidebar-header">
                    <!-- Controls Row -->
                    <div class="sidebar-controls">
                        <div class="group-by-dropdown" id="groupByDropdown">
                            <button class="group-by-trigger" id="groupByTrigger" aria-haspopup="listbox" aria-expanded="false">
                                <span class="group-by-trigger-icon">${icons.layers}</span>
                                <span class="group-by-trigger-text">Nach Schicht</span>
                                <span class="group-by-trigger-arrow">${icons.chevronDown}</span>
                            </button>
                            <div class="group-by-menu" id="groupByMenu" role="listbox">
                                <button class="group-by-option selected" data-value="layer" role="option">
                                    <span class="group-by-option-icon">${icons.layers}</span>
                                    <span>Nach Schicht</span>
                                </button>
                                <button class="group-by-option" data-value="system" role="option">
                                    <span class="group-by-option-icon">${icons.server}</span>
                                    <span>Nach System</span>
                                </button>
                                <button class="group-by-option" data-value="domain" role="option">
                                    <span class="group-by-option-icon">${icons.folder}</span>
                                    <span>Nach Domäne</span>
                                </button>
                            </div>
                        </div>
                        <button class="sidebar-control-btn" id="expandCollapseToggle" aria-label="Expand all" title="Alle erweitern">
                            ${icons.expandAll}
                        </button>
                        <div class="sort-dropdown" id="sortDropdown">
                            <button class="sidebar-control-btn" id="sortTrigger" aria-haspopup="listbox" aria-expanded="false" title="Sortieren">
                                ${icons.sortAsc}
                            </button>
                            <div class="sort-menu" id="sortMenu" role="listbox">
                                <button class="sort-option selected" data-value="name-asc" role="option">
                                    <span class="sort-option-icon">${icons.sortAsc}</span>
                                    <span>Name A-Z</span>
                                </button>
                                <button class="sort-option" data-value="name-desc" role="option">
                                    <span class="sort-option-icon">${icons.sortDesc}</span>
                                    <span>Name Z-A</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="tree-container" id="treeContainer" role="tree">
                    <!-- Tree will be rendered here -->
                </div>
                <div class="sidebar-footer">
                    <select class="version-selector" id="versionSelector" aria-label="Select version">
                        <!-- Version options will be rendered here -->
                    </select>
                </div>
                <button class="sidebar-toggle" id="sidebarToggle" aria-label="Toggle sidebar">
                    ${icons.panelLeft}
                </button>
            </aside>

            <!-- Main Content -->
            <main class="main-content" id="main-content">
                <div class="content-area" id="contentArea">
                    <nav class="breadcrumb" id="breadcrumb" aria-label="Breadcrumb">
                        <!-- Breadcrumb will be rendered here -->
                    </nav>
                    <div id="contentBody">
                        <!-- Content will be rendered here -->
                    </div>
                </div>
            </main>
        </div>

        <!-- Footer -->
        <footer class="footer" role="contentinfo">
            <div class="footer-left">
                <a href="https://github.com/davras5/meta-atlas" target="_blank" rel="noopener noreferrer" class="footer-link">Quellcode</a>
                <span class="footer-separator">·</span>
                <a href="#" class="footer-link footer-link-disabled" title="Bald verfügbar">API</a>
                <span class="footer-separator">·</span>
                <a href="#" class="footer-link footer-link-disabled" title="Bald verfügbar">Kontakt</a>
            </div>
            <span class="footer-version">v0.1.0</span>
        </footer>
    `;
}

function renderVersionSelector() {
    const versionSelector = document.getElementById('versionSelector');
    if (!versionSelector) return;

    const versions = [
        { id: 'main', label: 'main' },
        { id: 'draft', label: 'draft' },
        { id: 'v1.0', label: 'v1.0' }
    ];
    versionSelector.innerHTML = versions.map(v =>
        `<option value="${v.id}" ${v.id === 'main' ? 'selected' : ''}>${v.label}</option>`
    ).join('');
}

function attachVersionSelectorListeners() {
    const versionSelector = document.getElementById('versionSelector');
    if (!versionSelector) return;

    versionSelector.addEventListener('change', (e) => {
        console.log('Version changed to:', e.target.value);
    });
}

// Helper function to filter items by search query
function filterItems(items, query) {
    if (!query) return items;
    return items.filter(item =>
        item.name.toLowerCase().includes(query) ||
        (item.description && item.description.toLowerCase().includes(query))
    );
}

// Helper function to sort items
function sortItems(items, sortType) {
    const sorted = [...items];
    switch (sortType) {
        case 'name-asc':
            sorted.sort((a, b) => a.name.localeCompare(b.name));
            break;
        case 'name-desc':
            sorted.sort((a, b) => b.name.localeCompare(a.name));
            break;
    }
    return sorted;
}

function renderTree() {
    try {
        const container = getElement('treeContainer');
        if (!container) return;

        let html = '';
        const query = state.treeSearchQuery;
    const sortType = state.treeSort;

    // Get filtered and sorted data
    const filteredDomains = sortItems(filterItems(data.domains, query), sortType);
    const filteredEntities = sortItems(filterItems(data.entities, query), sortType);
    const filteredSystems = sortItems(filterItems(data.systems, query), sortType);

    // Also filter schemas if searching
    const hasLogicalMatches = filteredDomains.length > 0 || filteredEntities.length > 0;
    const hasPhysicalMatches = filteredSystems.length > 0 ||
        (query && data.schemas.some(s => s.name.toLowerCase().includes(query)));

    // Logical Layer Section (Domains → Entities)
    const isLogicalExpanded = state.expandedLayers.has('logical');
    const showLogical = !query || hasLogicalMatches;
    if (showLogical) {
        html += `
            <div class="layer-section">
                <div class="layer-section-header logical ${!isLogicalExpanded ? 'collapsed' : ''}" data-layer="logical">
                    <span class="layer-toggle">${icons.chevronDown}</span>
                    <span>Logisch</span>
                </div>
                <div class="layer-section-content ${!isLogicalExpanded ? 'collapsed' : ''}">
        `;
        for (const domain of filteredDomains) {
            let entities = getEntitiesForDomain(domain.id);
            if (query) {
                entities = sortItems(filterItems(entities, query), sortType);
            } else {
                entities = sortItems(entities, sortType);
            }
            html += renderTreeItem(domain, entities);
        }
        html += `</div></div>`;
    }

    // Physical Layer Section
    const isPhysicalExpanded = state.expandedLayers.has('physical');
    const showPhysical = !query || hasPhysicalMatches;
    if (showPhysical) {
        html += `
            <div class="layer-section">
                <div class="layer-section-header physical ${!isPhysicalExpanded ? 'collapsed' : ''}" data-layer="physical">
                    <span class="layer-toggle">${icons.chevronDown}</span>
                    <span>Physisch</span>
                </div>
                <div class="layer-section-content ${!isPhysicalExpanded ? 'collapsed' : ''}">
        `;
        for (const system of filteredSystems) {
            let schemas = getSchemasForSystem(system.id);
            if (query) {
                schemas = sortItems(filterItems(schemas, query), sortType);
            } else {
                schemas = sortItems(schemas, sortType);
            }
            html += renderTreeItemWithSchemas(system, schemas);
        }
        html += `</div></div>`;
    }

    // Show empty state if no results
    if (!showConceptual && !showLogical && !showPhysical) {
        html = `
            <div class="tree-empty-state">
                <span class="tree-empty-icon">${icons.search}</span>
                <span class="tree-empty-text">Keine Ergebnisse für "${escapeHtml(state.treeSearchQuery)}"</span>
            </div>
        `;
    }

    container.innerHTML = html;
        // Event delegation handles tree listeners
    } catch (error) {
        console.error('Error rendering tree:', error);
    }
}

function attachLayerToggleListeners() {
    document.querySelectorAll('.layer-section-header').forEach(header => {
        header.addEventListener('click', () => {
            const layer = header.dataset.layer;
            if (state.expandedLayers.has(layer)) {
                state.expandedLayers.delete(layer);
            } else {
                state.expandedLayers.add(layer);
            }
            renderTree();
        });
    });
}

function renderTreeItem(item, children) {
    const isExpanded = state.expandedNodes.has(item.id);
    const isSelected = state.selectedItem?.id === item.id;
    const hasChildren = children && children.length > 0;

    let childrenHtml = '';
    if (hasChildren) {
        for (const child of children) {
            childrenHtml += renderTreeLeaf(child);
        }
    }

    return `
        <div class="tree-item" data-id="${escapeHtml(item.id)}">
            <div class="tree-node ${escapeHtml(item.layer)} ${isSelected ? 'selected ' + escapeHtml(item.layer) : ''}"
                 data-id="${escapeHtml(item.id)}"
                 data-layer="${escapeHtml(item.layer)}"
                 role="treeitem"
                 aria-expanded="${isExpanded}"
                 aria-selected="${isSelected}">
                <span class="tree-toggle ${isExpanded ? 'expanded' : ''}" aria-hidden="true">
                    ${hasChildren ? icons.chevronRight : ''}
                </span>
                <span class="tree-icon">${getTreeIcon(item.type)}</span>
                <span class="tree-label">${escapeHtml(item.name)}</span>
                ${hasChildren ? `<span class="tree-count">${children.length}</span>` : ''}
            </div>
            <div class="tree-children ${isExpanded ? 'expanded' : ''}" role="group" data-parent="${escapeHtml(item.id)}">
                ${childrenHtml}
            </div>
        </div>
    `;
}

function renderTreeItemWithSchemas(system, schemas) {
    const isExpanded = state.expandedNodes.has(system.id);
    const isSelected = state.selectedItem?.id === system.id;
    const hasChildren = schemas && schemas.length > 0;

    // Calculate total column count across all schemas
    const totalColumns = schemas.reduce((sum, schema) => sum + (schema.columns?.length || 0), 0);

    let schemasHtml = '';
    for (const schema of schemas) {
        schemasHtml += renderTreeSchemaWithColumns(schema);
    }

    return `
        <div class="tree-item" data-id="${escapeHtml(system.id)}">
            <div class="tree-node ${escapeHtml(system.layer)} ${isSelected ? 'selected ' + escapeHtml(system.layer) : ''}"
                 data-id="${escapeHtml(system.id)}"
                 data-layer="${escapeHtml(system.layer)}"
                 role="treeitem"
                 aria-expanded="${isExpanded}"
                 aria-selected="${isSelected}">
                <span class="tree-toggle ${isExpanded ? 'expanded' : ''}" aria-hidden="true">
                    ${hasChildren ? icons.chevronRight : ''}
                </span>
                <span class="tree-icon">${getTreeIcon(system.type)}</span>
                <span class="tree-label">${escapeHtml(system.name)}</span>
                ${totalColumns > 0 ? `<span class="tree-count">${totalColumns}</span>` : ''}
            </div>
            <div class="tree-children ${isExpanded ? 'expanded' : ''}" role="group" data-parent="${escapeHtml(system.id)}">
                ${schemasHtml}
            </div>
        </div>
    `;
}

function renderTreeLeaf(item) {
    const isSelected = state.selectedItem?.id === item.id;
    return `
        <div class="tree-item" data-id="${escapeHtml(item.id)}">
            <div class="tree-node ${escapeHtml(item.layer)} ${isSelected ? 'selected ' + escapeHtml(item.layer) : ''}"
                 data-id="${escapeHtml(item.id)}"
                 data-layer="${escapeHtml(item.layer)}"
                 role="treeitem"
                 aria-selected="${isSelected}">
                <span class="tree-toggle" aria-hidden="true"></span>
                <span class="tree-icon">${getTreeIcon(item.type)}</span>
                <span class="tree-label">${escapeHtml(item.name)}</span>
            </div>
        </div>
    `;
}

function renderTreeEntityWithAttributes(entity) {
    const isExpanded = state.expandedNodes.has(entity.id);
    const isSelected = state.selectedItem?.id === entity.id;
    const attributes = entity.attributes || [];
    const hasChildren = attributes.length > 0;

    let attributesHtml = '';
    if (hasChildren) {
        for (const attr of attributes) {
            attributesHtml += renderTreeAttribute(attr, entity.id);
        }
    }

    return `
        <div class="tree-item" data-id="${escapeHtml(entity.id)}">
            <div class="tree-node ${escapeHtml(entity.layer)} ${isSelected ? 'selected ' + escapeHtml(entity.layer) : ''}"
                 data-id="${escapeHtml(entity.id)}"
                 data-layer="${escapeHtml(entity.layer)}"
                 role="treeitem"
                 aria-expanded="${isExpanded}"
                 aria-selected="${isSelected}">
                <span class="tree-toggle ${isExpanded ? 'expanded' : ''}" aria-hidden="true">
                    ${hasChildren ? icons.chevronRight : ''}
                </span>
                <span class="tree-icon">${getTreeIcon(entity.type)}</span>
                <span class="tree-label">${escapeHtml(entity.name)}</span>
                ${hasChildren ? `<span class="tree-count">${attributes.length}</span>` : ''}
            </div>
            <div class="tree-children ${isExpanded ? 'expanded' : ''}" role="group" data-parent="${escapeHtml(entity.id)}">
                ${attributesHtml}
            </div>
        </div>
    `;
}

function renderTreeAttribute(attr, entityId) {
    const attrId = `${entityId}-attr-${attr.name}`;
    const isSelected = state.selectedAttribute?.attr?.name === attr.name &&
                       state.selectedAttribute?.parentItem?.id === entityId;
    return `
        <div class="tree-item tree-attribute" data-id="${escapeHtml(attrId)}" data-entity="${escapeHtml(entityId)}" data-attr-name="${escapeHtml(attr.name)}">
            <div class="tree-node attribute-node ${isSelected ? 'selected' : ''}"
                 data-id="${escapeHtml(attrId)}"
                 data-entity="${escapeHtml(entityId)}"
                 data-attr-name="${escapeHtml(attr.name)}"
                 role="treeitem"
                 aria-selected="${isSelected}">
                <span class="tree-toggle" aria-hidden="true"></span>
                <span class="tree-icon">${icons.hash}</span>
                <span class="tree-label">${escapeHtml(attr.name)}</span>
            </div>
        </div>
    `;
}

function renderTreeSchemaWithColumns(schema) {
    const isExpanded = state.expandedNodes.has(schema.id);
    const isSelected = state.selectedItem?.id === schema.id;
    const columns = schema.columns || [];
    const hasChildren = columns.length > 0;

    let columnsHtml = '';
    if (hasChildren) {
        for (const col of columns) {
            columnsHtml += renderTreeColumn(col, schema.id);
        }
    }

    return `
        <div class="tree-item" data-id="${escapeHtml(schema.id)}">
            <div class="tree-node ${escapeHtml(schema.layer)} ${isSelected ? 'selected ' + escapeHtml(schema.layer) : ''}"
                 data-id="${escapeHtml(schema.id)}"
                 data-layer="${escapeHtml(schema.layer)}"
                 role="treeitem"
                 aria-expanded="${isExpanded}"
                 aria-selected="${isSelected}">
                <span class="tree-toggle ${isExpanded ? 'expanded' : ''}" aria-hidden="true">
                    ${hasChildren ? icons.chevronRight : ''}
                </span>
                <span class="tree-icon">${getTreeIcon(schema.type)}</span>
                <span class="tree-label">${escapeHtml(schema.name)}</span>
                ${hasChildren ? `<span class="tree-count">${columns.length}</span>` : ''}
            </div>
            <div class="tree-children ${isExpanded ? 'expanded' : ''}" role="group" data-parent="${escapeHtml(schema.id)}">
                ${columnsHtml}
            </div>
        </div>
    `;
}

function renderTreeColumn(col, schemaId) {
    const colId = `${schemaId}-col-${col.name}`;
    const isSelected = state.selectedAttribute?.attr?.name === col.name &&
                       state.selectedAttribute?.parentItem?.id === schemaId;
    return `
        <div class="tree-item tree-column" data-id="${escapeHtml(colId)}" data-schema="${escapeHtml(schemaId)}" data-col-name="${escapeHtml(col.name)}">
            <div class="tree-node column-node ${isSelected ? 'selected' : ''}"
                 data-id="${escapeHtml(colId)}"
                 data-schema="${escapeHtml(schemaId)}"
                 data-col-name="${escapeHtml(col.name)}"
                 role="treeitem"
                 aria-selected="${isSelected}">
                <span class="tree-toggle" aria-hidden="true"></span>
                <span class="tree-icon">${icons.hash}</span>
                <span class="tree-label">${escapeHtml(col.name)}</span>
            </div>
        </div>
    `;
}

function renderBreadcrumb(item) {
    const breadcrumb = document.getElementById('breadcrumb');
    if (!breadcrumb) return;

    let html = '';

    // Always show "Alle Kataloge" as the first breadcrumb item
    html += `<span class="breadcrumb-home" data-action="home" tabindex="0">${icons.home} Alle Kataloge</span>`;

    if (!item) {
        breadcrumb.innerHTML = html;
        // Event delegation handles breadcrumb listeners
        return;
    }

    // Add separator after "Alle Kataloge"
    html += `<span class="breadcrumb-separator" aria-hidden="true">/</span>`;

    // If we have a current catalog and the item is not the catalog itself, show the catalog
    if (state.currentCatalog && item.type !== 'catalog') {
        html += `<span class="breadcrumb-item" data-id="${escapeHtml(state.currentCatalog.id)}" tabindex="0">${escapeHtml(state.currentCatalog.name)}</span>`;
        html += `<span class="breadcrumb-separator" aria-hidden="true">/</span>`;
    }

    // If item is a catalog, just show it as current
    if (item.type === 'catalog') {
        html += `<span class="breadcrumb-current" aria-current="page">${escapeHtml(item.name)}</span>`;
        breadcrumb.innerHTML = html;
        // Event delegation handles breadcrumb listeners
        return;
    }

    // Add layer indicator
    if (item.layer) {
        html += `<span class="breadcrumb-item layer-${escapeHtml(item.layer)}" data-layer="${escapeHtml(item.layer)}" tabindex="0">${escapeHtml(getLayerLabel(item.layer))}</span>`;
        html += `<span class="breadcrumb-separator" aria-hidden="true">/</span>`;
    }

    // Add parent chain
    const chain = getParentChain(item);
    html += chain.map(parent =>
        `<span class="breadcrumb-item" data-id="${escapeHtml(parent.id)}" tabindex="0">${escapeHtml(parent.name)}</span>
         <span class="breadcrumb-separator" aria-hidden="true">/</span>`
    ).join('');

    html += `<span class="breadcrumb-current" aria-current="page">${escapeHtml(item.name)}</span>`;
    breadcrumb.innerHTML = html;
    // Event delegation handles breadcrumb listeners
}

function attachBreadcrumbListeners(breadcrumb) {
    // Home button listener
    breadcrumb.querySelectorAll('.breadcrumb-home').forEach(el => {
        el.addEventListener('click', () => goToCatalogsOverview());
        el.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                goToCatalogsOverview();
            }
        });
    });

    // Item listeners
    breadcrumb.querySelectorAll('.breadcrumb-item').forEach(el => {
        el.addEventListener('click', () => {
            if (el.dataset.id) {
                selectItem(el.dataset.id);
            } else if (el.dataset.layer) {
                state.currentLayer = el.dataset.layer;
                renderAll();
            }
        });
        el.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                if (el.dataset.id) {
                    selectItem(el.dataset.id);
                }
            }
        });
    });
}

function goToCatalogsOverview() {
    state.currentCatalog = null;
    state.selectedItem = null;
    state.showCatalogsOverview = true;
    updateLayoutForView();
    navigateTo('/');
}

function updateLayoutForView() {
    const appContainer = document.querySelector('.app-container');
    if (state.showCatalogsOverview) {
        appContainer?.classList.add('catalogs-overview-mode');
    } else {
        appContainer?.classList.remove('catalogs-overview-mode');
    }
}

function renderCatalogsOverview() {
    try {
        const contentArea = getElement('contentArea');
        if (!contentArea) return;

        const container = getElement('contentBody');
        if (!container) return;

        container.innerHTML = `
            <div class="catalogs-overview">
                <div class="catalogs-header">
                    <div class="catalogs-header-top">
                        <h1 class="catalogs-title">Alle Kataloge</h1>
                        <button class="btn-new-catalog" id="newCatalogBtn">
                            ${icons.plus}
                            <span>Neuer Katalog</span>
                        </button>
                    </div>
                </div>
                <div class="catalogs-list">
                    ${data.catalogs.map(catalog => renderCatalogCard(catalog)).join('')}
                </div>
            </div>
        `;
        // Event delegation handles catalog card listeners
    } catch (error) {
        console.error('Error rendering catalogs overview:', error);
    }
}

function renderCatalogCard(catalog) {
    // Calculate entity count from domains
    const catalogEntities = data.entities.filter(e => catalog.domains?.includes(e.domain));
    const entityCount = catalogEntities.length;

    // Calculate table count from entities' physicalTables
    const tableIds = new Set();
    catalogEntities.forEach(e => {
        (e.physicalTables || []).forEach(tId => tableIds.add(tId));
    });
    const tableCount = tableIds.size;

    return `
        <div class="catalog-card" data-id="${escapeHtml(catalog.id)}" style="--catalog-color: ${escapeHtml(catalog.color || '#3B82F6')}">
            <div class="catalog-card-header">
                <div class="catalog-info">
                    <div class="catalog-name">${escapeHtml(catalog.name)}</div>
                </div>
                <span class="catalog-status ${escapeHtml(catalog.status)}">${getStatusLabel(catalog.status)}</span>
            </div>
            <p class="catalog-description">${escapeHtml(catalog.description)}</p>
            <div class="catalog-meta">
                <div class="catalog-meta-item">
                    ${icons.box}
                    <span class="catalog-meta-value">${entityCount}</span> Entitäten
                </div>
                <div class="catalog-meta-item">
                    ${icons.database}
                    <span class="catalog-meta-value">${tableCount}</span> Schemas
                </div>
                <div class="catalog-activity">
                    Letzte Aktivität : ${escapeHtml(catalog.lastActivity || catalog.updated || catalog.created)}
                </div>
            </div>
        </div>
    `;
}

function selectCatalog(catalogId) {
    const catalog = data.catalogs.find(c => c.id === catalogId);
    if (catalog) {
        state.currentCatalog = catalog;
        state.selectedItem = catalog;
        state.showCatalogsOverview = false;
        updateLayoutForView();
        navigateTo(`/catalog/${catalog.id}`);
    }
}

function renderLayerOverview(layer) {
    const contentArea = document.getElementById('contentArea');
    if (!contentArea) return;

    const layerConfig = {
        logical: {
            title: 'Logische Schicht',
            subtitle: 'Geschäftsdomänen und technologieunabhängige Datenstrukturen.',
            color: 'var(--color-logical)',
            items: [...data.domains, ...data.entities],
            kpis: [
                { label: 'Domänen', value: data.domains.length },
                { label: 'Entitäten', value: data.entities.length },
                { label: 'Attribute', value: data.entities.reduce((sum, e) => sum + (e.attributes?.length || 0), 0) },
                { label: 'Aktiv', value: [...data.domains, ...data.entities].filter(i => i.status === 'active').length }
            ]
        },
        physical: {
            title: 'Physische Schicht',
            subtitle: 'Datenbanksysteme und Schemas, die Ihre Daten speichern.',
            color: 'var(--color-physical)',
            items: [...data.systems, ...data.schemas],
            kpis: [
                { label: 'Systeme', value: data.systems.length },
                { label: 'Schemas', value: data.schemas.length },
                { label: 'Spalten', value: data.schemas.reduce((sum, s) => sum + (s.columns?.length || 0), 0) }
            ]
        }
    };

    const config = layerConfig[layer];
    if (!config) return;

    const container = document.getElementById('contentBody');
    container.innerHTML = `
        <div class="layer-overview">
            <div class="layer-overview-header">
                <h1 class="layer-overview-title" style="color: ${config.color}">${config.title}</h1>
                <p class="layer-overview-subtitle">${config.subtitle}</p>
            </div>
            <div class="kpi-cards">
                ${config.kpis.map(kpi => `
                    <div class="kpi-card" style="--kpi-color: ${config.color}">
                        <div class="kpi-value">${kpi.value}</div>
                        <div class="kpi-label">${kpi.label}</div>
                    </div>
                `).join('')}
            </div>
            <div class="layer-entities-section">
                <h2 class="layer-entities-title">Alle Elemente</h2>
                <div class="layer-entities-list">
                    ${config.items.map(item => `
                        <div class="layer-entity-item" data-id="${escapeHtml(item.id)}" data-type="${escapeHtml(item.type)}" data-layer="${escapeHtml(item.layer)}">
                            <span class="layer-entity-badge ${escapeHtml(item.layer)}">${getTypeLabel(item.type)}</span>
                            <span class="layer-entity-name">${escapeHtml(item.name)}</span>
                            <span class="layer-entity-status ${escapeHtml(item.status)}">${getStatusLabel(item.status)}</span>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
    `;
    // Event delegation handles layer entity item listeners
}

function renderStatisticsCard(item) {
    const kpis = getEntityKPIs(item);
    if (!kpis || kpis.length === 0) return '';

    return `
        <div class="card">
            <div class="card-header" data-card="statistics" aria-expanded="true">
                <span class="card-title">Statistiken</span>
                <span class="card-toggle" aria-hidden="true">${icons.chevronDown}</span>
            </div>
            <div class="card-content">
                <div class="catalog-stats-grid">
                    ${kpis.map(kpi => `
                        <div class="catalog-stat-item">
                            <span class="catalog-stat-icon">${kpi.icon}</span>
                            <div class="catalog-stat-content">
                                <span class="catalog-stat-value">${kpi.value}</span>
                                <span class="catalog-stat-label">${kpi.label}</span>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
    `;
}

function getEntityKPIs(item) {
    switch (item.type) {
        case 'domain':
            return []; // No KPI cards for domains
        case 'entity':
            const attributes = item.attributes || [];
            const physicalTables = item.physicalTables || [];
            return [
                { label: 'Attribute', value: attributes.length, icon: icons.hash },
                { label: 'Phys. Tabellen', value: physicalTables.length, icon: icons.table }
            ];
        case 'system':
            const schemasInSystem = data.schemas.filter(s => s.system === item.id);
            const columnsInSystem = schemasInSystem.reduce((sum, s) => sum + (s.columns?.length || 0), 0);
            return [
                { label: 'Schemas', value: schemasInSystem.length, icon: icons.database },
                { label: 'Spalten', value: columnsInSystem, icon: icons.hash }
            ];
        case 'schema':
            const columns = item.columns || [];
            return [
                { label: 'Spalten', value: columns.length, icon: icons.hash }
            ];
        default:
            return [];
    }
}

function renderContent() {
    try {
        const contentArea = getElement('contentArea');
        if (!contentArea) return;

        // Show catalogs overview when on root route
        if (state.showCatalogsOverview) {
            renderBreadcrumb(null);
            renderCatalogsOverview();
            return;
        }

    // Show layer overview when layer is selected but no specific item
    if (!state.selectedItem && !state.currentCatalog && state.currentLayer) {
        renderBreadcrumb(null);
        renderLayerOverview(state.currentLayer);
        return;
    }

    // If we have a catalog selected but no specific item, show the catalog detail
    if (!state.selectedItem && state.currentCatalog) {
        state.selectedItem = state.currentCatalog;
    }

    const item = state.selectedItem;

    if (!item) {
        renderBreadcrumb(null);
        document.getElementById('contentBody').innerHTML = `
            <div class="empty-state">
                <div class="empty-state-icon" aria-hidden="true">${icons.database}</div>
                <h2 class="empty-state-title">Element auswählen</h2>
                <p>Wählen Sie ein Element aus der Navigation, um dessen Details anzuzeigen</p>
            </div>
        `;
        return;
    }

    renderBreadcrumb(item);

    const container = document.getElementById('contentBody');

    // Catalog-specific view with Details, Users, Settings tabs
    if (item.type === 'catalog') {
        container.innerHTML = `
            <div class="entity-header">
                <h1 class="entity-title">${escapeHtml(item.name)}</h1>
                <p class="entity-subtitle">${escapeHtml(item.description || '')}</p>
            </div>

            <div class="view-tabs" role="tablist">
                <button class="view-tab ${state.catalogView === 'details' ? 'active' : ''}" data-catalog-view="details" role="tab" aria-selected="${state.catalogView === 'details'}">Details</button>
                <button class="view-tab ${state.catalogView === 'users' ? 'active' : ''}" data-catalog-view="users" role="tab" aria-selected="${state.catalogView === 'users'}">Benutzer</button>
                <button class="view-tab ${state.catalogView === 'settings' ? 'active' : ''}" data-catalog-view="settings" role="tab" aria-selected="${state.catalogView === 'settings'}">Einstellungen</button>
            </div>

            <div class="view-content" role="tabpanel">
                ${renderCatalogTabContent(item)}
            </div>
        `;
        // Event delegation handles catalog tab listeners
        return;
    }

    const tabs = [
        { id: 'wiki', label: 'Details' },
        { id: 'diagram', label: 'Diagramm' },
        { id: 'history', label: 'Verlauf' }
    ];

    container.innerHTML = `
        <div class="entity-header">
            <div class="entity-badges">
                <span class="badge badge-layer ${escapeHtml(item.layer)}">${getTypeLabel(item.type)}</span>
            </div>
            <h1 class="entity-title">${escapeHtml(item.name)}</h1>
            <p class="entity-subtitle">${escapeHtml(item.description || '')}</p>
        </div>

        <div class="view-tabs" role="tablist">
            ${tabs.map(tab => `
                <button class="view-tab ${state.currentView === tab.id ? 'active' : ''}"
                        data-view="${tab.id}"
                        role="tab"
                        aria-selected="${state.currentView === tab.id}">
                    ${tab.label}
                </button>
            `).join('')}
        </div>

        <div class="view-content" role="tabpanel">
            ${state.currentView === 'wiki' ? renderWikiView(item) :
              state.currentView === 'diagram' ? renderDiagramView(item) :
              renderPlaceholderView(state.currentView)}
        </div>
    `;
        // Event delegation handles content and view tab listeners
    } catch (error) {
        console.error('Error rendering content:', error);
    }
}

function renderWikiView(item) {
    let html = '';

    // Statistics Card (first card)
    html += renderStatisticsCard(item);

    // Basic Information Card
    html += `
        <div class="card">
            <div class="card-header" data-card="basic" aria-expanded="true">
                <span class="card-title">Grundinformationen</span>
                <span class="card-toggle" aria-hidden="true">${icons.chevronDown}</span>
            </div>
            <div class="card-content">
                <div class="meta-grid">
                    <span class="meta-label">Name (DE) :</span>
                    <span class="meta-value">${escapeHtml(item.nameDE || item.name)}</span>
                    ${item.nameEn ? `
                        <span class="meta-label">Name (EN) :</span>
                        <span class="meta-value">${escapeHtml(item.nameEn)}</span>
                    ` : ''}
                    ${item.nameFr ? `
                        <span class="meta-label">Name (FR) :</span>
                        <span class="meta-value">${escapeHtml(item.nameFr)}</span>
                    ` : ''}
                    ${item.nameIt ? `
                        <span class="meta-label">Name (IT) :</span>
                        <span class="meta-value">${escapeHtml(item.nameIt)}</span>
                    ` : ''}
                    <span class="meta-label">Beschreibung (DE) :</span>
                    <span class="meta-value">${escapeHtml(item.description || '—')}</span>
                    ${item.descriptionEn ? `
                        <span class="meta-label">Description (EN) :</span>
                        <span class="meta-value">${escapeHtml(item.descriptionEn)}</span>
                    ` : ''}
                    ${item.descriptionFr ? `
                        <span class="meta-label">Description (FR) :</span>
                        <span class="meta-value">${escapeHtml(item.descriptionFr)}</span>
                    ` : ''}
                    ${item.descriptionIt ? `
                        <span class="meta-label">Descrizione (IT) :</span>
                        <span class="meta-value">${escapeHtml(item.descriptionIt)}</span>
                    ` : ''}
                    ${item.synonyms ? `
                        <span class="meta-label">Synonyme :</span>
                        <span class="meta-value">${item.synonyms.map(s => `<span class="tag">${escapeHtml(s)}</span>`).join('')}</span>
                    ` : ''}
                    ${item.termdatUrl ? `
                        <span class="meta-label">TERMDAT :</span>
                        <span class="meta-value"><a href="${escapeHtml(item.termdatUrl)}" target="_blank" rel="noopener noreferrer" class="external-link">${icons.externalLink} Glossareintrag öffnen</a></span>
                    ` : ''}
                    ${item.owner ? `
                        <span class="meta-label">Verantwortlich :</span>
                        <span class="meta-value">${escapeHtml(item.owner)}</span>
                    ` : ''}
                    ${item.technology ? `
                        <span class="meta-label">Technologie :</span>
                        <span class="meta-value"><span class="tag tag-mono">${escapeHtml(item.technology)}</span></span>
                    ` : ''}
                    ${item.rowCount ? `
                        <span class="meta-label">Zeilenanzahl :</span>
                        <span class="meta-value">${item.rowCount.toLocaleString()}</span>
                    ` : ''}
                    ${item.status ? `
                        <span class="meta-label">Status :</span>
                        <span class="meta-value">
                            <span class="status-indicator">
                                <span class="status-dot ${escapeHtml(item.status)}" aria-hidden="true"></span>
                                ${getStatusLabel(item.status)}
                            </span>
                        </span>
                    ` : ''}
                    ${item.created ? `
                        <span class="meta-label">Erstellt :</span>
                        <span class="meta-value">${escapeHtml(item.created)}</span>
                    ` : ''}
                </div>
            </div>
        </div>
    `;

    // Concepts Panel (for domains only)
    if (item.type === 'domain') {
        const domainEntities = data.entities.filter(e => e.domain === item.id);
        html += `
            <div class="card">
                <div class="card-header" data-card="entities" aria-expanded="true">
                    <span class="card-title">Logische Entitäten (${domainEntities.length})</span>
                    <span class="card-toggle" aria-hidden="true">${icons.chevronDown}</span>
                </div>
                <div class="card-content" style="padding: 0;">
                    ${domainEntities.length > 0 ? `
                        <table class="data-table">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Beschreibung</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                ${domainEntities.map(entity => `
                                    <tr class="clickable-row" data-id="${escapeHtml(entity.id)}">
                                        <td>${escapeHtml(entity.name)}</td>
                                        <td>${escapeHtml(entity.description || '—')}</td>
                                        <td><span class="tag">${getStatusLabel(entity.status || 'active')}</span></td>
                                    </tr>
                                `).join('')}
                            </tbody>
                        </table>
                    ` : '<div class="empty-list-message">Keine Entitäten in dieser Domäne</div>'}
                </div>
            </div>
        `;
    }

    // Schemas Panel (for systems only)
    if (item.type === 'system') {
        const systemSchemas = data.schemas.filter(s => s.system === item.id);
        html += `
            <div class="card">
                <div class="card-header" data-card="schemas" aria-expanded="true">
                    <span class="card-title">Schemas (${systemSchemas.length})</span>
                    <span class="card-toggle" aria-hidden="true">${icons.chevronDown}</span>
                </div>
                <div class="card-content" style="padding: 0;">
                    ${systemSchemas.length > 0 ? `
                        <table class="data-table">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Beschreibung</th>
                                    <th>Spalten</th>
                                </tr>
                            </thead>
                            <tbody>
                                ${systemSchemas.map(schema => `
                                    <tr class="clickable-row" data-id="${escapeHtml(schema.id)}">
                                        <td>${escapeHtml(schema.name)}</td>
                                        <td>${escapeHtml(schema.description || '—')}</td>
                                        <td>${schema.columns?.length || 0}</td>
                                    </tr>
                                `).join('')}
                            </tbody>
                        </table>
                    ` : '<div class="empty-list-message">Keine Schemas in diesem System</div>'}
                </div>
            </div>
        `;
    }

    // Compliance Panel (for entities only)
    if (item.type === 'entity') {
        html += `
            <div class="card">
                <div class="card-header" data-card="compliance" aria-expanded="true">
                    <span class="card-title">Compliance & Recht</span>
                    <span class="card-toggle" aria-hidden="true">${icons.chevronDown}</span>
                </div>
                <div class="card-content">
                    <div class="meta-grid">
                        ${item.legalRefs && item.legalRefs.length ? `
                            <span class="meta-label">Rechtliche Grundlagen :</span>
                            <span class="meta-value">${item.legalRefs.map(r => `<span class="tag">${escapeHtml(r)}</span>`).join('')}</span>
                        ` : ''}
                        ${item.standards && item.standards.length ? `
                            <span class="meta-label">Standards :</span>
                            <span class="meta-value">${item.standards.map(s => `<span class="tag tag-mono">${escapeHtml(s)}</span>`).join('')}</span>
                        ` : ''}
                        <span class="meta-label">Klassifikation :</span>
                        <span class="meta-value">
                            <span class="badge badge-compliance internal">Intern</span>
                        </span>
                        <span class="meta-label">Personendaten :</span>
                        <span class="meta-value">Nein</span>
                    </div>
                </div>
            </div>
        `;
    }

    // Attributes Panel (for entities and tables)
    if (item.attributes || item.columns) {
        const attrs = item.attributes || item.columns;
        const isAttribute = !!item.attributes;
        html += `
            <div class="card">
                <div class="card-header" data-card="attributes" aria-expanded="true">
                    <span class="card-title">${isAttribute ? 'Attribute' : 'Spalten'} (${attrs.length})</span>
                    <span class="card-toggle" aria-hidden="true">${icons.chevronDown}</span>
                </div>
                <div class="card-content" style="padding: 0;">
                    <table class="data-table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Typ</th>
                                <th>Nullable</th>
                                <th>Schlüssel</th>
                                ${!isAttribute ? '<th>Zuordnung</th>' : ''}
                            </tr>
                        </thead>
                        <tbody>
                            ${attrs.map(attr => `
                                <tr class="clickable-row" data-attr-name="${escapeHtml(attr.name)}" data-parent-id="${escapeHtml(item.id)}" data-parent-type="${escapeHtml(item.type)}">
                                    <td>${escapeHtml(attr.name)}</td>
                                    <td>${escapeHtml(attr.type)}</td>
                                    <td>${attr.nullable ? 'Yes' : 'No'}</td>
                                    <td>${attr.key ? `<span class="tag">${escapeHtml(attr.key)}</span>` : '—'}</td>
                                    ${!isAttribute ? `<td>${escapeHtml(attr.mappedTo || '—')}</td>` : ''}
                                </tr>
                            `).join('')}
                        </tbody>
                    </table>
                </div>
            </div>
        `;
    }

    // Cross-Layer Mappings
    html += renderMappingsPanel(item);

    return html;
}

function renderAttributeDetailView(attr, parentItem) {
    const isAttribute = parentItem.type === 'entity';
    const itemLabel = isAttribute ? 'Attribut' : 'Spalte';
    const parentLabel = isAttribute ? 'Entität' : 'Tabelle';

    // Find value domain if exists
    const valueDomain = attr.valueDomain ? data.valueDomains.find(vd => vd.id === attr.valueDomain) : null;

    let html = `
        <div class="entity-header">
            <div class="entity-badges">
                <span class="badge badge-layer ${escapeHtml(parentItem.layer)}">${itemLabel}</span>
            </div>
            <h1 class="entity-title">${escapeHtml(attr.name)}</h1>
            <p class="entity-subtitle">${escapeHtml(attr.description || '')}</p>
        </div>

        <div class="view-content" role="tabpanel">
    `;

    // Grundinformationen Card
    html += `
        <div class="card">
            <div class="card-header" data-card="basic" aria-expanded="true">
                <span class="card-title">Grundinformationen</span>
                <span class="card-toggle" aria-hidden="true">${icons.chevronDown}</span>
            </div>
            <div class="card-content">
                <div class="meta-grid">
                    <span class="meta-label">Name :</span>
                    <span class="meta-value">${escapeHtml(attr.name)}</span>

                    <span class="meta-label">Beschreibung (DE) :</span>
                    <span class="meta-value">${escapeHtml(attr.description || '—')}</span>
                    ${attr.descriptionEn ? `
                        <span class="meta-label">Description (EN) :</span>
                        <span class="meta-value">${escapeHtml(attr.descriptionEn)}</span>
                    ` : ''}
                    ${attr.descriptionFr ? `
                        <span class="meta-label">Description (FR) :</span>
                        <span class="meta-value">${escapeHtml(attr.descriptionFr)}</span>
                    ` : ''}
                    ${attr.descriptionIt ? `
                        <span class="meta-label">Descrizione (IT) :</span>
                        <span class="meta-value">${escapeHtml(attr.descriptionIt)}</span>
                    ` : ''}

                    <span class="meta-label">Datentyp :</span>
                    <span class="meta-value">${escapeHtml(attr.type)}</span>

                    <span class="meta-label">Nullable :</span>
                    <span class="meta-value">${attr.nullable ? 'Ja' : 'Nein'}</span>

                    <span class="meta-label">Schlüssel :</span>
                    <span class="meta-value">${attr.key ? `<span class="tag">${escapeHtml(attr.key)}</span>` : '—'}</span>

                    <span class="meta-label">${parentLabel} :</span>
                    <span class="meta-value"><a href="#" class="attr-parent-link" data-id="${escapeHtml(parentItem.id)}">${escapeHtml(parentItem.name)}</a></span>

                    ${valueDomain ? `
                        <span class="meta-label">Wertedomäne :</span>
                        <span class="meta-value">${escapeHtml(valueDomain.name)}</span>
                    ` : ''}
                </div>
            </div>
        </div>
    `;

    // Compliance & Recht Card
    html += `
        <div class="card">
            <div class="card-header" data-card="compliance" aria-expanded="true">
                <span class="card-title">Compliance & Recht</span>
                <span class="card-toggle" aria-hidden="true">${icons.chevronDown}</span>
            </div>
            <div class="card-content">
                <div class="meta-grid">
                    <span class="meta-label">Klassifikation :</span>
                    <span class="meta-value"><span class="badge badge-compliance internal">Intern</span></span>

                    <span class="meta-label">Personendaten :</span>
                    <span class="meta-value">${attr.name.toLowerCase().includes('name') || attr.name.toLowerCase().includes('email') ? 'Ja' : 'Nein'}</span>

                    <span class="meta-label">Aufbewahrungsfrist :</span>
                    <span class="meta-value">10 Jahre</span>

                    <span class="meta-label">Rechtsgrundlage :</span>
                    <span class="meta-value">DSG Art. 6</span>
                </div>
            </div>
        </div>
    `;

    // Reference Data Card (only if valueDomain exists)
    if (valueDomain) {
        html += `
            <div class="card">
                <div class="card-header" data-card="reference" aria-expanded="true">
                    <span class="card-title">Referenzdaten (${valueDomain.values?.length || 0})</span>
                    <span class="card-toggle" aria-hidden="true">${icons.chevronDown}</span>
                </div>
                <div class="card-content" style="padding: 0;">
                    <table class="data-table">
                        <thead>
                            <tr>
                                <th>Code</th>
                                <th>Bezeichnung</th>
                                <th>Beschreibung</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${(valueDomain.values || []).map(val => `
                                <tr>
                                    <td>${escapeHtml(val.code)}</td>
                                    <td>${escapeHtml(val.label)}</td>
                                    <td>${escapeHtml(val.description || '—')}</td>
                                </tr>
                            `).join('')}
                        </tbody>
                    </table>
                </div>
            </div>
        `;
    }

    html += `</div>`;
    return html;
}

function renderMappingsPanel(item) {
    const mappings = { logical: [], physical: [] };

    if (item.type === 'domain') {
        const entities = data.entities.filter(e => e.domain === item.id);
        mappings.logical = entities;
    } else if (item.type === 'entity') {
        // Get parent domain
        if (item.domain) {
            const domain = findItemById(item.domain);
            if (domain) mappings.logical.push(domain);
        }
        item.physicalTables?.forEach(tId => {
            const table = findItemById(tId);
            if (table) mappings.physical.push(table);
        });
    } else if (item.type === 'schema') {
        // Get entities that map to this schema
        const mappedEntities = data.entities.filter(e =>
            e.physicalTables?.includes(item.id)
        );
        mappings.logical = mappedEntities;
    }

    const hasMappings = mappings.logical.length || mappings.physical.length;
    if (!hasMappings) return '';

    return `
        <div class="card">
            <div class="card-header" data-card="mappings" aria-expanded="true">
                <span class="card-title">Schichtübergreifende Zuordnungen</span>
                <span class="card-toggle" aria-hidden="true">${icons.chevronDown}</span>
            </div>
            <div class="card-content">
                ${mappings.logical.length ? `
                    <div class="mapping-section">
                        <div class="mapping-section-header">Logische Schicht</div>
                        ${mappings.logical.map(m => renderMappingCard(m)).join('')}
                    </div>
                ` : ''}
                ${mappings.physical.length ? `
                    <div class="mapping-section">
                        <div class="mapping-section-header">Physische Schicht</div>
                        ${mappings.physical.map(m => renderMappingCard(m)).join('')}
                    </div>
                ` : ''}
            </div>
        </div>
    `;
}

function renderMappingCard(item) {
    return `
        <div class="mapping-card ${escapeHtml(item.layer)}" data-id="${escapeHtml(item.id)}" tabindex="0" role="button">
            <div class="mapping-icon ${escapeHtml(item.layer)}">${getTypeIcon(item.type)}</div>
            <div class="mapping-info">
                <div class="mapping-title">${escapeHtml(item.name)}</div>
                <div class="mapping-subtitle">${getTypeLabel(item.type)}</div>
            </div>
            <span class="mapping-arrow" aria-hidden="true">${icons.arrowRight}</span>
        </div>
    `;
}

// Catalog Tab Content Rendering
function renderCatalogTabContent(catalog) {
    switch (state.catalogView) {
        case 'details':
            return renderCatalogDetailsTab(catalog);
        case 'users':
            return renderCatalogMembersTab(catalog);
        case 'settings':
            return renderCatalogSettingsTab(catalog);
        default:
            return renderCatalogDetailsTab(catalog);
    }
}

function renderCatalogDetailsTab(catalog) {
    // Count all entities (simplified for prototype)
    const catalogDomains = data.domains || [];
    const catalogEntities = data.entities || [];
    const catalogSystems = data.systems || [];
    const catalogSchemas = data.schemas || [];
    const catalogValueDomains = data.valueDomains || [];
    const catalogVersions = data.versions || [];

    // Count attributes (from entities) and columns (from schemas)
    const totalAttributes = catalogEntities.reduce((sum, e) => sum + (e.attributes?.length || 0), 0);
    const totalColumns = catalogSchemas.reduce((sum, s) => sum + (s.columns?.length || 0), 0);

    return `
        <div class="card">
            <div class="card-header" data-card="statistics" aria-expanded="true">
                <span class="card-title">Statistiken</span>
                <span class="card-toggle" aria-hidden="true">${icons.chevronDown}</span>
            </div>
            <div class="card-content">
                <div class="catalog-stats-grid">
                    <div class="catalog-stat-item">
                        <span class="catalog-stat-icon">${icons.folder}</span>
                        <div class="catalog-stat-content">
                            <span class="catalog-stat-value">${catalogDomains.length}</span>
                            <span class="catalog-stat-label">Domänen</span>
                        </div>
                    </div>
                    <div class="catalog-stat-item">
                        <span class="catalog-stat-icon">${icons.cube}</span>
                        <div class="catalog-stat-content">
                            <span class="catalog-stat-value">${catalogEntities.length}</span>
                            <span class="catalog-stat-label">Entitäten</span>
                        </div>
                    </div>
                    <div class="catalog-stat-item">
                        <span class="catalog-stat-icon">${icons.list}</span>
                        <div class="catalog-stat-content">
                            <span class="catalog-stat-value">${totalAttributes}</span>
                            <span class="catalog-stat-label">Attribute</span>
                        </div>
                    </div>
                    <div class="catalog-stat-item">
                        <span class="catalog-stat-icon">${icons.tag}</span>
                        <div class="catalog-stat-content">
                            <span class="catalog-stat-value">${catalogValueDomains.length}</span>
                            <span class="catalog-stat-label">Wertedomänen</span>
                        </div>
                    </div>
                    <div class="catalog-stat-item">
                        <span class="catalog-stat-icon">${icons.server}</span>
                        <div class="catalog-stat-content">
                            <span class="catalog-stat-value">${catalogSystems.length}</span>
                            <span class="catalog-stat-label">Systeme</span>
                        </div>
                    </div>
                    <div class="catalog-stat-item">
                        <span class="catalog-stat-icon">${icons.database}</span>
                        <div class="catalog-stat-content">
                            <span class="catalog-stat-value">${catalogSchemas.length}</span>
                            <span class="catalog-stat-label">Schemas</span>
                        </div>
                    </div>
                    <div class="catalog-stat-item">
                        <span class="catalog-stat-icon">${icons.table}</span>
                        <div class="catalog-stat-content">
                            <span class="catalog-stat-value">${totalColumns}</span>
                            <span class="catalog-stat-label">Spalten</span>
                        </div>
                    </div>
                    <div class="catalog-stat-item">
                        <span class="catalog-stat-icon">${icons.history}</span>
                        <div class="catalog-stat-content">
                            <span class="catalog-stat-value">${catalogVersions.length}</span>
                            <span class="catalog-stat-label">Versionen</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="card">
            <div class="card-header" data-card="overview" aria-expanded="true">
                <span class="card-title">Katalogübersicht</span>
                <span class="card-toggle" aria-hidden="true">${icons.chevronDown}</span>
            </div>
            <div class="card-content">
                <div class="meta-grid">
                    <span class="meta-label">Name (DE) :</span>
                    <span class="meta-value">${escapeHtml(catalog.nameDE || catalog.name)}</span>
                    <span class="meta-label">Beschreibung :</span>
                    <span class="meta-value">${escapeHtml(catalog.description || '—')}</span>
                    <span class="meta-label">Verantwortlich :</span>
                    <span class="meta-value">${escapeHtml(catalog.owner || '—')}</span>
                    <span class="meta-label">Erstellt :</span>
                    <span class="meta-value">${escapeHtml(catalog.created || '—')}</span>
                    <span class="meta-label">Status :</span>
                    <span class="meta-value">
                        <span class="status-indicator">
                            <span class="status-dot ${escapeHtml(catalog.status)}" aria-hidden="true"></span>
                            ${getStatusLabel(catalog.status) || 'Unbekannt'}
                        </span>
                    </span>
                </div>
            </div>
        </div>
    `;
}

function renderCatalogMembersTab(catalog) {
    const members = catalog.members || [];
    const roles = ['owner', 'steward', 'engineer', 'analyst', 'viewer'];

    return `
        <div class="card">
            <div class="card-header" data-card="team" aria-expanded="true">
                <span class="card-title">Teammitglieder (${members.length})</span>
                <span class="card-toggle" aria-hidden="true">${icons.chevronDown}</span>
            </div>
            <div class="card-content" style="padding: 0;">
                ${members.length > 0 ? `
                    <div class="members-list">
                        ${members.map(member => `
                            <div class="member-item">
                                <div class="member-avatar">${getUserAvatar(member.name)}</div>
                                <div class="member-info">
                                    <span class="member-name">${escapeHtml(member.name)}</span>
                                    <span class="member-email text-secondary">${escapeHtml(member.email)}</span>
                                </div>
                                <span class="member-role badge badge-outline">${getRoleLabel(member.role)}</span>
                            </div>
                        `).join('')}
                    </div>
                ` : '<div class="empty-list-message">Keine Teammitglieder zugewiesen</div>'}
            </div>
        </div>

        <div class="card">
            <div class="card-header" data-card="roles" aria-expanded="true">
                <span class="card-title">Rollendefinitionen</span>
                <span class="card-toggle" aria-hidden="true">${icons.chevronDown}</span>
            </div>
            <div class="card-content">
                <div class="roles-list">
                    ${roles.map(role => `
                        <div class="role-item">
                            <span class="role-name">${getRoleLabel(role)}</span>
                            <span class="role-desc text-secondary">${getRoleDescription(role)}</span>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
    `;
}

function renderCatalogSettingsTab(catalog) {
    return `
        <div class="card">
            <div class="card-header" data-card="general" aria-expanded="true">
                <span class="card-title">Allgemeine Einstellungen</span>
                <span class="card-toggle" aria-hidden="true">${icons.chevronDown}</span>
            </div>
            <div class="card-content">
                <div class="settings-form">
                    <div class="setting-row">
                        <label class="setting-label">Katalogname :</label>
                        <input type="text" class="setting-input" value="${escapeHtml(catalog.name)}" readonly />
                    </div>
                    <div class="setting-row">
                        <label class="setting-label">Katalog-ID :</label>
                        <input type="text" class="setting-input" value="${escapeHtml(catalog.id)}" readonly />
                    </div>
                    <div class="setting-row">
                        <label class="setting-label">Standardsprache :</label>
                        <select class="setting-select" disabled>
                            <option value="de" selected>Deutsch (DE)</option>
                            <option value="en">Englisch (EN)</option>
                            <option value="fr">Französisch (FR)</option>
                            <option value="it">Italienisch (IT)</option>
                        </select>
                    </div>
                    <div class="setting-row">
                        <label class="setting-label">Sichtbarkeit :</label>
                        <select class="setting-select" disabled>
                            <option value="internal" selected>Intern (Bundesebene)</option>
                            <option value="public">Öffentlich</option>
                            <option value="restricted">Eingeschränkt</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>

        <div class="card">
            <div class="card-header" data-card="notifications" aria-expanded="true">
                <span class="card-title">Benachrichtigungen</span>
                <span class="card-toggle" aria-hidden="true">${icons.chevronDown}</span>
            </div>
            <div class="card-content">
                <div class="settings-form">
                    <div class="setting-row setting-toggle-row">
                        <div class="setting-toggle-info">
                            <span class="setting-label">E-Mail-Benachrichtigungen</span>
                            <span class="setting-desc text-secondary">E-Mail-Updates bei Änderungen erhalten</span>
                        </div>
                        <label class="toggle">
                            <input type="checkbox" checked disabled />
                            <span class="toggle-slider"></span>
                        </label>
                    </div>
                    <div class="setting-row setting-toggle-row">
                        <div class="setting-toggle-info">
                            <span class="setting-label">Wöchentliche Zusammenfassung</span>
                            <span class="setting-desc text-secondary">Zusammenfassung aller Änderungen der letzten Woche</span>
                        </div>
                        <label class="toggle">
                            <input type="checkbox" disabled />
                            <span class="toggle-slider"></span>
                        </label>
                    </div>
                    <div class="setting-row setting-toggle-row">
                        <div class="setting-toggle-info">
                            <span class="setting-label">Genehmigungsanfragen</span>
                            <span class="setting-desc text-secondary">Benachrichtigung bei ausstehenden Genehmigungen</span>
                        </div>
                        <label class="toggle">
                            <input type="checkbox" checked disabled />
                            <span class="toggle-slider"></span>
                        </label>
                    </div>
                </div>
            </div>
        </div>

        <div class="card">
            <div class="card-header" data-card="danger" aria-expanded="true">
                <span class="card-title">Gefahrenzone</span>
                <span class="card-toggle" aria-hidden="true">${icons.chevronDown}</span>
            </div>
            <div class="card-content">
                <div class="danger-zone">
                    <div class="danger-item">
                        <div class="danger-info">
                            <span class="danger-title">Katalog archivieren</span>
                            <span class="danger-desc text-secondary">Dieses Katalog archivieren. Kann später wiederhergestellt werden.</span>
                        </div>
                        <button class="btn btn-outline-danger" disabled>Archivieren</button>
                    </div>
                    <div class="danger-item">
                        <div class="danger-info">
                            <span class="danger-title">Katalog löschen</span>
                            <span class="danger-desc text-secondary">Diesen Katalog und alle Daten dauerhaft löschen.</span>
                        </div>
                        <button class="btn btn-danger" disabled>Löschen</button>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function attachCatalogTabListeners() {
    document.querySelectorAll('[data-catalog-view]').forEach(tab => {
        tab.addEventListener('click', () => {
            state.catalogView = tab.dataset.catalogView;
            renderContent();
        });
    });

    // Card toggle functionality
    document.querySelectorAll('.card-header[data-card]').forEach(header => {
        header.addEventListener('click', () => {
            const card = header.closest('.card');
            const content = card.querySelector('.card-content');
            const isExpanded = header.getAttribute('aria-expanded') === 'true';
            header.setAttribute('aria-expanded', !isExpanded);
            content.style.display = isExpanded ? 'none' : 'block';
        });
    });

    // Domain item click handler
    document.querySelectorAll('.catalog-domain-item[data-id]').forEach(item => {
        item.addEventListener('click', () => {
            const domain = findItemById(item.dataset.id);
            if (domain) {
                selectItem(domain);
            }
        });
    });
}

function renderPlaceholderView(view) {
    const viewInfo = {
        diagram: { icon: icons.box, title: 'Entitätsdiagramm', desc: 'Visuelles Entity-Relationship-Diagramm' },
        lineage: { icon: icons.arrowRight, title: 'Datenherkunft', desc: 'Datenfluss von Quelle zu Ziel' },
        history: { icon: icons.hash, title: 'Versionsverlauf', desc: 'Änderungsprotokoll und Versionierung' }
    };
    const info = viewInfo[view] || { icon: '?', title: view, desc: '' };
    return `
        <div class="placeholder-view">
            <div class="placeholder-icon" aria-hidden="true">${info.icon}</div>
            <h3 class="placeholder-title">${info.title}</h3>
            <p class="placeholder-desc">${info.desc}</p>
            <p style="margin-top: var(--space-4); opacity: 0.5; font-size: var(--text-caption);">Demnächst verfügbar</p>
        </div>
    `;
}

function renderDiagramView(item) {
    const diagramId = `mermaid-${Date.now()}`;
    const mermaidCode = generateMermaidDiagram(item);

    // Schedule Mermaid rendering after DOM update
    setTimeout(() => {
        initMermaidDiagram(diagramId, mermaidCode, item.layer, item.type);
    }, 0);

    return `
        <div class="card diagram-card">
            <div class="card-header" data-card="diagram" aria-expanded="true">
                <span class="card-title">${getDiagramTitle(item)}</span>
                <span class="card-toggle" aria-hidden="true">${icons.chevronDown}</span>
            </div>
            <div class="card-content diagram-content">
                <div id="${diagramId}" class="mermaid-diagram"></div>
            </div>
            <div class="diagram-legend">
                ${renderDiagramLegend(item)}
            </div>
        </div>
    `;
}

function initMermaidDiagram(elementId, code, layer = null, type = null) {
    const element = document.getElementById(elementId);
    if (!element || !window.mermaid) return;

    // Initialize Mermaid with theme settings
    const isDark = document.documentElement.getAttribute('data-theme') !== 'light';
    mermaid.initialize({
        startOnLoad: false,
        theme: isDark ? 'dark' : 'default',
        themeVariables: isDark ? {
            primaryColor: '#4F8EF7',
            primaryTextColor: '#F0F3F6',
            primaryBorderColor: '#4F8EF7',
            lineColor: '#5C6A7A',
            secondaryColor: '#22C997',
            tertiaryColor: '#F5A524',
            background: '#171C24',
            mainBkg: '#1F252E',
            nodeBorder: '#5C6A7A',
            clusterBkg: '#1F252E',
            titleColor: '#F0F3F6',
            edgeLabelBackground: '#171C24'
        } : {
            primaryColor: '#3574E8',
            primaryTextColor: '#1A1F26',
            primaryBorderColor: '#3574E8',
            lineColor: '#6E7A89',
            secondaryColor: '#0FA87C',
            tertiaryColor: '#E09412',
            background: '#FFFFFF',
            mainBkg: '#F4F6F8',
            nodeBorder: '#9CA7B4',
            clusterBkg: '#F4F6F8',
            titleColor: '#1A1F26',
            edgeLabelBackground: '#FFFFFF'
        },
        flowchart: {
            useMaxWidth: true,
            htmlLabels: true,
            curve: 'basis'
        },
        er: {
            useMaxWidth: true,
            layoutDirection: 'TB'
        }
    });

    mermaid.render(`${elementId}-svg`, code).then(({ svg }) => {
        element.innerHTML = svg;
        // Apply layer-specific colors to ER diagram entities via post-processing
        if (code.startsWith('erDiagram')) {
            applyErDiagramColors(element, layer, type, isDark);
        }
    }).catch(err => {
        console.error('Mermaid rendering error:', err);
        element.innerHTML = `<div class="diagram-error">Diagramm konnte nicht gerendert werden</div>`;
    });
}

// Apply colors to ER diagram entities based on layer (logical=green, physical=orange)
function applyErDiagramColors(container, layer, type, isDark) {
    const entityBoxes = container.querySelectorAll('.entityBox');
    if (!entityBoxes.length) return;

    // Define colors based on theme
    const logicalFill = isDark ? '#22C997' : '#0FA87C';
    const logicalStroke = isDark ? '#3DDBA8' : '#22C997';
    const physicalFill = isDark ? '#F5A524' : '#E09412';
    const physicalStroke = isDark ? '#FFBA42' : '#F5A524';
    const textColor = isDark ? '#0F1419' : '#1A1F26';

    entityBoxes.forEach((box, index) => {
        if (layer === 'logical') {
            // Logical layer view: first entity is logical (green), rest are physical (orange)
            if (index === 0) {
                box.style.fill = logicalFill;
                box.style.stroke = logicalStroke;
            } else {
                box.style.fill = physicalFill;
                box.style.stroke = physicalStroke;
            }
        } else if (layer === 'physical') {
            if (type === 'system') {
                // System diagram: all tables are physical (orange)
                box.style.fill = physicalFill;
                box.style.stroke = physicalStroke;
            } else {
                // Table diagram: first is physical (orange), second is logical (green)
                if (index === 0) {
                    box.style.fill = physicalFill;
                    box.style.stroke = physicalStroke;
                } else {
                    box.style.fill = logicalFill;
                    box.style.stroke = logicalStroke;
                }
            }
        }
    });

    // Update text colors for better contrast on colored backgrounds
    const entityLabels = container.querySelectorAll('.entityLabel');
    entityLabels.forEach(label => {
        label.style.fill = textColor;
    });
}

function getDiagramTitle(item) {
    switch (item.layer) {
        case 'logical':
            return item.type === 'domain' ? 'Domänenstruktur' : 'Entity-Relationship-Diagramm';
        case 'physical':
            return 'Tabellen- und Spaltenzuordnungen';
        default:
            return 'Strukturdiagramm';
    }
}

function getDiagramSubtitle(item) {
    switch (item.layer) {
        case 'logical':
            return item.type === 'domain'
                ? 'Übersicht der Entitäten in dieser Domäne'
                : 'Beziehungen zwischen Entitäten und Zuordnung zu physischen Tabellen';
        case 'physical':
            return 'Spaltenstruktur und Zuordnung zu logischen Attributen';
        default:
            return '';
    }
}

function generateMermaidDiagram(item) {
    switch (item.layer) {
        case 'logical':
            return item.type === 'domain'
                ? generateDomainDiagram(item)
                : generateEntityDiagram(item);
        case 'physical':
            return item.type === 'system'
                ? generateSystemDiagram(item)
                : generateSchemaDiagram(item);
        default:
            return 'graph TD\n    A[Kein Diagramm verfügbar]';
    }
}

function generateDomainDiagram(domain) {
    const entities = getEntitiesForDomain(domain.id);
    if (entities.length === 0) {
        return `graph TD\n    subgraph D["${escapeHtml(domain.name)}"]\n        N[Keine Entitäten]\n    end`;
    }

    let code = 'graph TB\n';

    // Domain as subgraph containing entities
    code += `    subgraph D["${escapeHtml(domain.name)}"]\n`;
    code += `        direction TB\n`;

    // Entity nodes inside domain
    entities.forEach((entity, idx) => {
        code += `        E${idx}["${escapeHtml(entity.name)}"]\n`;
    });

    code += '    end\n';

    // Find relations between entities
    entities.forEach((entity, idx) => {
        entities.forEach((otherEntity, otherIdx) => {
            if (idx < otherIdx) {
                // Check if entities are related via FK attributes
                const hasRelation = (entity.attributes || []).some(attr =>
                    attr.key === 'FK' && (
                        attr.description?.toLowerCase().includes(otherEntity.name.toLowerCase()) ||
                        attr.name.toLowerCase().includes(otherEntity.name.toLowerCase())
                    )
                ) || (otherEntity.attributes || []).some(attr =>
                    attr.key === 'FK' && (
                        attr.description?.toLowerCase().includes(entity.name.toLowerCase()) ||
                        attr.name.toLowerCase().includes(entity.name.toLowerCase())
                    )
                );

                if (hasRelation) {
                    code += `    E${idx} <-.-> E${otherIdx}\n`;
                }
            }
        });
    });

    return code;
                )
            )
        );

        if (hasRelation) {
            code += `    C <-.-> S${idx}\n`;
        }
    });

    code += '    classDef current fill:#4F8EF7,stroke:#fff,color:#fff,stroke-width:3px\n';

    return code;
}

function generateEntityDiagram(entity) {
    let code = 'erDiagram\n';

    // Current entity with all attributes (logical - will be colored green)
    code += `    ${sanitizeMermaidId(entity.name)} {\n`;
    if (entity.attributes) {
        entity.attributes.forEach(attr => {
            const keyMark = attr.key === 'PK' ? 'PK' : (attr.key === 'FK' ? 'FK' : '');
            code += `        ${escapeHtml(attr.type)} ${escapeHtml(attr.name)} ${keyMark}\n`;
        });
    }
    code += '    }\n';

    // Show physical schema mappings with all columns (physical - will be colored orange)
    if (entity.physicalSchemas && entity.physicalSchemas.length > 0) {
        entity.physicalSchemas.forEach(schemaId => {
            const schema = data.schemas.find(s => s.id === schemaId);
            if (schema) {
                const system = data.systems.find(s => s.id === schema.system);
                const systemLabel = system ? system.name : '';

                code += `    ${sanitizeMermaidId(schema.name)} {\n`;
                if (schema.columns) {
                    schema.columns.forEach(col => {
                        const keyMark = col.key === 'PK' ? 'PK' : (col.key === 'FK' ? 'FK' : (col.key === 'UK' ? 'UK' : ''));
                        code += `        ${escapeHtml(col.type.split('(')[0])} ${escapeHtml(col.name)} ${keyMark}\n`;
                    });
                }
                code += '    }\n';
                code += `    ${sanitizeMermaidId(entity.name)} ||--|| ${sanitizeMermaidId(schema.name)} : "${escapeHtml(systemLabel)}"\n`;
            }
        });
    }

    return code;
}

function generateSystemDiagram(system) {
    // Get all schemas for this system
    const schemas = data.schemas.filter(s => s.system === system.id);

    if (schemas.length === 0) {
        return `graph TD\n    S["${escapeHtml(system.name)}"]:::system\n    S --> N[Keine Schemas]\n    classDef system fill:#F5A524,stroke:#FFBA42,color:#0F1419`;
    }

    let code = 'erDiagram\n';

    // Render each schema with its columns (all physical - will be colored orange)
    schemas.forEach(schema => {
        code += `    ${sanitizeMermaidId(schema.name)} {\n`;
        if (schema.columns) {
            schema.columns.forEach(col => {
                const keyMark = col.key === 'PK' ? 'PK' : (col.key === 'FK' ? 'FK' : (col.key === 'UK' ? 'UK' : ''));
                const colType = col.type.split('(')[0]; // Remove size from type
                code += `        ${escapeHtml(colType)} ${escapeHtml(col.name)} ${keyMark}\n`;
            });
        }
        code += '    }\n';
    });

    // Add relationships between schemas based on FK columns
    schemas.forEach(schema => {
        if (schema.columns) {
            schema.columns.forEach(col => {
                if (col.key === 'FK' && col.references) {
                    // If column has explicit reference, use it
                    const refSchema = schemas.find(s => s.id === col.references || s.name === col.references);
                    if (refSchema) {
                        code += `    ${sanitizeMermaidId(refSchema.name)} ||--o{ ${sanitizeMermaidId(schema.name)} : ""\n`;
                    }
                } else if (col.key === 'FK') {
                    // Try to infer relationship from column name
                    schemas.forEach(otherSchema => {
                        if (otherSchema.id !== schema.id) {
                            // Check if any PK column matches the FK column pattern
                            const hasPKMatch = (otherSchema.columns || []).some(otherCol =>
                                otherCol.key === 'PK' && (
                                    col.name.toLowerCase().includes(otherCol.name.toLowerCase()) ||
                                    col.description?.toLowerCase().includes(otherSchema.name.toLowerCase())
                                )
                            );
                            if (hasPKMatch) {
                                code += `    ${sanitizeMermaidId(otherSchema.name)} ||--o{ ${sanitizeMermaidId(schema.name)} : ""\n`;
                            }
                        }
                    });
                }
            });
        }
    });

    return code;
}

function generateSchemaDiagram(schema) {
    let code = 'erDiagram\n';

    // Schema with columns (physical - will be colored orange)
    code += `    ${sanitizeMermaidId(schema.name)} {\n`;
    if (schema.columns) {
        schema.columns.forEach(col => {
            const keyMark = col.key === 'PK' ? 'PK' : (col.key === 'FK' ? 'FK' : (col.key === 'UK' ? 'UK' : ''));
            const colType = col.type.split('(')[0]; // Remove size from type
            const tableComment = col.table ? ` "${col.table}"` : '';
            code += `        ${colType} ${col.name} ${keyMark}${tableComment}\n`;
        });
    }
    code += '    }\n';

    return code;
}

function sanitizeMermaidId(name) {
    // Remove special characters and spaces for valid Mermaid IDs
    return name.replace(/[^a-zA-Z0-9_]/g, '_');
}

function renderDiagramLegend(item) {
    const legends = {
        logical: [
            { color: 'var(--color-logical)', label: 'Domäne' },
            { color: 'var(--color-logical)', label: 'Entität', border: true },
            { color: 'var(--color-physical)', label: 'Physische Tabelle' },
            { symbol: 'PK', label: 'Primärschlüssel' },
            { symbol: 'FK', label: 'Fremdschlüssel' }
        ],
        physical: [
            { color: 'var(--color-physical)', label: 'Schema' },
            { color: 'var(--color-logical)', label: 'Logische Entität' },
            { symbol: 'PK', label: 'Primärschlüssel' },
            { symbol: 'FK', label: 'Fremdschlüssel' }
        ]
    };

    const items = legends[item.layer] || legends.logical;

    return `
        <div class="legend-items">
            ${items.map(l => l.color
                ? `<div class="legend-item">
                    <span class="legend-color" style="background: ${l.color}"></span>
                    <span class="legend-label">${l.label}</span>
                   </div>`
                : `<div class="legend-item">
                    <span class="legend-symbol">${l.symbol}</span>
                    <span class="legend-label">${l.label}</span>
                   </div>`
            ).join('')}
        </div>
    `;
}

function renderSearchResults() {
    const container = document.getElementById('searchResults');
    if (!container) return;

    if (!state.searchResults.length) {
        container.classList.remove('active');
        return;
    }

    container.innerHTML = `
        <div class="search-results-header">${state.searchResults.length} Ergebnisse</div>
        ${state.searchResults.map(item => `
            <div class="search-result-item ${escapeHtml(item.layer)}" data-id="${escapeHtml(item.id)}" role="option" tabindex="0">
                <span class="tree-icon ${escapeHtml(item.layer)}">${getTypeIcon(item.type)}</span>
                <div class="search-result-info">
                    <div class="search-result-name">${escapeHtml(item.name)}</div>
                    <div class="search-result-meta">${getTypeLabel(item.type)} · ${getLayerLabel(item.layer)}</div>
                </div>
            </div>
        `).join('')}
    `;

    container.classList.add('active');
    // Event delegation handles search result item listeners
}

// ========================================
// Event Handlers
// ========================================
function selectItem(id) {
    const item = findItemById(id);
    if (item) {
        state.selectedItem = item;
        state.selectedAttribute = null; // Clear any selected attribute
        // Preserve current view (tab) when navigating between items
        if (item.layer !== state.currentLayer) {
            state.currentLayer = item.layer;
        }
        expandParents(item);
        navigateTo(`/${item.layer}/${item.type}/${item.id}`);
    }
}

function showAttributeDetail(attr, parentItem) {
    state.selectedAttribute = { attr, parentItem };
    state.selectedItem = null; // Clear item selection
    const container = document.getElementById('contentBody');
    container.innerHTML = renderAttributeDetailView(attr, parentItem);
    renderAttributeBreadcrumb(attr, parentItem);
    // Event delegation handles attribute detail listeners
    renderTree(); // Re-render tree to show selected attribute
}

function renderAttributeBreadcrumb(attr, parentItem) {
    const breadcrumb = document.getElementById('breadcrumb');
    if (!breadcrumb) return;

    let html = '';
    html += `<span class="breadcrumb-home" data-action="home" tabindex="0">${icons.home} Alle Kataloge</span>`;
    html += `<span class="breadcrumb-separator" aria-hidden="true">/</span>`;

    // Add catalog name if available
    if (state.currentCatalog) {
        html += `<span class="breadcrumb-item" data-id="${escapeHtml(state.currentCatalog.id)}" tabindex="0">${escapeHtml(state.currentCatalog.name)}</span>`;
        html += `<span class="breadcrumb-separator" aria-hidden="true">/</span>`;
    }

    // Add layer
    if (parentItem.layer) {
        html += `<span class="breadcrumb-item layer-${escapeHtml(parentItem.layer)}" data-layer="${escapeHtml(parentItem.layer)}" tabindex="0">${escapeHtml(getLayerLabel(parentItem.layer))}</span>`;
        html += `<span class="breadcrumb-separator" aria-hidden="true">/</span>`;
    }

    // Add parent item
    html += `<span class="breadcrumb-item" data-id="${escapeHtml(parentItem.id)}" tabindex="0">${escapeHtml(parentItem.name)}</span>`;
    html += `<span class="breadcrumb-separator" aria-hidden="true">/</span>`;

    // Add attribute name as current
    html += `<span class="breadcrumb-current" aria-current="page">${escapeHtml(attr.name)}</span>`;

    breadcrumb.innerHTML = html;
    // Event delegation handles breadcrumb listeners
}

function attachAttributeDetailListeners() {
    // Card toggle functionality
    document.querySelectorAll('.card-header[data-card]').forEach(header => {
        header.addEventListener('click', () => {
            const card = header.closest('.card');
            const content = card.querySelector('.card-content');
            const isExpanded = header.getAttribute('aria-expanded') === 'true';
            header.setAttribute('aria-expanded', !isExpanded);
            content.style.display = isExpanded ? 'none' : 'block';
        });
    });

    // Parent link click handler
    document.querySelectorAll('.attr-parent-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const itemId = link.dataset.id;
            if (itemId) selectItem(itemId);
        });
    });
}

function toggleNode(id) {
    if (state.expandedNodes.has(id)) {
        state.expandedNodes.delete(id);
    } else {
        state.expandedNodes.add(id);
    }
    renderTree();
}

function updateLayerTabs() {
    document.querySelectorAll('.layer-tab').forEach(tab => {
        const isActive = tab.dataset.layer === state.currentLayer;
        tab.classList.toggle('active', isActive);
        tab.setAttribute('aria-selected', isActive);
    });
}

function attachTreeListeners() {
    document.querySelectorAll('.tree-node').forEach(node => {
        node.addEventListener('click', (e) => {
            const id = node.dataset.id;

            // Handle attribute clicks - show attribute detail
            if (node.classList.contains('attribute-node')) {
                const entityId = node.dataset.entity;
                const attrName = node.dataset.attrName;
                if (entityId && attrName) {
                    const parentItem = findItemById(entityId);
                    if (parentItem) {
                        const attrs = parentItem.attributes || [];
                        const attr = attrs.find(a => a.name === attrName);
                        if (attr) {
                            showAttributeDetail(attr, parentItem);
                        }
                    }
                }
                return;
            }

            // Handle column clicks - show column detail
            if (node.classList.contains('column-node')) {
                const schemaId = node.dataset.schema;
                const colName = node.dataset.colName;
                if (schemaId && colName) {
                    const parentItem = findItemById(schemaId);
                    if (parentItem) {
                        const cols = parentItem.columns || [];
                        const col = cols.find(c => c.name === colName);
                        if (col) {
                            showAttributeDetail(col, parentItem);
                        }
                    }
                }
                return;
            }

            if (e.target.closest('.tree-toggle')) {
                toggleNode(id);
            } else {
                selectItem(id);
            }
        });

        node.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                // Handle attribute keydown - show attribute detail
                if (node.classList.contains('attribute-node')) {
                    const entityId = node.dataset.entity;
                    const attrName = node.dataset.attrName;
                    if (entityId && attrName) {
                        const parentItem = findItemById(entityId);
                        if (parentItem) {
                            const attrs = parentItem.attributes || [];
                            const attr = attrs.find(a => a.name === attrName);
                            if (attr) {
                                showAttributeDetail(attr, parentItem);
                            }
                        }
                    }
                    return;
                }
                // Handle column keydown - show column detail
                if (node.classList.contains('column-node')) {
                    const schemaId = node.dataset.schema;
                    const colName = node.dataset.colName;
                    if (schemaId && colName) {
                        const parentItem = findItemById(schemaId);
                        if (parentItem) {
                            const cols = parentItem.columns || [];
                            const col = cols.find(c => c.name === colName);
                            if (col) {
                                showAttributeDetail(col, parentItem);
                            }
                        }
                    }
                    return;
                }
                selectItem(node.dataset.id);
            } else if (e.key === 'ArrowRight') {
                state.expandedNodes.add(node.dataset.id);
                renderTree();
            } else if (e.key === 'ArrowLeft') {
                state.expandedNodes.delete(node.dataset.id);
                renderTree();
            }
        });
    });
}

function attachContentListeners() {
    // Card toggles
    document.querySelectorAll('.card-header').forEach(header => {
        header.addEventListener('click', () => {
            const card = header.closest('.card');
            card.classList.toggle('collapsed');
            header.setAttribute('aria-expanded', !card.classList.contains('collapsed'));
        });
    });

    // Mapping cards
    document.querySelectorAll('.mapping-card').forEach(card => {
        card.addEventListener('click', () => selectItem(card.dataset.id));
        card.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                selectItem(card.dataset.id);
            }
        });
    });

    // Clickable table rows
    document.querySelectorAll('.clickable-row').forEach(row => {
        row.addEventListener('click', () => {
            // Check if this is an attribute/column row
            const attrName = row.dataset.attrName;
            const parentId = row.dataset.parentId;
            if (attrName && parentId) {
                const parentItem = findItemById(parentId);
                if (parentItem) {
                    const attrs = parentItem.attributes || parentItem.columns || [];
                    const attr = attrs.find(a => a.name === attrName);
                    if (attr) {
                        showAttributeDetail(attr, parentItem);
                        return;
                    }
                }
            }
            // Regular item row
            const itemId = row.dataset.id;
            if (itemId) {
                selectItem(itemId);
            }
        });
    });
}

function attachViewTabListeners() {
    document.querySelectorAll('.view-tabs .view-tab[data-view]').forEach(tab => {
        tab.addEventListener('click', () => {
            state.currentView = tab.dataset.view;
            renderContent();
        });
    });
}

// ========================================
// Keyboard Shortcuts
// ========================================
function setupKeyboardShortcuts() {
    document.addEventListener('keydown', (e) => {
        // "/" to focus search
        if (e.key === '/' && !e.ctrlKey && !e.metaKey) {
            const searchInput = document.getElementById('searchInput');
            if (document.activeElement !== searchInput) {
                e.preventDefault();
                searchInput?.focus();
            }
        }

        // "[" to collapse sidebar
        if (e.key === '[' && !e.ctrlKey && !e.metaKey) {
            const sidebar = document.getElementById('sidebar');
            if (sidebar && !state.sidebarCollapsed) {
                state.sidebarCollapsed = true;
                sidebar.classList.add('collapsed');
            }
        }

        // "]" to expand sidebar
        if (e.key === ']' && !e.ctrlKey && !e.metaKey) {
            const sidebar = document.getElementById('sidebar');
            if (sidebar && state.sidebarCollapsed) {
                state.sidebarCollapsed = false;
                sidebar.classList.remove('collapsed');
            }
        }

        // Escape to close search
        if (e.key === 'Escape') {
            const searchResults = document.getElementById('searchResults');
            if (searchResults?.classList.contains('active')) {
                searchResults.classList.remove('active');
                document.getElementById('searchInput').blur();
            }
        }
    });
}

// ========================================
// Event Delegation Setup
// ========================================
function setupDelegatedEvents() {
    const app = document.getElementById('app');
    if (!app) return;

    // Delegated click handler for the entire app
    app.addEventListener('click', (e) => {
        try {
            const target = e.target;

            // Tree node clicks
            const treeNode = target.closest('.tree-node');
            if (treeNode) {
                handleTreeNodeClick(e, treeNode);
                return;
            }

        // Layer section header clicks (toggle)
        const layerHeader = target.closest('.layer-section-header');
        if (layerHeader) {
            const layer = layerHeader.dataset.layer;
            if (state.expandedLayers.has(layer)) {
                state.expandedLayers.delete(layer);
            } else {
                state.expandedLayers.add(layer);
            }
            renderTree();
            return;
        }

        // Breadcrumb home click
        const breadcrumbHome = target.closest('.breadcrumb-home');
        if (breadcrumbHome) {
            goToCatalogsOverview();
            return;
        }

        // Breadcrumb item click
        const breadcrumbItem = target.closest('.breadcrumb-item');
        if (breadcrumbItem) {
            if (breadcrumbItem.dataset.id) {
                selectItem(breadcrumbItem.dataset.id);
            } else if (breadcrumbItem.dataset.layer) {
                state.currentLayer = breadcrumbItem.dataset.layer;
                renderAll();
            }
            return;
        }

        // Catalog card clicks
        const catalogCard = target.closest('.catalog-card');
        if (catalogCard) {
            selectCatalog(catalogCard.dataset.id);
            return;
        }

        // Layer entity item clicks
        const layerEntityItem = target.closest('.layer-entity-item');
        if (layerEntityItem) {
            selectItem(layerEntityItem.dataset.id);
            return;
        }

        // Card header clicks (toggle)
        const cardHeader = target.closest('.card-header');
        if (cardHeader) {
            const card = cardHeader.closest('.card');
            if (card) {
                card.classList.toggle('collapsed');
                cardHeader.setAttribute('aria-expanded', !card.classList.contains('collapsed'));
            }
            return;
        }

        // Mapping card clicks
        const mappingCard = target.closest('.mapping-card');
        if (mappingCard) {
            selectItem(mappingCard.dataset.id);
            return;
        }

        // Clickable table row clicks
        const clickableRow = target.closest('.clickable-row');
        if (clickableRow) {
            handleClickableRowClick(clickableRow);
            return;
        }

        // View tab clicks
        const viewTab = target.closest('.view-tab');
        if (viewTab) {
            if (viewTab.dataset.view) {
                state.currentView = viewTab.dataset.view;
                updateUrlWithTab(state.currentView);
                renderContent();
            } else if (viewTab.dataset.catalogView) {
                state.catalogView = viewTab.dataset.catalogView;
                renderContent();
            }
            return;
        }

        // Search result item clicks
        const searchResultItem = target.closest('.search-result-item');
        if (searchResultItem) {
            selectItem(searchResultItem.dataset.id);
            document.getElementById('searchInput').value = '';
            state.searchResults = [];
            document.getElementById('searchResults')?.classList.remove('active');
            return;
        }

        // Attribute parent link clicks
        const attrParentLink = target.closest('.attr-parent-link');
        if (attrParentLink) {
            e.preventDefault();
            selectItem(attrParentLink.dataset.id);
            return;
        }

        // Layer tab clicks
            const layerTab = target.closest('.layer-tab');
            if (layerTab) {
                state.currentLayer = layerTab.dataset.layer;
                state.selectedItem = null;
                state.currentView = 'wiki';
                navigateTo(`/${state.currentLayer}`);
                return;
            }
        } catch (error) {
            console.error('Error handling click event:', error);
        }
    });

    // Delegated keydown handler for the entire app
    app.addEventListener('keydown', (e) => {
        try {
            const target = e.target;

            // Tree node keydown
            const treeNode = target.closest('.tree-node');
            if (treeNode && (e.key === 'Enter' || e.key === ' ' || e.key === 'ArrowRight' || e.key === 'ArrowLeft')) {
                handleTreeNodeKeydown(e, treeNode);
                return;
            }

        // Breadcrumb home keydown
        const breadcrumbHome = target.closest('.breadcrumb-home');
        if (breadcrumbHome && (e.key === 'Enter' || e.key === ' ')) {
            e.preventDefault();
            goToCatalogsOverview();
            return;
        }

        // Breadcrumb item keydown
        const breadcrumbItem = target.closest('.breadcrumb-item');
        if (breadcrumbItem && (e.key === 'Enter' || e.key === ' ')) {
            e.preventDefault();
            if (breadcrumbItem.dataset.id) {
                selectItem(breadcrumbItem.dataset.id);
            }
            return;
        }

        // Mapping card keydown
            const mappingCard = target.closest('.mapping-card');
            if (mappingCard && (e.key === 'Enter' || e.key === ' ')) {
                e.preventDefault();
                selectItem(mappingCard.dataset.id);
                return;
            }
        } catch (error) {
            console.error('Error handling keydown event:', error);
        }
    });
}

// Helper function for tree node click handling
function handleTreeNodeClick(e, node) {
    const id = node.dataset.id;

    // Handle attribute clicks
    if (node.classList.contains('attribute-node')) {
        const entityId = node.dataset.entity;
        const attrName = node.dataset.attrName;
        if (entityId && attrName) {
            const parentItem = findItemById(entityId);
            if (parentItem) {
                const attrs = parentItem.attributes || [];
                const attr = attrs.find(a => a.name === attrName);
                if (attr) {
                    showAttributeDetail(attr, parentItem);
                }
            }
        }
        return;
    }

    // Handle column clicks
    if (node.classList.contains('column-node')) {
        const schemaId = node.dataset.schema;
        const colName = node.dataset.colName;
        if (schemaId && colName) {
            const parentItem = findItemById(schemaId);
            if (parentItem) {
                const cols = parentItem.columns || [];
                const col = cols.find(c => c.name === colName);
                if (col) {
                    showAttributeDetail(col, parentItem);
                }
            }
        }
        return;
    }

    // Toggle or select
    if (e.target.closest('.tree-toggle')) {
        toggleNode(id);
    } else {
        selectItem(id);
    }
}

// Helper function for tree node keydown handling
function handleTreeNodeKeydown(e, node) {
    if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();

        // Handle attribute keydown
        if (node.classList.contains('attribute-node')) {
            const entityId = node.dataset.entity;
            const attrName = node.dataset.attrName;
            if (entityId && attrName) {
                const parentItem = findItemById(entityId);
                if (parentItem) {
                    const attrs = parentItem.attributes || [];
                    const attr = attrs.find(a => a.name === attrName);
                    if (attr) {
                        showAttributeDetail(attr, parentItem);
                    }
                }
            }
            return;
        }

        // Handle column keydown
        if (node.classList.contains('column-node')) {
            const schemaId = node.dataset.schema;
            const colName = node.dataset.colName;
            if (schemaId && colName) {
                const parentItem = findItemById(schemaId);
                if (parentItem) {
                    const cols = parentItem.columns || [];
                    const col = cols.find(c => c.name === colName);
                    if (col) {
                        showAttributeDetail(col, parentItem);
                    }
                }
            }
            return;
        }

        selectItem(node.dataset.id);
    } else if (e.key === 'ArrowRight') {
        state.expandedNodes.add(node.dataset.id);
        renderTree();
    } else if (e.key === 'ArrowLeft') {
        state.expandedNodes.delete(node.dataset.id);
        renderTree();
    }
}

// Helper function for clickable row click handling
function handleClickableRowClick(row) {
    const attrName = row.dataset.attrName;
    const parentId = row.dataset.parentId;
    if (attrName && parentId) {
        const parentItem = findItemById(parentId);
        if (parentItem) {
            const attrs = parentItem.attributes || parentItem.columns || [];
            const attr = attrs.find(a => a.name === attrName);
            if (attr) {
                showAttributeDetail(attr, parentItem);
                return;
            }
        }
    }
    const itemId = row.dataset.id;
    if (itemId) {
        selectItem(itemId);
    }
}

// ========================================
// Initialization
// ========================================
async function init() {
    const loaded = await loadData();

    if (!loaded) {
        document.getElementById('app').innerHTML = `
            <div class="empty-state">
                <div class="empty-state-icon">${icons.database}</div>
                <h2 class="empty-state-title">Daten konnten nicht geladen werden</h2>
                <p>Bitte prüfen Sie, ob die Datendateien im Ordner /data vorhanden sind.</p>
            </div>
        `;
        return;
    }

    renderApp();
    setupDelegatedEvents();
    setupKeyboardShortcuts();
    attachVersionSelectorListeners();

    // Theme toggle
    document.getElementById('themeToggle').addEventListener('click', () => {
        state.theme = state.theme === 'light' ? 'dark' : 'light';
        document.documentElement.dataset.theme = state.theme;
        document.getElementById('themeToggle').innerHTML = state.theme === 'light' ? icons.sun : icons.moon;
    });

    // Sidebar toggle
    document.getElementById('sidebarToggle').addEventListener('click', () => {
        state.sidebarCollapsed = !state.sidebarCollapsed;
        document.getElementById('sidebar').classList.toggle('collapsed', state.sidebarCollapsed);
    });

    // Sidebar overlay (mobile)
    document.getElementById('sidebarOverlay')?.addEventListener('click', () => {
        state.sidebarCollapsed = true;
        document.getElementById('sidebar').classList.add('collapsed');
    });

    // Expanding Search
    const searchContainer = document.querySelector('.search-container');
    const searchToggle = document.getElementById('searchToggle');
    const searchInput = document.getElementById('searchInput');

    searchToggle.addEventListener('click', () => {
        searchContainer.classList.add('expanded');
        setTimeout(() => searchInput.focus(), 50);
    });

    searchInput.addEventListener('input', (e) => handleSearch(e.target.value));
    searchInput.addEventListener('blur', () => {
        setTimeout(() => {
            document.getElementById('searchResults')?.classList.remove('active');
            // Collapse if empty
            if (!searchInput.value) {
                searchContainer.classList.remove('expanded');
            }
        }, 200);
    });

    // Close search on Escape
    searchInput.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            searchInput.value = '';
            searchInput.blur();
            searchContainer.classList.remove('expanded');
            handleSearch('');
        }
    });

    // Group-by dropdown
    const groupByDropdown = document.getElementById('groupByDropdown');
    const groupByTrigger = document.getElementById('groupByTrigger');
    const groupByMenu = document.getElementById('groupByMenu');

    groupByTrigger.addEventListener('click', () => {
        groupByDropdown.classList.toggle('open');
        groupByTrigger.setAttribute('aria-expanded', groupByDropdown.classList.contains('open'));
    });

    // Close dropdown when clicking outside
    const sortDropdown = document.getElementById('sortDropdown');
    const sortTrigger = document.getElementById('sortTrigger');
    const sortMenu = document.getElementById('sortMenu');

    document.addEventListener('click', (e) => {
        if (!groupByDropdown.contains(e.target)) {
            groupByDropdown.classList.remove('open');
            groupByTrigger.setAttribute('aria-expanded', 'false');
        }
        if (sortDropdown && !sortDropdown.contains(e.target)) {
            sortDropdown.classList.remove('open');
            sortTrigger?.setAttribute('aria-expanded', 'false');
        }
    });

    // Handle option selection
    groupByMenu.querySelectorAll('.group-by-option').forEach(option => {
        option.addEventListener('click', () => {
            const value = option.dataset.value;
            const text = option.querySelector('span:last-child').textContent;
            const iconHtml = option.querySelector('.group-by-option-icon').innerHTML;

            // Update trigger text and icon
            groupByTrigger.querySelector('.group-by-trigger-text').textContent = text;
            groupByTrigger.querySelector('.group-by-trigger-icon').innerHTML = iconHtml;

            // Update selected state
            groupByMenu.querySelectorAll('.group-by-option').forEach(opt => opt.classList.remove('selected'));
            option.classList.add('selected');

            // Close dropdown
            groupByDropdown.classList.remove('open');
            groupByTrigger.setAttribute('aria-expanded', 'false');

            // Update state and re-render tree
            state.groupBy = value;
            renderTree();
        });
    });

    // Tree search functionality
    const treeSearch = document.getElementById('treeSearch');
    const treeSearchClear = document.getElementById('treeSearchClear');

    treeSearch?.addEventListener('input', (e) => {
        state.treeSearchQuery = e.target.value.toLowerCase();
        renderTree();
    });

    treeSearchClear?.addEventListener('click', () => {
        treeSearch.value = '';
        state.treeSearchQuery = '';
        renderTree();
    });

    // Expand/Collapse all toggle
    const expandCollapseToggle = document.getElementById('expandCollapseToggle');
    expandCollapseToggle?.addEventListener('click', () => {
        state.allExpanded = !state.allExpanded;

        if (state.allExpanded) {
            // Expand all layers and nodes
            state.expandedLayers = new Set(['logical', 'physical']);
            // Expand all domain and system nodes
            data.domains.forEach(d => state.expandedNodes.add(d.id));
            data.systems.forEach(s => state.expandedNodes.add(s.id));
            data.entities.forEach(e => state.expandedNodes.add(e.id));
            expandCollapseToggle.innerHTML = icons.expandAll;
            expandCollapseToggle.setAttribute('title', 'Alle erweitern');
            expandCollapseToggle.setAttribute('aria-label', 'Expand all');
        } else {
            // Collapse all
            state.expandedLayers.clear();
            state.expandedNodes.clear();
            expandCollapseToggle.innerHTML = icons.collapseAll;
            expandCollapseToggle.setAttribute('title', 'Alle reduzieren');
            expandCollapseToggle.setAttribute('aria-label', 'Collapse all');
        }

        renderTree();
    });

    // Sort dropdown functionality
    sortTrigger?.addEventListener('click', () => {
        sortDropdown.classList.toggle('open');
        sortTrigger.setAttribute('aria-expanded', sortDropdown.classList.contains('open'));
    });

    sortMenu?.querySelectorAll('.sort-option').forEach(option => {
        option.addEventListener('click', () => {
            const value = option.dataset.value;

            // Update trigger icon
            const iconHtml = option.querySelector('.sort-option-icon').innerHTML;
            sortTrigger.innerHTML = iconHtml;

            // Update selected state
            sortMenu.querySelectorAll('.sort-option').forEach(opt => opt.classList.remove('selected'));
            option.classList.add('selected');

            // Close dropdown
            sortDropdown.classList.remove('open');
            sortTrigger.setAttribute('aria-expanded', 'false');

            // Update state and re-render tree
            state.treeSort = value;
            renderTree();
        });
    });

    // Handle URL routing
    window.addEventListener('hashchange', handleRoute);
    handleRoute();

    // If no specific route, show catalogs overview (landing page)
    if (!state.selectedItem && !state.currentCatalog) {
        renderCatalogsOverview();
    }
}

// Start the app
document.addEventListener('DOMContentLoaded', init);
