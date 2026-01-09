# Al Sultan - Style Guide
## Guia de Estilo Visual v1.0

**Data**: 2026-01-09
**Referencia**: Design Document v1.0

---

## 1. Identidade Visual

### 1.1 Sobre a Marca

O Al Sultan e uma rede de restaurantes de comida arabe com a tagline **"Exageradamente Gostoso"**. A identidade visual deve transmitir:

- **Calor e acolhimento**: Cores quentes remetem a culinaria arabe
- **Premium e sofisticacao**: Dourado como cor de destaque
- **Apetitoso e vibrante**: Laranja como cor principal
- **Confianca e profissionalismo**: Tons neutros para equilibrio

### 1.2 Logo e Icone

| Elemento | Uso | Especificacao |
|----------|-----|---------------|
| Emoji Taco | Favicon, Logo pequeno | `&#127790;` (Unicode) |
| Nome "AL SULTAN" | Titulos principais | Playfair Display 800 |
| Tagline | Subtitulos | Poppins 300, dourado em destaque |

---

## 2. Paleta de Cores

### 2.1 Cores Primarias

| Nome | Hex | RGB | Uso |
|------|-----|-----|-----|
| Sultan Orange | `#ea5512` | rgb(234, 85, 18) | CTA, links, icones |
| Sultan Orange Dark | `#c94510` | rgb(201, 69, 16) | Hover states |
| Sultan Orange Light | `#ff6b2c` | rgb(255, 107, 44) | Gradientes |
| Sultan Gold | `#ffca07` | rgb(255, 202, 7) | Destaques, badges |
| Sultan Gold Light | `#ffe066` | rgb(255, 224, 102) | Backgrounds claros |

### 2.2 Cores Semanticas

| Nome | Hex | Uso |
|------|-----|-----|
| Sultan Red | `#e5123c` | Erros, alertas criticos |
| Sultan Teal | `#0bb0a0` | Sucesso, confirmacao |
| Blue Info | `#3b82f6` | Informacao, links externos |
| Purple Analytics | `#8b5cf6` | Dados, graficos |

### 2.3 Cores Neutras

| Nome | Hex | Uso |
|------|-----|-----|
| Sand Light | `#faf6f0` | Background principal |
| Sand | `#f5ebe0` | Background secundario |
| Sand Dark | `#e6d5c3` | Bordas, divisores |
| Cream | `#fff8f0` | Background de cards |
| Brown Dark | `#2d1810` | Texto principal |
| Brown Medium | `#5c3d2e` | Texto secundario |

### 2.4 Gradientes

```css
/* Gradiente Quente - Botoes principais */
--gradient-warm: linear-gradient(135deg, #ea5512 0%, #ffca07 100%);

/* Gradiente Sunset - Fundos de destaque */
--gradient-sunset: linear-gradient(135deg, #ff6b2c 0%, #ea5512 50%, #c94510 100%);

/* Gradiente Sand - Fundos de pagina */
--gradient-sand: linear-gradient(180deg, #faf6f0 0%, #f5ebe0 100%);
```

### 2.5 Aplicacao de Cores

```
+-----------------------------------------------------------+
|  HEADER - gradient-sunset ou brown-dark                    |
+-----------------------------------------------------------+
|         |                                                  |
| SIDEBAR |  CONTENT AREA - sand-light ou cream              |
| brown   |                                                  |
| dark/   |  +------------------------------------------+    |
| cream   |  | CARD - cream com borda sand-dark          |    |
|         |  | Titulo: brown-dark                        |    |
|         |  | Texto: brown-medium                       |    |
|         |  | Icone: sultan-orange                      |    |
|         |  +------------------------------------------+    |
|         |                                                  |
+---------+--------------------------------------------------+
|  FOOTER - sand com borda sultan-gold/10                    |
+-----------------------------------------------------------+
```

---

## 3. Tipografia

### 3.1 Familias de Fonte

| Fonte | Uso | Import |
|-------|-----|--------|
| Playfair Display | Titulos, headings, brand | Google Fonts |
| Poppins | Corpo, labels, botoes | Google Fonts |
| Inter | Alternativa a Poppins | Google Fonts |

### 3.2 Escala Tipografica

