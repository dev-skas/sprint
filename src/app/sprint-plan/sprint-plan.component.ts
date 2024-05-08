import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-sprint-plan',
  templateUrl: './sprint-plan.component.html',
  styleUrls: ['./sprint-plan.component.scss'],
})
export class SprintPlanComponent implements OnInit {
  @Output() ClearItem = new EventEmitter<String>();
  @Output() AutoSelect = new EventEmitter<any>();

  submitted: boolean = false;
  Form = this.formbuilder.group({
    point: [null, [Validators.required]],
  });

  constructor(private formbuilder: FormBuilder) {}

  ngOnInit(): void {}
  get f() {
    return this.Form.controls;
  }
  // auto select user stories
  automate() {
    this.submitted = true;
    if (this.Form.invalid) {
      return;
    } else {
      this.AutoSelect.emit(this.f.point.value);
    }
  }
  // clear all user stories
  clear() {
    this.ClearItem.emit('clear_all');
  }
  // clear selected user stories
  clearSprint() {
    this.ClearItem.emit('clear_sprint');
  }
}
