import jwt from "jsonwebtoken";
import { UserModel } from "../models/User.model.js";
import dotenv from "dotenv";
dotenv.config();
const authCheck = (req, res, next) => {
    const token = req.headers.authorization;
    jwt.verify(token, process.env.SECRET_KEY, async function (err, decoded) {
        if (err) {
            res.status(401).send({ message: "JWT verification error", error: err });
        }
        else {
            try {
                const matchedUser = await UserModel.findById(decoded.userId);
                if (matchedUser) {
                    req.headers.userId = decoded.userId;
                    next();
                }
                else {
                    res.status(401).send({ message: "User doesn't exist!" });
                }
            }
            catch (error) {
                console.log('Error:', error);
                res.status(500).send({ message: error.message, error });
            }
        }
    });
};
export default authCheck;
//# sourceMappingURL=auth.middleware.js.map