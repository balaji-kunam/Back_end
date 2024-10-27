import {Router} from 'express';
import  userRegister from '../Controllers/user.controller.js';

 

const router = Router()


router.route("/Register").post(userRegister);

export default router; 