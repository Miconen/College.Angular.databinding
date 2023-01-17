import { Component } from '@angular/core';

@Component({
  selector: 'app-username-check',
  templateUrl: './username-check.component.html',
  styleUrls: ['./username-check.component.scss'],
})
export class UsernameCheckComponent {
  username = '';

  getDisabled() {
    if (!this.username) return true;
    return false;
  }

  onSubmit() {
    this.username = '';
  }
}
