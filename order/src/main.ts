import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const port = process.env.PORT || 5004;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.listen(port, () => {
    console.log(`Order microservice running on port ${port}`);
  });
}
bootstrap();
