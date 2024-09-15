import { createReducer, on } from "@ngrx/store";

// local imports
import { PostApi } from "../../interface/post.interface";
import { getSinglePost, onLoadPost, onSuccess, successPublishPost } from "../actions/post.action";

// interface, initial value, reducer


const initialValue:PostApi = {
    data: [],
    selectedPostId: NaN,
}

export const postReducer = createReducer(
    initialValue,
    on(onLoadPost, (state) => state),
    on(onSuccess, (state, {data}) => ({...state, data})),
    on(getSinglePost, (state, {id}) => {

        return {
            ...state,
            selectedPostId: id,
        }
    }),
    on(successPublishPost, (state, { data }) => ({...state, data}))
);
