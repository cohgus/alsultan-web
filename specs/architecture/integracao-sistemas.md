# Arquitetura de Integracao de Sistemas Externos

> **Al Sultan Centro de Comando - Especificacao Tecnica de Integracoes**

**Documento**: ADR-001 - Integracoes Externas
**Status**: Aprovado
**Data**: 2026-01-09
**Versao**: 1.0

---

## Sumario

1. [Visao Geral](#1-visao-geral)
2. [Diagrama de Arquitetura](#2-diagrama-de-arquitetura)
3. [Google Drive](#3-google-drive)
4. [Stirling PDF](#4-stirling-pdf)
5. [Metabase BI](#5-metabase-bi)
6. [Entregas aiBotize](#6-entregas-aibotize)
7. [Endpoints e APIs](#7-endpoints-e-apis)
8. [Seguranca](#8-seguranca)
9. [Configuracao](#9-configuracao)
10. [Checklist de Implementacao](#10-checklist-de-implementacao)

---

## 1. Visao Geral

### 1.1 Objetivo

Integrar o Portal Al Sultan Centro de Comando (https://alsultan.tech) com sistemas externos para fornecer uma experiencia unificada de acesso a:

- **Documentos** via Google Drive
- **Manipulacao de PDFs** via Stirling PDF
- **Dashboards de BI** via Metabase
- **Tracking de Entregas** de servicos aiBotize

### 1.2 Principios de Design

| Principio | Descricao |
|-----------|-----------|
| **Frontend-First** | Integracoes via JavaScript no cliente quando possivel |
| **Lazy Loading** | Carregar dados sob demanda |
| **Graceful Degradation** | Sistema funciona mesmo se integracao falhar |
| **Security by Design** | Tokens nunca expostos no frontend |

### 1.3 Stack de Integracao

```
Portal Frontend (alsultan.tech)
       |
       +---> Google OAuth (autenticacao)
       |
       +---> Google Drive API (documentos)
       |
       +---> Stirling PDF API (pdf.alsultan.tech)
       |
       +---> Metabase Embed (bi.alsultan.tech)
       |
       +---> Directus API (entregas tracking)
```

---

## 2. Diagrama de Arquitetura

### 2.1 Arquitetura de Alto Nivel

```mermaid
flowchart TB
    subgraph Internet
        User([Usuario])
    end

    subgraph Portal["Portal alsultan.tech"]
        Login[login.html]
        Dashboard[index.html]
        ConfigJS[config.js]
    end

    subgraph GoogleCloud["Google Cloud"]
        OAuth[Google OAuth]
        Drive[Google Drive API]
        Folders[(Pastas Compartilhadas)]
    end

    subgraph Infrastructure["Infraestrutura aiBotize"]
        PDF[Stirling PDF\npdf.alsultan.tech]
        Metabase[Metabase BI\nbi.alsultan.tech]
        Directus[Directus API\ndirectus.alsultan.tech]
    end

    User --> Login
    Login --> OAuth
    OAuth --> Dashboard
    Dashboard --> ConfigJS
    ConfigJS --> Drive
    ConfigJS --> PDF
    ConfigJS --> Metabase
    ConfigJS --> Directus
    Drive --> Folders
```

### 2.2 Fluxo de Dados

```mermaid
sequenceDiagram
    participant U as Usuario
    participant P as Portal
    participant G as Google OAuth
    participant D as Google Drive
    participant S as Stirling PDF
    participant M as Metabase
    participant A as Directus API

    U->>P: Acessa alsultan.tech
    P->>G: Redirect para login
    G->>P: Token + User Info
    P->>P: Valida permissoes (config.js)

    par Carregar Documentos
        P->>D: Listar pastas
        D->>P: Lista de arquivos
    and Carregar Dashboards
        P->>M: URLs embarcadas
        M->>P: Iframe dashboards
    and Carregar Entregas
        P->>A: GET /items/entregas
        A->>P: JSON entregas
    end

    U->>P: Clica em PDF
    P->>S: Redirect para pdf.alsultan.tech
    S->>U: Interface Stirling PDF
```

### 2.3 Mapa de Componentes

```mermaid
graph LR
    subgraph Frontend
        A[index.html] --> B[config.js]
        A --> C[auth.js]
        A --> D[integrations.js]
    end

    subgraph Config
        B --> E[google.drive]
        B --> F[stirling.pdf]
        B --> G[metabase]
        B --> H[entregas]
    end

    subgraph APIs
        E --> I[Drive API v3]
        F --> J[PDF REST API]
        G --> K[Metabase Embed]
        H --> L[Directus REST]
    end
```

---

## 3. Google Drive

### 3.1 Visao Geral

Integracao com Google Drive para exibir documentos compartilhados da Al Sultan organizados por categoria.

### 3.2 Pastas Configuradas

| Pasta | Conteudo | Nivel Minimo | ID Placeholder |
|-------|----------|--------------|----------------|
| **Financeiro** | DREs, balancetes, conciliacoes | 70 | `FOLDER_FINANCEIRO_ID` |
| **Contratos** | Franquias, fornecedores, parcerias | 90 | `FOLDER_CONTRATOS_ID` |
| **Operacional** | Procedimentos, checklists, treinamentos | 50 | `FOLDER_OPERACIONAL_ID` |
| **Relatorios** | PDFs de prestacao de servicos aiBotize | 50 | `FOLDER_RELATORIOS_ID` |

### 3.3 Integracao

**Tipo**: Links diretos + Google Drive Embed

**Metodo de Acesso**:
1. **Links Diretos** - Usuario clica e abre no Google Drive
2. **Picker API** - (Futuro) Seletor de arquivos embarcado

### 3.4 Configuracao Necessaria

1. **Google Cloud Console**
   - Projeto: `clever-overview-388203`
   - API: Google Drive API habilitada
   - OAuth Client: `bialsultan`

2. **Pastas no Drive**
   - Criar pastas com nomes: Financeiro, Contratos, Operacional, Relatorios
   - Compartilhar com emails autorizados
   - Copiar IDs das pastas para config.js

3. **Permissoes**
   - Pastas devem estar em "Compartilhado comigo" dos usuarios
   - Ou usar conta de servico para acesso programatico

### 3.5 Estrutura no config.js

```javascript
drive: {
    enabled: true,
    apiKey: 'AIzaSyBL93FK_CLw5kEvDgTEF7B56iy9i6Co34A',
    folders: {
        root: {
            id: 'FOLDER_ROOT_ID',
            url: 'https://drive.google.com/drive/folders/FOLDER_ROOT_ID',
            name: 'Al Sultan - Documentos'
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
            description: 'Relatorios de prestacao de servicos'
        }
    }
}
```

---

## 4. Stirling PDF

### 4.1 Visao Geral

Servico de manipulacao de PDFs hospedado em `pdf.alsultan.tech` baseado no Stirling PDF.

### 4.2 Credenciais

| Parametro | Valor |
|-----------|-------|
| **URL** | `https://pdf.alsultan.tech` |
| **API Key** | `2e8adfa3-bba0-46b9-9925-95c0eb0d3eca` |
| **URL Interna** | `http://stirling-pdf:8080` |

### 4.3 Funcionalidades Disponiveis

| Funcionalidade | Endpoint | Descricao |
|----------------|----------|-----------|
| **Visualizar PDF** | `/pdf-viewer` | Renderizar PDFs no navegador |
| **Merge PDFs** | `/api/v1/merge` | Combinar multiplos PDFs |
| **Split PDF** | `/api/v1/split` | Dividir PDF em paginas |
| **Compress** | `/api/v1/compress` | Reduzir tamanho do arquivo |
| **Convert to Image** | `/api/v1/convert/pdf-to-image` | Exportar como imagem |
| **OCR** | `/api/v1/ocr` | Reconhecimento de texto |
| **Add Watermark** | `/api/v1/add-watermark` | Adicionar marca d'agua |

### 4.4 Integracao no Portal

**Tipo**: Link externo + API calls

**Casos de Uso**:
1. **Gerar PDF de Dashboard** - Capturar dashboard Metabase e converter
2. **Visualizar Relatorios** - Renderizar PDFs diretamente
3. **Manipular Documentos** - Merge, split, compress

### 4.5 Estrutura no config.js

```javascript
pdf: {
    enabled: true,
    url: 'https://pdf.alsultan.tech',
    apiKey: '2e8adfa3-bba0-46b9-9925-95c0eb0d3eca',
    features: {
        viewer: true,
        merge: true,
        split: true,
        compress: true,
        ocr: true,
        watermark: true
    },
    endpoints: {
        viewer: '/pdf-viewer',
        merge: '/api/v1/merge',
        split: '/api/v1/split',
        compress: '/api/v1/compress',
        convert: '/api/v1/convert/pdf-to-image',
        ocr: '/api/v1/ocr'
    }
}
```

### 4.6 Exemplo de API Call

```javascript
// Comprimir PDF via API
async function compressPDF(file) {
    const formData = new FormData();
    formData.append('fileInput', file);
    formData.append('optimizeLevel', '5');

    const response = await fetch(`${CONFIG.pdf.url}/api/v1/compress`, {
        method: 'POST',
        headers: {
            'X-API-Key': CONFIG.pdf.apiKey
        },
        body: formData
    });

    return await response.blob();
}
```

---

## 5. Metabase BI

### 5.1 Visao Geral

Dashboards de Business Intelligence hospedados em `bi.alsultan.tech`.

### 5.2 Credenciais

| Parametro | Valor |
|-----------|-------|
| **URL** | `https://bi.alsultan.tech` |
| **Admin Email** | `cohgus@aibotize.com` |
| **Login** | Google OAuth (mesmo do portal) |

### 5.3 Dashboards Disponiveis

| ID | Nome | Categoria | Nivel Minimo | Descricao |
|----|------|-----------|--------------|-----------|
| **5** | Visao Geral Vendas | Operacional | 50 | Vendas consolidadas todas filiais |
| **6** | Metricas Juveve | Filial | 50 | Performance da loja Juveve |
| **7** | Metricas Agua Verde | Filial | 50 | Performance da loja Agua Verde |
| **8** | Analise Cruzada | Gestao | 70 | Comparativo entre filiais |
| **10** | DRE Gerencial | Executivo | 70 | Demonstrativo de Resultados |
| **11** | Performance Diaria | Operacional | 50 | Metricas do dia |
| **12** | Franquias e Royalties | Executivo | 90 | Controle de franquias |

### 5.4 Integracao no Portal

**Tipo**: Links diretos + Embed (futuro)

**Metodos de Acesso**:
1. **Link Direto** - Redireciona para `bi.alsultan.tech/dashboard/{id}`
2. **Embed** - (Futuro) Dashboard embarcado via iframe com token

### 5.5 Estrutura no config.js

```javascript
metabase: {
    enabled: true,
    url: 'https://bi.alsultan.tech',
    embedEnabled: false, // Ativar quando configurar embed
    dashboards: {
        // Executivos (nivel 90+)
        franquias: {
            id: 12,
            name: 'Franquias e Royalties',
            category: 'executivo',
            minLevel: 90,
            description: 'Controle de franquias e royalties'
        },
        // Gestao (nivel 70+)
        dreGerencial: {
            id: 10,
            name: 'DRE Gerencial',
            category: 'executivo',
            minLevel: 70,
            description: 'Demonstrativo de Resultado do Exercicio'
        },
        analiseCruzada: {
            id: 8,
            name: 'Analise Cruzada',
            category: 'gestao',
            minLevel: 70,
            description: 'Comparativo entre filiais'
        },
        // Operacional (nivel 50+)
        visaoGeral: {
            id: 5,
            name: 'Visao Geral Vendas',
            category: 'operacional',
            minLevel: 50,
            description: 'Vendas consolidadas'
        },
        performanceDiaria: {
            id: 11,
            name: 'Performance Diaria',
            category: 'operacional',
            minLevel: 50,
            description: 'Metricas do dia atual'
        },
        // Por Filial
        juveve: {
            id: 6,
            name: 'Metricas Loja Juveve',
            category: 'filial',
            minLevel: 50,
            branchCode: 1,
            description: 'Performance filial Juveve'
        },
        aguaVerde: {
            id: 7,
            name: 'Metricas Loja Agua Verde',
            category: 'filial',
            minLevel: 50,
            branchCode: 2,
            description: 'Performance filial Agua Verde'
        }
    }
}
```

### 5.6 Helper Functions

```javascript
// Obter URL do dashboard
CONFIG.getDashboardUrl = function(dashboardKey) {
    const dashboard = this.metabase.dashboards[dashboardKey];
    if (dashboard) {
        return `${this.metabase.url}/dashboard/${dashboard.id}`;
    }
    return this.metabase.url;
};

// Listar dashboards por nivel
CONFIG.getDashboardsForLevel = function(userLevel) {
    return Object.entries(this.metabase.dashboards)
        .filter(([key, dash]) => dash.minLevel <= userLevel)
        .map(([key, dash]) => ({ key, ...dash }));
};
```

---

## 6. Entregas aiBotize

### 6.1 Visao Geral

Sistema de tracking de entregas mensais de servicos da aiBotize para Al Sultan.

### 6.2 Fonte de Dados

**Opcao 1: Estatico no config.js** (Atual)
- Dados atualizados manualmente
- Simples e sem dependencias

**Opcao 2: API Directus** (Futuro)
- Collection `entregas_aibotize` no Directus
- Atualizado via workflow n8n

### 6.3 Estrutura de Dados

```javascript
entregas: {
    // Servico de tracking habilitado
    enabled: true,

    // Fonte: 'static' ou 'api'
    source: 'static',

    // Configuracao API (quando source = 'api')
    api: {
        url: 'https://directus.alsultan.tech',
        collection: 'entregas_aibotize',
        token: 'UW_V2SpBF_b8QBpUapNzuX1HoHj7LdZv'
    },

    // Relatorio atual
    atual: {
        mes: 'Janeiro 2026',
        periodo: '2026-01',
        url: 'https://drive.google.com/file/d/RELATORIO_JAN_2026_ID',
        entregas: 12,
        slaAtingido: 98,
        slaMeta: 95,
        destaques: [
            'Implementacao hierarquia de acessos',
            'Portal Centro de Comando v3.0',
            'Dashboards DRE Gerencial'
        ]
    },

    // Historico
    historico: [
        {
            mes: 'Dezembro 2025',
            periodo: '2025-12',
            url: 'https://drive.google.com/file/d/RELATORIO_DEZ_2025_ID',
            entregas: 15,
            slaAtingido: 100,
            slaMeta: 95
        },
        {
            mes: 'Novembro 2025',
            periodo: '2025-11',
            url: 'https://drive.google.com/file/d/RELATORIO_NOV_2025_ID',
            entregas: 10,
            slaAtingido: 95,
            slaMeta: 95
        }
    ],

    // Categorias de entregas
    categorias: {
        bi: { name: 'Business Intelligence', icon: 'fa-chart-bar' },
        automacao: { name: 'Automacao', icon: 'fa-robot' },
        integracao: { name: 'Integracoes', icon: 'fa-plug' },
        suporte: { name: 'Suporte', icon: 'fa-headset' },
        documentacao: { name: 'Documentacao', icon: 'fa-book' }
    }
}
```

### 6.4 Timeline de Implementacoes

```mermaid
gantt
    title Timeline de Entregas aiBotize 2025-2026
    dateFormat  YYYY-MM
    section Q4 2025
    Pipeline Bronze-Silver    :done, 2025-10, 2025-11
    Metabase BI v1           :done, 2025-11, 2025-12
    Dashboards Operacionais  :done, 2025-12, 2026-01
    section Q1 2026
    Portal Centro Comando    :done, 2026-01, 2026-01
    Hierarquia Acessos       :done, 2026-01, 2026-01
    Integracoes Drive/PDF    :active, 2026-01, 2026-02
    API Entregas             :2026-02, 2026-03
```

---

## 7. Endpoints e APIs

### 7.1 Tabela Resumo

| Sistema | Endpoint | Metodo | Autenticacao |
|---------|----------|--------|--------------|
| Google Drive | `https://www.googleapis.com/drive/v3/files` | GET | OAuth2 |
| Stirling PDF | `https://pdf.alsultan.tech/api/v1/*` | POST | API Key |
| Metabase | `https://bi.alsultan.tech/api/*` | GET/POST | Session |
| Directus | `https://directus.alsultan.tech/items/*` | GET | Bearer Token |

### 7.2 Google Drive API

```http
# Listar arquivos de uma pasta
GET https://www.googleapis.com/drive/v3/files
Authorization: Bearer {oauth_token}
Query: q='{folder_id}' in parents

# Resposta
{
  "files": [
    {
      "id": "file123",
      "name": "DRE_Janeiro_2026.pdf",
      "mimeType": "application/pdf",
      "webViewLink": "https://drive.google.com/file/d/file123/view"
    }
  ]
}
```

### 7.3 Stirling PDF API

```http
# Comprimir PDF
POST https://pdf.alsultan.tech/api/v1/compress
X-API-Key: 2e8adfa3-bba0-46b9-9925-95c0eb0d3eca
Content-Type: multipart/form-data

# Body
fileInput: [arquivo.pdf]
optimizeLevel: 5

# Resposta
[PDF binario comprimido]
```

### 7.4 Directus API (Entregas)

```http
# Listar entregas
GET https://directus.alsultan.tech/items/entregas_aibotize
Authorization: Bearer UW_V2SpBF_b8QBpUapNzuX1HoHj7LdZv

# Resposta
{
  "data": [
    {
      "id": 1,
      "mes": "Janeiro 2026",
      "entregas": 12,
      "sla_atingido": 98,
      "relatorio_url": "https://drive.google.com/..."
    }
  ]
}
```

---

## 8. Seguranca

### 8.1 Principios

| Principio | Implementacao |
|-----------|---------------|
| **Minimo Privilegio** | Usuarios acessam apenas dados do seu nivel |
| **Tokens Seguros** | API keys nunca expostas no frontend publico |
| **Validacao Dupla** | Frontend + Backend validam permissoes |
| **Auditoria** | Logs de acesso em cada sistema |

### 8.2 Protecao de Credenciais

```javascript
// ERRADO - Nunca fazer
const API_KEY = '2e8adfa3-bba0-46b9-9925-95c0eb0d3eca'; // Exposto!

// CORRETO - Usar proxy backend ou variaveis de ambiente
// Opcao 1: Proxy via n8n webhook
fetch('https://webhook.alsultan.tech/pdf-proxy', {
    method: 'POST',
    body: formData
});

// Opcao 2: Serverless function na Hostinger
// API key fica no servidor
```

### 8.3 CORS e Headers

```javascript
// Headers de seguranca para requisicoes
const securityHeaders = {
    'X-Content-Type-Options': 'nosniff',
    'X-Frame-Options': 'SAMEORIGIN',
    'Referrer-Policy': 'strict-origin-when-cross-origin'
};
```

### 8.4 Matriz de Permissoes por Sistema

| Sistema | Admin (100) | Proprietario (90) | Gestao (70) | Gerente (50) |
|---------|-------------|-------------------|-------------|--------------|
| Drive - Financeiro | Full | Full | Read | - |
| Drive - Contratos | Full | Read | - | - |
| Drive - Operacional | Full | Full | Full | Read |
| Stirling PDF | Full | Full | Full | Read |
| Metabase | Admin | All Dashboards | Gestao | Filial |
| Entregas API | Full | Read | Read | - |

---

## 9. Configuracao

### 9.1 config.js Completo

A estrutura completa do `config.js` deve incluir todas as integracoes:

```javascript
const CONFIG = {
    // Versao e metadata
    version: '3.1',
    lastUpdate: '2026-01-09',

    // Google OAuth (existente)
    google: { ... },

    // Hierarquia de grupos (existente)
    groups: { ... },

    // Usuarios (existente)
    users: { ... },

    // Filiais (existente)
    branches: { ... },

    // === INTEGRACOES ===

    // Google Drive
    drive: {
        enabled: true,
        apiKey: 'AIzaSyBL93FK_CLw5kEvDgTEF7B56iy9i6Co34A',
        folders: { ... }
    },

    // Stirling PDF
    pdf: {
        enabled: true,
        url: 'https://pdf.alsultan.tech',
        apiKey: '2e8adfa3-bba0-46b9-9925-95c0eb0d3eca',
        endpoints: { ... }
    },

    // Metabase BI
    metabase: {
        enabled: true,
        url: 'https://bi.alsultan.tech',
        dashboards: { ... }
    },

    // Entregas aiBotize
    entregas: {
        enabled: true,
        source: 'static',
        atual: { ... },
        historico: [ ... ]
    },

    // URLs centralizadas
    urls: {
        portal: 'https://alsultan.tech',
        metabase: 'https://bi.alsultan.tech',
        pdf: 'https://pdf.alsultan.tech',
        support: 'https://app.alsultan.tech',
        directus: 'https://directus.alsultan.tech'
    }
};
```

### 9.2 Variaveis de Ambiente

As credenciais sensiveis devem estar no `.env.reference`:

```bash
# Google Drive
GOOGLE_API_KEY=AIzaSyBL93FK_CLw5kEvDgTEF7B56iy9i6Co34A
DRIVE_FOLDER_ROOT=FOLDER_ROOT_ID
DRIVE_FOLDER_FINANCEIRO=FOLDER_FINANCEIRO_ID
DRIVE_FOLDER_CONTRATOS=FOLDER_CONTRATOS_ID
DRIVE_FOLDER_OPERACIONAL=FOLDER_OPERACIONAL_ID
DRIVE_FOLDER_RELATORIOS=FOLDER_RELATORIOS_ID

# Stirling PDF
PDF_URL=https://pdf.alsultan.tech
PDF_API_KEY=2e8adfa3-bba0-46b9-9925-95c0eb0d3eca

# Metabase
METABASE_URL=https://bi.alsultan.tech
```

---

## 10. Checklist de Implementacao

### 10.1 Google Drive

- [ ] Criar pastas no Google Drive da conta Al Sultan
- [ ] Nomear pastas: Financeiro, Contratos, Operacional, Relatorios
- [ ] Copiar IDs das pastas (URL apos /folders/)
- [ ] Compartilhar pastas com usuarios autorizados
- [ ] Atualizar config.js com IDs reais
- [ ] Testar links no portal

### 10.2 Stirling PDF

- [x] Servico ja disponivel em pdf.alsultan.tech
- [x] API Key configurada
- [ ] Adicionar secao de "Ferramentas PDF" no portal
- [ ] Implementar botao "Gerar PDF do Dashboard"
- [ ] Criar proxy webhook para proteger API key

### 10.3 Metabase BI

- [x] Dashboards ja configurados (IDs 5-12)
- [x] Login via Google OAuth funcionando
- [ ] Atualizar config.js com novos dashboards
- [ ] Filtrar dashboards por nivel de acesso no portal
- [ ] (Futuro) Configurar embed com token seguro

### 10.4 Entregas aiBotize

- [x] Dados estaticos no config.js
- [ ] Criar collection `entregas_aibotize` no Directus
- [ ] Criar workflow n8n para atualizar entregas
- [ ] Migrar para source: 'api'
- [ ] Adicionar grafico de SLA no portal

---

## Anexos

### A. Referencias

- [Google Drive API v3 Documentation](https://developers.google.com/drive/api/v3/reference)
- [Stirling PDF GitHub](https://github.com/Stirling-Tools/Stirling-PDF)
- [Metabase Embedding Documentation](https://www.metabase.com/docs/latest/embedding)
- [Directus API Reference](https://docs.directus.io/reference/introduction.html)

### B. Changelog

| Versao | Data | Descricao |
|--------|------|-----------|
| 1.0 | 2026-01-09 | Documento inicial - arquitetura de integracoes |

---

*Documento criado por: Arquiteto Prisma*
*Projeto: Al Sultan Centro de Comando*
*Data: 2026-01-09*
