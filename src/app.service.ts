import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World! Minimal NestJS Backend is running.';
  }

  getHealth(): object {
    return {
      status: 'ok',
      timestamp: new Date().toISOString(),
      uptime: process.uptime(),
      environment: process.env.NODE_ENV || 'development',
    };
  }

  getVersion(): object {
    return {
      name: 'minimal-nestjs-backend',
      version: '1.0.0',
      node: process.version,
    };
  }
} 
