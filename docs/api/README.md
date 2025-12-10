# Moving Planner API Documentation

## Mock Server URL
`https://5b12d35e-8766-42d7-bb60-3055d4bafd55.mock.pstmn.io`

---

## Endpoints

### Authentication
- `POST /auth/login` – авторизация пользователя

### Tasks
- `GET /tasks` – получить все задачи
- `POST /tasks` – создать задачу
- `PATCH /tasks?id={id}` – обновить задачу
- `DELETE /tasks?id={id}` – удалить задачу

### Categories
- `GET /categories` – получить категории (deleted=true/false)

---

## Examples

### Login
**Success – Login**  
URL: `{{base_url}}/auth/login?username=darkssss`

**Error – Invalid credentials**  
URL: `{{base_url}}/auth/login?username=wronguser`

---

### Get All Tasks
**Success – With tasks**  
URL: `{{base_url}}/tasks?status=active`

**Success – Empty list**  
URL: `{{base_url}}/tasks?status=completed`

---

### Create Task
**Success – Task created**  
URL: `{{base_url}}/tasks`

**Error – Validation failed**  
URL: `{{base_url}}/tasks`

---

### Update Task
**Success – Task updated**  
URL: `{{base_url}}/tasks?id=3`

**Error – Task not found**  
URL: `{{base_url}}/tasks?id=9999`

---

### Delete Task
**Success – Task deleted**  
URL: `{{base_url}}/tasks?id=3`

**Error – Task not found**  
URL: `{{base_url}}/tasks?id=9999`

---

### Get Categories
**Success – Active categories**  
URL: `{{base_url}}/categories?deleted=false`

**Success – Deleted categories**  
URL: `{{base_url}}/categories?deleted=true`
