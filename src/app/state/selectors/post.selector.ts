import { createSelector } from "@ngrx/store";
import { AppState } from "../../interface/post.interface";

const postFeature = (state:AppState) => state.post;
export const selectPost = createSelector(
    postFeature,
    (postFeature) => postFeature.body
)