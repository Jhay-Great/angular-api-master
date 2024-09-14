import { createAction } from "@ngrx/store";

// action type
const GET_ALL_POST = '[Get All Post] fetch all post from server';


export const getAllPost = createAction(GET_ALL_POST);