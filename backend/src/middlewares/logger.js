const loggerMiddleware = (req, res, next) => {
    console.log(`[${new Date().toString()}] ${req.method} ${req.originalUrl}`);
    next();
};

export default loggerMiddleware;