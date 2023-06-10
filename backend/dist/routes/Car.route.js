import express from 'express';
import { getAllCars, postCar, updateCarDetails, deleteCar } from '../controllers/Car.controller.js';
const carRouter = express.Router();
// Route for getting all cars from the marketplace
carRouter.route("/")
    .get(getAllCars) // Retrieve all cars from the marketplace
    .post(postCar); // Create a new car listing in the marketplace
// Route for updating and deleting a specific car by its ID
carRouter.route("/:id")
    .patch(updateCarDetails) // Update details of a specific car
    .delete(deleteCar); // Delete a specific car
export default carRouter;
//# sourceMappingURL=Car.route.js.map