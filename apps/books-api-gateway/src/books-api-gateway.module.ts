import { Module } from '@nestjs/common';
import { BooksApiGatewayController } from './books-api-gateway.controller';
import { BooksApiGatewayService } from './books-api-gateway.service';
import { UsersModule } from './users/users.module';

@Module({
  imports: [UsersModule],
  controllers: [BooksApiGatewayController],
  providers: [BooksApiGatewayService],
})
export class BooksApiGatewayModule {}
