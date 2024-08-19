import { Controller, Get } from '@nestjs/common';
import { BooksApiGatewayService } from './books-api-gateway.service';

@Controller()
export class BooksApiGatewayController {
  constructor(private readonly booksApiGatewayService: BooksApiGatewayService) {}

  @Get()
  getHello(): string {
    return this.booksApiGatewayService.getHello();
  }
}
