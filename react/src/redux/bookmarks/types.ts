export interface IBookmarkData {
  id: number;
  folderId?: number;
  name: string;
  data?: string;
}

export interface IBookmarkState {
  bookmarkData: IBookmarkData[];
  bookmarkIds: number[];
}

export interface IActions {
  type: string;
  bookmarkId: number;
}
