# Al Sultan - Component Library
## Biblioteca de Componentes Reutilizaveis v1.0

**Data**: 2026-01-09
**Referencia**: Design Document v1.0, Style Guide v1.0

---

## 1. Overview

Este documento define todos os componentes reutilizaveis do Centro de Comando Al Sultan, com codigo CSS pronto para implementacao.

---

## 2. Variaveis CSS Base

```css
:root {
    /* ===== CORES PRIMARIAS (Brand Al Sultan) ===== */
    --sultan-orange: #ea5512;
    --sultan-orange-dark: #c94510;
    --sultan-orange-light: #ff6b2c;
    --sultan-gold: #ffca07;
    --sultan-gold-light: #ffe066;
    --sultan-red: #e5123c;
    --sultan-teal: #0bb0a0;

    /* ===== CORES NEUTRAS ===== */
    --sand-light: #faf6f0;
    --sand: #f5ebe0;
    --sand-dark: #e6d5c3;
    --cream: #fff8f0;
    --brown-dark: #2d1810;
    --brown-medium: #5c3d2e;

    /* ===== GRADIENTES ===== */
    --gradient-warm: linear-gradient(135deg, #ea5512 0%, #ffca07 100%);
    --gradient-sunset: linear-gradient(135deg, #ff6b2c 0%, #ea5512 50%, #c94510 100%);
    --gradient-sand: linear-gradient(180deg, #faf6f0 0%, #f5ebe0 100%);

    /* ===== ESPACAMENTO ===== */
    --space-1: 0.25rem;
    --space-2: 0.5rem;
    --space-3: 0.75rem;
    --space-4: 1rem;
    --space-5: 1.25rem;
    --space-6: 1.5rem;
    --space-8: 2rem;
    --space-10: 2.5rem;
    --space-12: 3rem;

    /* ===== BORDER RADIUS ===== */
    --radius-sm: 8px;
    --radius-md: 12px;
    --radius-lg: 16px;
    --radius-xl: 20px;
    --radius-2xl: 30px;
    --radius-full: 9999px;

    /* ===== SOMBRAS ===== */
    --shadow-sm: 0 4px 15px rgba(0, 0, 0, 0.05);
    --shadow-md: 0 8px 30px rgba(234, 85, 18, 0.15);
    --shadow-lg: 0 20px 60px rgba(0, 0, 0, 0.2);
    --shadow-focus: 0 0 0 3px rgba(234, 85, 18, 0.3);

    /* ===== TRANSICOES ===== */
    --transition-fast: all 0.2s ease;
    --transition-base: all 0.3s ease;
    --transition-smooth: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
```

---

## 3. Layout Components

### 3.1 Page Container

```css
.page-container {
    min-height: 100vh;
    background: var(--gradient-sand);
    color: var(--brown-dark);
}

/* Variante: Split Layout (Login) */
.split-container {
    display: flex;
    min-height: 100vh;
}

.split-side {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: var(--space-12);
}

@media (max-width: 1024px) {
    .split-container {
        flex-direction: column;
    }
    .split-side {
        padding: var(--space-8);
        min-height: 50vh;
    }
}
```

### 3.2 Sidebar

```css
.sidebar {
    width: 256px;
    background: rgba(45, 24, 16, 0.03);
    border-right: 1px solid var(--sand-dark);
    display: flex;
    flex-direction: column;
}

.sidebar-header {
    padding: var(--space-6);
    border-bottom: 1px solid var(--sand-dark);
}

.sidebar-nav {
    flex: 1;
    padding: var(--space-4) 0;
}

.sidebar-section-title {
    padding: 0 var(--space-4);
    margin-bottom: var(--space-2);
    font-size: 0.625rem;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: var(--brown-medium);
    opacity: 0.6;
}

.sidebar-footer {
    padding: var(--space-4);
    border-top: 1px solid var(--sand-dark);
}
```

### 3.3 Sidebar Link

