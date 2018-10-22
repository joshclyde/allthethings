export interface IFetching {
  isFetching: boolean;
  isSuccess: boolean;
  isFailure: boolean;
}

export interface IBookmarkData {
  id: number;
  folderId?: number;
  name: string;
  data?: string;
}

export interface IBookmarkState {
  bookmarkData: IBookmarkData[];
  bookmarkIds: number[];
  fetching: IFetching;
}

export interface IActions {
  type: string;
  bookmarkId?: number;
  bookmarkData?: IBookmarkData[];
}
