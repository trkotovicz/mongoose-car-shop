import { ICar } from '../../interfaces/ICar';

const carMock: ICar = {
  model: 'Ferrari Maranello',
  year: 1963,
  color: 'red',
  buyValue: 3500000,
  seatsQty: 2,
  doorsQty: 2
}

const carMockWithId: ICar & { _id: string } = {
  model: 'Ferrari Maranello',
  year: 1963,
  color: 'red',
  buyValue: 3500000,
  seatsQty: 2,
  doorsQty: 2,
  _id: '6323641b3bd18401fb821e47'
}

const carMockForChange: ICar = {
  model: 'Fiat Uno',
  year: 1963,
  color: 'blue',
  buyValue: 3500,
  seatsQty: 4,
  doorsQty: 4,
}

const carMockForChangeWithId: ICar & { _id: string }= {
  model: 'Fiat Uno',
  year: 1963,
  color: 'blue',
  buyValue: 3500,
  seatsQty: 4,
  doorsQty: 4,
  _id: '6323641b3bd18401fb821e47'
}

const carMockInvalid: any = {
  model: 'Fiat Uno'
}

export {
  carMock,
  carMockWithId,
  carMockForChange,
  carMockForChangeWithId,
  carMockInvalid,
};
