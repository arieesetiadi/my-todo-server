const responseSuccess = (message, data) => {
    const response = {
        message,
        data,
    };

    return response;
};

const responseFailed = (message, error) => {
    const response = {
        message: message,
        error,
    };

    return response;
};

export { responseSuccess, responseFailed };
