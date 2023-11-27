import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { zatudan } from './zatudan/api'

const app = new Hono()
app.use(
  '/api/*',
  cors({
    origin: ['https://zatudan-backend.kazuhiroito0127.workers.dev', 'http://localhost:3001'],
    allowHeaders: ['X-Custom-Header', 'Upgrade-Insecure-Requests', 'Content-Type'],
    allowMethods: ['POST', 'GET', 'OPTIONS'],
    exposeHeaders: ['Content-Length', 'X-Kuma-Revision'],
    maxAge: 600,
    credentials: true,
  })
)

app.route('/api/zatudan', zatudan)

export default app
