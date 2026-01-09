/**
 * Al Sultan - Centro de Comando
 * Configuracoes do Sistema
 *
 * IMPORTANTE: Substitua os valores abaixo pelas suas credenciais reais
 * antes de publicar em producao.
 */

const CONFIG = {
    // =========================================================================
    // GOOGLE OAUTH
    // =========================================================================
    // Para obter um Client ID:
    // 1. Acesse https://console.cloud.google.com/
    // 2. Crie um novo projeto ou selecione existente
    // 3. Ative a API "Google Identity Services"
    // 4. Em "Credenciais", crie uma credencial OAuth 2.0
    // 5. Adicione as origens autorizadas: https://alsultan.tech
    // 6. Copie o Client ID gerado
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
    // SESSAO
    // =========================================================================

    session: {
        // Tempo de expiracao da sessao em horas
        expirationHours: 24,

        // Chave usada no localStorage
        storageKey: 'alsultan_user'
    },

    // =========================================================================
    // URLS DOS SISTEMAS
    // =========================================================================

    urls: {
        metabase: 'https://bi.alsultan.tech',
        n8n: 'https://flows.alsultan.tech',
        directus: 'https://directus.alsultan.tech',
        support: 'https://app.alsultan.tech'
    },

    // =========================================================================
    // DASHBOARDS
    // =========================================================================

    dashboards: {
        dreGerencial: { id: 10, name: 'DRE Gerencial' },
        performanceDiaria: { id: 11, name: 'Performance Diaria' },
        franquias: { id: 12, name: 'Franquias e Royalties' },
        visaoGeral: { id: 5, name: 'Visao Geral - Vendas' },
        juveve: { id: 6, name: 'Metricas Loja Juveve' },
        aguaVerde: { id: 7, name: 'Metricas Loja Agua Verde' },
        analiseCruzada: { id: 8, name: 'Analise Cruzada de Vendas' }
    },

    // =========================================================================
    // VERSAO
    // =========================================================================

    version: '2.0',
    lastUpdate: '2025-01-09'
};

// Funcao helper para obter URL do dashboard
CONFIG.getDashboardUrl = function(dashboardKey) {
    const dashboard = this.dashboards[dashboardKey];
    if (dashboard) {
        return `${this.urls.metabase}/dashboard/${dashboard.id}`;
    }
    return this.urls.metabase;
};

// Exportar config (para uso em modulos)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CONFIG;
}
