import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SectionsModule } from './sections/sections.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    SectionsModule,
  ],
})
export class AppModule {}
