export interface IUiState {
  width: number;
  height: number;
}

export interface IActions {
  type: string;
  width?: number;
  height?: number;
}
