import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../services/dashboard.service';
declare var _:any;
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers:[DashboardService]
})
export class DashboardComponent implements OnInit {

	private table:any = {headers:[], data:[]}

  constructor(private ds:DashboardService) { }

  ngOnInit() {
  	this.getData();
  }

  getData(){
  	this.ds.all().subscribe(
  		(data) => this.getDataSuccess(data),
  		(error) => alert("something wrong in your json")
  		);
  }

  getDataSuccess(data){
  	this.table.headers = _.keys(data[0]);
  	this.table.data = data;
  }

}