```css
.sidebar-link {
    display: flex;
    align-items: center;
    gap: var(--space-3);
    padding: var(--space-3) var(--space-6);
    font-size: 0.875rem;
    color: var(--brown-medium);
    text-decoration: none;
    transition: var(--transition-fast);
}

.sidebar-link:hover {
    background: rgba(234, 85, 18, 0.08);
    color: var(--brown-dark);
}

.sidebar-link.active {
    background: rgba(234, 85, 18, 0.12);
    border-left: 3px solid var(--sultan-orange);
    color: var(--brown-dark);
}

.sidebar-link i {
    width: 20px;
    color: var(--brown-medium);
    opacity: 0.6;
    transition: var(--transition-fast);
}

.sidebar-link:hover i,
.sidebar-link.active i {
    color: var(--sultan-orange);
    opacity: 1;
}

.sidebar-link .external-icon {
    margin-left: auto;
    font-size: 0.75rem;
    opacity: 0.4;
}
```

### 3.4 Header

```css
.page-header {
    position: sticky;
    top: 0;
    z-index: 10;
    background: rgba(250, 246, 240, 0.9);
    backdrop-filter: blur(16px);
    border-bottom: 1px solid var(--sand-dark);
    padding: var(--space-4) var(--space-8);
}

.header-content {
    display: flex;
    align-items: center;
    justify-content: between;
}

.header-title {
    font-family: 'Playfair Display', serif;
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--brown-dark);
}

.header-subtitle {
    font-size: 0.875rem;
    color: var(--brown-medium);
}
```

### 3.5 Main Content

```css
.main-content {
    flex: 1;
    overflow-y: auto;
}

.content-area {
    padding: var(--space-8);
}

.content-section {
    margin-bottom: var(--space-8);
}

.section-title {
    font-size: 0.75rem;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: var(--brown-medium);
    margin-bottom: var(--space-4);
}
```

---

## 4. Card Components

### 4.1 Glass Card

```css
.glass-card {
    background: rgba(234, 85, 18, 0.03);
    backdrop-filter: blur(16px);
    border: 1px solid rgba(234, 85, 18, 0.1);
    border-radius: var(--radius-xl);
    padding: var(--space-6);
    transition: var(--transition-base);
}

.glass-card:hover {
    background: rgba(234, 85, 18, 0.06);
    border-color: rgba(234, 85, 18, 0.2);
}
```

### 4.2 Action Card (Clicavel)

```css
.action-card {
    display: block;
    background: var(--cream);
    border: 1px solid var(--sand-dark);
    border-radius: var(--radius-lg);
    padding: var(--space-5);
    text-decoration: none;
    color: inherit;
    transition: var(--transition-smooth);
}

.action-card:hover {
    border-color: var(--sultan-orange);
    transform: translateY(-3px);
    box-shadow: var(--shadow-md);
}

.action-card-content {
    display: flex;
    align-items: center;
    gap: var(--space-4);
}

.action-card-icon {
    width: 48px;
    height: 48px;
    border-radius: var(--radius-md);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.25rem;
    flex-shrink: 0;
}

/* Variantes de cor do icone */
.action-card-icon.orange {
    background: rgba(234, 85, 18, 0.15);
    color: var(--sultan-orange);
}
.action-card-icon.blue {
    background: rgba(59, 130, 246, 0.15);
    color: #3b82f6;
}
.action-card-icon.green {
    background: rgba(11, 176, 160, 0.15);
    color: var(--sultan-teal);
}
.action-card-icon.purple {
    background: rgba(139, 92, 246, 0.15);
    color: #8b5cf6;
}
.action-card-icon.gold {
    background: rgba(255, 202, 7, 0.2);
    color: #c9940a;
}

.action-card-info {
    flex: 1;
    min-width: 0;
}

.action-card-title {
    font-weight: 500;
    color: var(--brown-dark);
    margin-bottom: var(--space-1);
    transition: var(--transition-fast);
}

.action-card:hover .action-card-title {
    color: var(--sultan-orange);
}

.action-card-description {
    font-size: 0.75rem;
    color: var(--brown-medium);
    line-height: 1.4;
}

.action-card-arrow {
    color: var(--sultan-orange);
    opacity: 0.5;
    transition: var(--transition-smooth);
}

.action-card:hover .action-card-arrow {
    opacity: 1;
    transform: translateX(4px);
}
```

### 4.3 Info Card (Estatico)

