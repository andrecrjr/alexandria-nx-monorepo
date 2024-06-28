import { Test, TestingModule } from '@nestjs/testing';
import { AuthorContentService } from './author-content.service';

describe('AuthorContentService', () => {
  let service: AuthorContentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AuthorContentService],
    }).compile();

    service = module.get<AuthorContentService>(AuthorContentService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
