/**
 * Al Sultan - Centro de Comando
 * Configuracoes do Sistema
 *
 * Hierarquia de Acessos sincronizada com Metabase BI
 * Atualizado: 2026-01-09
 */

const CONFIG = {
    // =========================================================================
    // GOOGLE OAUTH
    // =========================================================================
    // Projeto Google Cloud: clever-overview-388203
    // OAuth Client: bialsultan
    // =========================================================================

    google: {
        clientId: '570315449710-tcffq3hslg94jtqsu5kunrde3sn06821.apps.googleusercontent.com',

        // Dominios de email permitidos (usuarios desses dominios podem acessar)
        allowedDomains: [
            'alsultan.com.br',
            'aibotize.com'
        ],

        // Emails especificos permitidos (mesmo fora dos dominios acima)
        allowedEmails: [
            'cohgus@gmail.com',
            'sdcbettega@gmail.com',
            'cohgus@aibotize.com'
        ]
    },

    // =========================================================================
    // HIERARQUIA DE GRUPOS (sincronizado com Metabase)
    // =========================================================================

    groups: {
        // Grupo 1: All Users - Todos usuarios (base)
        allUsers: {
            id: 1,
            name: 'All Users',
            description: 'Todos os usuarios do sistema',
            level: 0
        },
        // Grupo 2: Administrators - Stack aiBotize (acesso total)
        administrators: {
            id: 2,
            name: 'Administrators',
            description: 'Equipe tecnica aiBotize - acesso total',
            level: 100,
            permissions: ['admin', 'all_dashboards', 'all_data', 'system_config']
        },
        // Grupo 3: Proprietarios - CEO/Socios (visao executiva)
        proprietarios: {
            id: 3,
            name: 'Proprietarios',
            description: 'CEO e socios - visao executiva consolidada',
            level: 90,
            permissions: ['executive_view', 'all_dashboards', 'all_branches', 'dre', 'franquias']
        },
        // Grupo 4: Equipe Gestao - Analistas financeiros
        equipeGestao: {
            id: 4,
            name: 'Equipe Gestao',
            description: 'Analistas financeiros e gestao',
            level: 70,
            permissions: ['financial_view', 'analytics', 'reports', 'all_branches']
        },
        // Grupos de Filiais - Gerentes de loja
        filialJuveve: {
            id: 5,
            name: 'Filial Juveve',
            description: 'Gerente da filial Juveve (Propria)',
            level: 50,
            branchCode: 1,
            permissions: ['branch_view', 'own_branch_data']
        },
        filialAguaVerde: {
            id: 6,
            name: 'Filial Agua Verde',
            description: 'Gerente da filial Agua Verde (Propria)',
            level: 50,
            branchCode: 2,
            permissions: ['branch_view', 'own_branch_data']
        },
        filialSJP: {
            id: 7,
            name: 'Filial SJP',
            description: 'Gerente da filial SJP (Franquia)',
            level: 50,
            branchCode: 3,
            permissions: ['branch_view', 'own_branch_data']
        },
        filialPontaGrossa: {
            id: 8,
            name: 'Filial Ponta Grossa',
            description: 'Gerente da filial Ponta Grossa (Franquia)',
            level: 50,
            branchCode: 5,
            permissions: ['branch_view', 'own_branch_data']
        },
        filialBonfiglioli: {
            id: 9,
            name: 'Filial Bonfiglioli',
            description: 'Gerente da filial Bonfiglioli (Franquia)',
            level: 50,
            branchCode: 6,
            permissions: ['branch_view', 'own_branch_data']
        }
    },

    // =========================================================================
    // USUARIOS CADASTRADOS (sincronizado com Metabase)
    // =========================================================================

    users: {
        'cohgus@aibotize.com': {
            name: 'Al Sultan Tech',
            role: 'administrators',
            groupIds: [1, 2],
            isSuperuser: true,
            canAccessAdmin: true
        },
        'cohgus@gmail.com': {
            name: 'Gustavo Cohgus',
            role: 'proprietarios',
            groupIds: [1, 3],
            isSuperuser: false,
            canAccessAdmin: false
        },
        'sdcbettega@gmail.com': {
            name: 'Shay Bettega',
            role: 'proprietarios',
            groupIds: [1, 3],
            isSuperuser: false,
            canAccessAdmin: false
        }
    },

    // =========================================================================
    // FILIAIS
    // =========================================================================

    branches: {
        1: { code: 1, name: 'Juveve', type: 'propria', cnpj: '11.199.870/0001-58' },
        2: { code: 2, name: 'Agua Verde', type: 'propria', cnpj: '38.134.113/0001-52' },
        3: { code: 3, name: 'SJP', type: 'franquia', cnpj: '40.938.833/0001-12' },
        5: { code: 5, name: 'Ponta Grossa', type: 'franquia', cnpj: '52.327.099/0001-34' },
        6: { code: 6, name: 'Bonfiglioli', type: 'franquia', cnpj: '53.146.453/0001-97' }
    },

    // =========================================================================
    // SESSAO
    // =========================================================================

    session: {
        expirationHours: 24,
        storageKey: 'alsultan_user'
    },

    // =========================================================================
    // URLS DOS SISTEMAS
    // =========================================================================

    urls: {
        portal: 'https://alsultan.tech',
        metabase: 'https://bi.alsultan.tech',
        n8n: 'https://flows.alsultan.tech',
        directus: 'https://directus.alsultan.tech',
        support: 'https://app.alsultan.tech',
        portainer: 'https://ptn.alsultan.tech',
        grafana: 'https://grafana.alsultan.tech',
        logs: 'https://logs.alsultan.tech'
    },

    // =========================================================================
    // DASHBOARDS (Gold Layer - Metabase)
    // =========================================================================

    dashboards: {
        // Dashboards Executivos (Proprietarios+)
        dreGerencial: { id: 10, name: 'DRE Gerencial', minLevel: 70 },
        performanceDiaria: { id: 11, name: 'Performance Diaria', minLevel: 50 },
        franquias: { id: 12, name: 'Franquias e Royalties', minLevel: 90 },
        // Dashboards Operacionais (Todos)
        visaoGeral: { id: 5, name: 'Visao Geral - Vendas', minLevel: 50 },
        juveve: { id: 6, name: 'Metricas Loja Juveve', minLevel: 50 },
        aguaVerde: { id: 7, name: 'Metricas Loja Agua Verde', minLevel: 50 },
        analiseCruzada: { id: 8, name: 'Analise Cruzada de Vendas', minLevel: 70 }
    },

    // =========================================================================
    // MANUAIS POR NIVEL DE ACESSO
    // =========================================================================

    manuals: {
        geral: { name: 'Manual Geral BI', minLevel: 0, file: 'MANUAL-GERAL-BI.html' },
        diretoria: { name: 'Manual Diretoria', minLevel: 90, file: 'MANUAL-DIRETORIA-BI.html' },
        gerentes: { name: 'Manual Gerentes', minLevel: 50, file: 'MANUAL-GERENTES-BI.html' },
        analistas: { name: 'Manual Analistas', minLevel: 70, file: 'MANUAL-ANALISTAS-BI.html' }
    },

    // =========================================================================
    // VERSAO
    // =========================================================================

    version: '2.3',
    lastUpdate: '2026-01-09'
};

