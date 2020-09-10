import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-visitor-list',
  templateUrl: './visitor-list.component.html',
  styleUrls: ['./visitor-list.component.css'],
})
export class VisitorListComponent implements OnInit {
  retrievedVisitorList: any;
  vistorAvailable: boolean = false;
  vistorNotAvailable: boolean = false;

  constructor() {}

  displayedColumns: string[] = [
    'name',
    'personToVisit',
    'visitType',
    'email',
    'entryDate',
    'entryTime',
    'exitTime',
  ];

  ngOnInit(): void {
    this.retrievedVisitorList = JSON.parse(localStorage.getItem('visitors'));

    if (this.retrievedVisitorList == null) {
      this.vistorNotAvailable = true;
    } else {
      this.vistorAvailable = true;
    }
  }
}
