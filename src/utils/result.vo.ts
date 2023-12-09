export class Result<T> {
  constructor() {}
  private code: number;
  private msg: string;
  private data: T;

  public success = (data: T) => {
    let res = new Result();
    res.code = 200;
    res.data = data;
    return res;
  };

  public err = (msg, code) => {
    let res = new Result();
    res.code = code || 500;
    res.msg = msg;
    return res;
  };
}
