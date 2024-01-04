import { Type, applyDecorators } from '@nestjs/common'
import { ApiResponse, getSchemaPath ,ApiExtraModels,} from '@nestjs/swagger'

const baseTypeNames = ['String', 'Number', 'Boolean']

/**
 * @description: 生成返回结果装饰器
 */



export const APIResponse = <TModel extends Type<any>>(
    type?: TModel | TModel[],
) => {
    let prop = null
    if (Array.isArray(type)) {
     console.log(type,12312312)
            prop = {
                type: 'array',
                items: { $ref: getSchemaPath(type[0]) },
            }
        
    } else if (type) {
        if (type && baseTypeNames.includes(type.name)) {
            prop = { type: type.name.toLocaleLowerCase() }
        } else {
            prop = { $ref: getSchemaPath(type) }
        }
    } else {
        prop = { type: 'null', default: null }
    }

    let resProps = {
        type: 'object',
        properties: {
            code: { type: 'number', default: 200 },
            msg: { type: 'string', default: 'ok' },
            data: prop
        },
    }
    return applyDecorators(
        ApiExtraModels(type ? (Array.isArray(type) ? type[0] : type) : String),
        ApiResponse({
            schema: {
                allOf: [
                    resProps
                ],
            },
        }),
    )
}

