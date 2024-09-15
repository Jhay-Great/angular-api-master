import { createAction, props } from "@ngrx/store";
import { IPost, IPublish } from "../../interface/post.interface";

// action type
export const LOAD_POST_DATA = '[Post Api] fetch all post from server';
export const SUCCESS = '[Post Api] loads all the posts successfully';
export const FAILURE = '[Post Api] Fails to load posts';
export const SINGLE_POST = '[Post Api] gets a single post';
export const PUBLISH = '[Post Api] publishes a new post'
export const PUBLISH_SUCCESS = '[Post Api] successfully publishes a new post'
export const PUBLISH_FAILURE = '[Post Api] failed to publish new post'


// actions
export const onLoadPost = createAction(LOAD_POST_DATA);
export const onSuccess = createAction(
    SUCCESS,
    props<{data:IPost[]}>(),
);
export const onFailure = createAction(
    FAILURE,
    props<{error:string}>()
);
export const getSinglePost = createAction(
    SINGLE_POST,
    props<{id:number}>(),
);
export const publishPost = createAction(
    PUBLISH,
    props<{data:IPublish}>()
);
export const successPublishPost = createAction(
    PUBLISH_SUCCESS,
    props<{data:IPost[]}>()
    // props<{data:IPublish}>()
);
export const failedPublishPost = createAction(
    PUBLISH_FAILURE,
    props<{error: string}>()
);

