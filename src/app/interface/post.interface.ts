export interface IPost {
    userId: number;
    id: number;
    title: string;
    body: string;
}

export interface AppState {
    post: PostApi,
}

export interface PostApi {
    data: IPost[],
    selectedPostId: number,
    currentPageNumber: number,
    totalPageNumber: number,
    isLoading: boolean,
    error: string,
    start: number;
    end: number;
}

export interface IPublish {
    title: string,
    body: string,
}

// export interface IPostAction {
//     // type
// }