// =========================================================================
// FUNCOES HELPER
// =========================================================================

// Obtem URL do dashboard
CONFIG.getDashboardUrl = function(dashboardKey) {
    const dashboard = this.dashboards[dashboardKey];
    if (dashboard) {
        return `${this.urls.metabase}/dashboard/${dashboard.id}`;
    }
    return this.urls.metabase;
};

// Obtem informacoes do usuario por email
CONFIG.getUserInfo = function(email) {
    return this.users[email] || null;
};

// Obtem grupo por ID
CONFIG.getGroupById = function(groupId) {
    for (const key in this.groups) {
        if (this.groups[key].id === groupId) {
            return this.groups[key];
        }
    }
    return null;
};

// Obtem nivel de acesso do usuario
CONFIG.getUserLevel = function(email) {
    const user = this.users[email];
    if (!user) return 0;

    let maxLevel = 0;
    user.groupIds.forEach(gid => {
        const group = this.getGroupById(gid);
        if (group && group.level > maxLevel) {
            maxLevel = group.level;
        }
    });
    return maxLevel;
};

// Verifica se usuario pode acessar recurso
CONFIG.canAccess = function(email, minLevel) {
    return this.getUserLevel(email) >= minLevel;
};

// Verifica se email esta autorizado
CONFIG.isEmailAuthorized = function(email) {
    if (!email) return false;
    const domain = email.split('@')[1];
    return this.google.allowedEmails.includes(email) ||
           this.google.allowedDomains.includes(domain);
};

// Exportar config (para uso em modulos)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CONFIG;
}
