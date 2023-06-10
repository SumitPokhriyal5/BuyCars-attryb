import express from 'express';
import { getAllCars, postCar, updateCarDetails, deleteCar } from '../controllers/Marketplace_inventory.controller.js';
const marketplace_inventoryRouter = express.Router();
// Route for getting all cars from the marketplace
marketplace_inventoryRouter.route("/")
    .get(getAllCars) // Retrieve all cars from the marketplace
    .post(postCar); // Create a new car listing in the marketplace
// Route for updating and deleting a specific car by its ID
marketplace_inventoryRouter.route("/:id")
    .patch(updateCarDetails) // Update details of a specific car
    .delete(deleteCar); // Delete a specific car
export default marketplace_inventoryRouter;
//# sourceMappingURL=Marketplace_inventory.route.js.map