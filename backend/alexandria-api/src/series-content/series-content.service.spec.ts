import { Test, TestingModule } from '@nestjs/testing';
import { SeriesContentService } from './series-content.service';

describe('SeriesContentService', () => {
  let service: SeriesContentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SeriesContentService],
    }).compile();

    service = module.get<SeriesContentService>(SeriesContentService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
