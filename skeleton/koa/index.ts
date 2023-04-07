const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const { saveSkeletonContent } = require('./utils.ts');

const app = new Koa();
app.use(bodyParser());

app.use(async (ctx) => {
  if (ctx.request.method === 'POST') {
    const { name, content = '', pathname } = ctx.request.body;
    await saveSkeletonContent(name, content, pathname);
  }
  ctx.body = 'ok';
});

app.listen(5208, () => {
  console.log('骨架屏服务开启');
});
