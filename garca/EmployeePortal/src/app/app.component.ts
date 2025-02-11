import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { EmployeeFormComponent } from "./employee-form/employee-form.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MenuBarComponent, EmployeeFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'EmployeePortal';
}
