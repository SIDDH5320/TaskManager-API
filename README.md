# Task Manager API

This project is a task manager API built using Node.js. It allows users to manage tasks by providing endpoints for creating, retrieving, updating, and deleting tasks.

## Requirements

### 1. API Endpoints
- `/api/tasks` [POST]: Create a new task.
- `/api/tasks` [GET]: Retrieve all tasks.
- `/api/tasks/:id` [GET]: Retrieve a single task by its ID.
- `/api/tasks/:id` [PUT]: Update a task by its ID.
- `/api/tasks/:id` [DELETE]: Delete a task by its ID.

### 2. Database
- Used Mongodb
- Database schema includes fields: ID, title, description, creation date, status.
- Proper indexing for performance optimization.

### 3. Business Logic
- Validation for invalid inputs.
- Error handling for managing different types of errors and returning appropriate status codes and messages.

### 4. Testing
- Unit tests for API endpoints.
- Integration tests for API endpoints with the database.

### 5. Documentation
- README file with setup instructions and API endpoint details.

## Evaluation Criteria
- Functionality
- Code Quality
- Database Design
- Testing
- Error Handling

## Setup Instructions

1. Clone the repository:

```
git clone (https://github.com/SIDDH5320/TaskManager-API.git)
```

2. Install dependencies:

```
npm install
```

3. Set up the database (provide instructions specific to the chosen database).

4. Configure environment variables (if any).

5. Start the server:

```
npm start
```

## API Endpoint Details

### Create a new task
- Endpoint: `localhost/tasks`
- Method: POST
- Required Parameters: title, description
- Example Request:
  ```
  POST localhost/tasks
  {
    "title": "Task 1",
    "description": "Description of task 1"
  }
  ```
- Example Response:
  ```
  {
    "id": 1,
    "title": "Task 1",
    "description": "Description of task 1",
    "creation_date": "2024-04-30T12:00:00.000Z",
    "status": "pending"
  }
  ```

(Provide similar details for other endpoints)


