import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Post } from "../interfaces/post";

@Component({
  selector: "app-post",
  templateUrl: "./post.component.html",
  styleUrls: ["./post.component.css"]
})
export class PostComponent implements OnInit {
  @Input() singlePost: Post;
  @Output() deleted = new EventEmitter<any>();

  deletePost() {
    this.deleted.emit();
  }
  constructor() {}

  ngOnInit(): void {}
}
