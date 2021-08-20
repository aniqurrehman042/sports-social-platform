import { animate, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('fade', [
      transition('void => active', [
        style({ opacity: 0 }),
        animate(500, style({ opacity: 1 }))
      ]),
      transition('active => void', [
        animate(500, style({ opacity: 0, height: 0 }))
      ])
    ])
  ]
})
export class AppComponent {

  fading: boolean = false;
  menuHidden: boolean = true;
  buttonHidden: boolean = false;

  showMenu() {
    this.fading = true;
    this.menuHidden = false;
    setTimeout(() => {this.buttonHidden = false}, 500);
  }
}
