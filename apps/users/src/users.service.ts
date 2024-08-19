import { Injectable } from '@nestjs/common';
import { first } from 'rxjs';
import { UserDto } from './dto/user.dto';

@Injectable()
export class UsersService {
  getHello(): string {
    return 'Hello World!';
  }
  private users: UserDto[] = [
    {
      id: 1,
      firstName: 'John',
      lastName: 'Doe',
      age: 25,
    },
    {
      id: 2,
      firstName: 'Jane',
      lastName: 'Doe',
      age: 25,
    },
  ];

  findAll(){
    return this.users;
  }
}
