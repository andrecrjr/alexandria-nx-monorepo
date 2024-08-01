export enum EntityDatabase {
  Genre = 'genre',
  Content = 'content',
  ContentType = 'contentType',
  User = 'users',
  Profile = 'profile',
  StatusTrack = 'statusTrackUser',
  AuthorContent = 'authorContent',
  SeriesContent = 'seriesContent'
}

export type ApiEntitySetting = {
  model: string;
  apiSlug: string;
  keySearch: string;
};

// Crie um mapa associando objetos aos valores enum
export const entitySettings: Record<EntityDatabase, ApiEntitySetting> = {
  [EntityDatabase.Genre]: {
    model: EntityDatabase.Genre,
    apiSlug: 'genre',
    keySearch: 'name'
  },
  [EntityDatabase.Content]: {
    model: EntityDatabase.Content,
    apiSlug: 'content',
    keySearch: 'title'
  },
  [EntityDatabase.ContentType]: {
    model: EntityDatabase.ContentType,
    apiSlug: 'contenttype',
    keySearch: 'title'
  },
  [EntityDatabase.AuthorContent]: {
    model: EntityDatabase.AuthorContent,
    apiSlug: 'author-content',
    keySearch: 'name'
  },
  [EntityDatabase.StatusTrack]: {
    model: EntityDatabase.StatusTrack,
    apiSlug: 'status-tracker',
    keySearch: 'id'
  },
  [EntityDatabase.Profile]: {
    model: '',
    apiSlug: 'users/profile',
    keySearch: 'username'
  },
  [EntityDatabase.User]: {
    model: '',
    apiSlug: 'users',
    keySearch: 'username'
  },
  [EntityDatabase.SeriesContent]: {
    model: '',
    apiSlug: 'series-content',
    keySearch: 'title'
  }
};
