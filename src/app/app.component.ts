import { Component } from '@angular/core';
import { MsalBroadcastService, MsalService } from '@azure/msal-angular';
import { EventMessage, EventType, Logger } from '@azure/msal-browser';
import { isSuccess } from 'angular-in-memory-web-api';
import { CryptoUtils } from 'msal';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Friend Music App';
  isIframe = false;
  loggedIn = false;

  constructor(private broadcastService: MsalBroadcastService ,private authService: MsalService) { }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.isIframe = window !== window.parent && !window.opener;
    this.checkAccount();

    this.broadcastService.msalSubject$
      .pipe(
        filter((msg: EventMessage) => msg.eventType === EventType.LOGIN_SUCCESS),
      )
      .subscribe((result: EventMessage) => {
        console.log(result);
      });

      this.broadcastService.msalSubject$
      .pipe(
        filter((msg: EventMessage) => msg.eventType === EventType.LOGIN_FAILURE),
      )
      .subscribe((result: EventMessage) => {
        console.log(result);
      });

      this.authService.handleRedirectObservable().subscribe((authResponse) => {
        console.log(authResponse);
      });
  }

  public checkAccount() {
    this.loggedIn = !!this.authService.instance.getActiveAccount();
  }

  public login() {
    this.authService.loginRedirect();
  }

  public logout() {
    this.authService.logout();
  }
}
