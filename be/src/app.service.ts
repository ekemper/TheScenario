import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { DataDao } from './data.dao';
import { Datum } from './data.db';

@Injectable()
export class AppService {

  constructor(
    private readonly dataDao: DataDao
  ){}

  async getAll() {
    console.log('called get all!')
    return await this.dataDao.getAll()
  }

  async create(data: Datum) {
    console.log('called create')
    return await this.dataDao.create(data)
  }

}
