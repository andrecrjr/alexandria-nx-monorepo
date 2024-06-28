import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
import { PrismaExceptionFilter } from './utils/filters/ExceptionFilterPrisma';
import * as cookie from 'fastify-cookie';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
  );
  const localRoutes = ['http://127.0.0.1:5173', 'http://localhost:5173'];

  app.enableCors({
    origin: [...localRoutes],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    allowedHeaders: 'Content-Type, Accept, Authorization',
  });

  const config = new DocumentBuilder()
    .setTitle('Alexandria Swagger')
    .setDescription('The Alexandria API description')
    .setVersion('1.0')
    .addBearerAuth(undefined, 'defaultBearerAuth')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  app.register(cookie, {
    secret: process.env.SECRET,
  });
  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalFilters(new PrismaExceptionFilter());
  await app.listen(3000);
}
bootstrap();
