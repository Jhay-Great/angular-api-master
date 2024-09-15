import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { failedPublishPost, LOAD_POST_DATA, onFailure, onLoadPost, onSuccess, PUBLISH, publishPost, successPublishPost } from "../actions/post.action";
import { catchError, map, mergeMap, of, tap } from "rxjs";
import { PostService } from "../../services/post/post.service";

@Injectable ()
export class loadPostEffect {
    loadPost$ = createEffect(() => 
        this.actions$.pipe(
            ofType(onLoadPost),
            mergeMap(() => 
                this.postService.getPosts().pipe(
                    // tap(data => console.log('logging from effect: ', data)),
                    map(data => onSuccess({data})),
                    catchError(error => of(onFailure({error})))
                )
            )
        )
    );
    
    addPost$ = createEffect(() => 
        this.actions$.pipe(
            ofType(publishPost),
            mergeMap(data =>
                this.postService.post(data.data).pipe(
                    tap(data => {
                        console.log('logging publish post from effect: ', data);
                    }),
                    map(data => successPublishPost(data)),
                    catchError(error => of(failedPublishPost({ error })))
                )
            )
        )
    )
    

    constructor (
        private actions$: Actions,
        private postService: PostService,
    ) {
        console.log('effect is called...')
    };
}