```css
.info-card {
    background: var(--cream);
    border: 1px solid var(--sand-dark);
    border-radius: var(--radius-lg);
    padding: var(--space-5);
}

.info-card-header {
    display: flex;
    align-items: center;
    gap: var(--space-3);
    margin-bottom: var(--space-4);
}

.info-card-icon {
    width: 36px;
    height: 36px;
    border-radius: var(--radius-sm);
    background: rgba(234, 85, 18, 0.1);
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--sultan-orange);
    font-size: 0.875rem;
}

.info-card-title {
    font-weight: 500;
    color: var(--brown-dark);
}

.info-card-list {
    list-style: none;
    padding: 0;
    margin: 0;
}

.info-card-item {
    display: flex;
    align-items: center;
    gap: var(--space-2);
    padding: var(--space-2) 0;
    font-size: 0.875rem;
    color: var(--brown-medium);
}

.info-card-item i {
    width: 16px;
    font-size: 0.75rem;
}

.info-card-item i.success { color: var(--sultan-teal); }
.info-card-item i.warning { color: var(--sultan-gold); }
.info-card-item i.error { color: var(--sultan-red); }
.info-card-item i.info { color: var(--sultan-orange); }
```

### 4.4 Feature Card (Brand Side)

```css
.feature-card {
    display: flex;
    align-items: center;
    gap: var(--space-4);
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(5px);
    padding: var(--space-4) var(--space-6);
    border-radius: var(--radius-full);
    border: 1px solid rgba(255, 255, 255, 0.15);
    color: white;
    transition: var(--transition-base);
}

.feature-card:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: translateX(10px);
}

.feature-card-icon {
    width: 40px;
    height: 40px;
    background: var(--sultan-gold);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--brown-dark);
    font-size: 1rem;
}

.feature-card-text {
    font-size: 0.95rem;
    font-weight: 500;
}

@media (max-width: 1024px) {
    .feature-card-text {
        display: none;
    }
    .feature-card {
        padding: var(--space-3);
    }
}
```

### 4.5 Status Card

```css
.status-card {
    display: flex;
    align-items: center;
    gap: var(--space-2);
    padding: var(--space-3);
    background: var(--cream);
    border-radius: var(--radius-sm);
}

.status-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    flex-shrink: 0;
}

.status-dot.online {
    background: #22c55e;
    animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

.status-dot.offline {
    background: var(--sultan-red);
}

.status-dot.warning {
    background: var(--sultan-gold);
}

.status-info {
    min-width: 0;
}

.status-label {
    font-size: 0.625rem;
    color: var(--brown-medium);
    opacity: 0.7;
}

.status-value {
    font-size: 0.875rem;
    font-weight: 500;
    color: var(--brown-dark);
}

@keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.5; }
}
```

---

## 5. Button Components

### 5.1 Button Primary

```css
.btn-primary {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: var(--space-3);
    padding: var(--space-4) var(--space-8);
    background: var(--gradient-warm);
    border: none;
    border-radius: var(--radius-md);
    font-family: 'Poppins', sans-serif;
    font-size: 1rem;
    font-weight: 600;
    color: white;
    cursor: pointer;
    text-decoration: none;
    transition: var(--transition-smooth);
    box-shadow: 0 4px 15px rgba(234, 85, 18, 0.3);
}

.btn-primary:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 25px rgba(234, 85, 18, 0.4);
}

.btn-primary:active {
    transform: translateY(-1px);
}

.btn-primary:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none;
}
```

### 5.2 Button Secondary (Google-style)

```css
.btn-secondary {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: var(--space-4);
    padding: var(--space-4) var(--space-8);
    background: white;
    border: 2px solid var(--sand-dark);
    border-radius: var(--radius-lg);
    font-family: 'Poppins', sans-serif;
    font-size: 1rem;
    font-weight: 600;
    color: var(--brown-dark);
    cursor: pointer;
    text-decoration: none;
    transition: var(--transition-smooth);
    box-shadow: var(--shadow-sm);
}

.btn-secondary:hover {
    border-color: var(--sultan-orange);
    box-shadow: var(--shadow-md);
    transform: translateY(-3px);
}

.btn-secondary:active {
    transform: translateY(-1px);
}

.btn-secondary svg,
.btn-secondary img {
    width: 24px;
    height: 24px;
}
```

### 5.3 Quick Button

