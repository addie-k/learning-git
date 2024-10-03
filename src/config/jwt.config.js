import jwt from 'jsonwebtoken';
const jwtMW = (req,res,next)=>{
    const token = req.cookies.token || req.headers.authorization
    if(!token){
        console.log('token invalid')
        try {
            const payload = jwt.verify(token,'secret')
            req.userId = payload.userId
            console.log(payload,"payload")
        } catch (error) {
            console.log(error,"token verification failed")
        }
    }
    next()
}
export default jwtMW
