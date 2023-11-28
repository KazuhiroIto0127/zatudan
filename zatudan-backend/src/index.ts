import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { topics } from './topics/api'

const app = new Hono()
app.use(
  '/api/*',
  cors({
    origin: ['https://zatudan-frontend.pages.dev', 'http://localhost:3001'],
    allowHeaders: ['X-Custom-Header', 'Upgrade-Insecure-Requests', 'Content-Type'],
    allowMethods: ['POST', 'GET', 'OPTIONS'],
    exposeHeaders: ['Content-Length', 'X-Kuma-Revision'],
    maxAge: 600,
    credentials: true,
  })
)

app.route('/api/topics', topics)

export default app
