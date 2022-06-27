import { Component, Input } from '@angular/core';
import { SidenavService } from '../sidenav.service';

@Component({
  selector: 'app-topbar',
  styleUrls: ['./topbar.component.scss'],
  templateUrl: './topbar.component.html',
})
export class TopbarComponent {
  @Input() isMobile = false;

  constructor(public sidenav: SidenavService) { }
}
