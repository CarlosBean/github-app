import { Component, Input, ViewChild } from '@angular/core';
import { SidenavService } from '../sidenav.service';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent {
  @ViewChild('snav') sidenav: MatSidenav;
  @Input() isMobile = false;

  constructor(public sidenavService: SidenavService) {
    this.sidenavService.listener.subscribe(_event => {
      this.sidenav.toggle();
    });
  }
}
