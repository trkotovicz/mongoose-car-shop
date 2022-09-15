import * as sinon from 'sinon';
import chai from 'chai';
const { expect } = chai;
import { Model } from 'mongoose';
import CarModel from '../../../models/Car';
import { carMock, carMockForChange, carMockForChangeWithId, carMockWithId } from '../../mocks/CarMock';
import { ErrorTypes } from '../../../errors/catalog';

describe('Car Model', () => {
  const carModel = new CarModel();

  before(async () => {
    sinon.stub(Model, 'create').resolves(carMockWithId);
    sinon.stub(Model, 'findOne').resolves(carMockWithId);
    sinon.stub(Model, 'find').resolves([carMockWithId]);
    sinon.stub(Model, 'findByIdAndUpdate').resolves(carMockForChangeWithId);
    sinon.stub(Model, 'findByIdAndDelete').resolves(carMockWithId);
  });

  after(() => {
    sinon.restore();
  });

  describe('Creating a Car', () => {
    it('Successfully created', async () => {
      const newCar = await carModel.create(carMock);
      expect(newCar).to.be.deep.equal(carMockWithId);
    });
  });

  describe('Searching a Car', () => {
    it('Successfully found', async () => {
      const carFound = await carModel.readOne('6323641b3bd18401fb821e47');
      expect(carFound).to.be.deep.equal(carMockWithId);
    });

    it('_id not found', async () => {
      try {
        await carModel.readOne('123errado');
      } catch (error: any) {
        expect(error.message).to.be.eq('InvalidMongoId');
      }
    });
  });

  describe('Listing all Cars', () => {
    it('Successfully listed', async () => {
      const carList = await carModel.read();
      expect(carList).to.be.deep.equal([carMockWithId]);
    });
  });

  describe('Changing a Car', () => {
    it('Successfully changed', async () => {
      const changeCar = await carModel.update('6323641b3bd18401fb821e47', carMockForChange);
      expect(changeCar).to.be.deep.equal(carMockForChangeWithId);
    });

    it('_id not found for change', async () => {
      try {
        await carModel.update('123errado', carMockForChange);
      } catch (error: any) {
        expect(error.message).to.be.equal(ErrorTypes.InvalidMongoId);
      }
    })
  });

  describe('Delete a Car', () => {
    it('Successfully deleted', async () => {
      const carDeleted = await carModel.delete('632371966285a78e42b2f213');
      expect(carDeleted).to.be.equal(carMockWithId);
    });

    it('_id not found for delete', async () => {
      try {
        await carModel.delete('123errado');
      } catch (error: any) {
        expect(error.message).to.be.equal(ErrorTypes.InvalidMongoId);
      }
    });
  });
});
