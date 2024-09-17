import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators, } from '@angular/forms';
import { PostService } from '../../services/post/post.service';
import { Store } from '@ngrx/store';
import { publishPost } from '../../state/actions/post.action';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-create-a-post',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './create-a-post.component.html',
  styleUrl: './create-a-post.component.scss'
})
export class CreateAPostComponent implements OnInit {

  form!:FormGroup
  
  constructor (
    private fb:FormBuilder,
    private postService:PostService,
    private store:Store,
  ) {};

  ngOnInit(): void {
    this.form = this.fb.group({
      title: ['', Validators.required],
      body: ['', Validators.required]
    })
  }

  publishPost () {
    const post = this.form.value;
    this.store.dispatch(publishPost({data: post}))
    console.log(post);
  }



}
