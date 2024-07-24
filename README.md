# CreateUser Microservice

This microservice handles the creation of users in a MongoDB database. It provides an endpoint to create new users via HTTP POST requests.

## Prerequisites

- Docker
- Node.js
- MongoDB

## Installation

1. Clone the repository:
    ```bash
    git clone https://your-repository-url.git
    cd CreateUser
    ```

2. Build the Docker image:
    ```bash
    docker build -t createuser-service .
    ```

3. Run the Docker container:
    ```bash
    docker run -p 3001:3001 --name createuser-service createuser-service
    ```

## Usage

You can use `curl` or Postman to send a POST request to create a new user.

### Using `curl`

```bash
curl -X POST http://localhost:3001/createUser -H "Content-Type: application/json" -d '{"nombre": "Juan", "apellido": "Perez", "email": "juan.perez@example.com"}'
