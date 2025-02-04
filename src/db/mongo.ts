import mongoose from 'mongoose';
import Promise from 'bluebird';

mongoose.Promise = Promise;

const connectionString = process.env.MONGO_URL || 'mongodb://localhost:27017/test';

function initializeMongo() {
  try {
    mongoose.connect(connectionString);
    mongoose.connection.on('error', (error) => {
      console.log(error);
      process.exit(-1);
    });
    mongoose.connection.on('open', () => {
      console.log('Connected to Mongo on ' + connectionString);
    });
  } catch (error) {
    console.log(error);
  }
};

export default initializeMongo;
