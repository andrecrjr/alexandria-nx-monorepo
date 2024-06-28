import { Test, TestingModule } from '@nestjs/testing';
import { GenreContentService } from './genre-content.service';

describe('GenreContentService', () => {
  let service: GenreContentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GenreContentService],
    }).compile();

    service = module.get<GenreContentService>(GenreContentService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
