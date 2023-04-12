import { Component } from '@angular/core';

@Component({
  selector: 'app-session-type-list',
  templateUrl: './session-type-list.component.html',
  styleUrls: ['./session-type-list.component.scss']
})
export class SessionTypeListComponent {
  public displayedColumns: string[] = ['name', 'email', 'status'];
  public dataSource: any = [
    { name: 'Sunil Chethri', email: 'sunil@dams.com', status: 'Active'},
    { name: 'Virat Kohli', email: 'virat@dams.com', status: 'Active'},
    { name: 'Sachin Tendulker', email: 'sachin@dams.com', status: 'Inactive'},
    { name: 'ABD', email: 'abd@dams.com', status: 'Inactive'},
    { name: 'Kevin Peterson', email: 'levin@dams.com', status: 'Inactive'}
  ];
}
