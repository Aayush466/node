class ApiError extends Error {
    constructor(
        statusCode,
        error=[],
        message="something went wrong ",
        stack=""
    ){
        super(message)
        this.message=message
        this.data=null
        this.error=error
        this.statusCode=statusCode
        this.stack=stack
    }
}
export {ApiError}