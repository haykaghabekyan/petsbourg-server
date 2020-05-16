import jwt from 'jsonwebtoken';

export const requireAuth = (req, res, next) => {
    if (req.headers.authorization) {
        const bearer = req.headers.authorization.split(' ');
        const jwtToken = bearer[1];

        let decoded = null;
        try {
            decoded = jwt.verify(jwtToken, process.env.JWT_PRIVATE_KEY);
        } catch (error) {
            console.error('invalid jwt', error);
        }

        if (!decoded) {
            return res.status(403).json({
                success: false,
                message: 'You are not authorized to perform this operation.',
            });
        }

        req.user = decoded.user;

        next();
    } else {
        res.status(403).json({
            success: false,
            message: 'You are not authorized to perform this operation.',
        });
    }
};
