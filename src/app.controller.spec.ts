import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "Hello World! Minimal NestJS Backend is running."', () => {
      expect(appController.getHello()).toBe('Hello World! Minimal NestJS Backend is running.');
    });
  });

  describe('health', () => {
    it('should return health status', () => {
      const health = appController.getHealth();
      expect(health).toHaveProperty('status', 'ok');
      expect(health).toHaveProperty('timestamp');
      expect(health).toHaveProperty('uptime');
    });
  });

  describe('version', () => {
    it('should return version info', () => {
      const version = appController.getVersion();
      expect(version).toHaveProperty('name', 'minimal-nestjs-backend');
      expect(version).toHaveProperty('version', '1.0.0');
      expect(version).toHaveProperty('node');
    });
  });
}); 
