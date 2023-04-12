import { Component, OnInit } from '@angular/core';
import { RouteDataService } from 'src/app/core/services/routedata.service';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {
  public animateSideBar: boolean = false;
  public stepIndex: number = 0;
  constructor(private routeDataService: RouteDataService) {
    
  }

  ngOnInit(): void {
    this.routeDataService.progressMeterIndex.subscribe(data => this.stepIndex = data);
  }

}
