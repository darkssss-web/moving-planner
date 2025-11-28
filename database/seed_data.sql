INSERT INTO Users (username, email) VALUES
  ('alex',  'alex@example.com'),
  ('maria', 'maria@example.com');

INSERT INTO Rooms (user_id, name, description) VALUES
  (1, 'Kitchen',  'Кухня в новой квартире'),
  (1, 'Bedroom',  'Спальня'),
  (2, 'Living Room', 'Гостиная у Марии');

INSERT INTO Boxes (user_id, room_id, label, notes) VALUES
  (1, 1, 'Box #1', 'Fragile: посуда'),
  (1, 2, 'Box #2', 'Одежда'),
  (2, 3, 'Box #A', 'Книги');

INSERT INTO Items (user_id, room_id, box_id, name, description, is_fragile, value_estimate) VALUES
  (1, 1, 1, 'Plate Set', 'Набор тарелок', 1, 500),
  (1, 2, 2, 'Jacket', 'Зимняя куртка', 0, 1500),
  (2, 3, 3, 'Fantasy Book', 'Любимая книга', 0, 300),
  (1, 1, NULL, 'Microwave', 'Пока не упакован', 0, 4000);

INSERT INTO Statuses (name) VALUES
  ('planned'),
  ('in_progress'),
  ('done');

INSERT INTO Tasks (user_id, title, description, due_date, status_id) VALUES
  (1, 'Pack kitchen items', 'Упаковать всю кухонную утварь', '2025-12-15', 2),
  (1, 'Label all boxes', 'Наклеить стикеры с названиями комнат', '2025-12-20', 1),
  (2, 'Move books', 'Перевезти все книги в новую гостиную', '2025-11-20', 3);
