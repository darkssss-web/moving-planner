# Лабораторная работа №5  
## Моделирование поведения: Use Case и диаграммы последовательности

## 1. Use Case Diagram

Актор:
- **User** — основной пользователь приложения.

Основные варианты использования:
- Управление комнатами: Add/Edit/Delete Room
- Управление коробками: Add/Edit/Delete Box, Assign Box to Room
- Управление вещами: Add/Edit/Delete Item, Move Item To Box
- Управление задачами: Add/Edit/Delete/Complete Task
- Общие функции: View Dashboard, Search Items, Generate Packing Report

PNG файл:  
`docs/use_case/use_case_diagram.png`

PlantUML:  
`docs/use_case/use_case_diagram.puml`

---

## 2. Диаграммы последовательности (Sequence Diagrams)

### Сценарий 1: Добавление новой вещи  
Файл: `sequence/add_item_sequence.puml`  
PNG: `sequence/add_item_sequence.png`

### Сценарий 2: Перемещение вещи в коробку  
Файл: `sequence/move_item_sequence.puml`  
PNG: `sequence/move_item_sequence.png`

### Сценарий 3: Создание задачи  
Файл: `sequence/add_task_sequence.puml`  
PNG: `sequence/add_task_sequence.png`

### Сценарий 4: Генерация отчёта по упаковке 
Файл: `sequence/generate_report_sequence.puml`  
PNG: `sequence/generate_report_sequence.png`

---

## 3. Используемые инструменты
**PlantUML** — генерация диаграмм из текстового описания.
