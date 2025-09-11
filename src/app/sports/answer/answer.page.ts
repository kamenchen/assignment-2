import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.page.html',
  styleUrls: ['./answer.page.scss'],
  standalone: false,
})
export class AnswerPage implements OnInit {
sportid: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.sportid= this.route.snapshot.paramMap.get('id');
    console.log(this.sportid);
  }

}
