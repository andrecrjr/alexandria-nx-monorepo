import { Test, TestingModule } from '@nestjs/testing';
import { ContenttypeController } from './contenttype.controller';

describe('ContenttypeController', () => {
  let controller: ContenttypeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ContenttypeController],
    }).compile();

    controller = module.get<ContenttypeController>(ContenttypeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
