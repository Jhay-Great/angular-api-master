export interface IPost {
    userId: string;
    id: string;
    title: string;
    body: string;
}

export interface AppState {
    post: PostApi,
}

export interface PostApi {
    data: IPost[],

}

// export interface IPostAction {
//     // type
// }