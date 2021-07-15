import { Component, OnInit } from '@angular/core';
import { RestApiService } from "../shared/rest-api.service";

@Component({
  selector: 'app-disk-list',
  templateUrl: './disk-list.component.html',
  styleUrls: ['./disk-list.component.scss']
})
export class DiskListComponent implements OnInit {

  Disk: any = [];

  constructor(
    public restApi: RestApiService
  ) { }

  ngOnInit() {
    this.loadDisks()
  }

  // Get employees list
  loadDisks() {
    // console.log(this.restApi.getDisks().subscribe((data: {}) => {
    //   this.Disk = data;
    // }))
    console.log(this.restApi.getDisks());
    
    return this.restApi.getDisks().subscribe((data: {}) => {
      this.Disk = data;
    })
  }

}
