import { createSelector } from "@ngrx/store";
import { AppState } from "../../interface/post.interface";

const postFeature = (state:AppState) => state.post;

export const selectAllPost = createSelector(
    postFeature,
    (postFeature) => {
        const {data, start, end} = postFeature;
        console.log(start, end);
        const postList = data.slice(start, end);
        return postList;
        // return postFeature.data
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

// pagination
export const selectPages = createSelector(
    postFeature, 
    (postFeature) => {
        return postFeature.currentPageNumber
    }
)