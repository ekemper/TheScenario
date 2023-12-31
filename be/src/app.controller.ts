import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { Datum } from './data.db';

@Controller("data")
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getAll() {
    return this.appService.getAll();
  }

// TODO : Implement CreateDatumDto

  @Post()
  create(@Body('newDatum') data: Datum) {
    console.log({data})
    return this.appService.create(data);
  }
}

