"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegiesterSchema = void 0;
const zod_1 = require("zod");
exports.RegiesterSchema = zod_1.z.object({
    body: zod_1.z.object({
        id: zod_1.z.string({ required_error: "id is required", invalid_type_error: "type is not allowed" }),
        name: zod_1.z.string({ required_error: "name is required", invalid_type_error: "type is not allowed" }),
        type: zod_1.z.string({ required_error: "type is required", invalid_type_error: "type is not allowed" }),
        tickets: zod_1.z.number({ required_error: "ticket is required", invalid_type_error: "type is not allowed" }),
        price: zod_1.z.number({ required_error: "price is required", invalid_type_error: "type is not allowed" })
    })
});
