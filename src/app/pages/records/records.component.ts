import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SportsRecord } from 'src/app/models/sports-record.model';
import { RecordsService } from 'src/app/services/records.service';

@Component({
  selector: 'app-records',
  templateUrl: './records.component.html',
  styleUrls: ['./records.component.css']
})
export class RecordsComponent implements OnInit {

  type: string = 'Run';
  records: SportsRecord[] = [];

  constructor(
    private route: ActivatedRoute,
    private recordsService: RecordsService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(paramMap => {
      this.type = paramMap.get('type') ?? 'Run';
      switch (this.type) {
        case 'Run':
          this.records = this.recordsService.getRunRecords();
          break;
        case 'Jump':
          this.records = this.recordsService.getJumpRecords();
          break;
        case 'Throw':
          this.records = this.recordsService.getThrowRecords();
          break;
        case 'Walk':
          this.records = this.recordsService.getWalkRecords();
          break;
        case 'Swim':
          this.records = this.recordsService.getSwimRecords();
          break;
        case 'Wt Lift':
          this.records = this.recordsService.getWtLiftRecords();
          break;
      }
    });
  }

}
