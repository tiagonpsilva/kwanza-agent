#!/usr/bin/env python3
"""
AI Cost Analysis Script for Kwanza Agent

Analisa custos de desenvolvimento com IA a partir do arquivo ai-cost-tracking.md
Gera relatórios detalhados de performance, custos e ROI.

Usage:
    python cost-analysis.py [--daily YYYY-MM-DD] [--weekly] [--monthly] [--summary]
"""

import re
import argparse
from datetime import datetime, timedelta
from collections import defaultdict
import json

class AICostAnalyzer:
    def __init__(self, tracking_file="/Users/tiagonpsilva/code/kwanza-agent/management/ai-cost-tracking.md"):
        self.tracking_file = tracking_file
        self.entries = []
        self.models = defaultdict(list)
        self.request_types = defaultdict(list)
        self.daily_costs = defaultdict(float)
        
    def parse_tracking_file(self):
        """Parse o arquivo de tracking e extrai os dados"""
        try:
            with open(self.tracking_file, 'r', encoding='utf-8') as f:
                content = f.read()
                
            # Regex para capturar entradas de log
            pattern = r'\[(\d{4}-\d{2}-\d{2} \d{2}:\d{2})\] - ([\w-]+) - (\w+) - (\d+) - (\d+) - \$([0-9.]+) - (.+) - (\w+)'
            
            matches = re.findall(pattern, content, re.MULTILINE)
            
            for match in matches:
                entry = {
                    'timestamp': datetime.strptime(match[0], '%Y-%m-%d %H:%M'),
                    'model': match[1].strip(),
                    'request_type': match[2].strip(),
                    'tokens_input': int(match[3]),
                    'tokens_output': int(match[4]),
                    'cost_usd': float(match[5]),
                    'task': match[6].strip(),
                    'result': match[7].strip()
                }
                
                self.entries.append(entry)
                self.models[entry['model']].append(entry)
                self.request_types[entry['request_type']].append(entry)
                
                date_key = entry['timestamp'].strftime('%Y-%m-%d')
                self.daily_costs[date_key] += entry['cost_usd']
                
        except FileNotFoundError:
            print(f"Arquivo {self.tracking_file} não encontrado!")
            return False
        except Exception as e:
            print(f"Erro ao processar arquivo: {e}")
            return False
            
        return True
    
    def generate_summary_report(self):
        """Gera relatório resumo geral"""
        if not self.entries:
            return "Nenhum dado encontrado."
            
        total_cost = sum(entry['cost_usd'] for entry in self.entries)
        total_requests = len(self.entries)
        total_input_tokens = sum(entry['tokens_input'] for entry in self.entries)
        total_output_tokens = sum(entry['tokens_output'] for entry in self.entries)
        success_rate = len([e for e in self.entries if e['result'] == 'SUCCESS']) / total_requests * 100
        
        avg_cost_per_request = total_cost / total_requests if total_requests > 0 else 0
        
        report = f"""
# 📊 AI Cost Analysis - Summary Report

## 💰 Custos Totais
- **Total Investido**: ${total_cost:.3f} USD
- **Total de Requests**: {total_requests}
- **Custo Médio por Request**: ${avg_cost_per_request:.3f} USD

## 🔢 Tokens Utilizados
- **Input Tokens**: {total_input_tokens:,}
- **Output Tokens**: {total_output_tokens:,}
- **Total Tokens**: {total_input_tokens + total_output_tokens:,}

## 📈 Performance
- **Taxa de Sucesso**: {success_rate:.1f}%
- **Requests com Sucesso**: {len([e for e in self.entries if e['result'] == 'SUCCESS'])}/{total_requests}

## 🤖 Distribuição por Modelo
"""
        
        for model, entries in self.models.items():
            model_cost = sum(e['cost_usd'] for e in entries)
            model_requests = len(entries)
            report += f"- **{model}**: ${model_cost:.3f} USD ({model_requests} requests)\n"
            
        report += "\n## 🎯 Distribuição por Tipo de Request\n"
        
        for req_type, entries in self.request_types.items():
            type_cost = sum(e['cost_usd'] for e in entries)
            type_requests = len(entries)
            report += f"- **{req_type}**: ${type_cost:.3f} USD ({type_requests} requests)\n"
            
        return report
    
    def generate_daily_report(self, target_date=None):
        """Gera relatório diário"""
        if target_date is None:
            target_date = datetime.now().strftime('%Y-%m-%d')
            
        daily_entries = [e for e in self.entries if e['timestamp'].strftime('%Y-%m-%d') == target_date]
        
        if not daily_entries:
            return f"Nenhuma atividade encontrada para {target_date}"
            
        daily_cost = sum(e['cost_usd'] for e in daily_entries)
        
        report = f"""
# 📅 Relatório Diário - {target_date}

## 💰 Resumo do Dia
- **Custo Total**: ${daily_cost:.3f} USD
- **Requests Realizados**: {len(daily_entries)}
- **Período**: {daily_entries[0]['timestamp'].strftime('%H:%M')} - {daily_entries[-1]['timestamp'].strftime('%H:%M')}

## 📋 Atividades Realizadas
"""
        
        for entry in daily_entries:
            report += f"- **{entry['timestamp'].strftime('%H:%M')}** [{entry['request_type']}] {entry['task']} - ${entry['cost_usd']:.3f}\n"
            
        return report
    
    def generate_weekly_report(self):
        """Gera relatório semanal"""
        if not self.entries:
            return "Nenhum dado disponível."
            
        # Últimos 7 dias
        end_date = datetime.now()
        start_date = end_date - timedelta(days=7)
        
        weekly_entries = [e for e in self.entries if start_date <= e['timestamp'] <= end_date]
        weekly_cost = sum(e['cost_usd'] for e in weekly_entries)
        
        report = f"""
# 📈 Relatório Semanal

## 💰 Últimos 7 Dias
- **Custo Total**: ${weekly_cost:.3f} USD
- **Requests**: {len(weekly_entries)}
- **Média Diária**: ${weekly_cost/7:.3f} USD

## 📊 Distribuição Diária
"""
        
        for i in range(7):
            check_date = (end_date - timedelta(days=i)).strftime('%Y-%m-%d')
            day_cost = self.daily_costs.get(check_date, 0)
            day_entries = len([e for e in weekly_entries if e['timestamp'].strftime('%Y-%m-%d') == check_date])
            report += f"- **{check_date}**: ${day_cost:.3f} USD ({day_entries} requests)\n"
            
        return report
    
    def export_json_data(self):
        """Exporta dados em formato JSON para análises externas"""
        data = {
            'summary': {
                'total_cost': sum(e['cost_usd'] for e in self.entries),
                'total_requests': len(self.entries),
                'success_rate': len([e for e in self.entries if e['result'] == 'SUCCESS']) / len(self.entries) * 100 if self.entries else 0
            },
            'by_model': {model: {
                'cost': sum(e['cost_usd'] for e in entries),
                'requests': len(entries),
                'avg_input_tokens': sum(e['tokens_input'] for e in entries) / len(entries),
                'avg_output_tokens': sum(e['tokens_output'] for e in entries) / len(entries)
            } for model, entries in self.models.items()},
            'by_type': {req_type: {
                'cost': sum(e['cost_usd'] for e in entries),
                'requests': len(entries)
            } for req_type, entries in self.request_types.items()},
            'daily_costs': dict(self.daily_costs)
        }
        
        return json.dumps(data, indent=2, default=str)

def main():
    parser = argparse.ArgumentParser(description='Análise de custos de desenvolvimento com IA')
    parser.add_argument('--daily', help='Relatório diário (formato: YYYY-MM-DD)')
    parser.add_argument('--weekly', action='store_true', help='Relatório semanal')
    parser.add_argument('--monthly', action='store_true', help='Relatório mensal')
    parser.add_argument('--summary', action='store_true', help='Relatório resumo')
    parser.add_argument('--json', action='store_true', help='Exportar dados em JSON')
    
    args = parser.parse_args()
    
    analyzer = AICostAnalyzer()
    
    if not analyzer.parse_tracking_file():
        return
    
    if args.daily:
        print(analyzer.generate_daily_report(args.daily))
    elif args.weekly:
        print(analyzer.generate_weekly_report())
    elif args.summary:
        print(analyzer.generate_summary_report())
    elif args.json:
        print(analyzer.export_json_data())
    else:
        # Relatório padrão (summary)
        print(analyzer.generate_summary_report())

if __name__ == "__main__":
    main()