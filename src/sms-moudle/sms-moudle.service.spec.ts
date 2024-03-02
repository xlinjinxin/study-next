import { Test, TestingModule } from '@nestjs/testing';
import { SmsMoudleService } from './sms-moudle.service';

describe('SmsMoudleService', () => {
  let service: SmsMoudleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SmsMoudleService],
    }).compile();

    service = module.get<SmsMoudleService>(SmsMoudleService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
