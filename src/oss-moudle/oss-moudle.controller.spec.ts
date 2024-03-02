import { Test, TestingModule } from '@nestjs/testing';
import { OssMoudleController } from './oss-moudle.controller';
import { OssMoudleService } from './oss-moudle.service';

describe('OssMoudleController', () => {
  let controller: OssMoudleController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OssMoudleController],
      providers: [OssMoudleService],
    }).compile();

    controller = module.get<OssMoudleController>(OssMoudleController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
