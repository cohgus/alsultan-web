# Al Sultan - Centro de Comando
## Guia de Deploy para Hostinger

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
├── .github/
│   └── workflows/
│       └── deploy.yml  # GitHub Actions para deploy automatico
└── DEPLOY.md           # Este arquivo
```

### Dados do Hosting

| Item | Valor |
|------|-------|
| **Provedor** | Hostinger Premium Web Hosting |
| **Servidor** | 46.202.145.166 |
| **Usuario** | u688592187 |
| **Diretorio** | /home/u688592187/domains/alsultan.tech/public_html |
| **SFTP Port** | 65002 |
| **FTP Port** | 21 |

---

## 1. Configurar Google OAuth

### 1.1 Criar Credencial OAuth

1. Acesse [Google Cloud Console](https://console.cloud.google.com/)
2. Selecione o projeto: `clever-overview-388203`
3. Navegue para **APIs & Services > Credentials**
4. Selecione o OAuth Client **bialsultan** ou crie novo
5. Configure:
   - **Authorized JavaScript origins**:
     - `https://alsultan.tech`
     - `https://bi.alsultan.tech`
     - `http://localhost:8080` (para desenvolvimento)
   - **Authorized redirect URIs**:
     - `https://bi.alsultan.tech/auth/google`
6. Copie o **Client ID** gerado

### 1.2 Atualizar Configuracao

Edite `assets/js/config.js`:

```javascript
google: {
    clientId: '570315449710-tcffq3hslg94jtqsu5kunrde3sn06821.apps.googleusercontent.com',
    allowedDomains: ['alsultan.com.br', 'aibotize.com'],
    allowedEmails: ['cohgus@gmail.com', 'sdcbettega@gmail.com']
}
```

---

## 2. Deploy Automatico via GitHub Actions

### 2.1 Configurar Secrets no GitHub

1. Acesse https://github.com/cohgus/alsultan-web/settings/secrets/actions
2. Adicione os seguintes secrets:

| Secret | Valor |
|--------|-------|
| `FTP_USERNAME` | `u688592187` |
| `FTP_PASSWORD` | *(senha FTP do painel Hostinger)* |

### 2.2 Obter Senha FTP

1. Acesse [Hostinger hPanel](https://hpanel.hostinger.com/)
2. Va em **Websites** > `alsultan.tech` > **Dashboard**
3. No menu lateral, clique em **FTP Accounts**
4. Copie ou redefina a senha do usuario principal

### 2.3 Deploy Automatico

O deploy ocorre automaticamente a cada push na branch `main`:

```bash
git add .
git commit -m "Update site"
git push origin main
```

### 2.4 Deploy Manual

Tambem e possivel disparar deploy manual:
1. Acesse https://github.com/cohgus/alsultan-web/actions
2. Selecione "Deploy to Hostinger"
3. Clique em "Run workflow"

---

## 3. Deploy Manual via SFTP

### 3.1 Usando FileZilla

1. Baixe [FileZilla](https://filezilla-project.org/)
2. Configure conexao:
   - **Host**: `sftp://46.202.145.166`
   - **Port**: `65002`
   - **Username**: `u688592187`
   - **Password**: *(senha do painel)*
3. Navegue ate `/domains/alsultan.tech/public_html`
4. Faca upload dos arquivos

### 3.2 Usando linha de comando

```bash
# SFTP
sftp -P 65002 u688592187@46.202.145.166

# Dentro do SFTP
cd /domains/alsultan.tech/public_html
put -r ./*
```

---

## 4. Deploy via Git (Painel Hostinger)

### 4.1 Configurar Git no Hostinger

1. Acesse [Hostinger hPanel](https://hpanel.hostinger.com/)
2. Va em **Websites** > `alsultan.tech` > **Dashboard**
3. No menu lateral: **Advanced** > **Git**
4. Configure:
   - **Repository URL**: `https://github.com/cohgus/alsultan-web.git`
   - **Branch**: `main`
   - **Auto-deploy**: Ativado
5. Clique em **Create**

---

## 5. Desenvolvimento Local

### 5.1 Servidor Local

```bash
# Usando Python
cd docs/web
python -m http.server 8080

# Usando Node.js (npx)
npx serve docs/web -p 8080
```

### 5.2 Modo Demo

O sistema possui modo demo automatico quando OAuth nao esta configurado.
Clique em "Entrar com Google" para acessar com usuario demo.

---

## 6. DNS e SSL

### 6.1 DNS (Hostinger)

O DNS ja esta configurado automaticamente na Hostinger:

| Tipo | Nome | Valor | TTL |
|------|------|-------|-----|
| A | @ | 46.202.145.166 | 1800 |
| AAAA | @ | 2a02:4780:13:1943:0:290b:153b:4 | 1800 |
| CNAME | www | alsultan.tech. | 300 |
| A | ftp | 46.202.145.166 | 1800 |

### 6.2 SSL

A Hostinger configura SSL automaticamente via Let's Encrypt.
Se necessario, force HTTPS no hPanel:
**Websites** > `alsultan.tech` > **Security** > **SSL** > **Force HTTPS**

---

## 7. Seguranca

### 7.1 Restricao de Acesso

O sistema ja valida:
- Dominios de email autorizados
- Emails especificos na whitelist
- Sessao com expiracao de 24h

### 7.2 Usuarios Autorizados

Edite `assets/js/config.js`:

```javascript
allowedEmails: [
    'cohgus@gmail.com',
    'sdcbettega@gmail.com',
    'novo.usuario@email.com'  // Adicionar aqui
]
```

---

## 8. Troubleshooting

### OAuth nao funciona

1. Verifique se Client ID esta correto
2. Confirme origens autorizadas no Google Console
3. Verifique console do navegador para erros

### Deploy falha no GitHub Actions

1. Verifique se os secrets `FTP_USERNAME` e `FTP_PASSWORD` estao configurados
2. Confira logs do workflow em Actions
3. Teste conexao FTP manualmente

### Site nao carrega

1. Verifique propagacao DNS: `nslookup alsultan.tech`
2. Confirme SSL esta ativo no Hostinger
3. Verifique arquivos em `/domains/alsultan.tech/public_html`

### Sessao expira rapidamente

Ajuste `expirationHours` em `assets/js/config.js`

---

## Contato

Suporte tecnico: suporte@aibotize.com
