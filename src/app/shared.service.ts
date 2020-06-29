import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

blogTitle = "Sir Blogs-A-Lot";
baseUrl = "http://localhost:4200/"

constructor() { }

}
