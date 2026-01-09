/**
 * Al Sultan - Centro de Comando
 * Modulo de Autenticacao
 *
 * Gerencia autenticacao via Google OAuth e controle de sessao.
 */

const Auth = {
    // =========================================================================
    // CONFIGURACAO
    // =========================================================================

    config: {
        clientId: '570315449710-tcffq3hslg94jtqsu5kunrde3sn06821.apps.googleusercontent.com',
        allowedDomains: ['alsultan.com.br', 'aibotize.com'],
        allowedEmails: ['cohgus@gmail.com', 'sdcbettega@gmail.com', 'cohgus@aibotize.com'],
        sessionKey: 'alsultan_user',
        expirationHours: 24
    },

    // =========================================================================
    // INICIALIZACAO
    // =========================================================================

    /**
     * Inicializa o sistema de autenticacao
     */
    init: function() {
        // Carregar config externa se disponivel
        if (typeof CONFIG !== 'undefined' && CONFIG.google) {
            this.config.clientId = CONFIG.google.clientId;
            this.config.allowedDomains = CONFIG.google.allowedDomains;
            this.config.allowedEmails = CONFIG.google.allowedEmails;
        }

        // Inicializar Google Identity Services
        if (typeof google !== 'undefined' && this.config.clientId !== 'YOUR_GOOGLE_CLIENT_ID.apps.googleusercontent.com') {
            google.accounts.id.initialize({
                client_id: this.config.clientId,
                callback: this.handleCredentialResponse.bind(this),
                auto_select: false,
                cancel_on_tap_outside: true
            });
        }
    },

    // =========================================================================
    // LOGIN
    // =========================================================================

    /**
     * Inicia o fluxo de login com Google
     */
    login: function() {
        // Modo demo se nao configurado
        if (this.config.clientId === 'YOUR_GOOGLE_CLIENT_ID.apps.googleusercontent.com') {
            this.demoLogin();
            return;
        }

        // Tentar One Tap primeiro
        google.accounts.id.prompt((notification) => {
            if (notification.isNotDisplayed() || notification.isSkippedMoment()) {
                // Fallback para popup
                this.loginWithPopup();
            }
        });
    },

    /**
     * Login via popup OAuth
     */
    loginWithPopup: function() {
        const client = google.accounts.oauth2.initTokenClient({
            client_id: this.config.clientId,
            scope: 'email profile',
            callback: (response) => {
                if (response.access_token) {
                    this.fetchUserInfo(response.access_token);
                }
            }
        });
        client.requestAccessToken();
    },

    /**
     * Login de demonstracao (sem OAuth real)
     */
    demoLogin: function() {
        const demoUser = {
            name: 'Usuario Demo',
            email: 'demo@alsultan.com.br',
            picture: null,
            loginTime: new Date().toISOString(),
            isDemo: true
        };

        this.saveSession(demoUser);
        this.redirect('index.html');
    },

    // =========================================================================
    // PROCESSAMENTO DE CREDENCIAIS
    // =========================================================================

    /**
     * Processa resposta do Google Identity
     */
    handleCredentialResponse: function(response) {
        const payload = this.parseJwt(response.credential);
        this.validateAndSave(payload);
    },

    /**
     * Busca informacoes do usuario via API
     */
    fetchUserInfo: async function(accessToken) {
        try {
            const response = await fetch('https://www.googleapis.com/oauth2/v2/userinfo', {
                headers: { 'Authorization': `Bearer ${accessToken}` }
            });
            const payload = await response.json();
            this.validateAndSave(payload);
        } catch (error) {
            console.error('Erro ao buscar dados do usuario:', error);
            this.onError('Erro ao obter dados do usuario');
        }
    },

    /**
     * Valida usuario e salva sessao
     */
    validateAndSave: function(user) {
        const email = user.email || '';
        const domain = email.split('@')[1];

        // Verificar autorizacao
        const isAllowed =
            this.config.allowedEmails.includes(email) ||
            this.config.allowedDomains.includes(domain);

        if (!isAllowed) {
            this.onError('Acesso nao autorizado para este email');
            return;
        }

        // Salvar sessao
        const userData = {
            name: user.name,
            email: user.email,
            picture: user.picture,
            loginTime: new Date().toISOString()
        };

        this.saveSession(userData);
        this.redirect('index.html');
    },

    // =========================================================================
    // SESSAO
    // =========================================================================

    /**
     * Salva dados da sessao
     */
    saveSession: function(userData) {
        localStorage.setItem(this.config.sessionKey, JSON.stringify(userData));
    },

    /**
     * Obtem dados da sessao
     */
    getSession: function() {
        const data = localStorage.getItem(this.config.sessionKey);
        return data ? JSON.parse(data) : null;
    },

    /**
     * Remove sessao (logout)
     */
    clearSession: function() {
        localStorage.removeItem(this.config.sessionKey);
    },

    /**
     * Verifica se sessao e valida
     */
    isSessionValid: function() {
        const user = this.getSession();
        if (!user) return false;

        const loginTime = new Date(user.loginTime);
        const now = new Date();
        const hoursDiff = (now - loginTime) / (1000 * 60 * 60);

        return hoursDiff < this.config.expirationHours;
    },

    /**
     * Verifica autenticacao e redireciona se necessario
     */
    requireAuth: function() {
        if (!this.isSessionValid()) {
            this.clearSession();
            this.redirect('login.html');
            return false;
        }
        return true;
    },

    // =========================================================================
    // LOGOUT
    // =========================================================================

    /**
     * Realiza logout
     */
    logout: function() {
        this.clearSession();
        this.redirect('login.html');
    },

    // =========================================================================
    // UTILIDADES
    // =========================================================================

    /**
     * Parse de token JWT
     */
    parseJwt: function(token) {
        const base64Url = token.split('.')[1];
        const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        const jsonPayload = decodeURIComponent(atob(base64).split('').map(c => {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));
        return JSON.parse(jsonPayload);
    },

    /**
     * Redireciona para pagina
     */
    redirect: function(page) {
        setTimeout(() => {
            window.location.href = page;
        }, 500);
    },

    // =========================================================================
    // CALLBACKS
    // =========================================================================

    /**
     * Callback de erro (pode ser sobrescrito)
     */
    onError: function(message) {
        console.error('Auth Error:', message);
        alert(message);
    },

    /**
     * Callback de sucesso (pode ser sobrescrito)
     */
    onSuccess: function(user) {
        console.log('Auth Success:', user);
    }
};

// Auto-inicializar quando DOM estiver pronto
document.addEventListener('DOMContentLoaded', function() {
    Auth.init();
});

// Exportar para uso em modulos
if (typeof module !== 'undefined' && module.exports) {
    module.exports = Auth;
}
