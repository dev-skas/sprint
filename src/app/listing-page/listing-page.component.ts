import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-listing-page',
  templateUrl: './listing-page.component.html',
  styleUrls: ['./listing-page.component.scss'],
})
export class ListingPageComponent implements OnInit {
  @Input() items: any = [];
  constructor() {}

  ngOnInit(): void {}
}
