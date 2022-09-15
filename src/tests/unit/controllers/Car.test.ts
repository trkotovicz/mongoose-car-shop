import { expect } from 'chai';
import * as sinon from 'sinon';
import { NextFunction, Request, Response } from 'express';
import { carMock, carMockForChange, carMockForChangeWithId, carMockInvalid, carMockWithId } from '../../mocks/CarMock';
import CarController from '../../../controllers/Car';
import CarModel from '../../../models/Car';
import CarService from '../../../services/Car';


describe('Car Controller', () => {
  const carModel = new CarModel();
  const carService = new CarService(carModel);
  const carController = new CarController(carService);

  const req = {} as Request;
  const res = {} as Response;

  before(async () => {
    sinon.stub(carService, 'create').resolves(carMock);
    sinon.stub(carService, 'readOne').resolves(carMock);
    sinon.stub(carService, 'read').resolves([carMock]);
    sinon.stub(carService, 'update').resolves(carMockForChangeWithId);
    sinon.stub(carService, 'delete').resolves();

    res.status = sinon.stub().returns(res);
    res.end = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
  });

  after(()=>{
    sinon.restore();
  });

  describe('Creating a Car', () => {
    it('Successfully created', async () => {
      req.body = carMock;
      await carController.create(req, res);

      expect((res.status as sinon.SinonStub).calledWith(201)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith(carMock)).to.be.true;
    });
  });

  describe('Searching a Car', () => {
    it('Successfully found', async () => {
      req.params = { id: carMockForChangeWithId._id };
      await carController.readOne(req, res);

      expect((res.status as sinon.SinonStub).calledWith(200)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith(carMock)).to.be.true;
    });
  });

  describe('Listing all Cars', () => {
    it('Successfully listed', async () => {
      await carController.read(req, res);

      expect((res.status as sinon.SinonStub).calledWith(200)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith([carMock])).to.be.true;
    });
  });

  describe('Changing a Car', () => {
    it('Successfully changed', async () => {
      req.params = { id: carMockForChangeWithId._id };
      req.body = carMockForChange;
      await carController.update(req, res);
      
      expect((res.status as sinon.SinonStub).calledWith(200)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith(carMockForChangeWithId)).to.be.true;
    });
  });

  describe('Delete a Car', () => {
    it('Successfully deleted', async () => {
      req.params = { id: carMockWithId._id };
      await carController.delete(req, res);
      
      expect((res.status as sinon.SinonStub).calledWith(204)).to.be.true;
      expect((res.end as sinon.SinonStub).calledWith()).to.be.true;
    });
  });
});