```css
.quick-btn {
    display: inline-flex;
    align-items: center;
    gap: var(--space-2);
    padding: var(--space-2) var(--space-4);
    background: rgba(234, 85, 18, 0.08);
    border: 1px solid rgba(234, 85, 18, 0.15);
    border-radius: var(--radius-sm);
    font-family: 'Poppins', sans-serif;
    font-size: 0.875rem;
    font-weight: 500;
    color: var(--brown-dark);
    text-decoration: none;
    transition: var(--transition-fast);
}

.quick-btn:hover {
    background: rgba(234, 85, 18, 0.15);
    border-color: rgba(234, 85, 18, 0.3);
}

.quick-btn i {
    color: var(--sultan-orange);
}
```

### 5.4 Icon Button

```css
.btn-icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    background: transparent;
    border: none;
    border-radius: var(--radius-sm);
    color: var(--brown-medium);
    cursor: pointer;
    transition: var(--transition-fast);
}

.btn-icon:hover {
    background: rgba(234, 85, 18, 0.1);
    color: var(--sultan-orange);
}

/* Variante menor */
.btn-icon.sm {
    width: 32px;
    height: 32px;
    font-size: 0.875rem;
}
```

### 5.5 Link Button

```css
.btn-link {
    display: inline-flex;
    align-items: center;
    gap: var(--space-2);
    background: none;
    border: none;
    padding: 0;
    font-family: 'Poppins', sans-serif;
    font-size: 0.875rem;
    font-weight: 600;
    color: var(--sultan-orange);
    cursor: pointer;
    text-decoration: none;
    transition: var(--transition-fast);
}

.btn-link:hover {
    color: var(--sultan-orange-dark);
}

.btn-link i {
    transition: var(--transition-fast);
}

.btn-link:hover i {
    transform: translateX(4px);
}
```

---

## 6. Form Components

### 6.1 Input Field

```css
.form-input {
    width: 100%;
    padding: var(--space-4);
    background: white;
    border: 2px solid var(--sand-dark);
    border-radius: var(--radius-md);
    font-family: 'Poppins', sans-serif;
    font-size: 1rem;
    color: var(--brown-dark);
    transition: var(--transition-fast);
}

.form-input::placeholder {
    color: var(--brown-medium);
    opacity: 0.6;
}

.form-input:hover {
    border-color: var(--brown-medium);
}

.form-input:focus {
    outline: none;
    border-color: var(--sultan-orange);
    box-shadow: var(--shadow-focus);
}

.form-input:disabled {
    background: var(--sand);
    opacity: 0.6;
    cursor: not-allowed;
}

/* Input com icone */
.input-with-icon {
    position: relative;
}

.input-with-icon .form-input {
    padding-left: 48px;
}

.input-with-icon i {
    position: absolute;
    left: var(--space-4);
    top: 50%;
    transform: translateY(-50%);
    color: var(--brown-medium);
    opacity: 0.6;
}

.input-with-icon:focus-within i {
    color: var(--sultan-orange);
    opacity: 1;
}
```

### 6.2 Form Label

```css
.form-label {
    display: block;
    margin-bottom: var(--space-2);
    font-size: 0.875rem;
    font-weight: 500;
    color: var(--brown-dark);
}

.form-label.required::after {
    content: '*';
    color: var(--sultan-red);
    margin-left: 4px;
}
```

### 6.3 Form Group

```css
.form-group {
    margin-bottom: var(--space-6);
}

.form-error {
    margin-top: var(--space-2);
    font-size: 0.75rem;
    color: var(--sultan-red);
    display: flex;
    align-items: center;
    gap: var(--space-1);
}

.form-error i {
    font-size: 0.875rem;
}
```

---

## 7. Feedback Components

### 7.1 Toast Notification

```css
.toast {
    position: fixed;
    bottom: var(--space-8);
    left: 50%;
    transform: translateX(-50%) translateY(100px);
    padding: var(--space-4) var(--space-8);
    border-radius: var(--radius-md);
    display: flex;
    align-items: center;
    gap: var(--space-3);
    font-weight: 500;
    box-shadow: var(--shadow-lg);
    z-index: 200;
    opacity: 0;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.toast.show {
    transform: translateX(-50%) translateY(0);
    opacity: 1;
}

.toast.success {
    background: linear-gradient(135deg, var(--sultan-teal) 0%, #088f82 100%);
    color: white;
}

.toast.error {
    background: linear-gradient(135deg, var(--sultan-red) 0%, #c41030 100%);
    color: white;
}

.toast.warning {
    background: linear-gradient(135deg, var(--sultan-gold) 0%, #e6a800 100%);
    color: var(--brown-dark);
}

.toast.info {
    background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
    color: white;
}
```

