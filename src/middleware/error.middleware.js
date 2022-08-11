const errorMiddleware = (err, req, res, next) => {
   // errStatus = err.status || 500
   // errMessage = err.message || 'Something went wrong'
   // res.status(errStatus).json({
   //    message: errMessage,
   // })
   res.status(err.status || 500).json({
      status: err.status || 500,
      message: err.message || 'Something went wrong',
   })
}
module.exports = errorMiddleware
