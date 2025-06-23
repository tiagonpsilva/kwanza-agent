# GitHub Pages - Setup Manual
## Como Ativar o GitHub Pages para o Kwanza Agent

> **Status Atual**: O workflow automático está configurado, mas precisa de permissões manuais para funcionar. Este guia explica como ativar o GitHub Pages manualmente.

**Problema**: `Permission denied` - GitHub Actions não tem permissão para criar branch `gh-pages`  
**Solução**: Ativação manual nas configurações do repositório

---

## 🔧 Setup Manual (Método Recomendado)

### 1. Ativar GitHub Pages no Repositório

1. **Acesse o repositório**: [https://github.com/tiagonpsilva/kwanza-agent](https://github.com/tiagonpsilva/kwanza-agent)

2. **Vá para Settings**:
   - Clique na aba `Settings` no topo do repositório

3. **Configure Pages**:
   - Scroll down até a seção `Pages` no menu lateral esquerdo
   - Em `Source`, selecione `Deploy from a branch`
   - Em `Branch`, selecione `gh-pages` (será criada automaticamente)
   - Clique `Save`

### 2. Executar Workflow Manualmente

1. **Acesse Actions**:
   - Vá para a aba `Actions` no repositório
   - Encontre o workflow `Deploy to GitHub Pages`

2. **Trigger Manual**:
   - Clique em `Run workflow`
   - Selecione branch `main`
   - Clique `Run workflow`

3. **Aguardar Deploy**:
   - O workflow levará ~2-3 minutos para completar
   - Após sucesso, o site estará disponível

---

## 🌐 URLs Esperadas (Após Ativação)

### Frontend Application
**URL**: [https://tiagonpsilva.github.io/kwanza-agent/](https://tiagonpsilva.github.io/kwanza-agent/)

**Páginas Disponíveis**:
- Landing page com tema Kwanza
- Login interface (mock)
- Dashboard principal
- Chat interface
- Settings page
- Loading states demo

### Storybook Documentation
**URL**: [https://tiagonpsilva.github.io/kwanza-agent/storybook/](https://tiagonpsilva.github.io/kwanza-agent/storybook/)

**Conteúdo**:
- 35+ componentes documentados
- Interactive playground
- Design system showcase
- Accessibility testing tools

### Navigation Helper
**URL**: [https://tiagonpsilva.github.io/kwanza-agent/nav.html](https://tiagonpsilva.github.io/kwanza-agent/nav.html/)

**Propósito**: Página simples com links para Frontend e Storybook

---

## 🔄 Método Alternativo (Local Build + Manual Upload)

Se o workflow automático continuar com problemas, você pode fazer o deploy manual:

### 1. Build Local
```bash
# No diretório do projeto
cd frontend

# Build do frontend
npm run build

# Build do Storybook  
npm run build-storybook

# Criar estrutura de deploy
mkdir -p ../deploy
cp -r dist/* ../deploy/
mkdir -p ../deploy/storybook
cp -r storybook-static/* ../deploy/storybook/
```

### 2. Upload Manual
1. Criar branch `gh-pages` manualmente
2. Fazer upload dos arquivos da pasta `deploy/`
3. Configurar GitHub Pages para usar branch `gh-pages`

---

## 🛠️ Solução de Problemas

### Erro: "Permission denied to github-actions[bot]"

**Causa**: Repository settings não permitem Actions escrever  
**Solução**:
1. Settings → Actions → General
2. Workflow permissions → Read and write permissions
3. Save

### Erro: "Pages site not found"

**Causa**: GitHub Pages não está ativado  
**Solução**:
1. Settings → Pages
2. Source: Deploy from a branch
3. Branch: gh-pages
4. Save

### Workflow falha no "Setup Pages"

**Causa**: Pages precisa ser ativado primeiro  
**Solução**: Ativar Pages manualmente antes de rodar workflow

---

## 📊 Estrutura de Deploy Esperada

```
GitHub Pages (gh-pages branch):
├── index.html                 # Frontend React App
├── assets/
│   ├── index-xxx.css         # Estilos principais
│   └── index-xxx.js          # JavaScript bundle
├── vite.svg                   # Ícone da aplicação
├── nav.html                   # Página de navegação
└── storybook/                 # Documentação Storybook
    ├── index.html
    ├── assets/
    └── ...                    # 51+ arquivos do Storybook
```

---

## ⚡ Quick Test

Após ativação, teste as URLs:

1. **Frontend**: Deve carregar com tema Kwanza
2. **Storybook**: Deve mostrar componentes interativos
3. **Navigation**: Deve ter links funcionais

Se alguma URL retornar 404, aguarde 5-10 minutos para propagação do CDN.

---

## 🎯 Próximos Passos

Após ativação manual bem-sucedida:

1. **Validar Funcionamento**: Testar todas as páginas
2. **Performance Check**: Verificar carregamento e responsividade
3. **Custom Domain** (Opcional): Configurar domínio próprio
4. **Analytics** (Futuro): Adicionar Google Analytics
5. **SEO Enhancement**: Meta tags e Open Graph

---

## 📞 Support

Se continuar com problemas:

1. **GitHub Issues**: [Criar issue no repositório](https://github.com/tiagonpsilva/kwanza-agent/issues)
2. **Developer**: tiagonpsilva@users.noreply.github.com
3. **Documentation**: Este arquivo será atualizado com soluções

---

*Uma vez ativado, o GitHub Pages fornecerá URLs públicas para demonstração completa dos entregáveis da Fase 1 do Kwanza Agent.*