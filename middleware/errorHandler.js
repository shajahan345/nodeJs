const { constants } = require('../constants');
const errorHandler = (error, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500;
    switch (statusCode) {
        case constants.VALIDATION_ERROR:
            res.json({ title: "Validation error", message: error.message, stackTrace: error.stack });
            break;
        case constants.NOT_FOUND:
            res.json({ title: "Note Found", message: error.message, stackTrace: error.stack });
            break;
        case constants.FORBIDDEN:
            res.json({ title: "Forbidden", message: error.message, stackTrace: error.stack });
            break;
        case constants.UNAUTHORIZED:
            res.json({ title: "Unauthorized", message: error.message, stackTrace: error.stack });
            break;
        case constants.SERVER_ERROR:
            res.json({ title: "Sever Error", message: error.message, stackTrace: error.stack });
            break;
        default:

            console.log("No Problem All good");

    }

}

module.exports = errorHandler;