import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpStatus,
} from '@nestjs/common';
import { Prisma } from '@prisma/client';

@Catch(Prisma.PrismaClientKnownRequestError)
export class PrismaExceptionFilter implements ExceptionFilter {
  catch(exception: Prisma.PrismaClientKnownRequestError, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();

    let status = HttpStatus.INTERNAL_SERVER_ERROR;
    let message = 'Ocorreu um erro inesperado.';
    console.log(exception.code);
    console.log(exception.message);
    switch (exception.code) {
      case 'P2002':
        status = HttpStatus.CONFLICT;
        message =
          'There is a unique constraint violation, a new record cannot be created with this data.';
        break;
      case 'P2003':
        status = HttpStatus.CONFLICT;
        message = `There is a violation. It's not possible to create a new record with this data because already has a record with the same content.`;
        break;
      case 'P1000':
        status = HttpStatus.UNAUTHORIZED;
        message =
          'Authentication failed. Please check your database credentials.';
        break;
      case 'P1001':
        status = HttpStatus.INTERNAL_SERVER_ERROR;
        message =
          'Cannot connect to the database server. Please ensure the database server is running.';
        break;
      case 'P2025':
        status = HttpStatus.NOT_FOUND;
        message = 'The required record was not found.';
        break;
      case 'P3001':
        status = HttpStatus.INTERNAL_SERVER_ERROR;
        message =
          'Initialization error. Please check your Prisma Client setup.';
        break;
      case 'P3002':
        status = HttpStatus.BAD_REQUEST;
        message = 'Validation error. Please check the data you are submitting.';
        break;
      // Add more cases as needed
      default:
        status = HttpStatus.INTERNAL_SERVER_ERROR;
        message = exception.message;
    }

    response.status(status).send({
      statusCode: status,
      message: message,
    });
  }
}
