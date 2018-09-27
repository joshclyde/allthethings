import { IBookmarkState } from "./bookmarks/types";
import { IUiState } from "./ui/types";

export interface IState {
  bookmarks: IBookmarkState;
  ui: IUiState;
}
