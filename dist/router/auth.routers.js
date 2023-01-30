"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_schema_1 = require("../schemaZod/auth.schema");
const validate_1 = require("../middleware/validate");
const router = express_1.default.Router();
const users = [];
router.post('/register', (0, validate_1.Validate)(auth_schema_1.RegiesterSchema), (req, res) => {
    const newUsers = req.body;
    users.push(newUsers);
    res.status(201).json({
        messge: "added user successfully "
    });
});
exports.default = router;
