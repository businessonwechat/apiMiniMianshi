

import express from 'express'
import user from '../controllers/user.js'

const router = express.Router()

/**
 * @api {get} /api/v1/login login
 * @apiName login
 * @apiGroup 用户管理
 *
 * @apiParam {String} username 用户名/手机号
 * @apiParam {String} password 密码
 */
router.get('/', user.login)

export default router