### 7.2 Loading Overlay

```css
.loading-overlay {
    position: fixed;
    inset: 0;
    background: rgba(45, 24, 16, 0.95);
    backdrop-filter: blur(10px);
    z-index: 100;
    display: none;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: var(--space-6);
}

.loading-overlay.active {
    display: flex;
}

.loader {
    width: 64px;
    height: 64px;
    position: relative;
}

.loader::before,
.loader::after {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 50%;
    border: 4px solid transparent;
}

.loader::before {
    border-top-color: var(--sultan-orange);
    animation: spin 1s linear infinite;
}

.loader::after {
    border-right-color: var(--sultan-gold);
    animation: spin 0.5s linear infinite reverse;
}

.loading-text {
    color: white;
    font-size: 1rem;
    font-weight: 500;
}

@keyframes spin {
    to { transform: rotate(360deg); }
}
```

### 7.3 Spinner Inline

```css
.spinner {
    display: inline-block;
    width: 20px;
    height: 20px;
    border: 2px solid var(--sand);
    border-top-color: var(--sultan-orange);
    border-radius: 50%;
    animation: spin 0.8s linear infinite;
}

.spinner.sm {
    width: 16px;
    height: 16px;
    border-width: 2px;
}

.spinner.lg {
    width: 32px;
    height: 32px;
    border-width: 3px;
}
```

---

## 8. Badge Components

### 8.1 Status Badge

```css
.badge {
    display: inline-flex;
    align-items: center;
    gap: var(--space-1);
    padding: var(--space-1) var(--space-3);
    border-radius: var(--radius-full);
    font-size: 0.75rem;
    font-weight: 500;
}

.badge.success {
    background: rgba(11, 176, 160, 0.15);
    color: var(--sultan-teal);
}

.badge.error {
    background: rgba(229, 18, 60, 0.15);
    color: var(--sultan-red);
}

.badge.warning {
    background: rgba(255, 202, 7, 0.2);
    color: #a67c00;
}

.badge.info {
    background: rgba(59, 130, 246, 0.15);
    color: #3b82f6;
}
```

### 8.2 Level Badge

```css
.level-badge {
    display: inline-flex;
    align-items: center;
    gap: var(--space-2);
    padding: var(--space-2) var(--space-3);
    border-radius: var(--radius-full);
    font-size: 0.75rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

.level-badge.admin {
    background: linear-gradient(135deg, var(--sultan-gold) 0%, #ffa500 100%);
    color: var(--brown-dark);
}

.level-badge.owner {
    background: linear-gradient(135deg, var(--sultan-orange) 0%, var(--sultan-red) 100%);
    color: white;
}

.level-badge.manager {
    background: linear-gradient(135deg, var(--sultan-teal) 0%, #088f82 100%);
    color: white;
}

.level-badge.analyst {
    background: linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%);
    color: white;
}

.level-badge.user {
    background: var(--sand);
    color: var(--brown-medium);
}
```

### 8.3 Version Badge

```css
.version-badge {
    display: inline-flex;
    align-items: center;
    gap: var(--space-1);
    padding: var(--space-1) var(--space-3);
    background: var(--sand);
    border-radius: var(--radius-full);
    font-size: 0.75rem;
    color: var(--brown-medium);
}

.version-badge i {
    font-size: 0.625rem;
}
```

---

## 9. Avatar Components

### 9.1 Avatar Image

```css
.avatar {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    overflow: hidden;
    background: rgba(234, 85, 18, 0.1);
    display: flex;
    align-items: center;
    justify-content: center;
}

.avatar img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.avatar-placeholder {
    color: var(--sultan-orange);
    font-size: 1rem;
}

/* Tamanhos */
.avatar.sm { width: 32px; height: 32px; }
.avatar.lg { width: 48px; height: 48px; }
.avatar.xl { width: 64px; height: 64px; }
```

### 9.2 User Info Block

```css
.user-info {
    display: flex;
    align-items: center;
    gap: var(--space-3);
}

.user-details {
    flex: 1;
    min-width: 0;
}

.user-name {
    font-size: 0.875rem;
    font-weight: 500;
    color: var(--brown-dark);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.user-email {
    font-size: 0.625rem;
    color: var(--brown-medium);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
```

