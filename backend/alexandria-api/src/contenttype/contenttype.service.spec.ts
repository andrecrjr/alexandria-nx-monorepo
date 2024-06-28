import { Test, TestingModule } from '@nestjs/testing';
import { ContenttypeService } from './contenttype.service';

describe('ContenttypeService', () => {
  let service: ContenttypeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ContenttypeService],
    }).compile();

    service = module.get<ContenttypeService>(ContenttypeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
