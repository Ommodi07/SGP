const jwt = require("jsonwebtoken");
const { JWT_USER_PASSWORD } = require("../config");

function userMiddleware(req, res, next) {
    const authHeader = req.headers.authorization;

    // Validate Authorization header
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return res.status(401).json({
            message: "Authorization token missing or malformed"
        });
    }

    const token = authHeader.split(" ")[1]; // Extract token
    console.log(token);
    console.log(JWT_USER_PASSWORD);
    try {
        // Verify token
        console.log("here");
        const decoded = jwt.verify(token, JWT_USER_PASSWORD);
        console.log("here");
        console.log("Decoded Token:", decoded);

        // Attach user data to request
        req.userId = decoded.id;

        next();
    } catch (error) {
        console.error("JWT Verification Error:", error.message);
        res.status(403).json({
            message: error.name === "TokenExpiredError"
                ? "Token has expired"
                : "Invalid or malformed token"
        });
    }

}
module.exports = {
    userMiddleware
};
