import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-visitor-entry-form',
  templateUrl: './visitor-entry-form.component.html',
  styleUrls: ['./visitor-entry-form.component.css'],
})
export class VisitorEntryFormComponent implements OnInit {
  visitorLog: FormGroup;
  visitor: any = {};
  visitorList: any;
  userSubmit: boolean;
  presentDate: any;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.presentDate = new FormControl(new Date());
    console.log(this.presentDate);
    console.log(this.presentDate.value);
    this.visitorLog = new FormGroup({
      name: new FormControl('', [Validators.required]),
      visitType: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      personToVisit: new FormControl('', [Validators.required]),
      dateOfEntry: new FormControl({ value: new Date() }),
      timeOfEntry: new FormControl(''),
      timeOfExit: new FormControl(''),
    });
    this.visitorLog.get('dateOfEntry').setValue(new Date());
  }

  submit() {
    this.userSubmit = true;
    console.log('check => ', this.visitorLog.value);
    if (this.visitorLog.valid) {
      this.visitor = Object.assign(this.visitor, this.visitorLog.value);
      this.addVisitor(this.visitor);
      Swal.fire({
        icon: 'success',
        text: 'Data Saved Successfully!',
      });
      this.router.navigate(['/list']);
      this.visitorLog.reset();
    } else {
      Swal.fire({
        icon: 'error',
        text: 'Fill All Required Field',
      });
    }
  }

  addVisitor(visitor) {
    let visitors = [];
    if (localStorage.getItem('visitors')) {
      visitors = JSON.parse(localStorage.getItem('visitors'));
      visitors = [visitor, ...visitors];
    } else {
      visitors = [visitor];
    }
    localStorage.setItem('visitors', JSON.stringify(visitors));
  }
}
