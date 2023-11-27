import { Hono } from 'hono'
import { zatudan } from './zatudan/api'

const app = new Hono()

app.route('/api/zatudan', zatudan)

export default app
