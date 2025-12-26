import ratelimit from "../config/upstash.js";

const rateLimiter = async (req, res, next) => {
    try {
        const {success} = ratelimit.limit("my-limit-key");
        if (!success){ 
            return res.status(429).json({message: "Too many requests!"});
        }

        next();
    } catch (error) {
        
    }
};

export default rateLimiter;