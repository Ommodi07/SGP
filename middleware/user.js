const jwt = require("jsonwebtoken");
const { JWT_USER_PASSWORD } = require("../config");

function userMiddleware(req, res, next) {
    // Retrieve token from Authorization header (Bearer token)
    const authHeader = req.headers.authorization;
    
    // Check if the token is provided
    if (!authHeader) {
        return res.status(401).json({
            message: "Authorization token missing or malformed"
        });
    }

    const token = authHeader;
    try {
        // Verify token and extract payload
        const decoded = jwt.verify(token, JWT_USER_PASSWORD);
        console.log(decoded);
        
        // Attach user ID to request object for use in subsequent routes
        req.userId = decoded.id;

        // Proceed to the next middleware or route handler
        next();
    } catch (error) {
        // Handle invalid/expired token
        res.status(403).json({
            message: "Invalid or expired token"
        });
    }
}

module.exports = {
    userMiddleware
};