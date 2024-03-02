import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const port = process.env.PORT || 5003;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.listen(port, () => {
    console.log(`Cart microservice running on port ${port}`);
  });
}
bootstrap();
