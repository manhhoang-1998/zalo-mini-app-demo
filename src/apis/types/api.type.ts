export type ResponseType = {};

export type InputType<T> = {
  payload: T;
  onSuccess?: (data: any) => void;
  onError?: () => void;
};
