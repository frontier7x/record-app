import { Test, TestingModule } from '@nestjs/testing';
import { RecordatoryController } from './recordatory.controller';

describe('RecordatoryController', () => {
  let controller: RecordatoryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RecordatoryController],
    }).compile();

    controller = module.get<RecordatoryController>(RecordatoryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
