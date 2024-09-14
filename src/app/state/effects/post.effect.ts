import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { LOAD_POST_DATA, onFailure, onSuccess } from "../actions/post.action";
import { catchError, map, mergeMap, of, tap } from "rxjs";
import { PostService } from "../../services/post/post.service";

@Injectable ()
export class loadPostEffect {
    loadItems$ = createEffect(() => 
        this.actions$.pipe(
            ofType(LOAD_POST_DATA),
            mergeMap(() => 
                this.postService.getPosts().pipe(
                    // tap(data => console.log('logging from effect: ', data)),
                    map(data => onSuccess({data})),
                    catchError(error => of(onFailure({error})))
                )
            )
        )
    );

    constructor (
        private actions$: Actions,
        private postService: PostService,
    ) {
        console.log('effect is called...')
    };
}