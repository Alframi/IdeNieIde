import { Injectable } from '@nestjs/common';
import { Test } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TestsService {
  constructor(private prisma: PrismaService) {}

  async create(testData: any): Promise<Test> {
    return this.prisma.test.create({
      data: testData,
    });
  }

  async findAll(): Promise<Test[]> {
    return this.prisma.test.findMany();
  }

  async findOne(id: string): Promise<Test> {
    return this.prisma.test.findUnique({
      where: { id: id },
    });
  }

  async update(id: string, testData: any): Promise<Test> {
    return this.prisma.test.update({
      where: { id: id },
      data: testData,
    });
  }

  async remove(id: string): Promise<Test> {
    return this.prisma.test.delete({
      where: { id: id },
    });
  }
}
