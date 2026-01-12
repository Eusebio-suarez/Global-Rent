import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withInterceptors, withInterceptorsFromDi } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideToastr } from 'ngx-toastr';
import { authInterceptor } from './core/interceptors/auth.interceptor';
import { JwtModule } from '@auth0/angular-jwt';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideAnimations(), // required animations providers
    provideToastr(), // Toastr providers

    importProvidersFrom(
      JwtModule.forRoot({
        config:{
          headerName:"Authorization",
          allowedDomains:["localhost:8080"],
          tokenGetter:(()=> localStorage.getItem("Authorization")),
          disallowedRoutes:["/api/v1/auth/login","/api/v1/auth/register"]
        }
      })
    ),

    provideHttpClient(withInterceptorsFromDi())

  ]
};
