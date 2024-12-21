# iut_reform_bitfest_preliminary

`.env` file format:

```
PORT = 5001
DATABASE_URL = <mongodb-atlas link>
HUGGINGFACE_API_KEY=
```

-   Route: /api/ingredient \
    Method: POST\
    body:

```json
{
    "name": "Flour",
    "quantity": 500
}
```

    Sample response:

```json
{
    "success": true,
    "statusCode": 200,
    "message": "Ingredient Added successfully",
    "data": {
        "name": "Flour",
        "quantity": 500,
        "_id": "6766bef1e177c562764f201d",
        "createdAt": "2024-12-21T13:13:21.600Z",
        "updatedAt": "2024-12-21T13:13:21.600Z",
        "__v": 0
    }
}
```

-   Route: /api/ingredient \
    Method: GET\
    Sample response:

```json
{
    "success": true,
    "statusCode": 200,
    "message": "Ingredients fetched successfully",
    "data": [
        {
            "_id": "6766bef1e177c562764f201d",
            "name": "Flour",
            "quantity": 600,
            "createdAt": "2024-12-21T13:13:21.600Z",
            "updatedAt": "2024-12-21T13:16:05.551Z",
            "__v": 0
        }
    ]
}
```

-   Route: /api/ingredient/:id \
    Method: POST\
    Sample response:

```json
{
    "success": true,
    "statusCode": 200,
    "message": "Ingredient fetched successfully",
    "data": {
        "_id": "6766bef1e177c562764f201d",
        "name": "Flour",
        "quantity": 500,
        "createdAt": "2024-12-21T13:13:21.600Z",
        "updatedAt": "2024-12-21T13:13:21.600Z",
        "__v": 0
    }
}
```

-   Route: /api/ingredient \
    Method: PUT\
    body:

```json
{
    "name": "Flour",
    "quantity": 600
}
```

    sample response:

```json
{
    "success": true,
    "statusCode": 200,
    "message": "Ingredient Updated successfully",
    "data": {
        "_id": "6766bef1e177c562764f201d",
        "name": "Flour",
        "quantity": 600,
        "createdAt": "2024-12-21T13:13:21.600Z",
        "updatedAt": "2024-12-21T13:16:05.551Z",
        "__v": 0
    }
}
```

-   Route: /api/recipe \
    Method: GET\
    sample response:

```json
{
    "success": true,
    "statusCode": 200,
    "message": "Recipies fetched successfully",
    "data": [
        {
            "id": 1,
            "name": "Tea",
            "description": "Some text",
            "type": "sweet",
            "imagePath": "No image",
            "ingredients": [
                {
                    "name": "Sugar",
                    "quantity": 200
                }
            ]
        }
    ]
}
```

-   Route: /api/ingredient \
    Method: POST\
    body:

```json
{
    "name": "Tea",
    "description": "Some text",
    "imagePath": "No image",
    "ingredients": [
        {
            "name": "Sugar",
            "quantity": 200
        }
    ]
}
```

    Sample response:

```json
{
    "success": true,
    "statusCode": 201,
    "message": "Recipe added successfully",
    "data": {
        "id": 1,
        "name": "Tea",
        "description": "Some text",
        "imagePath": "No image",
        "ingredients": [
            {
                "name": "Sugar",
                "quantity": 200
            }
        ]
    }
}
```

-   Route: /api/recipe/suggestions \
     Method: GET\
     body:
    ```json
    {
        "prompt": "I want something sweet today"
    }
    ```

````
    sample response:

```json
{
    "success": true,
    "statusCode": 200,
    "message": "Suggestions fetched successfully",
    "data": {
        ""
    }
}
````
