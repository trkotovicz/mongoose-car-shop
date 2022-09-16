import { motorcycleZodSchema, IMotorcycle } from '../interfaces/IMotorcycle';
import { IModel } from '../interfaces/IModel';
import { IService } from '../interfaces/IService';
import { ErrorTypes } from '../errors/catalog';

class MotorcycleService implements IService<IMotorcycle> {
  private _motorcycle: IModel<IMotorcycle>;

  constructor(model: IModel<IMotorcycle>) {
    this._motorcycle = model;
  }

  public async create(obj: IMotorcycle): Promise<IMotorcycle> {
    const parsed = motorcycleZodSchema.safeParse(obj);
    if (!parsed.success) throw parsed.error;
    return this._motorcycle.create(obj);
  }

  public async read(): Promise<IMotorcycle[]> {
    const motorcycles = await this._motorcycle.read();
    return motorcycles;
  }

  public async readOne(_id: string): Promise<IMotorcycle> {
    const motorcycle = await this._motorcycle.readOne(_id);
    if (!motorcycle) throw new Error(ErrorTypes.EntityNotFound);
    return motorcycle;
  }

  public async update(_id: string, obj: IMotorcycle): Promise<IMotorcycle> {
    const parsed = motorcycleZodSchema.safeParse(obj);
    if (!parsed.success) throw parsed.error;

    const result = await this._motorcycle.update(_id, obj);
    if (!result) throw new Error(ErrorTypes.EntityNotFound);
    return result;
  }

  public async delete(_id: string): Promise<IMotorcycle> {
    const motorcycle = await this._motorcycle.delete(_id);
    if (!motorcycle) throw new Error(ErrorTypes.EntityNotFound);
    return motorcycle;
  }
}

export default MotorcycleService;
