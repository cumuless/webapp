# Cumuless API Routes
**Base URL: http://api.testing.cumuless.com/v1**

## Auth
- **Login Email**
    - `POST /auth/login?email="test@gmail.com"`
    - Params
        ```
        email: string
        ```
    - Response
        ```
        description?: string | null,
        authMethod?: 'sso' | 'password' | null
        ```
    - Status
        ```
        [200] Success
        [404] Error - display error text
        ```

- **Login Password**
    - `POST /auth/login?email="test@gmail.com"`
    - Params
        ```
        email: string
        ```
    - Response
        ```
        description?: string | null,
        authMethod?: 'sso' | 'password' | null
        ```
    - Status
        ```
        [200] Success
        [404] Error - display error text
        ```

- **Forgot Password**
    - `POST /auth/forgot-password?email="test@gmail.com"`
    - Params
        ```
        email: string
        ```
    - Response
        ```
        description?: string | null,
        ```
    - Status
        ```
        [200] Success
        [404] Error - display error text
        ```


## Admin
## App