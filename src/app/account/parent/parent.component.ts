import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticateService } from 'src/app/services/authenticate-service.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

  constructor(
    private router: Router,
    private account: AuthenticateService
  ) { }

  ngOnInit() {
    if (this.account.userValue) {
      this.router.navigate(['/']);
  }
  }

}
