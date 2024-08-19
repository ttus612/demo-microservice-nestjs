import { NestFactory } from '@nestjs/core';
import { BooksApiGatewayModule } from './books-api-gateway.module';

async function bootstrap() {
  const app = await NestFactory.create(BooksApiGatewayModule);
  await app.listen(3000);
}
bootstrap();
