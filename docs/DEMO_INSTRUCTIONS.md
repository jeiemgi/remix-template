# Demo Instructions

To run the demo properly you have to enable the database locally.

- Create a `.env` file in the root folder with this key and value:
  ```dotenv
  DATABASE_URL="file:./dev.db"
  ```
- In the terminal run:
  ```sh
  npx prisma db push
  ```
- Run `yarn dev`