---

## 10. Divider Components

### 10.1 Horizontal Divider

```css
.divider {
    display: flex;
    align-items: center;
    gap: var(--space-4);
    margin: var(--space-6) 0;
}

.divider::before,
.divider::after {
    content: '';
    flex: 1;
    height: 1px;
    background: linear-gradient(90deg, transparent, var(--sand-dark), transparent);
}

.divider-text {
    font-size: 0.75rem;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 2px;
    color: var(--brown-medium);
}
```

### 10.2 Decorative Line

```css
.decorative-line {
    height: 1px;
    background: linear-gradient(90deg, transparent, var(--sultan-orange), transparent);
}
```

---

## 11. Utility Classes

### 11.1 Text Utilities

```css
.text-primary { color: var(--sultan-orange); }
.text-secondary { color: var(--brown-medium); }
.text-success { color: var(--sultan-teal); }
.text-error { color: var(--sultan-red); }
.text-warning { color: var(--sultan-gold); }
.text-muted { color: var(--brown-medium); opacity: 0.6; }

.text-center { text-align: center; }
.text-right { text-align: right; }

.text-uppercase { text-transform: uppercase; letter-spacing: 1px; }
.text-truncate {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.font-display { font-family: 'Playfair Display', serif; }
.font-sans { font-family: 'Poppins', sans-serif; }
```

### 11.2 Spacing Utilities

```css
.m-0 { margin: 0; }
.mt-4 { margin-top: var(--space-4); }
.mb-4 { margin-bottom: var(--space-4); }
.mb-6 { margin-bottom: var(--space-6); }
.mb-8 { margin-bottom: var(--space-8); }

.p-0 { padding: 0; }
.p-4 { padding: var(--space-4); }
.p-6 { padding: var(--space-6); }
.p-8 { padding: var(--space-8); }

.gap-2 { gap: var(--space-2); }
.gap-3 { gap: var(--space-3); }
.gap-4 { gap: var(--space-4); }
.gap-6 { gap: var(--space-6); }
```

### 11.3 Display Utilities

```css
.flex { display: flex; }
.flex-col { flex-direction: column; }
.items-center { align-items: center; }
.justify-center { justify-content: center; }
.justify-between { justify-content: space-between; }
.flex-1 { flex: 1; }
.flex-wrap { flex-wrap: wrap; }

.grid { display: grid; }
.grid-cols-2 { grid-template-columns: repeat(2, 1fr); }
.grid-cols-3 { grid-template-columns: repeat(3, 1fr); }
.grid-cols-4 { grid-template-columns: repeat(4, 1fr); }

.hidden { display: none; }
.block { display: block; }
.inline-flex { display: inline-flex; }
```

### 11.4 Animation Utilities

```css
.animate-fade-in {
    animation: fadeInUp 0.6s ease-out;
}

.animate-pulse {
    animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

.animate-spin {
    animation: spin 1s linear infinite;
}

.transition-base {
    transition: var(--transition-base);
}

.transition-fast {
    transition: var(--transition-fast);
}
```

---

## 12. Responsive Utilities

```css
/* Mobile First */
@media (min-width: 640px) {
    .sm\:grid-cols-2 { grid-template-columns: repeat(2, 1fr); }
    .sm\:flex { display: flex; }
    .sm\:hidden { display: none; }
}

@media (min-width: 1024px) {
    .lg\:grid-cols-3 { grid-template-columns: repeat(3, 1fr); }
    .lg\:grid-cols-4 { grid-template-columns: repeat(4, 1fr); }
    .lg\:flex { display: flex; }
    .lg\:hidden { display: none; }
}

/* Hide on mobile */
@media (max-width: 639px) {
    .mobile-hidden { display: none; }
}

/* Hide on desktop */
@media (min-width: 1024px) {
    .desktop-hidden { display: none; }
}
```

---

## 13. Implementation Checklist

Para cada componente implementado:

- [ ] CSS completo com variaveis
- [ ] Estados hover/active/focus
- [ ] Responsividade
- [ ] Acessibilidade (ARIA labels)
- [ ] Documentacao de uso

---

**Documento criado em**: 2026-01-09
**Proxima revisao**: Apos implementacao
