import { Test, TestingModule } from '@nestjs/testing';
import { GenreContentController } from './genre-content.controller';
import { GenreContentService } from './genre-content.service';

describe('GenreContentController', () => {
  let controller: GenreContentController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GenreContentController],
      providers: [GenreContentService],
    }).compile();

    controller = module.get<GenreContentController>(GenreContentController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
