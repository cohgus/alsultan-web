# Design Document: Reestruturacao do Dashboard Al Sultan

**Data**: 2026-01-09
**Versao**: 1.0
**Autor**: Prisma Design Agent
**Status**: Em Implementacao
**Prioridade**: Alta

---

## 1. Overview

### 1.1 Objetivo

Reestruturar o dashboard (index.html) para focar na **apresentacao do BI e servicos** para a hierarquia BCI/Al Sultan, removendo detalhes tecnicos e adicionando areas de colaboracao e prestacao de servicos.

### 1.2 Mudancas de Escopo

| REMOVER | ADICIONAR |
|---------|-----------|
| Card "Status da Infraestrutura" | Secao "Documentos Compartilhados" (Drive) |
| Nomes tecnicos (Directus, n8n, PostgreSQL, Redis, RabbitMQ) | Secao "Acompanhamento Drive" (Shay/Leo/Financeiro) |
| Detalhes de pipeline (Bronze/Silver/Gold, Medallion) | Secao "Relatorios de Prestacao de Servicos" |
| Links para sistemas tecnicos (Portainer, Grafana) | Interface simplificada focada em BI |
| Contagem de collections/workflows | Metricas de valor para o cliente |

### 1.3 Publico-Alvo

- **Proprietarios (Level 90)**: Shay, Leo - Visao executiva + documentos estrategicos
- **Equipe Gestao (Level 70)**: Analistas financeiros - Relatorios e analises
- **Gerentes (Level 50)**: Por filial - Dashboards operacionais

---

## 2. Nova Estrutura do Dashboard

### 2.1 Layout Proposto

```
+------------------------------------------------------------------+
|  SIDEBAR                        |  HEADER (Painel de Controle)    |
|  - Painel                       +----------------------------------+
|  - Manuais                      |                                  |
|  - Dashboards BI                |  ACESSO RAPIDO                   |
|  - Documentos                   |  [DRE] [Performance] [Franquias] |
|  - Relatorios                   |                                  |
|                                 +----------------------------------+
|                                 |                                  |
|                                 |  SEUS DASHBOARDS (por nivel)     |
|                                 |  +--------+  +--------+          |
|                                 |  | DRE    |  | Vendas |          |
|                                 |  +--------+  +--------+          |
|                                 |                                  |
|                                 +----------------------------------+
|                                 |                                  |
|                                 |  DOCUMENTOS COMPARTILHADOS       |
|                                 |  [Pasta Financeiro] [Contratos]  |
|                                 |  [Movimentacao recente...]       |
|                                 |                                  |
|                                 +----------------------------------+
|                                 |                                  |
|                                 |  RELATORIOS PRESTACAO SERVICOS   |
|                                 |  [Janeiro 2026] [Dezembro 2025]  |
|                                 |                                  |
|  USER INFO                      +----------------------------------+
|  [Avatar] [Nome] [Logout]       |  FOOTER                          |
+------------------------------------------------------------------+
```

### 2.2 Secoes Detalhadas

#### A. Acesso Rapido (Manter/Simplificar)
- DRE Gerencial
- Performance Diaria
- Franquias (apenas para nivel 90+)
- Ver Manuais

#### B. Seus Dashboards (NOVA - Personalizada por nivel)
- Cards de dashboard filtrados por nivel de acesso
- Baseado em CONFIG.dashboards e minLevel

#### C. Documentos Compartilhados (NOVA)
- Links para pastas do Google Drive
- Pastas: Financeiro, Contratos, Operacional
- Widget de atividade recente do Drive

#### D. Relatorios de Prestacao de Servicos (NOVA)
- Relatorios mensais da aiBotize
- Status de entregas
- Historico de servicos

---

## 3. Especificacao dos Componentes

### 3.1 Secao: Documentos Compartilhados

