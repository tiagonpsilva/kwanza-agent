#!/bin/bash

# AI Cost Tracker - Kwanza Agent
# Script para facilitar o registro de custos de desenvolvimento com IA

TRACKING_FILE="management/ai-cost-tracking.md"

# Cores para output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Função para exibir ajuda
show_help() {
    echo -e "${BLUE}AI Cost Tracker - Kwanza Agent${NC}"
    echo ""
    echo "Usage: $0 [COMMAND] [OPTIONS]"
    echo ""
    echo "Commands:"
    echo "  add     - Adicionar nova entrada de custo"
    echo "  daily   - Relatório de hoje"
    echo "  weekly  - Relatório semanal"
    echo "  summary - Relatório resumo"
    echo "  help    - Mostrar esta ajuda"
    echo ""
    echo "Examples:"
    echo "  $0 add"
    echo "  $0 daily"
    echo "  $0 weekly"
    echo "  $0 summary"
}

# Função para adicionar entrada interativa
add_entry() {
    echo -e "${BLUE}🤖 Adicionando Nova Entrada de Custo IA${NC}"
    echo ""
    
    # Timestamp atual
    TIMESTAMP=$(date "+%Y-%m-%d %H:%M")
    
    # Input do usuário
    echo -e "${YELLOW}Modelo usado:${NC}"
    echo "1) claude-sonnet-4"
    echo "2) claude-haiku"
    echo "3) gpt-4"
    echo "4) gpt-3.5-turbo"
    echo "5) Outro"
    read -p "Escolha (1-5): " model_choice
    
    case $model_choice in
        1) MODEL="claude-sonnet-4" ;;
        2) MODEL="claude-haiku" ;;
        3) MODEL="gpt-4" ;;
        4) MODEL="gpt-3.5-turbo" ;;
        5) read -p "Digite o modelo: " MODEL ;;
        *) MODEL="claude-sonnet-4" ;;
    esac
    
    echo ""
    echo -e "${YELLOW}Tipo de request:${NC}"
    echo "1) PLAN     - Planejamento e estratégia"
    echo "2) CODE     - Geração de código"
    echo "3) REVIEW   - Revisão de código"
    echo "4) DEBUG    - Depuração"
    echo "5) DOCS     - Documentação"
    echo "6) ARCH     - Arquitetura"
    echo "7) REFACTOR - Refatoração"
    read -p "Escolha (1-7): " type_choice
    
    case $type_choice in
        1) REQUEST_TYPE="PLAN" ;;
        2) REQUEST_TYPE="CODE" ;;
        3) REQUEST_TYPE="REVIEW" ;;
        4) REQUEST_TYPE="DEBUG" ;;
        5) REQUEST_TYPE="DOCS" ;;
        6) REQUEST_TYPE="ARCH" ;;
        7) REQUEST_TYPE="REFACTOR" ;;
        *) REQUEST_TYPE="CODE" ;;
    esac
    
    echo ""
    read -p "Tokens de input (estimativa): " TOKENS_INPUT
    read -p "Tokens de output (estimativa): " TOKENS_OUTPUT
    read -p "Custo em USD (ex: 0.125): " COST_USD
    read -p "Descrição da tarefa: " TASK
    
    echo ""
    echo -e "${YELLOW}Resultado:${NC}"
    echo "1) SUCCESS - Sucesso completo"
    echo "2) PARTIAL - Sucesso parcial"
    echo "3) RETRY   - Precisou repetir"
    echo "4) FAIL    - Falhou"
    read -p "Escolha (1-4): " result_choice
    
    case $result_choice in
        1) RESULT="SUCCESS" ;;
        2) RESULT="PARTIAL" ;;
        3) RESULT="RETRY" ;;
        4) RESULT="FAIL" ;;
        *) RESULT="SUCCESS" ;;
    esac
    
    # Criar entrada
    ENTRY="[$TIMESTAMP] - $MODEL - $REQUEST_TYPE - $TOKENS_INPUT - $TOKENS_OUTPUT - \$$COST_USD - $TASK - $RESULT"
    
    echo ""
    echo -e "${GREEN}Entrada criada:${NC}"
    echo "$ENTRY"
    echo ""
    
    read -p "Confirmar adição? (y/N): " confirm
    if [[ $confirm =~ ^[Yy]$ ]]; then
        echo "$ENTRY" >> "$TRACKING_FILE"
        echo -e "${GREEN}✅ Entrada adicionada com sucesso!${NC}"
        
        # Mostrar total do dia
        TODAY=$(date "+%Y-%m-%d")
        python3 management/scripts/cost-analysis.py --daily "$TODAY" 2>/dev/null || echo "Para relatórios detalhados, execute: python3 management/scripts/cost-analysis.py"
    else
        echo -e "${YELLOW}❌ Entrada cancelada.${NC}"
    fi
}

# Função para relatório diário
daily_report() {
    TODAY=$(date "+%Y-%m-%d")
    echo -e "${BLUE}📅 Relatório Diário - $TODAY${NC}"
    echo ""
    
    if command -v python3 &> /dev/null; then
        python3 management/scripts/cost-analysis.py --daily "$TODAY"
    else
        echo -e "${RED}Python3 não encontrado. Instale para relatórios detalhados.${NC}"
        grep "$TODAY" "$TRACKING_FILE" 2>/dev/null || echo "Nenhuma entrada encontrada para hoje."
    fi
}

# Função para relatório semanal
weekly_report() {
    echo -e "${BLUE}📈 Relatório Semanal${NC}"
    echo ""
    
    if command -v python3 &> /dev/null; then
        python3 management/scripts/cost-analysis.py --weekly
    else
        echo -e "${RED}Python3 não encontrado. Instale para relatórios detalhados.${NC}"
        echo "Últimas 10 entradas:"
        tail -10 "$TRACKING_FILE" 2>/dev/null || echo "Arquivo de tracking não encontrado."
    fi
}

# Função para relatório resumo
summary_report() {
    echo -e "${BLUE}📊 Relatório Resumo${NC}"
    echo ""
    
    if command -v python3 &> /dev/null; then
        python3 management/scripts/cost-analysis.py --summary
    else
        echo -e "${RED}Python3 não encontrado. Instale para relatórios detalhados.${NC}"
        echo "Total de entradas:"
        wc -l "$TRACKING_FILE" 2>/dev/null || echo "Arquivo de tracking não encontrado."
    fi
}

# Main
case "$1" in
    add)
        add_entry
        ;;
    daily)
        daily_report
        ;;
    weekly)
        weekly_report
        ;;
    summary)
        summary_report
        ;;
    help|--help|-h)
        show_help
        ;;
    *)
        echo -e "${YELLOW}Comando não reconhecido. Use '$0 help' para ajuda.${NC}"
        show_help
        exit 1
        ;;
esac