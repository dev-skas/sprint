import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent implements OnInit {
  selected: number = 0;
  userStoryListings: any = [];
  SprintListings: any = [];
  constructor() {}

  ngOnInit(): void {}
  /**
   *
   * @param data -items
   */
  addItem(data: any) {
    this.userStoryListings.push(data);
  }
  /**
   *clear function
   * @param key clear type
   */
  clearAll(key: any) {
    if (key == 'clear_all') {
      this.userStoryListings = [];
    } else if (key == 'clear_sprint') {
      this.SprintListings = [];
    }
  }
  /**
   * auto slect user stories
   * @param limit - sprint limit
   */
  SelectStories(limit: any) {
    let sum = 0;
    const result = this.userStoryListings.filter((obj: any) => {
      if (sum + obj.point <= limit) {
        sum += obj.point;
        return true;
      } else {
        return false;
      }
    });
    this.SprintListings = [...result];
  }
}
