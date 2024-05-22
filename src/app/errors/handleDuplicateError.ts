import { TGenericErrorResponse } from '../interface/error';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const handleDuplicateError = (error: any): TGenericErrorResponse => {
  //* Extract value within double quotes using regex
  const match = error?.message.match(/"([^"]*)"/);

  //* The extracted value will be in the first capturing group
  const extractedMessage = match && match[1];

  const statusCode = 400;

  return {
    statusCode,
    message: `${extractedMessage} already exists`,
  };
};

export default handleDuplicateError;
