import mongoose from 'mongoose';
import bluebird from 'bluebird';

const { Schema } = mongoose;

mongoose.Promise = bluebird;

const PassangerSchema = new Schema(
  {
    id: {
      type: Number,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    hasConnections: {
      type: Boolean,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    flightCategory: {
      type: String,
      required: true,
    },
    reservationId: {
      type: String,
      required: true,
    },
    hasCheckedBaggage: {
      type: Boolean,
      required: true,
    },
  },
);

const flightSchema = new Schema(
  {
    capacity: {
      type: Number,
      required: true,
    },
    flightCode: {
      type: String,
      required: true,
    },
    passangers: [PassangerSchema],
    overbookedPassangersId: [Number],
  },
);

const Flight = mongoose.model(
  'Flight',
  flightSchema,
);

export default Flight;
