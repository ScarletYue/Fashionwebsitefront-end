// trang-chu.component.ts

import { Component, Input, ElementRef, Renderer2, OnInit } from '@angular/core';
import { CommentService } from './comment.service';
import { Comment } from './comment.model';
import { Router } from '@angular/router';
import { SanPham } from '../san_pham/san-pham';
import { SanPhamService } from '../san_pham/san-pham.service';
import { FormLogComponent } from '../form-log/form-log.component';
@Component({
  selector: 'app-trangchu',
  templateUrl: './trangchu.component.html',
  styleUrls: ['./trangchu.component.css']
})

export class TrangChuComponent implements OnInit {

  sanPhams?: SanPham[];
  sanPhamDisplays?: SanPham[];
  
    event = [
      {
        Name: 'Tên sự kiện 1',
        Description: 'Tóm tắt sự kiện',
        ImageUrl: '....jpg'
      },
      {
        Name: 'Tên sự kiện 2',
        Description: 'Tóm tắt sự kiện',
        ImageUrl: '....jpg'
      },
      {
        Name: 'Tên sự kiện 3',
        Description: 'Tóm tắt sự kiện',
        ImageUrl: '....jpg'
      },
    ];

    @Input() comment!: Comment;
    newComment: Comment = { username: '', content: '', timestamp: new Date(), avatarUrl: 'path/to/avatar.jpg' };
    comments: Comment[] = [];
    constructor(public commentService: CommentService, private renderer: Renderer2, private el: ElementRef, private router: Router,private sanPhamService: SanPhamService) {}
    ngOnInit(): void {
      this.sanPhamService.getSanPhams().subscribe(data => {
        this.sanPhams = data;
        this.sanPhamDisplays=this.sanPhams.slice(0, 3);
      });
    }


    addComment(): void {
      if (this.newComment.username && this.newComment.content) {
        this.commentService.addComment(this.newComment);
        this.newComment = { username: '', content: '', timestamp: new Date(), avatarUrl: 'path/to/avatar.jpg' };
      }
    }
    isFolded:  boolean = false;
  toggleFold() {
    this.isFolded = !this.isFolded;
    if (this.isFolded) {
      this.renderer.addClass(this.el.nativeElement, 'thanhben--fold');
    } else {
      this.renderer.removeClass(this.el.nativeElement, 'thanhben--fold');
    }
  }
  navigateToFormLog() {
    this.router.navigate(['/chitietsp']);
  }
}