```html
<!-- DOCUMENTOS COMPARTILHADOS -->
<div class="section-title">Documentos Compartilhados</div>
<div class="docs-grid">

    <!-- Card Pasta Financeiro -->
    <a href="https://drive.google.com/drive/folders/FOLDER_ID" target="_blank" class="doc-card">
        <div class="doc-icon">
            <i class="fas fa-folder"></i>
        </div>
        <div class="doc-content">
            <div class="doc-title">Financeiro</div>
            <div class="doc-desc">DREs, balancetes, conciliacoes</div>
        </div>
        <i class="fas fa-external-link-alt doc-arrow"></i>
    </a>

    <!-- Card Pasta Contratos -->
    <a href="https://drive.google.com/drive/folders/FOLDER_ID" target="_blank" class="doc-card">
        <div class="doc-icon contratos">
            <i class="fas fa-file-contract"></i>
        </div>
        <div class="doc-content">
            <div class="doc-title">Contratos</div>
            <div class="doc-desc">Franquias, fornecedores, parcerias</div>
        </div>
        <i class="fas fa-external-link-alt doc-arrow"></i>
    </a>

    <!-- Card Pasta Operacional -->
    <a href="https://drive.google.com/drive/folders/FOLDER_ID" target="_blank" class="doc-card">
        <div class="doc-icon operacional">
            <i class="fas fa-clipboard-list"></i>
        </div>
        <div class="doc-content">
            <div class="doc-title">Operacional</div>
            <div class="doc-desc">Procedimentos, checklists, treinamentos</div>
        </div>
        <i class="fas fa-external-link-alt doc-arrow"></i>
    </a>

</div>

<!-- Atividade Recente do Drive -->
<div class="drive-activity">
    <div class="activity-header">
        <i class="fas fa-clock"></i>
        <span>Atividade Recente</span>
    </div>
    <div class="activity-list">
        <div class="activity-item">
            <i class="fas fa-file-pdf"></i>
            <span>DRE_Janeiro_2026.pdf foi adicionado</span>
            <span class="activity-time">ha 2 horas</span>
        </div>
        <div class="activity-item">
            <i class="fas fa-file-excel"></i>
            <span>Balancete_Dez2025.xlsx atualizado</span>
            <span class="activity-time">ontem</span>
        </div>
    </div>
</div>
```

### 3.2 CSS: Documentos Compartilhados

```css
/* Grid de Documentos */
.docs-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
    margin-bottom: 1.5rem;
}

@media (max-width: 1024px) {
    .docs-grid { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 640px) {
    .docs-grid { grid-template-columns: 1fr; }
}

/* Card de Documento */
.doc-card {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1rem;
    background: white;
    border: 1px solid var(--sand-dark);
    border-radius: 12px;
    text-decoration: none;
    transition: all 0.2s ease;
}

.doc-card:hover {
    border-color: var(--sultan-orange);
    box-shadow: 0 4px 15px rgba(234, 85, 18, 0.1);
    transform: translateY(-2px);
}

.doc-icon {
    width: 44px;
    height: 44px;
    border-radius: 10px;
    background: rgba(234, 85, 18, 0.1);
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--sultan-orange);
    font-size: 1.1rem;
}

.doc-icon.contratos {
    background: rgba(139, 92, 246, 0.1);
    color: #8b5cf6;
}

.doc-icon.operacional {
    background: rgba(11, 176, 160, 0.1);
    color: var(--sultan-teal);
}

.doc-content {
    flex: 1;
}

.doc-title {
    font-weight: 600;
    color: var(--brown-dark);
    margin-bottom: 0.25rem;
}

.doc-desc {
    font-size: 0.75rem;
    color: var(--brown-medium);
}

.doc-arrow {
    color: var(--brown-medium);
    opacity: 0.4;
    font-size: 0.8rem;
}

.doc-card:hover .doc-arrow {
    color: var(--sultan-orange);
    opacity: 1;
}

/* Atividade do Drive */
.drive-activity {
    background: white;
    border: 1px solid var(--sand-dark);
    border-radius: 12px;
    padding: 1rem;
    margin-bottom: 2rem;
}

.activity-header {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.85rem;
    font-weight: 600;
    color: var(--brown-dark);
    margin-bottom: 0.75rem;
}

.activity-header i {
    color: var(--sultan-orange);
}

.activity-list {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

.activity-item {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 0.5rem;
    background: var(--sand-light);
    border-radius: 8px;
    font-size: 0.8rem;
    color: var(--brown-medium);
}

.activity-item i {
    color: var(--sultan-orange);
    width: 16px;
}

.activity-time {
    margin-left: auto;
    font-size: 0.7rem;
    color: var(--brown-light);
}
```

### 3.3 Secao: Relatorios de Prestacao de Servicos

