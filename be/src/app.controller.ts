import { Body, Controller, Get, Post, Req } from '@nestjs/common';
import { AppService } from './app.service';
import { Data } from './data.db';

@Controller("data")
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getAll() {
    return this.appService.getAll();
  }

  @Post()
  create(@Body() reqBody: Data) {
    console.log("in controller")
    console.log({reqBody})
    this.appService.create(reqBody);
  }
}

