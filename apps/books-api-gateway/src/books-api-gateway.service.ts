import { Injectable } from '@nestjs/common';

@Injectable()
export class BooksApiGatewayService {
  getHello(): string {
    return 'Hello World!';
  }
}
