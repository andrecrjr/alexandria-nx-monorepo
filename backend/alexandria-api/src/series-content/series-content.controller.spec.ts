import { Test, TestingModule } from '@nestjs/testing';
import { SeriesContentController } from './series-content.controller';
import { SeriesContentService } from './series-content.service';

describe('SeriesContentController', () => {
  let controller: SeriesContentController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SeriesContentController],
      providers: [SeriesContentService],
    }).compile();

    controller = module.get<SeriesContentController>(SeriesContentController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
