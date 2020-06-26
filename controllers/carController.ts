import { Context } from "https://deno.land/x/abc@v1.0.0-rc10/mod.ts";
import { Car } from "../models/carModel.ts"
import { v4 } from "https://deno.land/std/uuid/mod.ts";


let cars: Car[] = [
  {id: '1', model: 'Ranger', producer: 'Ford', price: 30000},
  {id: '2', model: 'Everest', producer: 'Ford', price: 40000},
  {id: '3', model: 'Explorer', producer: 'Ford', price: 60000}
]

export const get_all_cars = (c: Context) => {
  return c.json(cars, 200)
}

export const get_car = (c: Context) => {
  const { id } = c.params
  const car = cars.find((c: Car) => c.id === id)
  if (car) {
    return c.json(car, 200)
  }
  return c.string("No car with that id", 404)
}

export const create_car = async (c: Context) => {
  const {model, producer, price} = await c.body()

  const id = v4.generate()
  const car = {id, model, producer, price}
  cars.push(car)
  return c.json(car, 201)
}

export const delete_car = (c: Context) => {
  const { id } = c.params
  const car = cars.find((c: Car) => c.id === id)
  if (car) {
    cars = cars.filter((c: Car) => c.id !== id)
    return c.string("The car has been removed", 200)
  }
  return c.string("No car with that id", 404)
}