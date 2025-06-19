#!/bin/bash
# Weekly Time Analysis Script for Kwanza Agent

echo "=== Análise Semanal - Kwanza Agent ==="
echo "Período: $(date -d '7 days ago' +%Y-%m-%d) até $(date +%Y-%m-%d)"
echo

# Check if time-tracking.md exists
if [ ! -f "management/time-tracking.md" ]; then
    echo "❌ Arquivo time-tracking.md não encontrado!"
    exit 1
fi

echo "--- Horas por Tipo de Atividade ---"
for type in DEV DOCS ARCH TEST MEET PLAN DEBUG; do
    # Extract duration for each type and sum them
    total=$(grep "\\[$type\\]" management/time-tracking.md | \
            grep -o '\[[0-9][0-9]:[0-9][0-9]\]' | \
            tr -d '[]' | \
            awk -F: '{h+=$1; m+=$2} END {printf "%.2f", h + m/60}')
    
    if [ -z "$total" ]; then
        total="0.00"
    fi
    echo "$type: ${total}h"
done

echo
echo "--- Resumo Diário ---"
grep "^\[" management/time-tracking.md | \
    grep -o '\[2[0-9][0-9][0-9]-[0-9][0-9]-[0-9][0-9]' | \
    tr -d '[' | sort | uniq -c | \
    while read count date; do
        echo "$date: $count atividades"
    done

echo
echo "--- Tasks do Linear Trabalhadas ---"
grep -o "LIN-[0-9]*" management/time-tracking.md | \
    grep -v "LIN-$" | sort | uniq | \
    while read task; do
        echo "📋 $task"
    done

echo
echo "--- Total Geral ---"
total_hours=$(grep "^\[" management/time-tracking.md | \
              grep -o '\[[0-9][0-9]:[0-9][0-9]\]' | \
              tr -d '[]' | \
              awk -F: '{h+=$1; m+=$2} END {printf "%.2f", h + m/60}')

if [ -z "$total_hours" ]; then
    total_hours="0.00"
fi

echo "⏰ Total registrado: ${total_hours}h"