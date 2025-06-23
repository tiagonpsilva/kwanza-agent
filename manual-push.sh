#!/bin/bash

echo "🚀 Manual push script execution..."
cd /Users/tiagonpsilva/code/kwanza-agent

# Check git status
echo "📋 Current git status:"
git status

# Check if there are changes
if [[ -n $(git status --porcelain) ]]; then
    echo "📊 Changes detected, proceeding with commit..."
    git add .
    git commit -m "feat: sincronizar Footer.tsx com versão localhost:5174

- Atualizar texto descritivo para foco em inovação e UX
- Alterar seções de 'Produto/Empresa' para 'Links Rápidos/Suporte'
- Simplificar rodapé removendo menção ao auxílio de IA
- Manter link direto para https://tiagopinto.io
- Garantir sincronização entre localhost:5174 e repositório remoto

🤖 Generated with [Claude Code](https://claude.ai/code)

Co-Authored-By: Claude <noreply@anthropic.com>"
    
    echo "🚀 Pushing to remote..."
    git push origin main
    echo "✅ Push completed!"
else
    echo "ℹ️ No changes to commit"
fi