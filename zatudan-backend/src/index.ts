import { Hono } from 'hono'

const app = new Hono()

app.get('/', (c) => c.text('Hello Hono test2!'))

export default app
