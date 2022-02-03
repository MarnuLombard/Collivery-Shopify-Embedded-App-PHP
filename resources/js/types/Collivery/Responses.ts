type BaseResponse<C> = {
  meta: C;
};

export type ResponseData<T, C> = BaseResponse<C> & {
  data: T;
};

export type ResponseCollection<T, C> = BaseResponse<C> & {
  data: T[];
  links: {
    first: string;
    last: string;
    next?: string;
    prev?: string;
  };
  meta: C & {
    current_page: number;
    last_page: number;
    path: string;
    per_page: number;
    total: number;
    from?: number;
    to?: number;
  };
};
