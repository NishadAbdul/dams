import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manage-data-entry',
  templateUrl: './manage-data-entry.component.html',
  styleUrls: ['./manage-data-entry.component.scss']
})
export class ManageDataEntryComponent implements OnInit {
  public displayedColumns: string[] = ['name', 'email', 'status'];
  public dataSource: any = [
    { name: 'Sunil Chethri', email: 'sunil@dams.com', status: 'Active'},
    { name: 'Virat Kohli', email: 'virat@dams.com', status: 'Active'},
    { name: 'Sachin Tendulker', email: 'sachin@dams.com', status: 'Inactive'},
    { name: 'ABD', email: 'abd@dams.com', status: 'Inactive'},
    { name: 'Kevin Peterson', email: 'levin@dams.com', status: 'Inactive'}
  ];

  constructor(
    private _router: Router) {
  }

  ngOnInit(): void {
  }
  
}
