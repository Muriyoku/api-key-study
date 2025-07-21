/*
  This project it's just for study purpose. It won't any robust error handling 
  or advanced optimization. It's just for test "api keys". 

  I do not recommed to use it for production 
*/

import './database/migrations.database';
import { handleHelloWorldGetRequest } from "./routes/generic";
import { handleKeyPostRequest } from "./routes/keys";

 

const app = Bun.serve({
  port: 3000,
  routes: {
    "/api/helloworld": {
      GET: handleHelloWorldGetRequest,
    },
    "/api/key": {
      POST: handleKeyPostRequest,
    }
  }
})

console.log("Server Started at: ", app.port);