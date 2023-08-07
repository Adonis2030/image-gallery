import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ImageService } from '../data.service';
@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.scss'],
})
export class PhotoListComponent implements OnInit {
  photos: any[] = [];
  page: number = 1;
  limit: number = 24;
  constructor(private imageService: ImageService) {}

  items = ['item1', 'item2', 'item3', 'item4'];

  ngOnInit() {
    this.loadMore();
  }

  loadMore(): void {
    this.imageService.getImages(this.page, this.limit).subscribe((photos) => {
      this.photos = [...this.photos, ...photos];
      this.page++;
    });
  }
}
