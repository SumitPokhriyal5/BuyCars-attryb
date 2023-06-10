import express from "express";
import connectDB from "./config/db.js";
import userRouter from "./routes/User.route.js";
import authCheck from "./middlewares/auth.middleware.js";
import marketplace_inventoryRouter from "./routes/Marketplace_inventory.route.js";
import oemSpecRouter from "./routes/OEMSpec.route.js";
import cors from "cors";
import dotenv from 'dotenv';
dotenv.config();
const app = express();
// Enable CORS
app.use(cors());
// Body parser
app.use(express.json());
app.get('/', async (req, res) => {
    try {
        res.status(200).send({ message: 'Welcome to the homepage' });
    }
    catch (error) {
        console.log('Error:', error);
        res.status(500).send({ message: 'Internal server error!', error });
    }
});
// user routes
app.use("/user", userRouter);
// Authentication middleware
app.use(authCheck);
// Marketplace routes
app.use("/marketplace", marketplace_inventoryRouter);
// OEM-spec routes
app.use("/oemspec", oemSpecRouter);
// Wrong endpoint URL
app.use('*', async (req, res) => {
    res.sendStatus(422);
});
// App listener
app.listen(process.env.PORT || 8080, async () => {
    try {
        console.log(`Server is running on http://localhost:${process.env.PORT || 8080}`);
        console.log('⏳ Database connecting...');
        await connectDB;
        console.log('✅ Database connected.');
    }
    catch (error) {
        console.log('❌ Error:', error);
    }
});
//# sourceMappingURL=index.js.map