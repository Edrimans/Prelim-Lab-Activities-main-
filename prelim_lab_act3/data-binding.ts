import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.html',
  styleUrl: './data-binding.css',
})
export class DataBinding {
  message = "Data Binding Demo";
  title = "My first app";
  description = "This is my new Angular Application";

  // Property binding
  imageUrl = "https://i.redd.it/6v9jcii5wu8c1.jpeg";
 w = 120;
 h = 130;
 altText = "Gotho";
textColor = "blue";


isHighlighted = true;
yourName = '';

count = 0;
increment() {
  this.count++;

}

decrement() {
  this.count--;
}

}
