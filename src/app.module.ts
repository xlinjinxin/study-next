import { Module } from '@nestjs/common';
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

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      useFactory: () => ({
        type: 'mysql',
        host: 'localhost',
        port: +3306, // 来自process.env的每个值都是字符串，前面加+转数字
        username: 'root',
        password: '123456',
        database: 'nest_mysql',
        autoLoadEntities: true, // 自动加载模块 推荐
        // entities: [path.join(__dirname, '/../**/*.entity{.ts,.js}')], // 不推荐
        synchronize: true, // 开启同步，生产中要禁止
        // entities: ['src/enties/**.ts'],
      }),
    }),
    JwtModule.register({
      global: true,
      secret: 'lin',
    }),
    UserModule,
    RoleModule,
    PermissionModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
