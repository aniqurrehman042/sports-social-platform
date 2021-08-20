import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TemplateElement } from 'estree';
import { SportsRecord } from 'src/app/models/sports-record.model';
import { FilesService } from 'src/app/services/files.service';
import { RecordsService } from 'src/app/services/records.service';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-save-records',
  templateUrl: './save-records.component.html',
  styleUrls: ['./save-records.component.css']
})
export class SaveRecordsComponent implements OnInit {

  type: string = 'Run';
  picVid: File | null = null;
  record: SportsRecord = {
    date: '',
    category: '60 m',
    score: '',
    meet: '',
    location: '',
    comments: '',
    picVid: ''
  };

  constructor(
    private route: ActivatedRoute,
    private recordsService: RecordsService,
    private filesService: FilesService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(paramMap => {
      this.type = paramMap.get('type') ?? 'Run';
      this.record.category = paramMap.get('category') ?? '50 m';
    });
  }

  saveRecord(imageElement: any) {
    if (this.picVid) {
      let fileName = uuidv4();
      let imgData = this.filesService.getBase64Image(imageElement);
      localStorage.setItem(fileName, imgData);
      this.record.picVid = fileName;
    }

    switch (this.type) {
      case 'Run':
        console.log('saving');
        this.recordsService.addRunRecord(this.record);
        break;
      case 'Jump':
        this.recordsService.addJumpRecord(this.record);
        break;
      case 'Throw':
        this.recordsService.addThrowRecord(this.record);
        break;
      case 'Walk':
        this.recordsService.addWalkRecord(this.record);
        break;
      case 'Swim':
        this.recordsService.addSwimRecord(this.record);
        break;
      case 'Wt Lift':
        this.recordsService.addWtLiftRecord(this.record);
        break;
    }

    this.router.navigate(['/records', this.type])
  }

  readUrl(input: any, imageElement: any) {

    if (input.files && input.files[0]) {
      var reader = new FileReader();

      reader.onload = function (e: any) {
        imageElement.src = e.target.result;
      }

      reader.readAsDataURL(input.files[0]);
    }
  }
}
