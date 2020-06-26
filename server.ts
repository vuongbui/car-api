import { Application} from "https://deno.land/x/abc@v1.0.0-rc10/mod.ts";
import {
  get_all_cars,
  get_car,
  create_car,
  delete_car
} from "./controllers/carController.ts"

const app = new Application();

app.get("/cars", get_all_cars)

app.get("/cars/:id", get_car)

app.post("/cars", create_car)

app.delete("/cars/:id", delete_car)

app.start({ port: 8080 });