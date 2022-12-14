import { model as mongooseCreateModel, Schema } from 'mongoose';
import MongoModel from './MongoModel';
import { IMotorcycle } from '../interfaces/IMotorcycle';

const motorcycleMongooseSchema = new Schema<IMotorcycle>({
  model: String,
  year: Number,
  color: String,
  status: Boolean,
  buyValue: Number,
  category: String,
  engineCapacity: Number,
}, { versionKey: false });

class MotorcycleModel extends MongoModel<IMotorcycle> {
  constructor(model = mongooseCreateModel('Motorcycle', motorcycleMongooseSchema)) {
    super(model);
  }
}

export default MotorcycleModel;
