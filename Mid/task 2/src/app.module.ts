import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { PostgresDatabaseProviderModule } from "@/providers/database/postgres/provider.module";
import { AppController } from "@/src/app.controller";
import { AppService } from "@/src/app.service";
import global_config from "@/config/global_config";
import { BullModule } from "@nestjs/bull";
import { ServicesModule } from "./modules/services/services.module";
import { PartsModule } from "./modules/parts/parts.module";
import { BookingsModule } from "./modules/bookings/bookings.module";

@Module({
  imports: [
    PostgresDatabaseProviderModule,
    ConfigModule.forRoot({
      isGlobal: true,
      load: [],
    }),
    BullModule.forRoot({
      url: process.env.REDIS_URL,
    }),
    ConfigModule.forRoot({
      isGlobal: true,
      load: [global_config],
    }),
    ServicesModule,
    PartsModule,
    BookingsModule,
    // mew module will come here 
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
