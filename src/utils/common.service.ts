import { Repository } from 'typeorm'

type pageProp = { offset: number; limit: number };

export class BaseService<Entity> extends Repository<Entity> {


    async queryList<T, U>(
        query: U & pageProp,
        queryMap?: {
            // [P in keyof queryProp<T>]?: P extends keyof T ? P : keyof T;
            [P in keyof T]?: Exclude<keyof U, keyof pageProp>;
        },
    ) {
        let string = ''
        let stringMap: any = {}
        for (const key in queryMap) {
            if (Object.prototype.hasOwnProperty.call(queryMap, key)) {
                const element = queryMap[key];
                let curString = `item.${key} like :${key}`
                string += curString
                stringMap[key] = `%${query[element]}%`
            }
        }

        return this
            .createQueryBuilder('item')
            .where(string, stringMap)
            .offset(query.offset)
            .limit(query.limit)
            .getManyAndCount();
    }
}
