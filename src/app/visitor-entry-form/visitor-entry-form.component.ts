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
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.visitorLog = new FormGroup({
      name: new FormControl('', [Validators.required]),
      visitType: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      personToVisit: new FormControl('', [Validators.required]),
      dateOfEnquiry: new FormControl('', [Validators.required]),
      timeOfEntry: new FormControl('', [Validators.required]),
      timeOfExit: new FormControl('', [Validators.required]),
    });
  }

  getErrorMessage() {
    if (this.visitorLog.get('projectTitle').hasError('required')) {
      return 'You must enter a value';
    }

    return this.visitorLog.get('projectTitle').hasError('email')
      ? 'Not a valid email'
      : '';
  }

  submit() {
    this.visitor = Object.assign(this.visitor, this.visitorLog.value);
    this.addVisitor(this.visitor);
    Swal.fire({
      icon: 'success',
      text: 'Data Saved Successfully!',
    });
    this.router.navigate(['']);
    this.visitorLog.reset();
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
