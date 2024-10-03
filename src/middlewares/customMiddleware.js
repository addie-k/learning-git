export default function middleware(req,res,next){
    req.requestTime = Date.now()
    
    next()
}