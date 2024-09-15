import { createSelector } from "@ngrx/store";
import { AppState } from "../../interface/post.interface";

const postFeature = (state:AppState) => state.post;

export const selectAllPost = createSelector(
    postFeature,
    (postFeature) => {
        console.log('in select: ', postFeature.data);
        return postFeature.data
    }
)

export const selectSinglePost = createSelector(
    postFeature,
    (postFeature) => {
        const id = postFeature.selectedPostId;
        const data = postFeature.data;
        console.log('in selector: ', data, id);
        return data.filter(post => post.id === id);
    }
)
