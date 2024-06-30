# Cumuless API Routes

## Auth

Base URL: http://auth.testing.cumuless.com/

- **Login Email**

  - `POST /auth/login`
  - Params
    ```
    email: string
    ```
  - Response
    ```
    description?: string | null,
    authMethod?: 'sso' | 'password' | null
    ```

- **Login Password**

  - `POST /auth/login`
  - Params
    ```
    email: string
    ```
  - Response
    ```
    description?: string | null,
    authMethod?: 'sso' | 'password' | null
    ```

- **Forgot Password**
  - `POST /auth/forgot-password`
  - Params
    ```
    email: string
    ```
  - Response
    ```
    description?: string | null,
    ```

## App

Base URL: http://api.testing.cumuless.com/v1

**Defs**

- enum SourceType

  ```
  Drive = "Drive"    // Google Drive
  Slack = "Slack"    // Slack
  Gmail = "Gmail"    // Gmail
  Slab = "Slab"      // Slab
  ```

- type User

  ```
  uid: string
  name: string
  ```

- type Source

  ```
  id: string
  sourceType: SourceType
  title: string
  content?: string
  lastModified?: DateTime
  owner?: User
  link: string
  tags?: [{title: string, link: string}]
  ```

- type Search

  ```
  id: string
  query: string
  timestamp: DateTime
  ```

- type ChatMessage
  ```
  id: string
  sender: "User" | "Assistant"
  content: string
  timestamp: DateTime
  sources: Source[]
  ```

**Routes**

- **User Details**

  - `GET /app/me`
    - Response
      ```
      name: string
      preferredTheme: "Light" | "Dark"
      ```

- **Bookmarks**

  - `GET /app/bookmarks`
    - Response
      ```
      sources[]: Source[]
      ```
  - `POST /app/bookmarks`
    - Params
      ```
      id: string,
      ```

- **Recents**

  - `GET /app/recents`
    - Response
      ```
      sources[]: Source[]
      ```
  - `DELETE /app/recents`
    - Params
      ```
      id: string
      ```

- **Recent Searches**

  - `GET /app/recent_searches`
    - Response
      ```
      searches: Search[]
      ```
  - `DELETE /app/recent_searches`
    - Response
      ```
      id: string
      ```

- **Quick Search**

  - `GET /app/quick_search`
    - Params
      ```
      query: string
      ```

- **Search**

  - `GET /app/search`
    - Params
      ```
      query: string
      ```

- **Chat**
  - `GET /app/chat`
    - Params
      ```
      query: string
      ```
    - Response
      ```
      message: ChatMessage
      ```
