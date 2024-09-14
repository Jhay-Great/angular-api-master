import { createReducer, on } from "@ngrx/store";

// local imports
import { PostApi } from "../../interface/post.interface";
import { onLoadPost, onSuccess } from "../actions/post.action";

// interface, initial value, reducer


const initialValue:PostApi = {
    data: [],
}

export const postReducer = createReducer(
    initialValue,
    on(onLoadPost, (state) => state),
    on(onSuccess, (state, {data}) => {
        return ({...state, data});
    }),
);
