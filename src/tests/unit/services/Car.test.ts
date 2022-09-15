import * as sinon from 'sinon';
import chai from 'chai';
import CarModel from '../../../models/Car';
import CarService from '../../../services/Car';
import { carMock, carMockForChange, carMockForChangeWithId, carMockInvalid, carMockWithId } from '../../mocks/CarMock';
import { ZodError } from 'zod';
import { ErrorTypes } from '../../../errors/catalog';
const { expect } = chai;

describe('Car Service', () => {
  const carModel = new CarModel();
  const carService = new CarService(carModel);

  before(async () => {
    sinon.stub(carModel, 'create').resolves(carMockWithId);
    sinon.stub(carModel, 'readOne')
      .onCall(0).resolves(carMockWithId)
      .onCall(1).resolves(null);
    sinon.stub(carModel, 'read').resolves([carMockWithId]);
    sinon.stub(carModel, 'update').resolves(carMockForChangeWithId);
    sinon.stub(carModel, 'delete').resolves(carMockWithId);
  });

  after(()=>{
    sinon.restore();
  })

  describe('Creating a Car', () => {
    it('Successfully created', async () => {
      const newCar = await carService.create(carMock);
      expect(newCar).to.be.deep.equal(carMockWithId);
    });

    it('On Failure', async () => {
      let error;
      try {
        await carService.create(carMockInvalid);
      } catch (err) {
        error = err;
      }
      expect(error).to.be.instanceof(ZodError);
    });
  });

  describe('Searching a Car', () => {
    it('Successfully found', async () => {
      const carFound = await carService.readOne('6323641b3bd18401fb821e47');
      expect(carFound).to.be.deep.equal(carMockWithId);
    });

    it('_id not found', async () => {
      let error;
      try {
        await carService.readOne('123errado');
      } catch (err: any) {
        error = err;
      }
      expect(error.message).to.be.deep.eq(ErrorTypes.EntityNotFound);
    });
  });

  describe('Listing all Cars', () => {
    it('Successfully listed', async () => {
      const carList = await carService.read();
      expect(carList).to.be.deep.equal([carMockWithId]);
    });
  });

  describe('Changing a Car', () => {
    it('Successfully changed', async () => {
      const changeCar = await carService.update('6323641b3bd18401fb821e47', carMockForChange);
      expect(changeCar).to.be.deep.equal(carMockForChangeWithId);
    });

    it('Failure: invalid body for change', async () => {
      try {
        await carService.update('6323641b3bd18401fb821e47', carMockInvalid);
        expect(true).to.be.false;
      } catch (error: any) {
        expect(error).to.be.instanceof(ZodError);
      }
    });

    // it('Failure: id not found', async () => {
    //   sinon.restore();
    //   sinon.stub(carModel, 'update').rejects({ message: ErrorTypes.InvalidMongoId });

    //   try {
    //     await carService.update('123errado', carMock);
    //   } catch (error: any) {
    //     expect(error.message).to.be.deep.equal(ErrorTypes.InvalidMongoId);
    //   }
    // });
  });

  describe('Delete a Car', () => {
    it('Successfully deleted', async () => {
      const carDeleted = await carService.delete('632371966285a78e42b2f213');
      expect(carDeleted).to.be.equal(carMockWithId);
    });

    it('_id not found for delete', async () => {
      try {
        await carService.delete('123errado');
      } catch (error: any) {
        expect(error.message).to.be.equal(ErrorTypes.InvalidMongoId);
      }
    });
  });
});
