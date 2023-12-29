import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import { generateDocument } from './swagger';
import { commonFilter } from './filter/common.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: ['error', 'warn'],
  });
  // 设置全局路由前缀
  app.setGlobalPrefix('api');
  app.enableCors();
  app.useGlobalFilters(new commonFilter());
  // 创建swagger文档
  generateDocument(app);

  await app.listen(3001, () => {
    console.log(`项目运行在http:localhost:3001/api`);
  });
}
bootstrap();
856;
