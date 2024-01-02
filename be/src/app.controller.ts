import { Body, Controller, Delete, Get, Param, Post, Req } from '@nestjs/common';
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
    this.appService.create(reqBody);
  }

  @Delete(":id")
  deleteById(@Param("id") id: string) {
    this.appService.deleteById(id);
  }
}