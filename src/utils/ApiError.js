class ApiError extends Error{
    constructor(
        message,
        statusCode,
        error=[],
        stack=""
    ){
        super(message)
        this.message=message
        this.statusCode=statusCode
        this.error=error
        this.data=null
        this.stack=stack

    }
}
export {ApiError}