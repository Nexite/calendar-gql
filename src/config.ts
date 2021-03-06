/* eslint-disable node/no-process-env */
import { config as loadEnv } from 'dotenv';

loadEnv();

const config = {
  debug: process.env.NODE_ENV !== 'production',
};

export default config;
