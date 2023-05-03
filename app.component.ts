import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  ans:any;
  title = '5BillionStars';
  constructor(){
    var ans = new Object();
    console.log(ans, typeof(ans));
    var obj = Object.create(null);
    console.log(obj, typeof(obj));
    var obj1 = {};
    console.log(obj1, typeof(obj1));
  }
  ngOnInit(): void {
   
  }
 // currency converter?
}
