# Time Tracking - Kwanza Agent

## Formato de Log

Cada entrada de tempo deve seguir o formato:

```
[YYYY-MM-DD HH:MM] - [DURATION] - [TASK_TYPE] - [DESCRIPTION] - [LINEAR_TASK_ID] - [STATUS]
```

### Campos:
- **YYYY-MM-DD HH:MM**: Data e hora de início da atividade
- **DURATION**: Duração em formato HH:MM (ex: 01:30 para 1 hora e 30 minutos)
- **TASK_TYPE**: Tipo da atividade (DEV, DOCS, ARCH, TEST, MEET, PLAN, DEBUG)
- **DESCRIPTION**: Descrição breve da atividade realizada
- **LINEAR_TASK_ID**: ID da task no Linear (opcional)
- **STATUS**: Status da atividade (DONE, WIP, BLOCKED, REVIEW)

## Template de Entrada

```
[2025-06-19 14:30] - [02:15] - [DEV] - [Implementação da API de autenticação] - [LIN-123] - [DONE]
```

## Log de Atividades

### 2025-06-19

```
[2025-06-19 21:20] - [00:45] - [DOCS] - [Criação do CLAUDE.md e roadmap inicial] - [] - [DONE]
[2025-06-19 22:05] - [00:30] - [PLAN] - [Configuração Git, GitHub e Linear MCP] - [] - [DONE]
[2025-06-19 22:35] - [00:25] - [DOCS] - [Atualização roadmap com práticas de arquitetura e qualidade] - [] - [DONE]
[2025-06-19 23:00] - [00:15] - [PLAN] - [Setup de time tracking e documentação] - [] - [WIP]
```

## Resumo por Tipo de Atividade

### DEV (Desenvolvimento)
- Total: 00:00

### DOCS (Documentação)
- Total: 01:10

### ARCH (Arquitetura)
- Total: 00:00

### TEST (Testes)
- Total: 00:00

### MEET (Reuniões)
- Total: 00:00

### PLAN (Planejamento)
- Total: 00:45

### DEBUG (Debug/Troubleshooting)
- Total: 00:00

**Total Geral: 01:55**

## Comandos para Análise

### Filtrar por tipo de atividade
```bash
grep "\[DEV\]" management/time-tracking.md
```

### Calcular tempo total por dia
```bash
grep "2025-06-19" management/time-tracking.md | awk -F'- \\[' '{print $3}' | awk -F'\\]' '{print $1}'
```

### Listar tasks do Linear trabalhadas
```bash
grep -o "LIN-[0-9]*" management/time-tracking.md | sort | uniq
```

## Scripts de Análise

### Análise Semanal (Bash)
```bash
#!/bin/bash
# Arquivo: management/scripts/weekly-analysis.sh

echo "=== Análise Semanal - Kwanza Agent ==="
echo "Período: $(date -d '7 days ago' +%Y-%m-%d) até $(date +%Y-%m-%d)"
echo

# Total de horas por tipo
echo "--- Horas por Tipo de Atividade ---"
for type in DEV DOCS ARCH TEST MEET PLAN DEBUG; do
    total=$(grep "\\[$type\\]" management/time-tracking.md | awk -F'- \\[' '{print $3}' | awk -F'\\]' '{sum += $1} END {printf "%.2f", sum}')
    echo "$type: ${total:-0.00}h"
done

echo
echo "--- Resumo Diário ---"
grep "^\\[" management/time-tracking.md | awk -F'\\[' '{print $2}' | awk -F' ' '{print $1}' | sort | uniq -c
```

### Gerador de Relatório (Python)
```python
#!/usr/bin/env python3
# Arquivo: management/scripts/time-report.py

import re
from datetime import datetime, timedelta
from collections import defaultdict

def parse_time_log(filename):
    entries = []
    with open(filename, 'r') as f:
        for line in f:
            match = re.match(r'\[(\d{4}-\d{2}-\d{2} \d{2}:\d{2})\] - \[(\d{2}:\d{2})\] - \[(\w+)\] - \[(.*?)\] - \[(.*?)\] - \[(\w+)\]', line)
            if match:
                entries.append({
                    'datetime': datetime.strptime(match.group(1), '%Y-%m-%d %H:%M'),
                    'duration': match.group(2),
                    'type': match.group(3),
                    'description': match.group(4),
                    'linear_id': match.group(5),
                    'status': match.group(6)
                })
    return entries

def generate_report(entries):
    # Análise por tipo
    by_type = defaultdict(timedelta)
    by_day = defaultdict(timedelta)
    
    for entry in entries:
        hours, minutes = map(int, entry['duration'].split(':'))
        duration = timedelta(hours=hours, minutes=minutes)
        
        by_type[entry['type']] += duration
        by_day[entry['datetime'].date()] += duration
    
    print("=== Relatório de Tempo - Kwanza Agent ===")
    print(f"Período: {min(e['datetime'].date() for e in entries)} até {max(e['datetime'].date() for e in entries)}")
    print()
    
    print("--- Por Tipo de Atividade ---")
    for activity_type, total_time in sorted(by_type.items()):
        print(f"{activity_type}: {total_time}")
    
    print()
    print("--- Por Dia ---")
    for day, total_time in sorted(by_day.items()):
        print(f"{day}: {total_time}")

if __name__ == "__main__":
    entries = parse_time_log('management/time-tracking.md')
    generate_report(entries)
```

## Metas de Tempo

### Por Sprint (2 semanas)
- **Desenvolvimento**: 60-70% do tempo
- **Documentação**: 15-20% do tempo
- **Arquitetura**: 10-15% do tempo
- **Testes**: 5-10% do tempo

### Por Dia (Estimativa)
- **Mínimo**: 2 horas
- **Ideal**: 4-6 horas
- **Máximo sustentável**: 8 horas

## Notas de Uso

1. **Atualizar ao iniciar**: Sempre registrar quando começar uma atividade
2. **Atualizar ao finalizar**: Calcular duração real ao terminar
3. **Ser específico**: Descrições claras ajudam na análise posterior
4. **Vincular ao Linear**: Sempre que possível, referenciar a task do Linear
5. **Status preciso**: Marcar corretamente o status para tracking de progresso

## Templates Rápidos

### Desenvolvimento
```
[YYYY-MM-DD HH:MM] - [HH:MM] - [DEV] - [Descrição da implementação] - [LIN-XXX] - [STATUS]
```

### Documentação
```
[YYYY-MM-DD HH:MM] - [HH:MM] - [DOCS] - [Tipo de documento criado/atualizado] - [] - [STATUS]
```

### Planejamento
```
[YYYY-MM-DD HH:MM] - [HH:MM] - [PLAN] - [Atividade de planejamento] - [] - [STATUS]
```

### Debug/Troubleshooting
```
[YYYY-MM-DD HH:MM] - [HH:MM] - [DEBUG] - [Problema investigado/resolvido] - [LIN-XXX] - [STATUS]
```