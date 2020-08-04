import { Application, Router } from "https://deno.land/x/oak/mod.ts";

const app = new Application();
const router = new Router();

router.get('/',(ctx,next)=>{
    ctx.response.body = `<h1>The home page\n</h1>`
    ctx.response.type = 'text/html';
});

router.get('/about',(ctx,next)=>{
    ctx.response.body = `<h1>The about page\n</h1>`
    ctx.response.type = 'text/html';
});

router.get('/contact',(ctx,next)=>{
    ctx.response.body = `<h1>The contact page\n</h1>`
    ctx.response.type = 'text/html';
});

app.use(router.routes());
app.use(router.allowedMethods());

await app.listen({ port: 8000 });
