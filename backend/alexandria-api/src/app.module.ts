import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { ContentModule } from './content/content.module';
import { ContenttypeModule } from './contenttype/contenttype.module';
import { CollectionModule } from './collection/collection.module';
import { AuthorContentModule } from './author-content/author-content.module';
import { AmazonServiceModule } from './auth/amazon-service/amazon-service.module';
// import { SeriesContentModule } from './series-content/series-content.module';
import { GenreContentModule } from './genre-content/genre-content.module';
import { SeriesContentModule } from './series-content/series-content.module';
import { PaginationServiceModule } from './pagination-service/pagination-service.module';
import { SearchModule } from './search/search.module';

@Module({
  imports: [
    AuthModule,
    UsersModule,
    ContentModule,
    ContenttypeModule,
    CollectionModule,
    AuthorContentModule,
    AmazonServiceModule,
    GenreContentModule,
    SeriesContentModule,
    SearchModule,
    PaginationServiceModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
