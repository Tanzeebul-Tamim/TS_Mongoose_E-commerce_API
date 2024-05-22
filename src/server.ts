/* eslint-disable no-console */
import mongoose from 'mongoose';
import config from './app/config';
import app from './app';
import { Server } from 'http';

const { port, db_url } = config;
let server: Server;

async function main() {
  try {
    await mongoose.connect(db_url as string);

    server = app.listen(port, () => {
      console.log(`TS_Mongoose_E-commerce_API app listening on port ${port}`);
    });
  } catch (error) {
    console.error(error);
  }
}

main();

//* Handling unhandled rejection (for asynchronous operations)
process.on('unhandledRejection', () => {
  console.error('⚠ Unhandled rejection detected, server shutting down.... ⚠');
  if (server) {
    server.close(() => {
      process.exit(1);
    });
  }
  process.exit(1);
});

//* Handling uncaught exception (for synchronous operations)
process.on('uncaughtException', () => {
  console.error('⚠ Uncaught exception detected, server shutting down.... ⚠');
  process.exit(1);
});
