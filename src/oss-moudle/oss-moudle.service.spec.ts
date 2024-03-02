import { Test, TestingModule } from '@nestjs/testing';
import { OssMoudleService } from './oss-moudle.service';

describe('OssMoudleService', () => {
  let service: OssMoudleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OssMoudleService],
    }).compile();

    service = module.get<OssMoudleService>(OssMoudleService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
