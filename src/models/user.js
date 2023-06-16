import mongoose from 'mongoose';
const { Schema } = mongoose;


const UserSchema = new Schema(
    {
        user_name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },

    }
);

UserSchema.set('toJSON', {
    transform: function (doc, ret) {
        delete ret.password;
        delete ret.__v;
    },
});

const User = mongoose.model('User', UserSchema);
export default User;

/**
 * @openapi
 * components:
 *  schemas:
 *    CreateUserInput:
 *      type: object
 *      required:
 *        - user_name
 *        - email
 *        - password
 *        - confirm_password
 *      properties:
 *        email:
 *          type: string
 *          default: jane.doe@example.com
 *        user_name:
 *          type: string
 *          default: Jane Doe
 *        password:
 *          type: string
 *          default: stringPassword123
 *        confirm_password:
 *          type: string
 *          default: stringPassword123
 *    CreateUserResponse:
 *      type: object
 *      properties:
 *        message:
 *          type: string
 *          default: User registered successfully
 *        data:
 *          type: object
 *          properties:
 *            user_name:
 *              type: string
 *            email:
 *              type: string
 *            _id:
 *              type: string
 */


/**
 * @openapi
 * components:
 *  schemas:
 *    SigninUserInput:
 *      type: object
 *      required:
 *        - email
 *        - password
 *      properties:
 *        email:
 *          type: string
 *          default: jane.doe@example.com
 *        password:
 *          type: string
 *          default: stringPassword123
 *    SigninUserResponse:
 *      type: object
 *      properties:
 *        message:
 *          type: string
 *          default: User signed in successfully
 *        data:
 *          type: object
 *          properties:
 *            user_name:
 *              type: string
 *            email:
 *              type: string
 *            _id:
 *              type: string
 */
