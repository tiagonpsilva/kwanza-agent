#!/bin/bash

echo "🚀 Enviando versão local (localhost:5174) para repositório remoto..."
echo ""

# Navegar para o diretório do projeto
cd /Users/tiagonpsilva/code/kwanza-agent

# Mostrar status atual
echo "📋 Status do repositório:"
git status
echo ""

# Mostrar mudanças não commitadas (se houver)
if [[ -n $(git status --porcelain) ]]; then
    echo "📊 Mudanças detectadas:"
    git status --short
    echo ""
    
    echo "🔍 Detalhes das mudanças no Footer.tsx:"
    git diff frontend/src/components/organisms/Footer.tsx
    echo ""
    
    # Adicionar mudanças
    echo "➕ Adicionando mudanças ao staging area..."
    git add .
    echo ""
    
    # Criar commit
    echo "📝 Criando commit..."
    git commit -m "feat: sincronizar Footer.tsx com versão localhost:5174

- Atualizar texto descritivo para foco em inovação e UX
- Alterar seções de 'Produto/Empresa' para 'Links Rápidos/Suporte'
- Simplificar rodapé removendo menção ao auxílio de IA
- Manter link direto para https://tiagopinto.io
- Garantir sincronização entre localhost:5174 e repositório remoto

🤖 Generated with [Claude Code](https://claude.ai/code)

Co-Authored-By: Claude <noreply@anthropic.com>"
    echo ""
    
    # Push para remote
    echo "🚀 Enviando para repositório remoto..."
    git push origin main
    echo ""
    
    echo "✅ Sincronização concluída!"
    echo "🌐 Verificar em: https://github.com/tiagonpsilva/kwanza-agent"
else
    echo "ℹ️  Não há mudanças locais para sincronizar."
    echo "O repositório local já está sincronizado com o remoto."
fi

echo ""
echo "🔗 URLs do projeto:"
echo "- Repositório: https://github.com/tiagonpsilva/kwanza-agent"
echo "- App: https://tiagonpsilva.github.io/kwanza-agent/"
echo "- Storybook: https://tiagonpsilva.github.io/kwanza-agent/storybook/"