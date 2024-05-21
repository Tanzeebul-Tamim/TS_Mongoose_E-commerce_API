/* eslint-disable no-console */
import mongoose from 'mongoose';
import config from './app/config';
import app from './app';

const { port, db_url } = config;

async function main() {
  try {
    await mongoose.connect(db_url as string);

    app.listen(port, () => {
      console.log(`TS_Mongoose_E-commerce_API app listening on port ${port}`);
    });
  } catch (error) {
    console.error(error);
  }
}

main();
