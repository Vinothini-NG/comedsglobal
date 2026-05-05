import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  itsolutions: any;
  scroll(arg0: any) {
    throw new Error('Method not implemented.');
  }
  title = 'comeds';

  constructor(
    private _router: Router,
    private _route: ActivatedRoute
  ) {

    this._router.events.subscribe((Response: any) => {
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'auto',
      })
    })
  }



}
