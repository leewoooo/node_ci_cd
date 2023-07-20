import { Test, TestingModuleBuilder } from '@nestjs/testing';
import { HealthController } from './health.controller';
import { TerminusModule } from '@nestjs/terminus';

describe('HealthController', () => {
  let controller: HealthController;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [TerminusModule],
      controllers: [HealthController],
    }).compile();

    controller = moduleRef.get<HealthController>(HealthController);
  });

  it('Should be defined', () => {
    //given
    //when
    //then
    expect(controller).toBeDefined();
  });

  it('checkHealth', () => {
    //given
    //when
    const result = controller.checkHealth();

    //then
    expect(result).toBe('OK');
  });
});