| Elemento | Tamanho | Peso | Line Height | Letter Spacing |
|----------|---------|------|-------------|----------------|
| Display (Hero) | 4rem / 64px | 800 | 1.1 | 2px |
| H1 | 2.5rem / 40px | 700 | 1.2 | 1px |
| H2 | 2rem / 32px | 700 | 1.25 | 0 |
| H3 | 1.5rem / 24px | 600 | 1.3 | 0 |
| H4 | 1.25rem / 20px | 600 | 1.4 | 0 |
| Body Large | 1.1rem / 18px | 400 | 1.6 | 0 |
| Body | 1rem / 16px | 400 | 1.5 | 0 |
| Body Small | 0.875rem / 14px | 400 | 1.5 | 0 |
| Caption | 0.75rem / 12px | 500 | 1.4 | 0.5px |
| Label | 0.8rem / 13px | 500 | 1.2 | 1px |

### 3.3 Estilos de Texto

```css
/* Titulo Principal (Brand) */
.brand-title {
    font-family: 'Playfair Display', serif;
    font-size: 4rem;
    font-weight: 800;
    letter-spacing: 2px;
    text-shadow: 0 4px 20px rgba(0,0,0,0.3);
}

/* Titulo de Pagina */
.page-title {
    font-family: 'Playfair Display', serif;
    font-size: 2.2rem;
    font-weight: 700;
    color: var(--brown-dark);
}

/* Titulo de Secao */
.section-title {
    font-family: 'Poppins', sans-serif;
    font-size: 0.85rem;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 2px;
    color: var(--brown-medium);
}

/* Corpo de Texto */
.body-text {
    font-family: 'Poppins', sans-serif;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.6;
    color: var(--brown-dark);
}

/* Caption */
.caption {
    font-family: 'Poppins', sans-serif;
    font-size: 0.75rem;
    font-weight: 500;
    color: var(--brown-medium);
}
```

---

## 4. Espacamento

### 4.1 Sistema de Grid (8px base)

| Token | Valor | Uso |
|-------|-------|-----|
| `--space-1` | 4px | Gaps minimos |
| `--space-2` | 8px | Padding interno |
| `--space-3` | 12px | Gap entre items |
| `--space-4` | 16px | Padding padrao |
| `--space-5` | 20px | Padding de card |
| `--space-6` | 24px | Gap entre secoes |
| `--space-8` | 32px | Margin entre blocos |
| `--space-10` | 40px | Espacamento de pagina |
| `--space-12` | 48px | Espacamento de hero |

### 4.2 Aplicacao

```
+--------------------------------------------------+
|                    space-12 (48px)                |
|  +--------------------------------------------+  |
|  |              space-6 (24px)                |  |
|  |  +--------------------------------------+  |  |
|  |  | CARD         space-4 (16px)          |  |  |
|  |  |  +--------+  space-3 (12px)  +----+  |  |  |
|  |  |  | ICON   |                  |TEXT|  |  |  |
|  |  |  +--------+                  +----+  |  |  |
|  |  |              space-4 (16px)          |  |  |
|  |  +--------------------------------------+  |  |
|  |              space-6 (24px)                |  |
|  +--------------------------------------------+  |
|                    space-12 (48px)                |
+--------------------------------------------------+
```

---

## 5. Bordas e Sombras

### 5.1 Border Radius

| Token | Valor | Uso |
|-------|-------|-----|
| `--radius-sm` | 8px | Inputs, badges pequenos |
| `--radius-md` | 12px | Botoes, cards pequenos |
| `--radius-lg` | 16px | Cards padrao |
| `--radius-xl` | 20px | Cards grandes |
| `--radius-2xl` | 30px | Elementos destaque |
| `--radius-full` | 9999px | Pills, botoes pill |
| `--radius-circle` | 50% | Avatares |

### 5.2 Bordas

```css
/* Borda padrao */
border: 1px solid var(--sand-dark);

/* Borda sutil (cards glass) */
border: 1px solid rgba(234, 85, 18, 0.15);

/* Borda ativa */
border: 2px solid var(--sultan-orange);

/* Borda decorativa */
border-left: 3px solid var(--sultan-orange);
```

### 5.3 Sombras

```css
/* Sombra leve - Estado padrao */
--shadow-sm: 0 4px 15px rgba(0, 0, 0, 0.05);

/* Sombra media - Hover */
--shadow-md: 0 8px 30px rgba(234, 85, 18, 0.15);

/* Sombra forte - Modais, dropdowns */
--shadow-lg: 0 20px 60px rgba(0, 0, 0, 0.2);

/* Sombra de foco */
--shadow-focus: 0 0 0 3px rgba(234, 85, 18, 0.3);
```

---

## 6. Iconografia

### 6.1 Biblioteca de Icones

Utilizamos **FontAwesome 6.4.0** (Free) como biblioteca principal.

CDN:
```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
```

### 6.2 Icones por Contexto

