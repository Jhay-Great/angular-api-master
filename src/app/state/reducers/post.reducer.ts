import { createReducer, on } from "@ngrx/store";

// local imports
import { PostApi } from "../../interface/post.interface";
import { getSinglePost, loadCommentsSuccess, nextPage, onLoadComments, onLoadPost, onSuccess, previousPage, successPublishPost } from "../actions/post.action";

// interface, initial value, reducer


const initialValue:PostApi = {
    data: [],
    comments: [],
    selectedPostId: NaN,
    currentPageNumber: 0,
    totalPageNumber: 0,
    isLoading: false,
    error: '',
    start: 0,
    end: 10,
}

export const postReducer = createReducer(
    initialValue,
    on(onLoadPost, onLoadComments, (state) => {
        return {
            ...state,
            isLoading: true,
        }
    }),
    on(onSuccess, (state, {data}) => (
        {...state, data, totalPageNumber: Math.ceil(data.length / 10)}
        )),
    on(loadCommentsSuccess, (state, {comments}) => {
        return {
            ...state,
            comments,
        }
    }),
    on(getSinglePost, (state, {id}) => {

        return {
            ...state,
            selectedPostId: id,
        }
    }),
    on(successPublishPost, (state, { data }) => ({...state, data})),
    on(nextPage, (state) => {
        const {totalPageNumber, currentPageNumber, start, end} = state;
        return {
            ...state,
            currentPageNumber: Math.min(currentPageNumber + 1, totalPageNumber),
            start: start + 10,
            end: end + 10,
            // currentPageNumber: state.currentPageNumber + 1,
        }
    }),
    on(previousPage, (state) => {
        const {totalPageNumber, currentPageNumber, start, end} = state;
        return {
            ...state,
            // currentPageNumber: Math.max(currentPageNumber -1, totalPageNumber),
            // currentPageNumber: currentPageNumber - 1,
            currentPageNumber: Math.max(currentPageNumber -1, 0),
            start: start - 10,
            end: end - 10,
            // currentPageNumber: state.currentPageNumber - 1,
        }
    }),
);
