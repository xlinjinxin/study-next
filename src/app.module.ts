import { Inject, Module, OnApplicationBootstrap } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
// app.module.ts
import { TypeOrmModule } from '@nestjs/typeorm';
// 环境配置相关
import { ConfigModule } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { RoleModule } from './role/role.module';
import { PermissionModule } from './permission/permission.module';
import { ScheduleModule, SchedulerRegistry } from '@nestjs/schedule';
import { CommonModule } from './common/common.module';
import { OssMoudleModule } from './oss-moudle/oss-moudle.module';
import { SmsMoudleModule } from './sms-moudle/sms-moudle.module';
import { APP_GUARD } from '@nestjs/core';
import { LoginGuard } from './login.guard';
import { PermissionGuard } from './PermissonGuard';
const yaml = require('js-yaml');
const fs = require('fs');

const config = fs.readFileSync('./config.yaml');

const globalConfig = yaml.load(config);
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      useFactory: () => ({
        type: 'mysql',
        host: globalConfig.mysql.host,
        port: globalConfig.mysql.port, // 来自process.env的每个值都是字符串，前面加+转数字
        username: globalConfig.mysql.username,
        password: globalConfig.mysql.password,
        database: globalConfig.mysql.database,
        autoLoadEntities: true, // 自动加载模块 推荐
        // entities: [path.join(__dirname, '/../**/*.entity{.ts,.js}')], // 不推荐
        synchronize: true, // 开启同步，生产中要禁止
        // entities: ['src/enties/**.ts'],
      }),
    }),
    JwtModule.register({
      global: true,
      secret: globalConfig.jwt.secret,
    }),
    UserModule,
    RoleModule,
    PermissionModule,
    CommonModule,
    ScheduleModule.forRoot(),
    OssMoudleModule,
    SmsMoudleModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: LoginGuard,
    },
    {
      provide: APP_GUARD,
      useClass: PermissionGuard,
    },
  ],
})
export class AppModule implements OnApplicationBootstrap {
  @Inject(SchedulerRegistry)
  private schedulerRegistry: SchedulerRegistry;

  onApplicationBootstrap() {
    const jobs = this.schedulerRegistry.getCronJobs();
    console.log(jobs);
  }
}
