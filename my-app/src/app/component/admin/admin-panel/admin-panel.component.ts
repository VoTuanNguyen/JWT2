import { Component, OnInit, NgModule } from '@angular/core';
import {MenuComponent} from '../../common/menu/menu.component'

@NgModule({
  imports:[MenuComponent]
})

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

