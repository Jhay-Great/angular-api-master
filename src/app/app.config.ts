import { ApplicationConfig, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideState, provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import {
  authInterceptor,
  loggerInterceptor,
} from './interceptors/auth.interceptor';
import { provideRouterStore } from '@ngrx/router-store';
import { postReducer } from './state/reducers/post.reducer';
import { loadPostEffect } from './state/effects/post.effect';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(withInterceptors([authInterceptor, loggerInterceptor])),
    provideStore(),
    provideState(
      {
        name: 'post', reducer: postReducer,
      }
    ),
    provideEffects(
      loadPostEffect
    ),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
    provideRouterStore(),
  ],
};
