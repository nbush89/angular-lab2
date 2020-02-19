import { Component, OnInit } from "@angular/core";
import { Post } from "../interfaces/post";

@Component({
  selector: "app-social-posts",
  templateUrl: "./social-posts.component.html",
  styleUrls: ["./social-posts.component.css"]
})
export class SocialPostsComponent implements OnInit {
  show: boolean = false;
  postList: Post[] = [
    { title: "Angular", thought: "Angular is fun!" },
    { title: "Pets", thought: "I want a dog" },
    { title: "Coding", thought: "I like to code" }
  ];
  onDelete(index) {
    this.postList.splice(index, 1);
  }
  onSubmit(post: Post) {
    this.postList.unshift(post);
    this.show = false;
  }
  showForm() {
    this.show = !this.show;
  }
  constructor() {}

  ngOnInit(): void {}
}
