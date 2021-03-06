const Koa = require('koa');
const Next = require('next');
const Router = require('koa-router');

const dev = process.env.NODE_ENV !== 'production';
const app = Next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = new Koa();

  server.use(async (ctx, next) => {
    await handle(ctx.req, ctx.res);
    ctx.response = false;
  })

  server.listen(3000, () => {
    console.log('koa server listening on 3000')
  });
});
