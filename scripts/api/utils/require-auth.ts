import * as jwt from "jsonwebtoken";
import JWT_PUBLIC_KEY from "../../configs/jwt";

const requireToken = (req, res, next) => {
    if (req.headers.authorization) {
        const bearer = req.headers.authorization.split(" ");
        const jwtToken = bearer[1];

        let decoded;

        try {
            decoded = jwt.verify(jwtToken, JWT_PUBLIC_KEY);
        } catch (error) {
            console.log(error);
            decoded = null;
        }

        if (!decoded) {
            return res.status(403).json({
                success: false,
                message: "You are not authorized to perform this operation.",
            });
        }

        req.user = decoded.user;

        next();
    } else {
        res.status(403).json({
            success: false,
            message: "You are not authorized to perform this operation.",
        });
    }
};

export default requireToken;