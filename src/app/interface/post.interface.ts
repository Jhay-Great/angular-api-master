export interface IPost {
    userId: string;
    id: string;
    title: string;
    body: string;
}

export interface AppState {
    post: IPost,
}

// export interface IPostAction {
//     // type
// }