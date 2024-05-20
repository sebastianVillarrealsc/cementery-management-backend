// src/sections/sections.controller.ts
import { Controller, Get, Put, Param, Body } from '@nestjs/common';
import { SectionsService } from './sections.service';

@Controller('sections')
export class SectionsController {
  constructor(private readonly sectionsService: SectionsService) {}

  @Get(':sectionName')
  async getSection(@Param('sectionName') sectionName: string) {
    return this.sectionsService.getSection(sectionName);
  }

  @Put(':sectionName')
  async updateSection(
    @Param('sectionName') sectionName: string,
    @Body() data: any[],
  ) {
    return this.sectionsService.updateSection(sectionName, data);
  }
}

