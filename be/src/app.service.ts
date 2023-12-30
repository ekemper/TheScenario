import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { DataDao } from './data.dao';

@Injectable()
export class AppService {

  constructor(
    private readonly dataDao: DataDao
  ){}


  async getAll() {

    console.log('called get all!')
    return [
      {_id: '1234', data: '123'},
      {_id: '2435', data: '456'},
      {_id: '3566', data: '789'},
    ]

    //return await this.dataDao.getAll()
  }
}
