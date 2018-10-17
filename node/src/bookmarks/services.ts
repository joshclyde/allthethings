import * as mongoose from "mongoose";
import { IBookmark } from "./types";

mongoose.connect("mongodb://localhost:27017");

const bookmarkSchema = new mongoose.Schema({
  name: String,
  data: String,
  folderId: mongoose.Schema.Types.ObjectId,
});
const Bookmark = mongoose.model("Bookmark", bookmarkSchema);

export const getBookmarks = async () => {
  try {
    const bookmarks = await Bookmark.find();
    return bookmarks;
  } catch (error) {
    console.log("uh oh!", error);
    return false;
  }
};

export const insertBookmark = async ({ name, data, folderId }: IBookmark) => {
  const bookmark = new Bookmark({
    name,
    data,
    folderId,
  });
  try {
    await bookmark.save();
    return true;
  } catch (error) {
    console.log("uh oh!", error);
    return false;
  }
};
