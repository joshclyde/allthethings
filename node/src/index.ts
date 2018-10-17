import * as Koa from "koa";
import * as bodyParser from "koa-bodyparser";
import { bookmarksRouter } from "./bookmarks/routes";

const app = new Koa();

app.use(bodyParser());

app.use(async (ctx, next) => {
  // tslint:disable-next-line
  console.log("Url:", ctx.url);
  await next();
});

app.use(bookmarksRouter.routes());
app.use(bookmarksRouter.allowedMethods());

app.listen(4000);

// tslint:disable-next-line
console.log("Server running on port 4000");
