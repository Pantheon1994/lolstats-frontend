import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class SeoService {

  constructor(private title: Title, private meta: Meta) { }

  updateTitle(newTitle: string) {
    this.title.setTitle(newTitle);
  }

  updateDescription(newDescription: string) {
    this.meta.updateTag({ name: 'description', content: newDescription });
  }

}
