/**
 * Al Sultan - Centro de Comando
 * Configuracoes do Sistema
 *
 * Hierarquia de Acessos sincronizada com Metabase BI
 * Integracoes: Google Drive, Stirling PDF, Metabase, Entregas aiBotize
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
        apiKey: 'AIzaSyBL93FK_CLw5kEvDgTEF7B56iy9i6Co34A',

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
        support: 'https://app.alsultan.tech',
        pdf: 'https://pdf.alsultan.tech',
        directus: 'https://directus.alsultan.tech'
    },

    // =========================================================================
    // GOOGLE DRIVE - Pastas Compartilhadas
    // =========================================================================
    // INSTRUCOES: Substitua os IDs placeholders pelos IDs reais das pastas
    // Para obter o ID: abra a pasta no Drive e copie da URL apos /folders/
    // =========================================================================

    drive: {
        enabled: true,
        folders: {
            root: {
                id: 'FOLDER_ROOT_ID',
                url: 'https://drive.google.com/drive/folders/FOLDER_ROOT_ID',
                name: 'Al Sultan - Documentos',
                icon: 'fa-folder-tree',
                minLevel: 0,
                description: 'Pasta raiz de documentos'
            },
            financeiro: {
                id: 'FOLDER_FINANCEIRO_ID',
                url: 'https://drive.google.com/drive/folders/FOLDER_FINANCEIRO_ID',
                name: 'Financeiro',
                icon: 'fa-chart-line',
                minLevel: 70,
                description: 'DREs, balancetes, conciliacoes'
            },
            contratos: {
                id: 'FOLDER_CONTRATOS_ID',
                url: 'https://drive.google.com/drive/folders/FOLDER_CONTRATOS_ID',
                name: 'Contratos',
                icon: 'fa-file-contract',
                minLevel: 90,
                description: 'Franquias, fornecedores, parcerias'
            },
            operacional: {
                id: 'FOLDER_OPERACIONAL_ID',
                url: 'https://drive.google.com/drive/folders/FOLDER_OPERACIONAL_ID',
                name: 'Operacional',
                icon: 'fa-clipboard-list',
                minLevel: 50,
                description: 'Procedimentos, checklists, treinamentos'
            },
            relatorios: {
                id: 'FOLDER_RELATORIOS_ID',
                url: 'https://drive.google.com/drive/folders/FOLDER_RELATORIOS_ID',
                name: 'Relatorios',
                icon: 'fa-file-pdf',
                minLevel: 50,
                description: 'Relatorios de prestacao de servicos aiBotize'
            }
        }
    },

    // =========================================================================
    // STIRLING PDF - Servico de Manipulacao de PDFs
    // =========================================================================
    // URL: https://pdf.alsultan.tech
    // Documentacao: https://github.com/Stirling-Tools/Stirling-PDF
    // =========================================================================

    pdf: {
        enabled: true,
        url: 'https://pdf.alsultan.tech',
        // NOTA: API Key deve ser usada via proxy backend para seguranca
        // Nunca exponha a key diretamente no frontend em producao
        features: {
            viewer: { enabled: true, name: 'Visualizar PDF', icon: 'fa-eye' },
            merge: { enabled: true, name: 'Combinar PDFs', icon: 'fa-object-group' },
            split: { enabled: true, name: 'Dividir PDF', icon: 'fa-scissors' },
            compress: { enabled: true, name: 'Comprimir PDF', icon: 'fa-compress' },
            convert: { enabled: true, name: 'Converter', icon: 'fa-exchange-alt' },
            ocr: { enabled: true, name: 'OCR (Texto)', icon: 'fa-font' },
            watermark: { enabled: true, name: 'Marca d\'agua', icon: 'fa-stamp' }
        },
        endpoints: {
            home: '/',
            viewer: '/pdf-viewer',
            merge: '/merge-pdfs',
            split: '/split-pdfs',
            compress: '/compress-pdf',
            convertToImage: '/pdf-to-img',
            convertFromImage: '/img-to-pdf',
            ocr: '/ocr-pdf',
            watermark: '/add-watermark',
            // API Endpoints (para uso programatico)
            api: {
                merge: '/api/v1/general/merge-pdfs',
                split: '/api/v1/general/split-pdf-by-pages',
                compress: '/api/v1/misc/compress-pdf',
                ocr: '/api/v1/misc/ocr-pdf'
            }
        }
    },

    // =========================================================================
    // METABASE BI - Dashboards
    // =========================================================================
    // URL: https://bi.alsultan.tech
    // Login: Google OAuth (mesmo do portal)
    // =========================================================================

    metabase: {
        enabled: true,
        url: 'https://bi.alsultan.tech',
        embedEnabled: false, // Ativar quando configurar embedding
        dashboards: {
            // === EXECUTIVOS (nivel 90+) ===
            franquias: {
                id: 12,
                name: 'Franquias e Royalties',
                category: 'executivo',
                minLevel: 90,
                icon: 'fa-building',
                description: 'Controle de franquias e royalties'
            },
            // === GESTAO (nivel 70+) ===
            dreGerencial: {
                id: 10,
                name: 'DRE Gerencial',
                category: 'executivo',
                minLevel: 70,
                icon: 'fa-file-invoice-dollar',
                description: 'Demonstrativo de Resultado do Exercicio'
            },
            analiseCruzada: {
                id: 8,
                name: 'Analise Cruzada',
                category: 'gestao',
                minLevel: 70,
                icon: 'fa-chart-bar',
                description: 'Comparativo entre filiais'
            },
            // === OPERACIONAL (nivel 50+) ===
            visaoGeral: {
                id: 5,
                name: 'Visao Geral Vendas',
                category: 'operacional',
                minLevel: 50,
                icon: 'fa-chart-pie',
                description: 'Vendas consolidadas todas filiais'
            },
            performanceDiaria: {
                id: 11,
                name: 'Performance Diaria',
                category: 'operacional',
                minLevel: 50,
                icon: 'fa-calendar-day',
                description: 'Metricas do dia atual'
            },
            // === POR FILIAL ===
            juveve: {
                id: 6,
                name: 'Metricas Loja Juveve',
                category: 'filial',
                minLevel: 50,
                branchCode: 1,
                icon: 'fa-store',
                description: 'Performance filial Juveve'
            },
            aguaVerde: {
                id: 7,
                name: 'Metricas Loja Agua Verde',
                category: 'filial',
                minLevel: 50,
                branchCode: 2,
                icon: 'fa-store',
                description: 'Performance filial Agua Verde'
            }
        }
    },

    // =========================================================================
    // ENTREGAS AIBOTIZE - Tracking de Servicos
    // =========================================================================
    // Relatorios mensais de prestacao de servicos
    // SLA Meta: 95%
    // =========================================================================

    entregas: {
        enabled: true,
        source: 'static', // 'static' ou 'api'

        // Configuracao API (quando source = 'api')
        api: {
            url: 'https://directus.alsultan.tech',
            collection: 'entregas_aibotize',
            // Token deve ser usado via proxy backend
            endpoint: '/items/entregas_aibotize'
        },

        // Meta de SLA
        slaMeta: 95,

        // Relatorio atual
        atual: {
            mes: 'Janeiro 2026',
            periodo: '2026-01',
            url: 'https://drive.google.com/file/d/RELATORIO_JAN_2026_ID',
            entregas: 12,
            slaAtingido: 98,
            destaques: [
                'Implementacao hierarquia de acessos Metabase',
                'Portal Centro de Comando v3.0',
                'Dashboard DRE Gerencial',
                'Integracao Google Drive'
            ]
        },

        // Historico de relatorios
        historico: [
            {
                mes: 'Dezembro 2025',
                periodo: '2025-12',
                url: 'https://drive.google.com/file/d/RELATORIO_DEZ_2025_ID',
                entregas: 15,
                slaAtingido: 100
            },
            {
                mes: 'Novembro 2025',
                periodo: '2025-11',
                url: 'https://drive.google.com/file/d/RELATORIO_NOV_2025_ID',
                entregas: 10,
                slaAtingido: 95
            }
        ],

        // Categorias de entregas
        categorias: {
            bi: { name: 'Business Intelligence', icon: 'fa-chart-bar', color: '#ea5512' },
            automacao: { name: 'Automacao', icon: 'fa-robot', color: '#ffca07' },
            integracao: { name: 'Integracoes', icon: 'fa-plug', color: '#0bb0a0' },
            suporte: { name: 'Suporte', icon: 'fa-headset', color: '#6366f1' },
            documentacao: { name: 'Documentacao', icon: 'fa-book', color: '#8b5cf6' }
        }
    },

    // =========================================================================
    // DOCUMENTOS COMPARTILHADOS - Permissoes por Nivel (legado)
    // =========================================================================

    documentos: {
        financeiro: { name: 'Financeiro', icon: 'fa-folder', minLevel: 70, desc: 'DREs, balancetes, conciliacoes' },
        contratos: { name: 'Contratos', icon: 'fa-file-contract', minLevel: 90, desc: 'Franquias, fornecedores, parcerias' },
        operacional: { name: 'Operacional', icon: 'fa-clipboard-list', minLevel: 50, desc: 'Procedimentos, checklists, treinamentos' }
    },

    // =========================================================================
    // DASHBOARDS (legado - usar metabase.dashboards)
    // =========================================================================

    dashboards: {
        dreGerencial: { id: 10, name: 'DRE Gerencial', minLevel: 70 },
        performanceDiaria: { id: 11, name: 'Performance Diaria', minLevel: 50 },
        franquias: { id: 12, name: 'Franquias e Royalties', minLevel: 90 },
        visaoGeral: { id: 5, name: 'Visao Geral - Vendas', minLevel: 50 },
        juveve: { id: 6, name: 'Metricas Loja Juveve', minLevel: 50 },
        aguaVerde: { id: 7, name: 'Metricas Loja Agua Verde', minLevel: 50 },
        analiseCruzada: { id: 8, name: 'Analise Cruzada de Vendas', minLevel: 70 }
    },

    // =========================================================================
    // RELATORIOS (legado - usar entregas)
    // =========================================================================

    relatorios: {
        atual: {
            mes: 'Janeiro 2026',
            url: 'https://drive.google.com/file/d/RELATORIO_JAN_2026_ID',
            entregas: 12,
            sla: 98
        },
        historico: [
            { mes: 'Dezembro 2025', url: 'https://drive.google.com/file/d/RELATORIO_DEZ_2025_ID', entregas: 15, sla: 100 },
            { mes: 'Novembro 2025', url: 'https://drive.google.com/file/d/RELATORIO_NOV_2025_ID', entregas: 10, sla: 95 }
        ]
    },

    // =========================================================================
    // MANUAIS POR NIVEL DE ACESSO
    // =========================================================================

    manuals: {
        geral: { name: 'Manual Geral BI', minLevel: 0, file: 'MANUAL-GERAL-BI.html', icon: 'fa-book' },
        diretoria: { name: 'Manual Diretoria', minLevel: 90, file: 'MANUAL-DIRETORIA-BI.html', icon: 'fa-crown' },
        gerentes: { name: 'Manual Gerentes', minLevel: 50, file: 'MANUAL-GERENTES-BI.html', icon: 'fa-user-tie' },
        analistas: { name: 'Manual Analistas', minLevel: 70, file: 'MANUAL-ANALISTAS-BI.html', icon: 'fa-chart-line' }
    },

    // =========================================================================
    // VERSAO E METADATA
    // =========================================================================

    version: '4.0',
    lastUpdate: '2026-01-09',
    changelog: [
        { version: '4.0', date: '2026-01-09', changes: 'Integracoes: Google Drive, Stirling PDF, Metabase, Entregas' },
        { version: '3.0', date: '2026-01-09', changes: 'Reestruturacao: Drive, Relatorios, paleta unificada' },
        { version: '2.3', date: '2026-01-08', changes: 'Hierarquia de acessos BI implementada' },
        { version: '2.0', date: '2026-01-07', changes: 'Login Google OAuth adicionado' }
    ]
};

// =========================================================================
// FUNCOES HELPER
// =========================================================================

// Obtem URL do dashboard (usa metabase.dashboards)
CONFIG.getDashboardUrl = function(dashboardKey) {
    const dashboard = this.metabase.dashboards[dashboardKey] || this.dashboards[dashboardKey];
    if (dashboard) {
        return `${this.metabase.url}/dashboard/${dashboard.id}`;
    }
    return this.metabase.url;
};

// Lista dashboards acessiveis por nivel do usuario
CONFIG.getDashboardsForLevel = function(userLevel) {
    return Object.entries(this.metabase.dashboards)
        .filter(([key, dash]) => dash.minLevel <= userLevel)
        .map(([key, dash]) => ({ key, ...dash, url: this.getDashboardUrl(key) }));
};

// Obtem URL da pasta do Drive
CONFIG.getDriveFolderUrl = function(folderKey) {
    const folder = this.drive.folders[folderKey];
    if (folder) {
        return folder.url;
    }
    return null;
};

// Lista pastas do Drive acessiveis por nivel do usuario
CONFIG.getDriveFoldersForLevel = function(userLevel) {
    return Object.entries(this.drive.folders)
        .filter(([key, folder]) => folder.minLevel <= userLevel && key !== 'root')
        .map(([key, folder]) => ({ key, ...folder }));
};

// Obtem URL do Stirling PDF para uma funcionalidade
CONFIG.getPdfToolUrl = function(toolKey) {
    const endpoint = this.pdf.endpoints[toolKey];
    if (endpoint) {
        return `${this.pdf.url}${endpoint}`;
    }
    return this.pdf.url;
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

// Obtem entregas atuais
CONFIG.getEntregasAtuais = function() {
    return this.entregas.atual;
};

// Obtem historico de entregas
CONFIG.getEntregasHistorico = function() {
    return this.entregas.historico;
};

// Calcula media de SLA dos ultimos N meses
CONFIG.getMediaSLA = function(meses = 3) {
    const todasEntregas = [this.entregas.atual, ...this.entregas.historico].slice(0, meses);
    const soma = todasEntregas.reduce((acc, e) => acc + e.slaAtingido, 0);
    return Math.round(soma / todasEntregas.length);
};

// Exportar config (para uso em modulos)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CONFIG;
}
