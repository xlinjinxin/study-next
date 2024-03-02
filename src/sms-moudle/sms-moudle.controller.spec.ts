import { Test, TestingModule } from '@nestjs/testing';
import { SmsMoudleController } from './sms-moudle.controller';
import { SmsMoudleService } from './sms-moudle.service';

describe('SmsMoudleController', () => {
  let controller: SmsMoudleController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SmsMoudleController],
      providers: [SmsMoudleService],
    }).compile();

    controller = module.get<SmsMoudleController>(SmsMoudleController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
