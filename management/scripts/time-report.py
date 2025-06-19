#!/usr/bin/env python3
"""
Time Tracking Report Generator for Kwanza Agent
Analyzes time-tracking.md and generates detailed reports
"""

import re
import sys
from datetime import datetime, timedelta
from collections import defaultdict
from pathlib import Path

def parse_time_log(filename):
    """Parse time tracking log file and return list of entries"""
    entries = []
    
    if not Path(filename).exists():
        print(f"❌ Arquivo {filename} não encontrado!")
        return entries
    
    with open(filename, 'r', encoding='utf-8') as f:
        for line_num, line in enumerate(f, 1):
            line = line.strip()
            if not line.startswith('['):
                continue
                
            # Match pattern: [YYYY-MM-DD HH:MM] - [HH:MM] - [TYPE] - [DESC] - [LINEAR] - [STATUS]
            pattern = r'\[(\d{4}-\d{2}-\d{2} \d{2}:\d{2})\] - \[(\d{2}:\d{2})\] - \[(\w+)\] - \[(.*?)\] - \[(.*?)\] - \[(\w+)\]'
            match = re.match(pattern, line)
            
            if match:
                try:
                    entries.append({
                        'datetime': datetime.strptime(match.group(1), '%Y-%m-%d %H:%M'),
                        'duration': match.group(2),
                        'type': match.group(3),
                        'description': match.group(4),
                        'linear_id': match.group(5),
                        'status': match.group(6),
                        'line_num': line_num
                    })
                except ValueError as e:
                    print(f"⚠️  Erro na linha {line_num}: {e}")
            else:
                if line.startswith('[') and line.count(']') >= 6:
                    print(f"⚠️  Formato inválido na linha {line_num}: {line[:50]}...")
    
    return entries

def duration_to_timedelta(duration_str):
    """Convert HH:MM string to timedelta object"""
    try:
        hours, minutes = map(int, duration_str.split(':'))
        return timedelta(hours=hours, minutes=minutes)
    except ValueError:
        return timedelta(0)

def timedelta_to_hours(td):
    """Convert timedelta to hours as float"""
    return td.total_seconds() / 3600

def generate_summary_report(entries):
    """Generate comprehensive time tracking report"""
    if not entries:
        print("📊 Nenhuma entrada encontrada no log de tempo.")
        return
    
    # Calculate totals by type and day
    by_type = defaultdict(timedelta)
    by_day = defaultdict(timedelta)
    by_status = defaultdict(int)
    linear_tasks = set()
    
    total_time = timedelta(0)
    
    for entry in entries:
        duration = duration_to_timedelta(entry['duration'])
        
        by_type[entry['type']] += duration
        by_day[entry['datetime'].date()] += duration
        by_status[entry['status']] += 1
        total_time += duration
        
        if entry['linear_id'] and entry['linear_id'] != '':
            linear_tasks.add(entry['linear_id'])
    
    # Print report
    print("🎯 === Relatório de Tempo - Kwanza Agent ===")
    
    if entries:
        start_date = min(e['datetime'].date() for e in entries)
        end_date = max(e['datetime'].date() for e in entries)
        print(f"📅 Período: {start_date} até {end_date}")
        print(f"📈 Total de entradas: {len(entries)}")
        print(f"⏰ Tempo total: {total_time} ({timedelta_to_hours(total_time):.2f}h)")
        print()
    
    # By activity type
    print("🔍 --- Por Tipo de Atividade ---")
    for activity_type in ['DEV', 'DOCS', 'ARCH', 'TEST', 'MEET', 'PLAN', 'DEBUG']:
        total = by_type.get(activity_type, timedelta(0))
        percentage = (timedelta_to_hours(total) / timedelta_to_hours(total_time) * 100) if total_time.total_seconds() > 0 else 0
        print(f"{activity_type}: {total} ({timedelta_to_hours(total):.2f}h - {percentage:.1f}%)")
    
    print()
    
    # By day
    print("📊 --- Por Dia ---")
    for day in sorted(by_day.keys()):
        total = by_day[day]
        print(f"{day}: {total} ({timedelta_to_hours(total):.2f}h)")
    
    print()
    
    # By status
    print("✅ --- Por Status ---")
    for status, count in sorted(by_status.items()):
        percentage = (count / len(entries) * 100) if entries else 0
        print(f"{status}: {count} atividades ({percentage:.1f}%)")
    
    print()
    
    # Linear tasks
    if linear_tasks:
        print("📋 --- Tasks do Linear Trabalhadas ---")
        for task in sorted(linear_tasks):
            if task:  # Skip empty task IDs
                print(f"• {task}")
    else:
        print("📋 --- Nenhuma task do Linear vinculada ---")
    
    print()

def generate_daily_report(entries, target_date=None):
    """Generate report for specific day"""
    if target_date is None:
        target_date = datetime.now().date()
    
    daily_entries = [e for e in entries if e['datetime'].date() == target_date]
    
    if not daily_entries:
        print(f"📅 Nenhuma atividade registrada para {target_date}")
        return
    
    print(f"📅 === Relatório Diário - {target_date} ===")
    print()
    
    total_day = timedelta(0)
    for entry in sorted(daily_entries, key=lambda x: x['datetime']):
        duration = duration_to_timedelta(entry['duration'])
        total_day += duration
        
        linear_info = f" [{entry['linear_id']}]" if entry['linear_id'] else ""
        status_icon = "✅" if entry['status'] == "DONE" else "🔄" if entry['status'] == "WIP" else "⚠️"
        
        print(f"{entry['datetime'].strftime('%H:%M')} - {entry['duration']} - {entry['type']} {status_icon}")
        print(f"   📝 {entry['description']}{linear_info}")
        print()
    
    print(f"⏰ Total do dia: {total_day} ({timedelta_to_hours(total_day):.2f}h)")

def main():
    """Main function"""
    log_file = 'management/time-tracking.md'
    
    if len(sys.argv) > 1:
        if sys.argv[1] == '--daily':
            target_date = None
            if len(sys.argv) > 2:
                try:
                    target_date = datetime.strptime(sys.argv[2], '%Y-%m-%d').date()
                except ValueError:
                    print("❌ Formato de data inválido. Use YYYY-MM-DD")
                    return
            entries = parse_time_log(log_file)
            generate_daily_report(entries, target_date)
        elif sys.argv[1] == '--help':
            print("Time Report Generator - Kwanza Agent")
            print("Uso:")
            print("  python time-report.py              # Relatório completo")
            print("  python time-report.py --daily      # Relatório do dia atual")
            print("  python time-report.py --daily YYYY-MM-DD  # Relatório de data específica")
        else:
            print("❌ Opção inválida. Use --help para ver as opções disponíveis.")
    else:
        entries = parse_time_log(log_file)
        generate_summary_report(entries)

if __name__ == "__main__":
    main()