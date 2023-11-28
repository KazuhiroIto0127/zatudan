import { Hono } from 'hono'
import { D1QB, FetchTypes, OrderTypes } from "workers-qb";

export interface Env {
  DB: D1Database;
}

const topics = new Hono<Env>();

topics.get('/', async c => {
  console.log('c', c);

  const qb = new D1QB(c.env.DB);
  const fetched = await qb
  .fetchAll({
    tableName: 'topics',
    fields: ['*'],
    orderBy: {
      created_at: OrderTypes.DESC,
    },
  })
  .execute()

  console.log('fetched', fetched);
  return c.json(fetched.results);
})

topics.post('/', async c => {
  try {
    console.log('c', c);
    const body = await c.req.parseBody()
    console.log(body);

    const qb = new D1QB(c.env.DB);
    const inserted = await qb.insert({
      tableName: 'topics',
      data: {
        body: body.body,
      },
      returning: '*'
    }).execute();
    console.log(`id: ${inserted.results.id}`)
    return c.json({ message: 'success' });
  } catch (e) {
    console.error(e);
    throw e;
  }
});

topics.get('/random', async c => {
  try {
    const qb = new D1QB(c.env.DB);
    const fetched = await qb
    .fetchAll({
      tableName: 'topics',
      fields: '*',
      orderBy: 'RANDOM()',
      limit: 1
    }).execute();
    console.log(fetched)
    return c.json(fetched.results);
  } catch (e) {
    console.error(e);
    throw e;
  }
});

topics.get('/:id', async c => {
  console.log('c', c);

  const {id} = c.req.param();
  const qb = new D1QB(c.env.DB);
  const fetched = await qb.fetchOne({
    tableName: 'topics',
    fields: '*',
    where: {
      conditions: 'id = ?1',
      params: [id],
    },
  }).execute()
  console.log('fetched', fetched);
  return c.json(fetched.results);
});



export { topics }
