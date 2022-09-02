import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
// import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
// import { InMemoryDataService } from './in-memory-data.service';
import { MsalInterceptor, MsalModule, MSAL_BROADCAST_CONFIG, MsalService, MsalBroadcastConfiguration, MSAL_INTERCEPTOR_CONFIG, MsalGuard } from '@azure/msal-angular';
import { Configuration } from 'msal';
import { msalConfig, guardConfig, isIE, b2cPolicies, interceptConfig } from './app-config';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MusicModule } from './music/music.module';
import { PublicClientApplication } from '@azure/msal-browser';

function MSALConfigFactory(): Configuration {
  return msalConfig;
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MsalModule.forRoot(new PublicClientApplication({
      auth: {
        clientId: "9a4cc7d0-25f1-402c-945f-65f876d69c7a",
        authority: b2cPolicies.authorities.signUpSignIn.authority,
        redirectUri: "https://friendmusic.clossman.co",
        postLogoutRedirectUri: "https://friendmusic.clossman.co",
        navigateToLoginRequestUrl: true,
      },
      cache: {
        cacheLocation: 'localStorage',
        storeAuthStateInCookie: isIE,
      }
    }), guardConfig, interceptConfig),

    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    // HttpClientInMemoryWebApiModule.forRoot(
    //   InMemoryDataService, { dataEncapsulation: false }
    // ),
    MusicModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MsalInterceptor,
      multi: true,
    },
    MsalGuard,

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
