import { Hono, Context } from 'hono'

const app = new Hono()

app.get('/',  (c: Context) => {
  return c.text('Hello Hono!')
})

app.post('/', (c: Context)=>{
  return c.json({message  : "hello world "});
})


app.put('/', (c: Context)=>{
  return c.json({message : "Message updated"});
})


app.delete('/', (c: Context)=>{
  return c.json({message : "Delete done here"})
})

export default app
