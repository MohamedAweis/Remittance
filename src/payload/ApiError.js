class ApiError extends Error {
    constructor(status, error, stack) {
        super();
        this.status = status;
        this.error = error;
        this.stack = stack;
    }
};
module.exports = {
    ApiError
};