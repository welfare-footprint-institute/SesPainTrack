declare global {
  namespace NodeJS {
    interface ProcessEnv {
      AWS_ID: string;
      AWS_SECRET_KEY: string;
    }
  }
}

export {};
