const {validateToken} = require("../services/authentication");

function checkForAuthenticaitonCookie(cookieName){
    return  (req,res,next) => {
        const tokenCookieValue = req.cookies[cookieName];

        if(!tokenCookieValue){
            return next()
        };
        try {
            const userPayload = validateToken(tokenCookieValue);
            req.user = userPayload;
        } catch (error) {
            console.error("Error in code authentication",error);
        }
        return next()
    }
}

module.exports = {
    checkForAuthenticaitonCookie,
}