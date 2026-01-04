import { DocumentBuilder } from '@nestjs/swagger';

export const swaggerConfig = new DocumentBuilder()
  .setTitle('Eazify LMS')
  .setDescription('API for Eazify LMS')
  .setVersion('1.0')
  .addBearerAuth({ type: 'http', scheme: 'bearer', bearerFormat: 'JWT' }, 'JWT')
  .addServer('https://eazify-lms-backend.onrender.com/')
  .build();
