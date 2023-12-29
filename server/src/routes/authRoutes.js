import express from 'express';
import joi from 'joi';
import ExpressValidation from 'express-joi-validation';
import {postLogin, postRegister} from '../controllers/controllers.js'
import Joi from 'joi';

const router = express.Router();

const validator = ExpressValidation.createValidator({})
const registerSchema = Joi.object({
    username: Joi.string().min(3).max(12).required(),
    password: Joi.string().min(6).max(12).required(),
    email: joi.string().email(),
});

const loginSchema = Joi.object({
    password: Joi.string().min(6).max(12).required(),
    email: joi.string().email(),
});

router.post('/register', validator.body(registerSchema), postRegister);

router.post('/login', validator.body(loginSchema), postLogin);

export default router;