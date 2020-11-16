import { Component } from '@angular/core';
import { User } from './models/user';
import { AuthenticateService } from './services/authenticate-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'login-authentication';
  user: User;

  constructor(private account: AuthenticateService) {
      this.account.user.subscribe(x => this.user = x);
  }

  logout() {
      this.account.logout();
  }
}
