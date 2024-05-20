// src/sections/sections.service.ts
import { Injectable } from '@nestjs/common';
import { readFile, writeFile } from 'fs/promises';
import { join } from 'path';

@Injectable()
export class SectionsService {
  private readonly dataPath = join(__dirname, '../../data');

  async getSection(sectionName: string): Promise<any[]> {
    const filePath = join(this.dataPath, `${sectionName}.json`);
    const data = await readFile(filePath, 'utf-8');
    return JSON.parse(data);
  }

  async updateSection(sectionName: string, data: any[]): Promise<void> {
    const filePath = join(this.dataPath, `${sectionName}.json`);
    await writeFile(filePath, JSON.stringify(data, null, 2), 'utf-8');
  }
}

