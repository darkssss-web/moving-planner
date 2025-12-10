INSERT INTO Users (username, email) VALUES
  ('alex_mover',  'alex@example.com'),
  ('maria_move',  'maria@example.com');

INSERT INTO Rooms (user_id, name, description) VALUES
  (1, 'Kitchen',     'Кухня в новой квартире'),
  (1, 'Bedroom',     'Основная спальня'),
  (2, 'Living Room', 'Гостиная у Марии');

INSERT INTO Boxes (room_id, label, notes) VALUES
  (1, 'Box #1', 'Посуда, хрупкое'),
  (1, 'Box #2', 'Кухонная техника'),
  (2, 'Box #3', 'Одежда Алекса'),
  (3, 'Box #A', 'Книги Марии');

INSERT INTO Items (box_id, name, description, is_fragile, value_estimate) VALUES
  (1, 'Набор тарелок', 'Белые керамические тарелки', 1, 3000),
  (1, 'Стаканы',       'Стеклянные стаканы',         1, 1500),
  (2, 'Микроволновка', 'Кухонная техника',           0, 8000),
  (3, 'Зимняя куртка', 'Одежда на зиму',             0, 6000),
  (4, 'Фэнтези-роман', 'Любимая книга',              0, 500),
  (NULL, 'Картина',    'Пока не упакована',          1, 12000);

INSERT INTO Statuses (name) VALUES
  ('planned'),
  ('in_progress'),
  ('done');

INSERT INTO Tasks (user_id, title, description, due_date, status_id) VALUES
  (1, 'Упаковать кухню',        'Собрать всю кухонную утварь в коробки', '2025-12-10', 2),
  (1, 'Подписать коробки',      'Наклеить стикеры с названиями комнат', '2025-12-12', 1),
  (2, 'Перевезти книги',        'Все книги перенести в гостиную',       '2025-11-20', 3),
  (2, 'Разобрать одежду',       'Разложить одежду по шкафам',           '2025-11-25', 1);
