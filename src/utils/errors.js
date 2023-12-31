const createErrorClass = (name, statusCode) => {
    return class extends Error {
        statusCode;
        constructor(message) {
            super(message);
            this.name = name;
            this.statusCode = statusCode;
        }
    };
};

export const ERROR = {
    HttpError: createErrorClass('HttpError', 500),
    UserExistsError: createErrorClass('UserExistsError', 409), 
    ConflictError: createErrorClass('ConflictError', 409), 
    NotFoundError: createErrorClass('NotFoundError', 404),
    BadRequestError: createErrorClass('BadRequestError', 400),
    InvalidInputError: createErrorClass('InvalidInputError', 422),
    InvalidTokenError: createErrorClass('InvalidTokenError', 401),
    ForbiddenError: createErrorClass('InvalidTokenError', 403),
};
