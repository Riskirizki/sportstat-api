# SportStat-API: Backend REST API

This is the README file for the SportStat-API project.

## REST API Endpoints

You can access the SportStat-API using the following endpoints:

- **Production:** [https://sportstat-api.example.com](https://sportstat-api.example.com)
- **Local:** [http://localhost:3000](http://localhost:3000)

### Endpoint Descriptions

| Endpoint      | HTTP   | Description        |
| ------------- | ------ | ------------------ |
| `/sports`     | GET    | Get all sports     |
| `/sports/:id` | GET    | Get sport by id    |
| `/sports`     | POST   | Add new sport      |
| `/sports`     | DELETE | Delete all sports  |
| `/sports/:id` | DELETE | Delete sport by id |
| `/sports/:id` | PUT    | Update sport by id |

### Getting Started

To install dependencies and run the project in development mode, use:

```sh
bun install
bun dev
```

This will start the server in development mode. After running the project, you can access it at http://localhost:3000.
