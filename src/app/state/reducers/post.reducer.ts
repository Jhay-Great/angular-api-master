import { createReducer, on } from "@ngrx/store";

// local imports
import { IPost } from "../../interface/post.interface";
import { onLoadPost } from "../actions/post.action";

// interface, initial value, reducer
interface PostApi {
    data: IPost[],

}

const initialValue:PostApi = {
    data: [],
}

export const postReducer = createReducer(
    initialValue,
    on(onLoadPost, (state) => state),
)
