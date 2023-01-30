import {TypeOf, z}from 'zod'
import {  TypeEnum } from '../type/type.type'

export const RegiesterSchema = z.object({
    body: z.object({
        id:z.string({required_error:"id is required",invalid_type_error:"type is not allowed"}).min(2) ,
        name:z.string({required_error:"name is required",invalid_type_error:"type is not allowed"}).min(4),

        type:z.nativeEnum(TypeEnum,{required_error:"type is required",invalid_type_error:"type is not allowed"}),
        tickets:z.string({required_error:"ticket is required",invalid_type_error:"type is not allowed"}),
        price:z.number({required_error:"price is required",invalid_type_error:"type is not allowed"})

    })
})





export type RegisterTypeSchema = TypeOf<typeof RegiesterSchema>["body"]

