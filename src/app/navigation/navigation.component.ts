import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  activeteb = 'home';

  constructor() { }

  ngOnInit() {
  }

  getActiveTeb(tebname: string) {
    this.activeteb = tebname;
  }

}
