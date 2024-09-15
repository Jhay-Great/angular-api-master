import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators, } from '@angular/forms';

@Component({
  selector: 'app-create-a-post',
  standalone: true,
  imports: [ReactiveFormsModule, ],
  templateUrl: './create-a-post.component.html',
  styleUrl: './create-a-post.component.scss'
})
export class CreateAPostComponent implements OnInit {

  form!:FormGroup
  
  constructor (
    private fb:FormBuilder,
  ) {};

  ngOnInit(): void {
    this.form = this.fb.group({
      title: ['', Validators.required],
      body: ['', Validators.required]
    })
  }

  publishPost () {
    const data = this.form.value;
    console.log(data);
  }



}
