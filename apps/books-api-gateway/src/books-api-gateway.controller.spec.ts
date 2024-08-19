import { Test, TestingModule } from '@nestjs/testing';
import { BooksApiGatewayController } from './books-api-gateway.controller';
import { BooksApiGatewayService } from './books-api-gateway.service';

describe('BooksApiGatewayController', () => {
  let booksApiGatewayController: BooksApiGatewayController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [BooksApiGatewayController],
      providers: [BooksApiGatewayService],
    }).compile();

    booksApiGatewayController = app.get<BooksApiGatewayController>(BooksApiGatewayController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(booksApiGatewayController.getHello()).toBe('Hello World!');
    });
  });
});
