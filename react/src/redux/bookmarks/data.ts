import { IBookmarkState } from "./types";

export const data: IBookmarkState = {
  bookmarkData: [
    {
      id: 0,
      name: "Home",
    },
    {
      id: 1,
      name: "Google",
      folderId: 0,
    },
    {
      id: 2,
      name: "Calendar",
      data: "https://www.google.com/calendar/render#main_7",
      folderId: 1,
    },
    {
      id: 3,
      name: "greenwich on the park",
      data: "https://www.greenwichapts.com/amenities.aspx",
      folderId: 0,
    },
    {
      id: 4,
      name: "current at the bank",
      data: "https://currentcinci.com/features/",
      folderId: 0,
    },
    {
      id: 5,
      name: "tsconfig",
      data: "https://www.typescriptlang.org/docs/handbook/tsconfig-json.html",
      folderId: 0,
    },
    {
      id: 6,
      name: "Gmail",
      data: "https://mail.google.com/mail/u/0/#inbox",
      folderId: 1,
    },
    {
      id: 7,
      name: "Drive",
      data: "https://drive.google.com/drive/my-drive",
      folderId: 1,
    },
    {
      id: 8,
      name: "My Books",
      data: "https://play.google.com/books",
      folderId: 1,
    },
    {
      id: 9,
      name: "Kindle Cloud Reader",
      data: "https://read.amazon.com/",
      folderId: 1,
    },
  ],
  bookmarkIds: [0, 1],
};
