import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-story',
  templateUrl: './create-story.component.html',
  styleUrls: ['./create-story.component.scss'],
})
export class CreateStoryComponent implements OnInit {
  submitted: boolean = false;
  duplicated: boolean = false;
  Form = this.formbuilder.group({
    name: [null, [Validators.required]],
    point: [null, [Validators.required]],
  });

  @Output() createItem = new EventEmitter<any>();
  @Input() items = [];

  constructor(private formbuilder: FormBuilder) {}

  ngOnInit(): void {}
  // create button
  create() {
    this.submitted = true;
    this.duplicated = false;
    if (this.Form.invalid || this.duplicateCheck()) {
      return;
    } else {
      this.createItem.emit(this.Form.value);
      this.submitted = false;
      this.duplicated = false;
      this.Form.reset();
    }
  }
  // duplicate check with name
  duplicateCheck() {
    if (
      this.items.findIndex((item: any) => item.name == this.f.name.value) != -1
    ) {
      this.duplicated = true;
      return true;
    } else {
      return false;
    }
  }
  get f() {
    return this.Form.controls;
  }
}
