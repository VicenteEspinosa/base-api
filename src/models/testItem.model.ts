import mongoose from 'mongoose';
import bluebird from 'bluebird';

const { Schema } = mongoose;

mongoose.Promise = bluebird;

const testItemSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

const TestItem = mongoose.model(
  'TestItem',
  testItemSchema,
);

export default TestItem;
