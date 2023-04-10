# Sistema de Gestion de Usuarios

This is a small API for task managment

## API Reference

**`Don't forget to switch between database, check the .env file`**

## Users

#### Post a user

```http
  POST /users/new
```

Body:

| username              | password              |
| :-------------------- | :-------------------- |
| `string` **Required** | **Required** `string` |

Return:

| token          |
| :------------- |
| `jsonwebtoken` |

## Tasks

**every task request must include a token as auth header**

#### Get a full task

```http
  GET /tasks/full/${id}
```

| Parameter | Type  | Description                       |
| :-------- | :---- | :-------------------------------- |
| `id`      | `int` | **Required**. Id of item to fetch |

Returns:

| taskID | titulo   | descripcion | terminado | fechaDeEntrega          | comentarios | responsable | tags     | username |
| :----- | :------- | :---------- | --------- | ----------------------- | ----------- | ----------- | -------- | -------- |
| `int`  | `string` | `string`    | `boolean` | `date` **`YYYY-MM-DD`** | `string`    | `string`    | `string` | `string` |

#### Get a task summary

```http
  GET /tasks/summar/${id}?columns=${columns}
```

| Parameter | Type  | Description                       |
| :-------- | :---- | :-------------------------------- |
| `id`      | `int` | **Required**. Id of item to fetch |

| Parameter | Type          | Description                                                                                |
| :-------- | :------------ | :----------------------------------------------------------------------------------------- |
| `columns` | `task_column` | **Optional**. columns of the table to return (if empty; titulo, descripcion wll be return) |

Returns:

| column        |
| :------------ |
| `task_column` |

#### Post a new task

```http
  POST /tasks/new/
```

body:

| titulo   | descripcion | terminado | fechaDeEntrega          | comentarios           | responsable          | tags                 |
| :------- | :---------- | --------- | ----------------------- | --------------------- | -------------------- | -------------------- |
| `string` | `string`    | `boolean` | `date` **`YYYY-MM-DD`** | **Optional** `string` | **Optional**`string` | **Optional**`string` |

Returns:

| titulo   | descripcion | terminado | fechaDeEntrega          | comentarios | responsable | tags     | username |
| :------- | :---------- | --------- | ----------------------- | ----------- | ----------- | -------- | -------- |
| `string` | `string`    | `boolean` | `date` **`YYYY-MM-DD`** | `string`    | `string`    | `string` | `string` |

#### Update a task

```http
  PUT /tasks/update/${id}
```

| Parameter | Type  | Description                        |
| :-------- | :---- | :--------------------------------- |
| `id`      | `int` | **Required**. Id of item to update |

Body:

| Parameter | Type          | Description                     |
| :-------- | :------------ | :------------------------------ |
| `columns` | `task_column` | **Required**. columns to update |

Returns:

| succes    |
| :-------- |
| `boolean` |

#### Delete a task

```http
  DELETE /tasks/delete/${id}
```

| Parameter | Type  | Description                        |
| :-------- | :---- | :--------------------------------- |
| `id`      | `int` | **Required**. Id of item to delete |

Returns:

| succes    |
| :-------- |
| `boolean` |

## Scrips

**Don't forget to install it's dependencies**

Development

    npm start

Production

    npm run mode

## Running Tests

To run tests, run the following command

```bash
  npm run test
```

## Authors

- [@AlexRamosGlz](https://github.com/AlexRamosGlz)
