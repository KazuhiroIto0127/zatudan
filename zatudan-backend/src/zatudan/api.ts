import { Hono } from 'hono'
import { D1QB, FetchTypes } from "workers-qb";

export interface Env {
  DB: D1Database;
}

let todoList = [
  { id: "1", title: "Learning Hono", completed: false },
  { id: "2", title: "Watch the movie", completed: true },
  { id: "3", title: "Buy milk", completed: false },
];

const zatudan = new Hono<Env>();

zatudan.get('/', (c) => c.json(todoList))

zatudan.post('/', async c => {
  try {
    console.log('c', c);

    const qb = new D1QB(c.env.DB);
    const inserted = await qb.insert({
      tableName: 'topics',
      data: {
        body: 'testes',
      },
      returning: '*'
    }).execute();
    console.log(`id: ${inserted.results.id}`)
  } catch (e) {
    console.error(e);
    throw e;
  }
});

zatudan.get('/:id', async c => {
  console.log('c', c);

  const {id} = c.req.param();
  const qb = new D1QB(c.env.DB);
  const fetched = await qb.raw({
    query: 'SELECT * FROM topics WHERE id = ?1',
    args: [id],
    fetchType: FetchTypes.ALL,
  }).execute();

  console.log('fetched', fetched);
  return c.json(fetched.results);
});


export { zatudan }
