import { Hono } from 'hono'

let todoList = [
  { id: "1", title: "Learning Hono", completed: false },
  { id: "2", title: "Watch the movie", completed: true },
  { id: "3", title: "Buy milk", completed: false },
];

const zatudan = new Hono();
zatudan.get('/', (c) => c.json(todoList))

export { zatudan }
