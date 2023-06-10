import express from 'express';
import { getAllOems, postOEMs } from '../controllers/OEMSpec.controller.js';
const oemSpecRouter = express.Router();
oemSpecRouter.route("/")
    .get(getAllOems) // Retrieve all OEM-specs data
    .post(postOEMs); // Create a new OEM-spec data
export default oemSpecRouter;
//# sourceMappingURL=OEMSpec.route.js.map