| Contexto | Icone | Classe |
|----------|-------|--------|
| Dashboard | Quadrados | `fa-th-large` |
| Graficos/BI | Pizza | `fa-chart-pie` |
| Performance | Linha | `fa-chart-line` |
| Financeiro | Documento | `fa-file-invoice-dollar` |
| Loja/Filial | Loja | `fa-store` |
| Usuario | Pessoa | `fa-user` |
| Gerente | Pessoa formal | `fa-user-tie` |
| Admin | Coroa | `fa-crown` |
| Config | Engrenagem | `fa-cogs` |
| Banco de dados | Cilindro | `fa-database` |
| Manual/Docs | Livro | `fa-book` |
| Link externo | Seta | `fa-external-link-alt` |
| Sair/Logout | Porta | `fa-sign-out-alt` |
| Voltar | Seta esquerda | `fa-arrow-left` |
| Avancar | Seta direita | `fa-arrow-right` |
| Sucesso | Check | `fa-check-circle` |
| Erro | Exclamacao | `fa-exclamation-circle` |
| Info | Info | `fa-info-circle` |
| Seguranca | Escudo | `fa-shield-halved` |

### 6.3 Tamanhos de Icone

| Contexto | Tamanho | Classe FA |
|----------|---------|-----------|
| Inline com texto | 1em | (padrao) |
| Botoes | 1rem | - |
| Cards | 1.5rem - 2rem | `fa-lg` |
| Features | 2rem - 3rem | `fa-2x` |
| Hero | 3rem - 5rem | `fa-3x`, `fa-4x` |

---

## 7. Animacoes

### 7.1 Transicoes Padrao

```css
/* Transicao padrao */
transition: all 0.3s ease;

/* Transicao rapida (hover simples) */
transition: all 0.2s ease;

/* Transicao suave (cards, modais) */
transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

/* Transicao de entrada (toasts) */
transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
```

### 7.2 Animacoes de Entrada

```css
/* Fade In Up */
@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

/* Aplicacao */
.animate-fade-in {
    animation: fadeInUp 0.6s ease-out;
}
```

### 7.3 Animacoes de Estado

```css
/* Pulse (status online) */
@keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.5; }
}

/* Float (logo) */
@keyframes logoFloat {
    0%, 100% { transform: translateY(0) rotate(0deg); }
    50% { transform: translateY(-10px) rotate(2deg); }
}

/* Spin (loading) */
@keyframes spin {
    to { transform: rotate(360deg); }
}

/* Pattern Float (background decorativo) */
@keyframes patternFloat {
    0% { background-position: 0 0; }
    100% { background-position: 80px 80px; }
}
```

### 7.4 Hover Effects

```css
/* Card lift */
.card:hover {
    transform: translateY(-3px);
    box-shadow: var(--shadow-md);
}

/* Icon slide */
.arrow-icon {
    transition: transform 0.2s ease;
}
.card:hover .arrow-icon {
    transform: translateX(4px);
}

/* Link underline */
.link:hover {
    text-decoration: underline;
    text-underline-offset: 4px;
}
```

---

## 8. Responsividade

### 8.1 Breakpoints

| Nome | Largura | Uso |
|------|---------|-----|
| Mobile | < 640px | Smartphones |
| Tablet | 640px - 1024px | Tablets, mobile landscape |
| Desktop | > 1024px | Desktop, laptops |

### 8.2 Estrategia Mobile-First

```css
/* Mobile (padrao) */
.container { padding: 1rem; }
.grid { grid-template-columns: 1fr; }

/* Tablet */
@media (min-width: 640px) {
    .container { padding: 1.5rem; }
    .grid { grid-template-columns: repeat(2, 1fr); }
}

/* Desktop */
@media (min-width: 1024px) {
    .container { padding: 2rem; }
    .grid { grid-template-columns: repeat(3, 1fr); }
}
```

### 8.3 Componentes Responsivos

| Componente | Mobile | Tablet | Desktop |
|------------|--------|--------|---------|
| Sidebar | Hidden/Overlay | Hidden/Overlay | Visible |
| Header | Stacked | Inline | Inline |
| Cards Grid | 1 coluna | 2 colunas | 2-4 colunas |
| Quick Actions | Scroll horizontal | Grid 3 | Grid 4+ |
| Brand Features | Hidden | Icons only | Full |

---

## 9. Estados de UI

### 9.1 Estados Interativos

