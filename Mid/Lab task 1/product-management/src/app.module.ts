import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { PostgresDatabaseProviderModule } from "@/providers/database/postgres/provider.module";
import { AppController } from "@/src/app.controller";
import { AppService } from "@/src/app.service";
import global_config from "@/config/global_config";
import { ProductsModule } from "@/modules/products/products.module";
import { EmployeesModule } from "@/modules/employees/employees.module";

@Module({
  imports: [
    PostgresDatabaseProviderModule,
    ConfigModule.forRoot({
      isGlobal: true,
      load: [global_config],
    }),
    ProductsModule,
    EmployeesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
