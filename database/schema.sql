PRAGMA foreign_keys = ON;

CREATE TABLE Users (
    user_id    INTEGER PRIMARY KEY AUTOINCREMENT,
    username   TEXT NOT NULL UNIQUE,
    email      TEXT NOT NULL UNIQUE,
    created_at TEXT DEFAULT (datetime('now'))
);

CREATE TABLE Rooms (
    room_id     INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id     INTEGER NOT NULL,
    name        TEXT NOT NULL,
    description TEXT,
    created_at  TEXT DEFAULT (datetime('now')),
    FOREIGN KEY (user_id) REFERENCES Users(user_id) ON DELETE CASCADE
);

CREATE TABLE Boxes (
    box_id     INTEGER PRIMARY KEY AUTOINCREMENT,
    room_id    INTEGER NOT NULL,
    label      TEXT NOT NULL,
    notes      TEXT,
    created_at TEXT DEFAULT (datetime('now')),
    FOREIGN KEY (room_id) REFERENCES Rooms(room_id) ON DELETE CASCADE
);

CREATE TABLE Items (
    item_id        INTEGER PRIMARY KEY AUTOINCREMENT,
    box_id         INTEGER,
    name           TEXT NOT NULL,
    description    TEXT,
    is_fragile     INTEGER DEFAULT 0,
    value_estimate INTEGER,
    FOREIGN KEY (box_id) REFERENCES Boxes(box_id) ON DELETE SET NULL
);

CREATE TABLE Statuses (
    status_id INTEGER PRIMARY KEY AUTOINCREMENT,
    name      TEXT NOT NULL UNIQUE
);

CREATE TABLE Tasks (
    task_id    INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id    INTEGER NOT NULL,
    title      TEXT NOT NULL,
    description TEXT,
    due_date   TEXT,
    status_id  INTEGER NOT NULL,
    created_at TEXT DEFAULT (datetime('now')),
    FOREIGN KEY (user_id)  REFERENCES Users(user_id)   ON DELETE CASCADE,
    FOREIGN KEY (status_id) REFERENCES Statuses(status_id)
);

CREATE INDEX idx_rooms_user   ON Rooms(user_id);
CREATE INDEX idx_boxes_room   ON Boxes(room_id);
CREATE INDEX idx_items_box    ON Items(box_id);
CREATE INDEX idx_tasks_user   ON Tasks(user_id);
CREATE INDEX idx_tasks_status ON Tasks(status_id);
