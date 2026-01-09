# Al Sultan - Centro de Comando
## Guia de Deploy para Cloudflare Pages

### Estrutura do Projeto

```
docs/web/
├── index.html          # Command Center (pagina principal)
├── login.html          # Pagina de login com Google OAuth
├── manuais/
│   └── index.html      # Hub de manuais
├── assets/
│   ├── css/            # Estilos (opcional - usando Tailwind CDN)
│   └── js/
│       ├── config.js   # Configuracoes do sistema
│       └── auth.js     # Modulo de autenticacao
└── DEPLOY.md           # Este arquivo
```

### Pre-requisitos

1. **Conta Cloudflare** com dominio `alsultan.tech` configurado
2. **Projeto Google Cloud** com OAuth 2.0 configurado

---

## 1. Configurar Google OAuth

### 1.1 Criar Credencial OAuth

1. Acesse [Google Cloud Console](https://console.cloud.google.com/)
2. Crie um novo projeto ou selecione existente
3. Navegue para **APIs & Services > Credentials**
4. Clique em **Create Credentials > OAuth client ID**
5. Selecione **Web application**
6. Configure:
   - **Name**: Al Sultan Centro de Comando
   - **Authorized JavaScript origins**:
     - `https://alsultan.tech`
     - `http://localhost:8080` (para desenvolvimento)
   - **Authorized redirect URIs**:
     - `https://alsultan.tech`
     - `http://localhost:8080`
7. Copie o **Client ID** gerado

### 1.2 Atualizar Configuracao

Edite `assets/js/config.js`:

```javascript
google: {
    clientId: 'SEU_CLIENT_ID_AQUI.apps.googleusercontent.com',
    allowedDomains: ['alsultan.com.br', 'aibotize.com'],
    allowedEmails: ['cohgus@gmail.com']
}
```

Atualize tambem `login.html` na linha do `GOOGLE_CLIENT_ID`.

---

## 2. Deploy no Cloudflare Pages

### 2.1 Via Dashboard Cloudflare

1. Acesse [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. Navegue para **Pages**
3. Clique em **Create a project**
4. Escolha **Direct Upload**
5. Arraste a pasta `docs/web/` para upload
6. Configure o projeto:
   - **Project name**: alsultan-centro-comando
   - **Production branch**: main
7. Clique em **Deploy**

### 2.2 Configurar Dominio Customizado

1. Apos deploy, va em **Custom domains**
2. Adicione `alsultan.tech`
3. Cloudflare configurara DNS automaticamente

### 2.3 Configurar Redirecionamentos

Crie um arquivo `_redirects` na raiz:

```
# Redirecionar www para apex
https://www.alsultan.tech/* https://alsultan.tech/:splat 301

# SPA fallback (se necessario)
/*    /index.html   200
```

---

## 3. Desenvolvimento Local

### 3.1 Servidor Local

```bash
# Usando Python
cd docs/web
python -m http.server 8080

# Usando Node.js (npx)
npx serve docs/web -p 8080
```

### 3.2 Modo Demo

O sistema possui modo demo automatico quando OAuth nao esta configurado.
Clique em "Entrar com Google" para acessar com usuario demo.

---

## 4. Seguranca

### 4.1 Content Security Policy

Adicione headers de seguranca no Cloudflare:

```
Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline' https://cdn.tailwindcss.com https://accounts.google.com https://apis.google.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://cdnjs.cloudflare.com; font-src 'self' https://fonts.gstatic.com https://cdnjs.cloudflare.com; img-src 'self' data: https:; connect-src 'self' https://accounts.google.com https://www.googleapis.com;
```

### 4.2 Restricao de Acesso

O sistema ja valida:
- Dominios de email autorizados
- Emails especificos na whitelist
- Sessao com expiracao de 24h

---

## 5. Manutencao

### 5.1 Atualizar Manuais

Os manuais estao em `../bi/tutorials/`. Atualize os HTMLs e faca novo deploy.

### 5.2 Adicionar Usuarios

Edite `assets/js/config.js`:

```javascript
allowedEmails: [
    'cohgus@gmail.com',
    'novo.usuario@email.com'  // Adicionar aqui
]
```

### 5.3 Adicionar Dominios

```javascript
allowedDomains: [
    'alsultan.com.br',
    'aibotize.com',
    'novodominio.com.br'  // Adicionar aqui
]
```

---

## 6. Troubleshooting

### OAuth nao funciona

1. Verifique se Client ID esta correto
2. Confirme origens autorizadas no Google Console
3. Verifique console do navegador para erros

### Pagina nao carrega

1. Verifique se arquivos foram uploadados corretamente
2. Confirme DNS esta propagado
3. Limpe cache do Cloudflare

### Sessao expira rapidamente

Ajuste `expirationHours` em `assets/js/config.js`

---

## Contato

Suporte tecnico: suporte@aibotize.com
