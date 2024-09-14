import { createAction, props } from "@ngrx/store";
import { IPost } from "../../interface/post.interface";

// action type
export const LOAD_POST_DATA = '[Post Api] fetch all post from server';
const SUCCESS = '[Post Api] loads all the posts successfully';
const FAILURE = '[Post Api] Fails to load posts';



export const onLoadPost = createAction(LOAD_POST_DATA);
export const onSuccess = createAction(
    SUCCESS,
    props<{data:IPost[]}>(),
)
export const onFailure = createAction(
    FAILURE,
    props<{error:string}>()
)
