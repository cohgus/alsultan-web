# Al Sultan WEB - Indice de Especificacoes

> Central de documentacao tecnica do portal alsultan.tech

---

## Documentos de Design

| Documento | Descricao | Status |
|-----------|-----------|--------|
| [design/design.md](./design/design.md) | Design Document principal - arquitetura, fluxos, componentes | Ativo |
| [design/style-guide.md](./design/style-guide.md) | Guia de estilo visual - cores, tipografia, espacamento | Ativo |
| [design/components.md](./design/components.md) | Biblioteca de componentes CSS reutilizaveis | Ativo |

---

## Especificacoes de Features

| Documento | Descricao | Status |
|-----------|-----------|--------|
| [design/dashboard-reestruturacao.md](./design/dashboard-reestruturacao.md) | Reestruturacao do dashboard v3.0 (Drive + Relatorios) | Implementado |
| [design/manuais-unificacao-paleta.md](./design/manuais-unificacao-paleta.md) | Unificacao da paleta de cores nos manuais | Implementado |

---

## Arquitetura

| Documento | Descricao | Status |
|-----------|-----------|--------|
| [architecture/integracao-sistemas.md](./architecture/integracao-sistemas.md) | Integracao com sistemas externos (Drive, PDF, Metabase, Entregas) | Ativo |

### Diagrama de Componentes

```
┌───────────────────────────────────────────────────────────────────────┐
│                        Portal alsultan.tech                            │
├───────────────────────────────────────────────────────────────────────┤
│                                                                        │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐                 │
│  │  login.html  │→→│  index.html  │→→│manuais/index │                 │
│  │              │  │  (Dashboard) │  │   (.html)    │                 │
│  └──────────────┘  └──────────────┘  └──────────────┘                 │
│         │                 │                 │                          │
│         ▼                 ▼                 ▼                          │
│  ┌─────────────────────────────────────────────────────────────┐      │
│  │                      assets/                                 │      │
│  │  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐          │      │
│  │  │ config.js   │  │  auth.js    │  │ sultan.css  │          │      │
│  │  │ (integracoes│  │  (OAuth)    │  │  (design)   │          │      │
│  │  │  + hierarq) │  │             │  │             │          │      │
│  │  └─────────────┘  └─────────────┘  └─────────────┘          │      │
│  └─────────────────────────────────────────────────────────────┘      │
│                                                                        │
└───────────────────────────────────────────────────────────────────────┘
         │              │              │              │
         ▼              ▼              ▼              ▼
  ┌─────────────┐ ┌─────────────┐ ┌─────────────┐ ┌─────────────┐
  │Google OAuth │ │  Metabase   │ │Google Drive │ │Stirling PDF │
  │   (auth)    │ │bi.alsultan. │ │   (docs)    │ │pdf.alsultan.│
  │             │ │    tech     │ │             │ │    tech     │
  └─────────────┘ └─────────────┘ └─────────────┘ └─────────────┘
                        │
                        ▼
                 ┌─────────────┐
                 │  Directus   │
                 │  (entregas  │
                 │   futuro)   │
                 └─────────────┘
```

### Fluxo de Dados

```
Usuario → login.html → Google OAuth → Validacao → localStorage
                                                        │
                                                        ▼
                                                  index.html
                                                   (Dashboard)
                                                        │
              ┌─────────────────────────────────────────┼─────────────────┐
              ▼                                         ▼                 ▼
      Dashboards BI                            Google Drive          Manuais
     (Metabase nova aba)                        (nova aba)         (HTML local)
```

---

## Matriz de Permissoes

| Recurso | Admin (100) | Proprietario (90) | Gestao (70) | Gerente (50) |
|---------|:-----------:|:-----------------:|:-----------:|:------------:|
| DRE Gerencial | ✓ | ✓ | ✓ | - |
| Franquias e Royalties | ✓ | ✓ | - | - |
| Performance Diaria | ✓ | ✓ | ✓ | ✓ |
| Visao Geral Vendas | ✓ | ✓ | ✓ | ✓ |
| Docs Financeiro | ✓ | ✓ | ✓ | - |
| Docs Contratos | ✓ | ✓ | - | - |
| Docs Operacional | ✓ | ✓ | ✓ | ✓ |
| Manual Diretoria | ✓ | ✓ | - | - |
| Manual Analistas | ✓ | ✓ | ✓ | - |
| Manual Gerentes | ✓ | ✓ | ✓ | ✓ |

---

## Stack Tecnologico

| Camada | Tecnologia | Versao |
|--------|------------|--------|
| Estrutura | HTML5 | - |
| Estilos | CSS3 + Variaveis | - |
| Utilitarios | Tailwind CSS | CDN |
| Logica | JavaScript ES6+ | - |
| Autenticacao | Google OAuth | v2 |
| Icones | FontAwesome | 6.4.0 |
| Fontes | Google Fonts | - |
| Deploy | GitHub Actions | - |
| Hosting | Hostinger | Premium |

---

## Historico de Mudancas

| Data | Versao | Documento | Mudanca |
|------|--------|-----------|---------|
| 2026-01-09 | 1.0 | integracao-sistemas.md | Arquitetura de integracoes (Drive, PDF, Metabase, Entregas) |
| 2026-01-09 | 3.0 | dashboard-reestruturacao.md | Criado - reestruturacao completa |
| 2026-01-09 | 3.0 | manuais-unificacao-paleta.md | Criado - paleta quente |
| 2026-01-09 | 1.0 | design.md | Documento inicial |
| 2026-01-09 | 1.0 | INDEX.md | Criado indice |

---

## Proximas Especificacoes Planejadas

- [x] Arquitetura de integracoes com sistemas externos (v4.0)
- [ ] Substituir IDs placeholders do Google Drive por IDs reais
- [ ] Implementacao de filtro de dashboards por nivel no frontend
- [ ] Widget de atividade do Drive (integracao API real)
- [ ] Notificacoes de novos relatorios
- [ ] Proxy webhook para proteger API keys (Stirling PDF)

---

*Mantido por: aiBotize | Atualizado: 2026-01-09*
