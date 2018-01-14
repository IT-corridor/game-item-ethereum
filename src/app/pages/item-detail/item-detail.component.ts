import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.scss']
})
export class ItemDetailComponent implements OnInit {
  itemImageLink = [
    '/assets/images/item-mask.png',
    '/assets/images/item-shot.png',
    '/assets/images/item-knife.png',
    '/assets/images/item-umbrella.png',
    '/assets/images/item-lamp.png'
  ];
  constructor() { }

  ngOnInit() {
  }

}
