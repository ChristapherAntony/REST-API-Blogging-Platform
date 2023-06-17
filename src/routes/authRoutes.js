import authController from "../controllers/authController.js";
import { validateSignin, validationSignup } from "../middleware/validate.js";


const authRouter = (router) => {

  /**
   * @openapi
   * '/api/v1/auth/signup':
   *  post:
   *     tags:
   *     - Authentication
   *     summary: Register a user 
   *     requestBody:
   *      required: true
   *      content:
   *        application/json:
   *           schema:
   *              $ref: '#/components/schemas/CreateUserInput'
   *     responses:
   *      201:
   *        description: Success
   *        content:
   *          application/json:
   *            schema:
   *              $ref: '#/components/schemas/CreateUserResponse'
   *      409:
   *        description: Conflict
   *      422:
   *        description: Validation error
   *      400:
   *        description: Bad request
   */
  router.route('/signup').post(validationSignup, authController.signup);


  /**
   * @openapi
   * '/api/v1/auth/signin':
   *  post:
   *     tags:
   *     - Authentication
   *     summary: Signin with email and password
   *     requestBody:
   *      required: true
   *      content:
   *        application/json:
   *           schema:
   *              $ref: '#/components/schemas/SigninUserInput'
   *     responses:
   *      200:
   *        description: Success
   *        content:
   *          application/json:
   *            schema:
   *              $ref: '#/components/schemas/SigninUserResponse'
   *      409:
   *        description: Conflict
   *      422:
   *        description: Validation error
   *      400:
   *        description: Bad request
   */
  router.route('/signin').post(validateSignin, authController.signin);

  /**
   * @openapi
   * '/api/v1/auth/logout':
   *   post:
   *     tags:
   *       - Authentication
   *     summary: User sign out
   *     requestBody:
   *      required: false
   *     responses:
   *       200:
   *         description: Successful sign out
   *         content:
   *           application/json:
   *             schema:
   *               $ref: '#/components/schemas/LogoutResponse'
   *       401:
   *         description: Unauthorized
   *       500:
   *         description: Internal server error
   */
  router.route('/logout').post(authController.logOut);


  return router;
}

export default authRouter;
