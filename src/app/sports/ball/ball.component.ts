import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ball',
  templateUrl: './ball.component.html',
  styleUrls: ['./ball.component.scss']
})
export class BallComponent implements OnInit {

  constructor() { }

  isShow = false;
  balls = ["ball1", "ball2", "ball3", "ball4"];
  ngOnInit(): void {
  }

}
