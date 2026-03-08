import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { envValidation } from './config/env.validation'
import { DbService } from './db/db.service'

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
      validationSchema: envValidation,
    }),
  ],
  providers: [DbService],
})
export class AppModule {}
