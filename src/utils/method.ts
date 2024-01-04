type pageProp = { current: number; pageSize: number };
export function queryList<T, U>(
  query: U & pageProp,
  queryMap?: {
    // [P in keyof queryProp<T>]?: P extends keyof T ? P : keyof T;
    [P in keyof T]?: Exclude<keyof U, keyof pageProp>;
  },
) {
  let string = '';
  let stringMap: any = {};
  for (const key in queryMap) {
    if (Object.prototype.hasOwnProperty.call(queryMap, key)) {
      const element = queryMap[key];
      let curString = `item.${key} like :${key}`;
      string += curString;
      stringMap[key] = `%${query[element]}%`;
    }
  }
  const { current, pageSize } = query;
  return this.repository
    .createQueryBuilder('item')
    .where(string, stringMap)
    .offset((current - 1) * pageSize)
    .limit(pageSize)
    .getManyAndCount();
}
