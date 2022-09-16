import { Router } from 'express';
import MotorcycleController from '../controllers/Motorcycle';
import MotorcycleModel from '../models/Motorcycle';
import MotorcycleService from '../services/Motorcycle';

const route = Router();

const motorcycle = new MotorcycleModel();
const motorcycleService = new MotorcycleService(motorcycle);
const motorcycleController = new MotorcycleController(motorcycleService);

const motorcycleEndpoint = '/motorcycles';

route.post(motorcycleEndpoint, (req, res) => motorcycleController.create(req, res));
route.get(motorcycleEndpoint, (req, res) => motorcycleController.read(req, res));
route.get(`${motorcycleEndpoint}/:id`, (req, res) => motorcycleController.readOne(req, res));
route.put(`${motorcycleEndpoint}/:id`, (req, res) => motorcycleController.update(req, res));
route.delete(`${motorcycleEndpoint}/:id`, (req, res) => motorcycleController.delete(req, res));

export default route;
