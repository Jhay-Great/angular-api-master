import { createReducer, on } from "@ngrx/store";

// local imports
import { PostApi } from "../../interface/post.interface";
import { getSinglePost, nextPage, onLoadPost, onSuccess, previousPage, successPublishPost } from "../actions/post.action";

// interface, initial value, reducer


const initialValue:PostApi = {
    data: [],
    selectedPostId: NaN,
    currentPageNumber: 0,
    totalPageNumber: 0,
    isLoading: false,
    error: ''
}

export const postReducer = createReducer(
    initialValue,
    on(onLoadPost, (state) => {
        return {
            ...state,
            isLoading: true,
        }
    }),
    on(onSuccess, (state, {data}) => ({...state, data})),
    on(getSinglePost, (state, {id}) => {

        return {
            ...state,
            selectedPostId: id,
        }
    }),
    on(successPublishPost, (state, { data }) => ({...state, data})),
    on(nextPage, (state) => {
        const {totalPageNumber, currentPageNumber} = state;
        return {
            ...state,
            currentPageNumber: Math.min(currentPageNumber + 1, totalPageNumber)
            // currentPageNumber: state.currentPageNumber + 1,
        }
    }),
    on(previousPage, (state) => {
        const {totalPageNumber, currentPageNumber} = state;
        return {
            ...state,
            currentPageNumber: Math.max(currentPageNumber -1, totalPageNumber),
            // currentPageNumber: state.currentPageNumber - 1,
        }
    }),
);
