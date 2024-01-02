import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { DataDao } from './data.dao';
import { Data } from './data.db';

@Injectable()
export class AppService {

  constructor(
    @InjectModel(Data.name, "local")
    private readonly dataDao: DataDao
  ){}

  async getAll() {
    return await this.dataDao.getAll()
  }

  async create(data: Data) {
    return await this.dataDao.create(data)
  }

  async deleteById(datumId: string) {
    return await this.dataDao.delete(datumId)
  }

}


