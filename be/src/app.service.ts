import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { DataDao } from './data.dao';
import { Data } from './data.db';

@Injectable()
export class AppService {

  constructor(
    private readonly dataDao: DataDao
  ){}

  async getAll() {
    console.log('called get all!')
    return await this.dataDao.getAll()
  }

  async create(data: Data) {
    console.log('called create in service')
    return await this.dataDao.create(data)
  }

  async deleteById(datumId: string) {
    console.log('called delete in service')
    return await this.dataDao.delete(datumId)
  }

}


