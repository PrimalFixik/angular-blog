import {Component, Input, OnInit} from '@angular/core';
import {IComment} from "../../../core/interfaces/IComment";

@Component({
  selector: 'app-comment-item',
  templateUrl: './comment-item.component.html',
  styleUrls: ['./comment-item.component.scss']
})
export class CommentItemComponent implements OnInit{
  @Input() comment: IComment;

  ngOnInit() {
    console.debug(this.comment);
  }
}
