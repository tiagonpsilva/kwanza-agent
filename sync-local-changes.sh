#!/bin/bash

# Script para sincronizar mudanças locais com repositório remoto
echo "🔄 Sincronizando mudanças locais com repositório remoto..."

# Verificar status atual
echo "📋 Status atual do repositório:"
git status

echo ""
echo "📊 Mudanças não commitadas:"
git diff --name-only

echo ""
echo "🔍 Detalhes das mudanças:"
git diff

echo ""
echo "➕ Adicionando todas as mudanças ao stage..."
git add .

echo ""
echo "📝 Criando commit com as mudanças locais..."
git commit -m "feat: sincronizar versão local com repositório remoto

- Atualizar Footer.tsx com versão correta do localhost:5174
- Simplificar texto descritivo removendo referência à cultura africana
- Alterar seções de navegação para 'Links Rápidos' e 'Suporte'
- Simplificar rodapé com link direto para tiagopinto.io
- Garantir sincronização entre ambiente local e remoto

🤖 Generated with [Claude Code](https://claude.ai/code)

Co-Authored-By: Claude <noreply@anthropic.com>"

echo ""
echo "🚀 Enviando mudanças para repositório remoto..."
git push origin main

echo ""
echo "✅ Sincronização concluída!"
echo "🌐 Verificar mudanças em: https://github.com/tiagonpsilva/kwanza-agent"