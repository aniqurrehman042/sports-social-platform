import { Injectable } from '@angular/core';
import { SportsRecord } from '../models/sports-record.model';

@Injectable({
  providedIn: 'root'
})
export class RecordsService {

  runRecords: SportsRecord[] = [];
  jumpRecords: SportsRecord[] = [];
  throwRecords: SportsRecord[] = [];
  walkRecords: SportsRecord[] = [];
  swimRecords: SportsRecord[] = [];
  wtLiftRecords: SportsRecord[] = [];

  getRunRecords(): SportsRecord[] {
    if (this.runRecords.length > 0) {
      return this.runRecords;
    }
    let localRunRecords = localStorage.getItem('runRecords');
    if (localRunRecords) {
      this.runRecords = JSON.parse(localRunRecords);
    }
    return this.runRecords
  }

  getJumpRecords(): SportsRecord[] {
    if (this.jumpRecords.length > 0) {
      return this.jumpRecords;
    }
    let localJumpRecords = localStorage.getItem('jumpRecords');
    if (localJumpRecords) {
      this.jumpRecords = JSON.parse(localJumpRecords);
    }
    return this.jumpRecords
  }

  getThrowRecords(): SportsRecord[] {
    if (this.throwRecords.length > 0) {
      return this.throwRecords;
    }
    let localThrowRecords = localStorage.getItem('throwRecords');
    if (localThrowRecords) {
      this.throwRecords = JSON.parse(localThrowRecords);
    }
    return this.throwRecords
  }

  getWalkRecords(): SportsRecord[] {
    if (this.walkRecords.length > 0) {
      return this.walkRecords;
    }
    let localWalkRecords = localStorage.getItem('walkRecords');
    if (localWalkRecords) {
      this.walkRecords = JSON.parse(localWalkRecords);
    }
    return this.walkRecords
  }

  getSwimRecords(): SportsRecord[] {
    if (this.swimRecords.length > 0) {
      return this.swimRecords;
    }
    let localSwimRecords = localStorage.getItem('swimRecords');
    if (localSwimRecords) {
      this.swimRecords = JSON.parse(localSwimRecords);
    }
    return this.swimRecords
  }

  getWtLiftRecords(): SportsRecord[] {
    if (this.wtLiftRecords.length > 0) {
      return this.wtLiftRecords;
    }
    let localWtLiftRecords = localStorage.getItem('wtLiftRecords');
    if (localWtLiftRecords) {
      this.wtLiftRecords = JSON.parse(localWtLiftRecords);
    }
    return this.wtLiftRecords
  }

  addRunRecord(record: SportsRecord) {
    this.runRecords.push(record);
    try {
      localStorage.setItem('runRecords', JSON.stringify(this.runRecords));
    } catch (e) {
      console.log(e);
    }
  }

  addJumpRecord(record: SportsRecord) {
    this.jumpRecords.push(record);
    try {
      localStorage.setItem('jumpRecords', JSON.stringify(this.jumpRecords));
    } catch (e) {
      console.log(e);
    }
  }

  addThrowRecord(record: SportsRecord) {
    this.throwRecords.push(record);
    try {
      localStorage.setItem('throwRecords', JSON.stringify(this.throwRecords));
    } catch (e) {
      console.log(e);
    }
  }

  addWalkRecord(record: SportsRecord) {
    this.walkRecords.push(record);
    try {
      localStorage.setItem('walkRecords', JSON.stringify(this.walkRecords));
    } catch (e) {
      console.log(e);
    }
  }

  addSwimRecord(record: SportsRecord) {
    this.swimRecords.push(record);
    try {
      localStorage.setItem('swimRecords', JSON.stringify(this.swimRecords));
    } catch (e) {
      console.log(e);
    }
  }

  addWtLiftRecord(record: SportsRecord) {
    this.wtLiftRecords.push(record);
    try {
      localStorage.setItem('wtLiftRecords', JSON.stringify(this.wtLiftRecords));
    } catch (e) {
      console.log(e);
    }
  }

  constructor() { }
}