```html
<!-- RELATORIOS PRESTACAO DE SERVICOS -->
<div class="section-title">Relatorios de Prestacao de Servicos</div>
<div class="reports-container">

    <div class="reports-header">
        <div class="reports-info">
            <i class="fas fa-file-alt"></i>
            <span>Relatorios mensais de entregas e servicos aiBotize</span>
        </div>
        <a href="#" class="btn-link">
            Ver todos <i class="fas fa-arrow-right"></i>
        </a>
    </div>

    <div class="reports-grid">

        <!-- Relatorio Janeiro 2026 -->
        <a href="https://drive.google.com/file/d/FILE_ID" target="_blank" class="report-card current">
            <div class="report-badge">Atual</div>
            <div class="report-icon">
                <i class="fas fa-file-pdf"></i>
            </div>
            <div class="report-content">
                <div class="report-title">Janeiro 2026</div>
                <div class="report-meta">
                    <span><i class="fas fa-check-circle"></i> 12 entregas</span>
                    <span><i class="fas fa-clock"></i> 98% SLA</span>
                </div>
            </div>
        </a>

        <!-- Relatorio Dezembro 2025 -->
        <a href="https://drive.google.com/file/d/FILE_ID" target="_blank" class="report-card">
            <div class="report-icon">
                <i class="fas fa-file-pdf"></i>
            </div>
            <div class="report-content">
                <div class="report-title">Dezembro 2025</div>
                <div class="report-meta">
                    <span><i class="fas fa-check-circle"></i> 15 entregas</span>
                    <span><i class="fas fa-clock"></i> 100% SLA</span>
                </div>
            </div>
        </a>

        <!-- Relatorio Novembro 2025 -->
        <a href="https://drive.google.com/file/d/FILE_ID" target="_blank" class="report-card">
            <div class="report-icon">
                <i class="fas fa-file-pdf"></i>
            </div>
            <div class="report-content">
                <div class="report-title">Novembro 2025</div>
                <div class="report-meta">
                    <span><i class="fas fa-check-circle"></i> 10 entregas</span>
                    <span><i class="fas fa-clock"></i> 95% SLA</span>
                </div>
            </div>
        </a>

    </div>

</div>
```

### 3.4 CSS: Relatorios de Prestacao de Servicos

```css
/* Container de Relatorios */
.reports-container {
    background: white;
    border: 1px solid var(--sand-dark);
    border-radius: 16px;
    padding: 1.5rem;
    margin-bottom: 2rem;
}

.reports-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1rem;
}

.reports-info {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    font-size: 0.9rem;
    color: var(--brown-dark);
}

.reports-info i {
    color: var(--sultan-orange);
}

.btn-link {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.85rem;
    font-weight: 600;
    color: var(--sultan-orange);
    text-decoration: none;
}

.btn-link:hover {
    color: var(--sultan-orange-dark);
}

.btn-link i {
    font-size: 0.75rem;
    transition: transform 0.2s;
}

.btn-link:hover i {
    transform: translateX(4px);
}

/* Grid de Relatorios */
.reports-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
}

@media (max-width: 1024px) {
    .reports-grid { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 640px) {
    .reports-grid { grid-template-columns: 1fr; }
}

/* Card de Relatorio */
.report-card {
    position: relative;
    display: flex;
    align-items: flex-start;
    gap: 1rem;
    padding: 1rem;
    background: var(--sand-light);
    border: 1px solid transparent;
    border-radius: 12px;
    text-decoration: none;
    transition: all 0.2s ease;
}

.report-card:hover {
    border-color: var(--sultan-orange);
    background: var(--cream);
}

.report-card.current {
    border-color: var(--sultan-teal);
    background: rgba(11, 176, 160, 0.05);
}

.report-badge {
    position: absolute;
    top: -8px;
    right: 12px;
    padding: 2px 8px;
    background: var(--sultan-teal);
    color: white;
    font-size: 0.65rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    border-radius: 10px;
}

.report-icon {
    width: 40px;
    height: 40px;
    border-radius: 10px;
    background: rgba(234, 85, 18, 0.1);
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--sultan-orange);
    font-size: 1rem;
}

.report-content {
    flex: 1;
}

.report-title {
    font-weight: 600;
    color: var(--brown-dark);
    margin-bottom: 0.5rem;
}

.report-meta {
    display: flex;
    gap: 1rem;
    font-size: 0.7rem;
    color: var(--brown-medium);
}

.report-meta i {
    color: var(--sultan-teal);
    margin-right: 0.25rem;
}
```

---

## 4. Elementos a Remover do index.html

### 4.1 Card de Infraestrutura (linhas 896-961)

Remover completamente o bloco:
```html
<!-- Infrastructure Status -->
<div class="infra-card">
    ...todo o conteudo...
</div>
```

### 4.2 Links Tecnicos da Sidebar

Remover ou ocultar links para:
- n8n Flows (link externo tecnico)
- Directus (link externo tecnico)

Manter apenas:
- Metabase BI (apresentacao de dados)
- Atendimento/Suporte

### 4.3 CSS de Infraestrutura

Remover estilos nao utilizados apos remocao do card:
- `.infra-card`
- `.infra-header`
- `.infra-grid`
- `.infra-item`
- `.infra-dot`
- `.infra-footer`

---

## 5. Atualizacao da Sidebar

### 5.1 Nova Estrutura

