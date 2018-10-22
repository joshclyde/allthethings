import * as Router from "koa-router";

import { getBookmarks, insertBookmark } from "./services";
import { IBookmark } from "./types";

const router = new Router({
  prefix: "/bookmarks",
});

router.get("/", async (ctx, next) => {
  const bookmarks = await getBookmarks();
  ctx.response.status = bookmarks ? 200 : 500;
  ctx.response.body = bookmarks ? bookmarks : "Oopsies! Something went wrong.";
  ctx.set("Access-Control-Allow-Origin", "http://localhost:8080");
  await next();
});

router.post("/", async (ctx, next) => {
  const { name, data, folderId } = ctx.request.body as IBookmark;
  if (folderId) {
    // get bookmark from db and make sure it exists
  }

  const didSave = await insertBookmark({ name, data, folderId });
  ctx.response.status = didSave ? 200 : 500;
  ctx.response.body = didSave ? "Success!" : "Oopsies! Something went wrong.";
  await next();
});

export { router as bookmarksRouter };
