import { Component, Input } from '@angular/core';
import { Comment } from '../../models/comment-model';

@Component({
    selector: 'comment-item',
    templateUrl: 'comment-item.component.html'
  })
  export class CommentItem {
      @Input()
      comment: Comment;
      constructor(){

      }
  }