| Estado | Cor de Fundo | Cor de Borda | Outros |
|--------|--------------|--------------|--------|
| Default | cream | sand-dark | - |
| Hover | orange/10 | orange/30 | shadow-md |
| Active/Pressed | orange/20 | orange | translateY(-1px) |
| Focus | - | orange | shadow-focus |
| Disabled | sand | sand-dark | opacity: 0.5 |

### 9.2 Estados de Validacao

| Estado | Cor | Icone | Borda |
|--------|-----|-------|-------|
| Success | sultan-teal | fa-check-circle | teal |
| Error | sultan-red | fa-exclamation-circle | red |
| Warning | sultan-gold | fa-exclamation-triangle | gold |
| Info | blue-500 | fa-info-circle | blue |

### 9.3 Estados de Loading

```css
/* Spinner simples */
.spinner {
    width: 24px;
    height: 24px;
    border: 3px solid var(--sand);
    border-top-color: var(--sultan-orange);
    border-radius: 50%;
    animation: spin 0.8s linear infinite;
}

/* Overlay de carregamento */
.loading-overlay {
    position: fixed;
    inset: 0;
    background: rgba(45, 24, 16, 0.95);
    backdrop-filter: blur(10px);
    display: flex;
    align-items: center;
    justify-content: center;
}
```

---

## 10. Acessibilidade

### 10.1 Contraste de Cores

| Combinacao | Ratio | Status |
|------------|-------|--------|
| Brown Dark / Cream | 12.5:1 | AAA |
| Brown Medium / Cream | 7.8:1 | AAA |
| Sultan Orange / White | 4.6:1 | AA |
| Sultan Gold / Brown Dark | 9.2:1 | AAA |
| White / Sultan Orange | 4.6:1 | AA |

### 10.2 Focus States

```css
/* Focus visivel para navegacao por teclado */
:focus-visible {
    outline: 2px solid var(--sultan-orange);
    outline-offset: 2px;
}

/* Remover outline padrao */
:focus:not(:focus-visible) {
    outline: none;
}
```

### 10.3 ARIA Labels Recomendados

```html
<!-- Botoes com icone apenas -->
<button aria-label="Sair do sistema">
    <i class="fas fa-sign-out-alt" aria-hidden="true"></i>
</button>

<!-- Links externos -->
<a href="..." target="_blank" aria-label="Abrir Metabase BI (abre em nova aba)">
    Metabase BI
    <i class="fas fa-external-link-alt" aria-hidden="true"></i>
</a>

<!-- Status indicators -->
<span class="status-dot online" aria-label="Sistema online"></span>

<!-- Navegacao -->
<nav aria-label="Menu principal">...</nav>
```

---

## 11. Exemplos de Aplicacao

### 11.1 Card de Dashboard

```html
<a href="https://bi.alsultan.tech/dashboard/10" target="_blank" class="action-card">
    <div class="card-content">
        <div class="card-icon orange">
            <i class="fas fa-file-invoice-dollar"></i>
        </div>
        <div class="card-info">
            <h3 class="card-title">DRE Gerencial</h3>
            <p class="card-description">
                Demonstrativo de Resultado com margens e rentabilidade
            </p>
        </div>
        <i class="fas fa-arrow-right card-arrow"></i>
    </div>
</a>
```

### 11.2 Status Badge

```html
<div class="status-badge online">
    <span class="status-dot"></span>
    <span class="status-text">Sistema Online</span>
</div>
```

### 11.3 Quick Action Button

```html
<a href="..." class="quick-btn">
    <i class="fas fa-chart-line"></i>
    <span>Performance Diaria</span>
</a>
```

### 11.4 Level Badge

```html
<span class="level-badge owner">
    <i class="fas fa-crown"></i>
    Proprietario
</span>
```

---

## 12. Checklist de Implementacao

### 12.1 Para Novas Paginas

- [ ] Importar Google Fonts (Playfair Display + Poppins)
- [ ] Importar FontAwesome 6.4.0
- [ ] Importar sultan.css ou definir variaveis CSS
- [ ] Usar cores da paleta oficial
- [ ] Aplicar espacamento do sistema (multiplos de 8px)
- [ ] Testar responsividade em 3 breakpoints
- [ ] Verificar contraste de cores
- [ ] Adicionar focus states
- [ ] Adicionar ARIA labels onde necessario

### 12.2 Para Componentes

- [ ] Usar classes semanticas (action-card, quick-btn, etc)
- [ ] Aplicar estados hover/active/focus
- [ ] Incluir transicoes suaves
- [ ] Testar em modo claro (padrao)
- [ ] Documentar uso no style guide

---

**Documento criado em**: 2026-01-09
**Proxima revisao**: Apos implementacao da Fase 1
