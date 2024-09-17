import { createSelector } from "@ngrx/store";
import { AppState } from "../../interface/post.interface";

const postFeature = (state:AppState) => state.post;

export const selectAllPost = createSelector(
    postFeature,
    (postFeature) => {
        const {data, start, end} = postFeature;
        const postList = data.slice(start, end);
        return postList;
        // return postFeature.data
    }
)

export const selectSinglePost = createSelector(
    postFeature,
    (postFeature) => {
        const comments = postFeature.comments;
        const id = postFeature.selectedPostId;
        const data = postFeature.data;

        const postComments = comments.filter(postComment => id === postComment.postId);
        const post = data.filter(post => post.id === id);
        const postData = [...post, ...postComments];
        const postObj = {
            post,
            postComments,
        }

        console.log(postObj);

        return postObj;

        // console.log('post and comments: ', postObj);
        // return data.filter(post => post.id === id);
    }
)

// pagination
export const selectCurrentPage = createSelector(
    postFeature, 
    (postFeature) => {
        return postFeature.currentPageNumber
    }
)

export const selectTotalPages = createSelector(
    postFeature,
    (postFeature) => {
        return postFeature.totalPageNumber
    }
)