# Products endpoints

_Get all product [no auth required]_
```http
GET /api/products/all
```

- returning "json"
    ```json
    {
    "status": 200,
    "message": [
            {
                "id": 1,
                "name": "...",
                "rating": 4,
                "price": 7199,
                "description": "...",
                "images": [
                    "www.google.com/image.jpg","www.youtube.com/image.jpg"
                ],
                "stock": 5,
                "category_id": "1",
                "created_at": "2022-08-12T21:58:09.438Z"
            },
            /*....*/ 
            {
                "id": 3,
                "name": "...",
                "rating": 4.5,
                "price": 16000,
                "description": "...",
                "images": [
                    "www.google.com/image.jpg","www.youtube.com/image.jpg"
                ],
                "stock": 3,
                "category_id": "5",
                "created_at": "2022-08-12T22:16:44.616Z"
            }
        ]
    }

<hr />

_Get one product [no auth required]_
```http
GET /api/products?id=3
```
- id query for the product  

    | query     | Type     |
    | :-------- | :------- |
    | `id`      | `number` |

- returning "json" 
    ```json
    {
        "status": 200,
        "message": {
            "id": 3,
            "name": "...",
            "rating": 4.5,
            "price": 16000,
            "description": "...",
            "images": [
                "www.google.com/image.jpg","www.youtube.com/image.jpg"
            ],
            "stock": 3,
            "category_id": "5",
            "created_at": "2022-08-12T22:16:44.616Z"
        }
    }
    ```

<hr />

_Create product [admin token required]_

```http
POST /api/products/
```
- headers for the request

    | Header          | Type     | Description                        |
    | :-------------- | :------- | :--------------------------------- |
    | `Authorization` | `string` | `need admin token `                |

- body "json" type needed

    | body            | Type     |
    | :---------------| :------- |
    | `name`          | `string` |
    | `rating`        | `float`  |
    | `price`         | `integer`|
    | `description`   | `string` |
    | `images`        | `array`  |
    | `stock`         | `integer`|
    | `category_id`   | `integer`|

- returning "json"
    ```json
    {
        "status": 200,
        "message": {} // returning json object of the product created
    }
    ```
<hr />

_Update product [admin token required]_

```http
PATCH /api/products/
```
- headers for the request

    | Header          | Type     | Description                        |
    | :-------------- | :------- | :--------------------------------- |
    | `Authorization` | `string` | `need admin token `                |

- body "json" type needed

    | body            | Type     |optional  |
    | :---------------| :------- |:-------- |
    | `name`          | `string` |true      |
    | `rating`        | `float`  |true      |
    | `price`         | `integer`|true      |
    | `description`   | `string` |true      |
    | `images`        | `array`  |true      |
    | `stock`         | `integer`|true      |
    | `category_id`   | `integer`|true      |

- returning "json"
    ```json
    {
        "status": 200,
        "message": {} // returning json object of the product updated
    }
    ```
<hr />

_Delete product [admin token required]_

```http
DELETE /api/products/
```
- headers for the request

    | Header          | Type     | Description                        |
    | :-------------- | :------- | :--------------------------------- |
    | `Authorization` | `string` | `need admin token `                |

- body "json" type needed

    | body            | Type     |
    | :---------------| :------- |
    | `id`            | `integer`|

- returning "json"
    ```json
    {
        "status": 200,
        "message": {} // returning json object of the product deleted
    }
    ```
<hr />

# Category endpoints

_Get all category [no auth required]_

```http
GET /api/category/all
```
- returning "json"
    ```json
    {
        "status": 200,
        "message": [
            {
                "id": 1,
                "name": "...",
                "created_at": "2022-08-12T21:58:09.438Z"
            },
            /*....*/ 
            {
                "id": 3,
                "name": "...",
                "created_at": "2022-08-12T22:16:44.616Z"
            }
        ]
    }
    ```
<hr />

_Get one category [no auth required]_

```http
GET /api/category?id=1
```

- id query for the category  

    | query     | Type     |
    | :-------- | :------- |
    | `id`      | `number` |

- returning "json" 
    ```json
    {
        "status": 200,
        "message": {
            "id": 1,
            "name": "...",
            "created_at": "2022-08-12T21:58:09.438Z"
        }
    }
    ```

_Create category [admin token required]_

```http
POST /api/category/
```
- headers for the request

    | Header          | Type     | Description                        |
    | :-------------- | :------- | :--------------------------------- |
    | `Authorization` | `string` | `need admin token `                |

- body "json" type needed

    | body            | Type     |
    | :---------------| :------- |
    | `name`          | `string` |

- returning "json"
    ```json
    {
        "status": 200,
        "message": {} // returning json object of the category created
    }
    ```

<hr />

_Update category [admin token required]_

```http
PATCH /api/category/
```
- headers for the request

    | Header          | Type     | Description                        |
    | :-------------- | :------- | :--------------------------------- |
    | `Authorization` | `string` | `need admin token `                |

- body "json" type needed

    | body            | Type     |optional  |
    | :---------------| :------- |:-------- |
    | `name`          | `string` |false     |

- returning "json"
    ```json
    {
        "status": 200,
        "message": {} // returning json object of the category updated
    }
    ```

<hr />

_Delete category [admin token required]_

```http
DELETE /api/category/
```
- headers for the request

    | Header          | Type     | Description                        |
    | :-------------- | :------- | :--------------------------------- |
    | `Authorization` | `string` | `need admin token `                |

- body "json" type needed

    | body            | Type     |
    | :---------------| :------- |
    | `id`            | `integer`|

- returning "json"
    ```json
    {
        "status": 200,
        "message": {} // returning json object of the category deleted
    }
    ```

<hr />

# cart endpoints

_Get all cart [admin token required]_

```http
GET /api/cart/all
```
- headers for the request

    | Header          | Type     | Description                        |
    | :-------------- | :------- | :--------------------------------- |
    | `Authorization` | `string` | `need admin token `                |

- returning "json"
    ```json
    {
        "status": 200,
        "message": [
            {
                "id": 1,
                "user_id": "...",
                "items":{ // object key is product id and value is quantity
                    "1":50,
                    "9":10,
                    "2":20
                }
                "created_at": "2022-08-12T21:58:09.438Z"
            },
            /*....*/ 
            {
                "id": 3,
                "user_id": "...",
                "items":{ // object key is product id and value is quantity
                    "4":60,
                    "2":64
                }
                "created_at": "2022-08-12T22:16:44.616Z"
            }
        ]
    }
    ```
<hr />

_Get one cart [USER token required]_

```http
GET /api/cart?id=1
```
- headers for the request

    | Header          | Type     | Description                        |
    | :-------------- | :------- | :--------------------------------- |
    | `Authorization` | `string` | `need USER token `                 |

- id query for the cart  

    | query           | Type     | details                                             |
    | :---------------| :------- | :-------------------------------------------------- |
    | `id`            | `integer`| `id of the user created the cart not id of the cart`|

- returning "json" 
    ```json
    {
        "status": 200,
        "message": {
            "id": 1,
            "user_id": "...",
            "items":{ // object key is product id and value is quantity
                "1":50,
                "9":10,
                "2":20
            }
            "created_at": "2022-08-12T21:58:09.438Z"
        }
    }
    ```

<hr />

_Create cart [USER token required]_

```http
POST /api/cart/
```
- headers for the request

    | Header          | Type     | Description                        |
    | :-------------- | :------- | :--------------------------------- |
    | `Authorization` | `string` | `need USER token `                 |

- body "json" type needed

    | body            | Type     |
    | :---------------| :------- |
    | `user_id`       | `string` |
    | `items`         | `object` |

- returning "json"
    ```json
    {
        "status": 200,
        "message": {} // returning json object of the cart created
    }
    ```

<hr />

_Update cart [USER token required]_

```http
PATCH /api/cart/
```
- headers for the request

    | Header          | Type     | Description                        |
    | :-------------- | :------- | :--------------------------------- |
    | `Authorization` | `string` | `need USER token `                 |

- body "json" type needed

    | body            | Type     |optional  |
    | :---------------| :------- |:-------- |
    | `items`         | `object` |false     |

- returning "json"
    ```json
    {
        "status": 200,
        "message": {} // returning json object of the cart updated
    }
    ```

<hr />

_Delete cart [USER token required]_

```http
DELETE /api/cart/
```
- headers for the request

    | Header          | Type     | Description                        |
    | :-------------- | :------- | :--------------------------------- |
    | `Authorization` | `string` | `need USER token `                 |

- body "json" type needed

    | body            | Type     | details                                             |
    | :---------------| :------- | :-------------------------------------------------- |
    | `id`            | `integer`| `id of the user created the cart not id of the cart`|

- returning "json"
    ```json
    {
        "status": 200,
        "message": {} // returning json object of the cart deleted
    }
    ```

<hr />

## Data Shapes

### Product

- id `integer`
- name `string`
- rating `float`
- price `integer`
- description `string`
- images `array`
- stock `integer`
- category_id `integer`
- created_at `string`

### Category

- id `integer`
- name `string`
- created_at `string`

### Cart

- id `integer`
- user_id `integer`
- items `object`
- created_at `string`

### admin
- id `integer`
- uuid `string`
- created_at `string`

## Database schema
![Database schema](https://cdn.discordapp.com/attachments/654613346452242434/1007930690450501652/unknown.png)