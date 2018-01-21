import { Component, OnInit, Input, HostListener } from '@angular/core';
import { ItemService } from '../../services/ItemService/item.service';
import { Item } from '../../models/item.model';

declare const $: any;

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})

export class ItemListComponent implements OnInit {
  @Input() showTitle = true;
  private isMobile = false;
  items: Item[];
  itemArray: Item[];
  counter = 0;
  constructor(
    private itemService: ItemService,
  ) {
  }

  ngOnInit() {
    this.isMobile = this.isMobileView();
    this.itemService.getItems().subscribe((res: Item[]) => {
      this.itemArray = res;
      this.loadNextWeapons();
    });
  }

  loadNextWeapons() {
    if (this.counter < this.itemArray.length - 10) {
      this.items = this.itemArray.slice(this.counter, this.counter + 10);
      this.counter += 1;
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
     this.isMobile = this.isMobileView();
  }

  isMobileView() {
    if ($(window).width() > 425) {
        return false;
    }
    return true;
  }

}
