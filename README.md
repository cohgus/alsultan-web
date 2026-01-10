# Al Sultan - Centro de Comando WEB

> **Portal de Apresentacao dos Servicos de BI e Automacao Financeira da aiBotize para Al Sultan**

**Dominio**: [alsultan.tech](https://alsultan.tech)
**Versao**: 3.0
**Ultima Atualizacao**: 2026-01-09

---

## Sumario

1. [Visao Geral](#1-visao-geral)
2. [Contexto e Historia](#2-contexto-e-historia)
3. [Objetivos do Projeto](#3-objetivos-do-projeto)
4. [Importancia Estrategica](#4-importancia-estrategica)
5. [Arquitetura e Estrutura](#5-arquitetura-e-estrutura)
6. [Hierarquia de Acessos](#6-hierarquia-de-acessos)
7. [Funcionalidades](#7-funcionalidades)
8. [Identidade Visual](#8-identidade-visual)
9. [Tecnologias](#9-tecnologias)
10. [Configuracao e Uso](#10-configuracao-e-uso)
11. [Deploy e Hospedagem](#11-deploy-e-hospedagem)
12. [Integracao com Ecossistema](#12-integracao-com-ecossistema)
13. [Documentacao Relacionada](#13-documentacao-relacionada)
14. [Roadmap](#14-roadmap)
15. [Contato e Suporte](#15-contato-e-suporte)

---

## 1. Visao Geral

### O que e este projeto?

O **Al Sultan - Centro de Comando WEB** e a interface principal de apresentacao e acesso aos servicos de Business Intelligence (BI) e automacao financeira desenvolvidos pela **aiBotize** para o grupo **BCI/Al Sultan**.

Este portal serve como ponto unico de entrada para que os stakeholders da Al Sultan - desde CEOs e socios ate gerentes de filiais - acessem:

- **Dashboards de BI** (Metabase) com metricas financeiras e operacionais
- **Documentos compartilhados** via Google Drive (DREs, contratos, procedimentos)
- **Relatorios de prestacao de servicos** da aiBotize
- **Manuais e treinamentos** segmentados por nivel de acesso

### Principio Fundamental

> **"Este projeto NAO e sobre infraestrutura tecnica - e sobre APRESENTACAO de valor ao cliente."**

Detalhes tecnicos como nomes de bancos de dados, configuracoes de pipelines, workflows n8n e sistemas internos da aiBotize **nao devem aparecer aqui**. O foco e 100% na experiencia do usuario final da Al Sultan.

---

## 2. Contexto e Historia

### 2.1 O Cliente: BCI/Al Sultan

O **Grupo BCI (Bettega Comercio e Industria)** opera a rede **Al Sultan**, uma franquia de culinaria arabe presente no Parana, com:

| Tipo | Filiais | CNPJs |
|------|---------|-------|
| Proprias | Juveve, Agua Verde | 2 |
| Franquias | SJP, Ponta Grossa, Bonfiglioli | 3 |

**Stakeholders principais:**
- **Shay Bettega** - CEO, responsavel por decisoes estrategicas
- **Gustavo** - Socio, acompanha metricas financeiras
- **Gerentes de Filial** - Operacao diaria de cada loja

### 2.2 O Prestador: aiBotize

A **aiBotize** e uma empresa de automacao e inteligencia de dados que presta servicos de:

- Integracao de dados (ERP Cloudfy → Metabase)
- Business Intelligence e dashboards
- Automacao de processos financeiros
- Suporte tecnico especializado

### 2.3 Linha do Tempo do Projeto

| Periodo | Marco |
|---------|-------|
| 2025 Q4 | Inicio do projeto de automacao financeira |
| Dez/2025 | Primeira versao do Metabase BI |
| Jan/2026 | Piloto com Shay (CEO) e dashboards validados |
| Jan/2026 v2.0 | Implementacao de hierarquia de acessos |
| Jan/2026 v3.0 | Reestruturacao: foco em apresentacao, Drive e Relatorios |

### 2.4 Evolucao das Versoes

```
v1.0 (Dez/2025)    v2.0 (Jan/2026)      v3.0 (Jan/2026)
      │                  │                    │
      ▼                  ▼                    ▼
┌──────────────┐   ┌──────────────┐   ┌──────────────────────┐
│ Login basico │   │ + Google     │   │ + Documentos Drive   │
│ Links BI     │   │   OAuth      │   │ + Relatorios SLA     │
│              │   │ + Hierarquia │   │ + Paleta unificada   │
│              │   │   acessos    │   │ - Infra removida     │
└──────────────┘   └──────────────┘   └──────────────────────┘
```

---

## 3. Objetivos do Projeto

### 3.1 Objetivo Principal

> **Fornecer uma interface profissional, segura e intuitiva para que a Al Sultan acesse todos os entregaveis de BI e automacao da aiBotize.**

### 3.2 Objetivos Especificos

| # | Objetivo | Descricao | KPI |
|---|----------|-----------|-----|
| 1 | **Centralizar acesso** | Ponto unico para todos os recursos | 1 URL (alsultan.tech) |
| 2 | **Segmentar por hierarquia** | Cada nivel ve apenas o que deve | 4 niveis implementados |
| 3 | **Transparencia de servicos** | Mostrar entregas e SLA da aiBotize | Relatorios mensais |
| 4 | **Acesso a documentos** | Facilitar consulta ao Drive | Links categorizados |
| 5 | **Capacitar usuarios** | Manuais por perfil | 4 manuais disponiveis |
| 6 | **Seguranca** | Autenticacao Google + whitelist | OAuth + dominios autorizados |

### 3.3 Objetivos NAO Incluidos

| O que NAO e objetivo | Motivo |
|----------------------|--------|
| Exibir detalhes tecnicos | Confunde o usuario nao-tecnico |
| Gerenciar infraestrutura | Responsabilidade interna aiBotize |
| Substituir Metabase | O portal e um HUB, nao um BI |
| Processar dados | Dados vem prontos do Metabase |

---

## 4. Importancia Estrategica

### 4.1 Para a Al Sultan (Cliente)

| Beneficio | Impacto |
|-----------|---------|
| **Visao consolidada** | CEOs veem todas as filiais em um lugar |
| **Decisoes data-driven** | Dashboards com dados atualizados 3x/dia |
| **Controle de franquias** | Acompanhamento de royalties e performance |
| **Auditoria simplificada** | Documentos organizados e acessiveis |
| **Profissionalismo** | Portal com identidade visual da marca |

### 4.2 Para a aiBotize (Prestador)

| Beneficio | Impacto |
|-----------|---------|
| **Demonstracao de valor** | Cliente ve claramente as entregas |
| **Transparencia de SLA** | Relatorios mensais comprovam servico |
| **Reducao de suporte** | Manuais reduzem duvidas operacionais |
| **Profissionalismo** | Entrega com cara de produto, nao projeto |
| **Escalabilidade** | Modelo replicavel para outros clientes |

### 4.3 Metricas de Sucesso

| Metrica | Meta | Status |
|---------|------|--------|
| Usuarios ativos | 5+ (piloto) | Em andamento |
| Dashboards acessados/semana | 10+ | Monitorar |
| Tempo medio de sessao | 5+ min | Monitorar |
| Chamados de suporte | <5/mes | Meta |
| SLA de uptime | 99.5% | Hostinger |

---

## 5. Arquitetura e Estrutura

### 5.1 Diagrama de Arquitetura

```
┌─────────────────────────────────────────────────────────────────────────┐
│                           INTERNET                                       │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                          │
│     ┌─────────────────────────────────────────────────────────────┐     │
│     │                   alsultan.tech (Hostinger)                  │     │
│     │                                                              │     │
│     │   ┌────────────┐   ┌────────────┐   ┌────────────┐          │     │
│     │   │login.html  │──▶│index.html  │──▶│ manuais/   │          │     │
│     │   │            │   │(Dashboard) │   │ index.html │          │     │
│     │   └────────────┘   └────────────┘   └────────────┘          │     │
│     │         │                │                                   │     │
│     │         ▼                │                                   │     │
│     │   ┌──────────────────────┴──────────────────────────────┐   │     │
│     │   │                    assets/                           │   │     │
│     │   │   config.js    │    auth.js    │    sultan.css      │   │     │
│     │   │  (hierarquia)  │   (OAuth)     │   (estilos)        │   │     │
│     │   └─────────────────────────────────────────────────────┘   │     │
│     │                                                              │     │
│     └─────────────────────────────────────────────────────────────┘     │
│                │                    │                    │               │
│                ▼                    ▼                    ▼               │
│    ┌────────────────┐    ┌────────────────┐    ┌────────────────┐       │
│    │  Google OAuth  │    │   Metabase     │    │  Google Drive  │       │
│    │accounts.google │    │bi.alsultan.tech│    │  drive.google  │       │
│    │     .com       │    │                │    │    .com        │       │
│    └────────────────┘    └────────────────┘    └────────────────┘       │
│                                  │                                       │
│                                  ▼                                       │
│                         ┌────────────────┐                              │
│                         │   PostgreSQL   │                              │
│                         │   (Hostinger)  │                              │
│                         │  Gold Layer BI │                              │
│                         └────────────────┘                              │
│                                                                          │
└─────────────────────────────────────────────────────────────────────────┘
```

### 5.2 Estrutura de Arquivos

```
docs/web/
│
├── README.md                    # ESTE DOCUMENTO (diretrizes principais)
├── DEPLOY.md                    # Guia de deploy para Hostinger
├── CNAME                        # Configuracao de dominio customizado
│
├── index.html                   # Dashboard principal (Centro de Comando)
│   └── Secoes:
│       ├── Header (logo, usuario, status)
│       ├── Sidebar (navegacao)
│       ├── Acesso Rapido (botoes principais)
│       ├── Documentos Compartilhados (Drive)
│       ├── Relatorios de Servicos (SLA)
│       ├── Dashboards (links Metabase)
│       ├── Documentacao (manuais)
│       └── Footer (versao, creditos)
│
├── login.html                   # Autenticacao Google OAuth
│   └── Funcionalidades:
│       ├── Login com Google
│       ├── Validacao de email autorizado
│       ├── Modo demo para testes
│       └── Persistencia de sessao
│
├── manuais/
│   └── index.html               # Hub de manuais segmentado
│       └── 4 manuais por nivel:
│           ├── Manual Geral (todos)
│           ├── Manual Diretoria (nivel 90+)
│           ├── Manual Gerentes (nivel 50+)
│           └── Manual Analistas (nivel 70+)
│
├── assets/
│   ├── css/
│   │   └── sultan.css           # Design System centralizado
│   │       └── Componentes:
│   │           ├── Variaveis CSS (cores, espacamento)
│   │           ├── Glass cards
│   │           ├── Action cards
│   │           ├── Buttons
│   │           ├── Sidebar
│   │           └── Responsividade
│   │
│   └── js/
│       ├── config.js            # Configuracoes do sistema
│       │   └── Secoes:
│       │       ├── Google OAuth (clientId, dominios)
│       │       ├── Hierarquia de grupos (niveis)
│       │       ├── Usuarios cadastrados
│       │       ├── Filiais (CNPJs)
│       │       ├── URLs dos sistemas
│       │       ├── Links do Drive
│       │       ├── Relatorios de servicos
│       │       ├── Dashboards (IDs Metabase)
│       │       └── Funcoes helper
│       │
│       └── auth.js              # Modulo de autenticacao
│           └── Funcionalidades:
│               ├── initAuth()
│               ├── handleOAuthCallback()
│               ├── validateAndSave()
│               ├── checkSession()
│               └── logout()
│
├── specs/                       # Especificacoes tecnicas
│   ├── INDEX.md                 # Indice de especificacoes
│   ├── ORGANIZACAO-2026-01-09.md # Relatorio de organizacao
│   │
│   └── design/
│       ├── design.md            # Design Document principal
│       ├── style-guide.md       # Guia de estilo visual
│       ├── components.md        # Biblioteca de componentes
│       ├── dashboard-reestruturacao.md  # Spec v3.0
│       └── manuais-unificacao-paleta.md # Spec paleta
│
└── .github/
    └── workflows/
        └── deploy.yml           # CI/CD GitHub Actions
```

---

## 6. Hierarquia de Acessos

### 6.1 Niveis de Acesso

O sistema implementa 5 niveis hierarquicos sincronizados com o Metabase:

| Nivel | Grupo | ID | Quem e | Permissoes |
|-------|-------|----|--------|------------|
| 100 | Administrators | 2 | Equipe tecnica aiBotize | Acesso total + admin |
| 90 | Proprietarios | 3 | CEO e socios (Shay, Gustavo) | Todas filiais, DRE, Franquias |
| 70 | Equipe Gestao | 4 | Analistas financeiros | Analytics, Reports |
| 50 | Gerentes Filial | 5-9 | Gerentes de loja | Apenas propria filial |
| 0 | All Users | 1 | Base (todos) | Dashboards publicos |

### 6.2 Matriz de Permissoes Detalhada

```
                    │ Admin │ Proprietario │ Gestao │ Gerente │
                    │ (100) │    (90)      │  (70)  │  (50)   │
────────────────────┼───────┼──────────────┼────────┼─────────┤
DASHBOARDS          │       │              │        │         │
  DRE Gerencial     │   ✓   │      ✓       │   ✓    │    -    │
  Franquias/Royalt. │   ✓   │      ✓       │   -    │    -    │
  Performance Diaria│   ✓   │      ✓       │   ✓    │    ✓    │
  Visao Geral Vendas│   ✓   │      ✓       │   ✓    │    ✓    │
  Analise Cruzada   │   ✓   │      ✓       │   ✓    │    -    │
────────────────────┼───────┼──────────────┼────────┼─────────┤
DOCUMENTOS          │       │              │        │         │
  Financeiro        │   ✓   │      ✓       │   ✓    │    -    │
  Contratos         │   ✓   │      ✓       │   -    │    -    │
  Operacional       │   ✓   │      ✓       │   ✓    │    ✓    │
────────────────────┼───────┼──────────────┼────────┼─────────┤
MANUAIS             │       │              │        │         │
  Geral             │   ✓   │      ✓       │   ✓    │    ✓    │
  Diretoria         │   ✓   │      ✓       │   -    │    -    │
  Analistas         │   ✓   │      ✓       │   ✓    │    -    │
  Gerentes          │   ✓   │      ✓       │   ✓    │    ✓    │
────────────────────┼───────┼──────────────┼────────┼─────────┤
ADMIN               │       │              │        │         │
  Config Sistema    │   ✓   │      -       │   -    │    -    │
  Metabase Admin    │   ✓   │      -       │   -    │    -    │
```

### 6.3 Usuarios Cadastrados (Piloto)

| Email | Nome | Nivel | Grupos |
|-------|------|-------|--------|
| cohgus@aibotize.com | Al Sultan Tech | 100 | All Users, Administrators |
| cohgus@gmail.com | Gustavo Cohgus | 90 | All Users, Proprietarios |
| sdcbettega@gmail.com | Shay Bettega | 90 | All Users, Proprietarios |

### 6.4 Dominios Autorizados

```javascript
allowedDomains: [
    'alsultan.com.br',   // Emails corporativos Al Sultan
    'aibotize.com'       // Equipe tecnica aiBotize
]
```

---

## 7. Funcionalidades

### 7.1 Pagina de Login

| Funcionalidade | Descricao |
|----------------|-----------|
| Login Google OAuth | Autenticacao segura via Google |
| Validacao de dominio | Apenas dominios autorizados |
| Validacao de email | Whitelist de emails especificos |
| Modo demo | Acesso de teste sem Google |
| Persistencia | Sessao de 24 horas |
| Feedback visual | Toasts de sucesso/erro |

### 7.2 Dashboard Principal

| Secao | Funcionalidade |
|-------|----------------|
| **Header** | Logo, nome do usuario, avatar, status do sistema |
| **Sidebar** | Navegacao: Dashboard, Manuais, BI, Drive, Suporte |
| **Acesso Rapido** | Botoes para DRE, Performance, Franquias, Manuais |
| **Documentos** | Cards para pastas do Drive (Financeiro, Contratos, Operacional) |
| **Relatorios** | Cards de relatorios mensais com metricas de SLA |
| **Dashboards** | Links para dashboards Metabase por categoria |
| **Documentacao** | Links para manuais por perfil |
| **Footer** | Versao, creditos aiBotize |

### 7.3 Hub de Manuais

| Manual | Audiencia | Conteudo |
|--------|-----------|----------|
| Geral | Todos | Navegacao, filtros, exportacao |
| Diretoria | CEO/Socios | DRE, indicadores estrategicos |
| Gerentes | Gerentes | Rotina diaria, metas |
| Analistas | Equipe Gestao | SQL, KPIs avancados |

### 7.4 Integracao Google Drive

| Pasta | Conteudo | Nivel Minimo |
|-------|----------|--------------|
| Financeiro | DREs, balancetes, conciliacoes | 70 |
| Contratos | Franquias, fornecedores, parcerias | 90 |
| Operacional | Procedimentos, checklists, treinamentos | 50 |
| Relatorios | PDFs de prestacao de servicos | 50 |

---

## 8. Identidade Visual

### 8.1 Paleta de Cores (QUENTE)

A identidade visual segue a marca oficial Al Sultan com paleta quente:

```css
/* Cores Primarias */
--sultan-orange: #ea5512;        /* Laranja principal - CTAs */
--sultan-orange-dark: #c94510;   /* Hover states */
--sultan-orange-light: #ff6b2c;  /* Destaques */
--sultan-gold: #ffca07;          /* Badges, alertas */
--sultan-gold-light: #ffe066;    /* Hover gold */
--sultan-red: #e5123c;           /* Erros */
--sultan-teal: #0bb0a0;          /* Sucesso, online */

/* Cores Neutras */
--sultan-dark: #1a0a05;          /* Background dark */
--sultan-brown: #2d1810;         /* Cards dark */
--sultan-warm-brown: #3d251a;    /* Hover cards */
--sultan-cream: #faf6f0;         /* Texto sobre dark */
--sultan-sand: #f5f0e8;          /* Background light */

/* Gradientes */
--gradient-warm: linear-gradient(135deg, #ea5512 0%, #ffca07 100%);
--gradient-bg: linear-gradient(180deg, #1a0a05 0%, #2d1810 100%);
```

### 8.2 Tipografia

| Uso | Fonte | Pesos |
|-----|-------|-------|
| Titulos | Playfair Display | 400, 500, 600, 700, 800 |
| Corpo | Inter / Poppins | 300, 400, 500, 600, 700 |

### 8.3 Componentes Visuais

- **Glass Cards**: Efeito blur com borda sutil
- **Action Cards**: Hover com elevacao e sombra laranja
- **Buttons**: Gradiente quente com sombra
- **Sidebar**: Fundo escuro com links destacados
- **Toasts**: Sucesso (teal) / Erro (vermelho)

---

## 9. Tecnologias

### 9.1 Stack Frontend

| Tecnologia | Versao | Uso |
|------------|--------|-----|
| HTML5 | - | Estrutura semantica |
| CSS3 | - | Estilos com variaveis |
| Tailwind CSS | CDN | Classes utilitarias |
| JavaScript | ES6+ | Logica de autenticacao |

### 9.2 Servicos Externos

| Servico | Uso |
|---------|-----|
| Google OAuth | Autenticacao segura |
| Google Fonts | Tipografia (Playfair, Inter) |
| FontAwesome | Icones (v6.4.0) |
| Metabase | Dashboards de BI |
| Google Drive | Documentos compartilhados |

### 9.3 Infraestrutura

| Item | Detalhes |
|------|----------|
| **Hosting** | Hostinger Premium Web Hosting |
| **Servidor** | 46.202.145.166 |
| **SSL** | Let's Encrypt (automatico) |
| **CDN** | Nao (site estatico leve) |
| **CI/CD** | GitHub Actions |

---

## 10. Configuracao e Uso

### 10.1 Adicionar Novo Usuario

Editar `assets/js/config.js`:

```javascript
users: {
    'novo.usuario@alsultan.com.br': {
        name: 'Nome do Usuario',
        role: 'equipeGestao',     // ou 'proprietarios', 'filialJuveve', etc
        groupIds: [1, 4],         // [All Users, Equipe Gestao]
        isSuperuser: false,
        canAccessAdmin: false
    }
}
```

### 10.2 Adicionar Nova Filial

```javascript
branches: {
    7: { code: 7, name: 'Nova Filial', type: 'franquia', cnpj: '00.000.000/0001-00' }
},

groups: {
    filialNovaFilial: {
        id: 10,
        name: 'Filial Nova Filial',
        description: 'Gerente da filial Nova Filial',
        level: 50,
        branchCode: 7,
        permissions: ['branch_view', 'own_branch_data']
    }
}
```

### 10.3 Atualizar Links do Drive

```javascript
urls: {
    drive: {
        novaCategoria: 'https://drive.google.com/drive/folders/ID_REAL_DA_PASTA'
    }
}
```

### 10.4 Adicionar Novo Relatorio

```javascript
relatorios: {
    atual: {
        mes: 'Fevereiro 2026',
        url: 'https://drive.google.com/file/d/ID_DO_PDF_NOVO',
        entregas: 18,
        sla: 99
    },
    historico: [
        // Mover o anterior para historico
        { mes: 'Janeiro 2026', url: '...', entregas: 12, sla: 98 },
        ...
    ]
}
```

---

## 11. Deploy e Hospedagem

### 11.1 Deploy Automatico

```bash
git add .
git commit -m "Update: descricao da mudanca"
git push origin main

# GitHub Actions dispara automaticamente
# Deploy via FTP para Hostinger
```

### 11.2 Deploy Manual

```bash
# Via SFTP
sftp -P 65002 u688592187@46.202.145.166
cd /domains/alsultan.tech/public_html
put -r ./docs/web/*
```

### 11.3 Dados de Acesso

| Item | Valor |
|------|-------|
| Servidor | 46.202.145.166 |
| Usuario FTP | u688592187 |
| Porta SFTP | 65002 |
| Diretorio | /domains/alsultan.tech/public_html |

Ver [DEPLOY.md](./DEPLOY.md) para guia completo.

---

## 12. Integracao com Ecossistema

### 12.1 Posicao no Projeto Geral

```
Al Sultan/                              # Projeto raiz (automacao completa)
│
├── docs/
│   │
│   ├── web/                            # ◀◀◀ ESTE PROJETO (portal cliente)
│   │   ├── README.md                   # Diretrizes (este documento)
│   │   ├── index.html                  # Dashboard
│   │   └── ...
│   │
│   ├── bi/                             # Documentacao BI
│   │   ├── HIERARQUIA-ACESSOS-BI.md    # Sincronizado com config.js
│   │   ├── METABASE-CATALOG.md         # IDs dos dashboards
│   │   └── ...
│   │
│   ├── architecture/                   # Arquitetura tecnica
│   │   ├── ARQUITETURA-TECNICA.md
│   │   └── ...
│   │
│   ├── business/                       # Regras de negocio
│   │   ├── REGRAS-NEGOCIO-BCI.md
│   │   └── ...
│   │
│   └── project/                        # Contexto geral
│       └── CONTEXTO-PROJETO.md
│
├── n8n-workflows/                      # Workflows de automacao
├── src/                                # Codigo-fonte backend
└── .env.reference                      # Variaveis de ambiente
```

### 12.2 Fronteiras de Responsabilidade

| Responsabilidade | Projeto WEB | Projeto Principal |
|------------------|-------------|-------------------|
| Interface cliente | ✓ | - |
| Autenticacao OAuth | ✓ | - |
| Links externos | ✓ | - |
| Manuais usuario | ✓ | - |
| Configuracao BI | - | ✓ |
| Pipelines dados | - | ✓ |
| Workflows n8n | - | ✓ |
| Banco de dados | - | ✓ |
| APIs/Cloudfy | - | ✓ |

### 12.3 Sincronizacao de Dados

| Dado | Fonte de Verdade | Sincronizado Com |
|------|------------------|------------------|
| Hierarquia grupos | Metabase | config.js |
| IDs dashboards | Metabase | config.js |
| Usuarios autorizados | .env.reference | config.js |
| CNPJs filiais | Cloudfy | config.js |

---

## 13. Documentacao Relacionada

### 13.1 Documentacao Interna (WEB)

| Documento | Caminho | Descricao |
|-----------|---------|-----------|
| Guia de Deploy | [DEPLOY.md](./DEPLOY.md) | Como fazer deploy no Hostinger |
| Indice de Specs | [specs/INDEX.md](./specs/INDEX.md) | Navegacao na documentacao tecnica |
| Design Document | [specs/design/design.md](./specs/design/design.md) | Arquitetura e fluxos completos |
| Style Guide | [specs/design/style-guide.md](./specs/design/style-guide.md) | Cores, tipografia, espacamento |
| Components | [specs/design/components.md](./specs/design/components.md) | Biblioteca de componentes CSS |

### 13.2 Documentacao Externa (Projeto Principal)

| Documento | Caminho | Descricao |
|-----------|---------|-----------|
| Hierarquia BI | [../bi/HIERARQUIA-ACESSOS-BI.md](../bi/HIERARQUIA-ACESSOS-BI.md) | Grupos e permissoes Metabase |
| Catalogo Metabase | [../bi/METABASE-CATALOG.md](../bi/METABASE-CATALOG.md) | IDs e nomes dos dashboards |
| Contexto Projeto | [../project/CONTEXTO-PROJETO.md](../project/CONTEXTO-PROJETO.md) | Visao geral do projeto |
| Regras Negocio | [../business/REGRAS-NEGOCIO-BCI.md](../business/REGRAS-NEGOCIO-BCI.md) | Regras do cliente |
| Arquitetura | [../architecture/ARQUITETURA-TECNICA.md](../architecture/ARQUITETURA-TECNICA.md) | Stack tecnica completa |

### 13.3 Recursos Externos

| Recurso | URL |
|---------|-----|
| Site oficial Al Sultan | https://alsultan.com.br |
| Centro de Comando (producao) | https://alsultan.tech |
| Metabase BI | https://bi.alsultan.tech |
| Google Cloud Console | https://console.cloud.google.com |
| Hostinger hPanel | https://hpanel.hostinger.com |

---

## 14. Roadmap

### 14.1 Implementado (v3.0)

- [x] Login com Google OAuth
- [x] Hierarquia de 5 niveis de acesso
- [x] Dashboard Centro de Comando
- [x] Hub de manuais segmentado
- [x] Paleta visual unificada (quente)
- [x] Secao Documentos do Drive
- [x] Secao Relatorios de Servicos
- [x] Deploy automatico via GitHub Actions
- [x] Design System centralizado (sultan.css)

### 14.2 Proximas Versoes

| Feature | Prioridade | Versao Alvo |
|---------|------------|-------------|
| Filtro de dashboards por nivel | Alta | 3.1 |
| IDs reais do Google Drive | Alta | 3.0.1 |
| Widget de atividade do Drive | Media | 3.2 |
| Notificacoes de novos relatorios | Media | 3.2 |
| Modo escuro | Baixa | 4.0 |
| Internacionalizacao (EN) | Baixa | 4.0 |

### 14.3 Debito Tecnico

| Item | Impacto | Acao |
|------|---------|------|
| IDs do Drive sao placeholders | Alto | Substituir por IDs reais |
| Alguns arquivos em MAIUSCULAS | Baixo | Padronizar nomenclatura |
| CSS duplicado em HTMLs | Medio | Migrar para sultan.css |

---

## 15. Contato e Suporte

### 15.1 Canais de Suporte

| Canal | Contato | Uso |
|-------|---------|-----|
| Suporte Tecnico | suporte@aibotize.com | Problemas gerais |
| Desenvolvimento | cohgus@aibotize.com | Mudancas tecnicas |
| Chamados | https://app.alsultan.tech | Tickets formais |

### 15.2 Equipe

| Funcao | Responsavel |
|--------|-------------|
| Desenvolvimento | Equipe aiBotize |
| Design | Equipe aiBotize |
| Infra/DevOps | Equipe aiBotize |
| Produto | Gustavo (aiBotize) |
| Stakeholder | Shay Bettega (Al Sultan) |

---

## Changelog

| Versao | Data | Autor | Mudancas |
|--------|------|-------|----------|
| 3.0 | 2026-01-09 | aiBotize | Reestruturacao completa: Drive, Relatorios, paleta unificada |
| 2.3 | 2026-01-08 | aiBotize | Hierarquia de acessos BI implementada |
| 2.0 | 2026-01-07 | aiBotize | Login Google OAuth adicionado |
| 1.0 | 2025-12 | aiBotize | Versao inicial do portal |

---

*Documento mantido por aiBotize | Ultima atualizacao: 2026-01-09 | Versao 3.0*
