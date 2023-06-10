import express from 'express';
import { getAllOems, postOEMs } from '../controllers/oemSpec.controller.js';

const oemSpecRouter = express.Router();

oemSpecRouter.route("/")
     .get(getAllOems) // Retrieve all OEM-specs data
     .post(postOEMs); // Create a new OEM-spec data

export default oemSpecRouter;