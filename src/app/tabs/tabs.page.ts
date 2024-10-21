import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {

  constructor(private menucontroller:MenuController
              ) { }

  ngOnInit() {
  }
  mostrarMenu() {
    this.menucontroller.open('first');
  }
}