```html
<nav class="sidebar-nav">
    <div class="nav-section">
        <div class="nav-section-title">Principal</div>
        <a href="#" class="nav-link active">
            <i class="fas fa-th-large"></i>
            <span>Painel</span>
        </a>
        <a href="manuais/" class="nav-link">
            <i class="fas fa-book"></i>
            <span>Manuais</span>
        </a>
    </div>

    <div class="nav-section">
        <div class="nav-section-title">Business Intelligence</div>
        <a href="https://bi.alsultan.tech" target="_blank" class="nav-link">
            <i class="fas fa-chart-pie"></i>
            <span>Dashboards BI</span>
            <i class="fas fa-external-link-alt external-icon"></i>
        </a>
    </div>

    <div class="nav-section">
        <div class="nav-section-title">Documentos</div>
        <a href="https://drive.google.com/drive/folders/FOLDER_ID" target="_blank" class="nav-link">
            <i class="fab fa-google-drive"></i>
            <span>Google Drive</span>
            <i class="fas fa-external-link-alt external-icon"></i>
        </a>
    </div>

    <div class="nav-section">
        <div class="nav-section-title">Suporte</div>
        <a href="https://app.alsultan.tech" target="_blank" class="nav-link">
            <i class="fas fa-headset"></i>
            <span>Atendimento</span>
            <i class="fas fa-external-link-alt external-icon"></i>
        </a>
    </div>
</nav>
```

---

## 6. Configuracao do config.js

### 6.1 Adicionar URLs do Drive

```javascript
// Adicionar em CONFIG.urls
urls: {
    portal: 'https://alsultan.tech',
    metabase: 'https://bi.alsultan.tech',
    support: 'https://app.alsultan.tech',

    // NOVAS URLs - Drive
    drive: {
        root: 'https://drive.google.com/drive/folders/ROOT_FOLDER_ID',
        financeiro: 'https://drive.google.com/drive/folders/FINANCEIRO_FOLDER_ID',
        contratos: 'https://drive.google.com/drive/folders/CONTRATOS_FOLDER_ID',
        operacional: 'https://drive.google.com/drive/folders/OPERACIONAL_FOLDER_ID',
        relatorios: 'https://drive.google.com/drive/folders/RELATORIOS_FOLDER_ID'
    }
},

// Adicionar configuracao de relatorios
relatorios: {
    atual: {
        mes: 'Janeiro 2026',
        url: 'https://drive.google.com/file/d/FILE_ID',
        entregas: 12,
        sla: 98
    },
    historico: [
        { mes: 'Dezembro 2025', url: '...', entregas: 15, sla: 100 },
        { mes: 'Novembro 2025', url: '...', entregas: 10, sla: 95 }
    ]
}
```

---

## 7. Permissoes por Nivel

### 7.1 Visibilidade de Secoes

| Secao | Level 50 | Level 70 | Level 90 | Level 100 |
|-------|:--------:|:--------:|:--------:|:---------:|
| Acesso Rapido | Parcial | Sim | Sim | Sim |
| Seus Dashboards | Filtrado | Filtrado | Todos | Todos |
| Documentos Drive | Parcial | Sim | Sim | Sim |
| Relatorios Servicos | Nao | Sim | Sim | Sim |
| Manuais | Filtrado | Filtrado | Todos | Todos |

### 7.2 Documentos por Nivel

| Pasta | Gerentes (50) | Gestao (70) | Proprietarios (90) |
|-------|:-------------:|:-----------:|:------------------:|
| Financeiro | Nao | Sim | Sim |
| Contratos | Nao | Nao | Sim |
| Operacional | Sim | Sim | Sim |
| Relatorios | Nao | Sim | Sim |

---

## 8. Implementacao

### 8.1 Ordem de Execucao

1. Atualizar `config.js` com novas URLs e configuracoes
2. Remover card de infraestrutura do `index.html`
3. Atualizar sidebar (remover links tecnicos)
4. Adicionar secao "Documentos Compartilhados"
5. Adicionar secao "Relatorios de Prestacao de Servicos"
6. Implementar filtragem por nivel de acesso
7. Testar todas as funcionalidades
8. Unificar paleta em `manuais/index.html`

### 8.2 Estimativa

| Tarefa | Tempo |
|--------|-------|
| Atualizar config.js | 15 min |
| Remover infraestrutura | 10 min |
| Atualizar sidebar | 15 min |
| Adicionar secao Documentos | 30 min |
| Adicionar secao Relatorios | 30 min |
| Implementar filtragem | 45 min |
| Testes | 30 min |
| **Total** | **~3 horas** |

---

## 9. Proximos Passos

1. [ ] Obter IDs das pastas do Google Drive
2. [ ] Implementar mudancas no index.html
3. [ ] Criar relatorio modelo de prestacao de servicos
4. [ ] Testar com usuarios de diferentes niveis
5. [ ] Unificar paleta dos manuais

---

**Documento criado em**: 2026-01-09
**Status**: Aguardando implementacao
