const errorMiddleware = (err, req, res, next) => {
   errStatus = err.status || 500
   errMessage = err.message || 'Something went wrong'
   res.status(errStatus).json({
      message: errMessage,
   })
}
module.exports = errorMiddleware
