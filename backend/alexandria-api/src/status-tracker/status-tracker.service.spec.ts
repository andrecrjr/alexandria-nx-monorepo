import { Test, TestingModule } from '@nestjs/testing';
import { StatusContentypeService } from './status-tracker.service';

describe('StatusContentypeService', () => {
  let service: StatusContentypeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StatusContentypeService],
    }).compile();

    service = module.get<StatusContentypeService>(StatusContentypeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
