import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TestsService } from './tests.service';
import { Test } from '@prisma/client';

@Controller('tests')
export class TestsController {
  constructor(private readonly testsService: TestsService) {}

  @Post()
  create(@Body() testData: any): Promise<Test> {
    return this.testsService.create(testData);
  }

  @Get()
  findAll(): Promise<Test[]> {
    return this.testsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Test> {
    return this.testsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() testData: any): Promise<Test> {
    return this.testsService.update(id, testData);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<Test> {
    return this.testsService.remove(id);
  }
}
