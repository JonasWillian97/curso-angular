import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userName: string = " Jonas W.";
  userData = {
    email: "jonasw@email.com",
    role: "Admin"
  }
  title = 'curso-angular';
}
