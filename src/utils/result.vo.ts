import { ApiResponseProperty, ApiProperty } from '@nestjs/swagger';
export class Result<T> {
  constructor() {}
  public code: number;
  public msg: string;
  public data: T;

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

export class SuccessResultVo<U> {
  constructor() {}
  @ApiResponseProperty()
  public code: number;
  @ApiResponseProperty()
  public msg: string;
  @ApiResponseProperty({})
  public data?: U;
}
