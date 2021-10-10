import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  readonly MOBILE = 800;

  title = 'app-shop';
  mobile: boolean = false;

  ngOnInit() {
    this.mobile = window.innerWidth < this.MOBILE;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.mobile = window.innerWidth < this.MOBILE;
  }
}
