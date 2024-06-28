import { Test, TestingModule } from '@nestjs/testing';
import { StatusContentypeController } from './status-tracker.controller';
import { StatusContentypeService } from './status-tracker.service';

describe('StatusContentypeController', () => {
  let controller: StatusContentypeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StatusContentypeController],
      providers: [StatusContentypeService],
    }).compile();

    controller = module.get<StatusContentypeController>(
      StatusContentypeController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
