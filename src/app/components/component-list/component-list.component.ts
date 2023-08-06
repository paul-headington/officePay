
import { Component, OnInit } from '@angular/core';
import { Component as  iComponent } from 'src/app/models/component';
import { ComponentService } from 'src/app/services/component.service';

@Component({
  selector: 'app-component-list',
  templateUrl: './component-list.component.html',
  styleUrls: ['./component-list.component.css']
})
export class ComponentListComponent implements OnInit {

  components!: iComponent[];
  component: iComponent = new iComponent();

  constructor(
    private componentService: ComponentService, 
  ) { }

  ngOnInit() {
    this.componentService.getComponents().subscribe(data => {
      this.components = data;
    })
  }
}