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
    let localRunRecords = localStorage.getItem('runRecords');
    if (localRunRecords) {
      this.runRecords = JSON.parse(localRunRecords);
    }
    return this.runRecords
  }

  getJumpRecords(): SportsRecord[] {
    let localRunRecords = localStorage.getItem('jumpRecords');
    if (localRunRecords) {
      this.jumpRecords = JSON.parse(localRunRecords);
    }
    return this.jumpRecords
  }

  getThrowRecords(): SportsRecord[] {
    let localRunRecords = localStorage.getItem('throwRecords');
    if (localRunRecords) {
      this.throwRecords = JSON.parse(localRunRecords);
    }
    return this.throwRecords
  }

  getWalkRecords(): SportsRecord[] {
    let localRunRecords = localStorage.getItem('walkRecords');
    if (localRunRecords) {
      this.walkRecords = JSON.parse(localRunRecords);
    }
    return this.walkRecords
  }

  getSwimRecords(): SportsRecord[] {
    let localRunRecords = localStorage.getItem('swimRecords');
    if (localRunRecords) {
      this.swimRecords = JSON.parse(localRunRecords);
    }
    return this.swimRecords
  }

  getWtLiftRecords(): SportsRecord[] {
    let localRunRecords = localStorage.getItem('wtLiftRecords');
    if (localRunRecords) {
      this.wtLiftRecords = JSON.parse(localRunRecords);
    }
    return this.wtLiftRecords
  }

  addRunRecord(record: SportsRecord) {
    this.runRecords.push(record);
    localStorage.setItem('runRecords', JSON.stringify(this.runRecords));
  }

  addJumpRecord(record: SportsRecord) {
    this.runRecords.push(record);
    localStorage.setItem('jumpRecords', JSON.stringify(this.jumpRecords));
  }

  addThrowRecord(record: SportsRecord) {
    this.runRecords.push(record);
    localStorage.setItem('throwRecords', JSON.stringify(this.throwRecords));
  }

  addWalkRecord(record: SportsRecord) {
    this.runRecords.push(record);
    localStorage.setItem('walkRecords', JSON.stringify(this.walkRecords));
  }

  addSwimRecord(record: SportsRecord) {
    this.runRecords.push(record);
    localStorage.setItem('swimRecords', JSON.stringify(this.swimRecords));
  }

  addWtLiftRecord(record: SportsRecord) {
    this.runRecords.push(record);
    localStorage.setItem('wtLiftRecords', JSON.stringify(this.wtLiftRecords));
  }

  constructor() { }
}
