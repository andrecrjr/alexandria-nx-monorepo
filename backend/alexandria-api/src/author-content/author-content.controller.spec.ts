import { Test, TestingModule } from '@nestjs/testing';
import { AuthorContentController } from './author-content.controller';
import { AuthorContentService } from './author-content.service';

describe('AuthorContentController', () => {
  let controller: AuthorContentController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthorContentController],
      providers: [AuthorContentService],
    }).compile();

    controller = module.get<AuthorContentController>(AuthorContentController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
