import { Component } from '@angular/core';
import { environment } from '@environments/environment.development';


@Component({
  selector: 'app-side-menu-header',
  imports: [],
  templateUrl: './side-menu-header.component.html',
  styleUrl: './side-menu-header.component.css'
})
export class SideMenuHeaderComponent {

  envs = environment

}
