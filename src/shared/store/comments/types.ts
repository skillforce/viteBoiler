export type CommentSchema = {
    postId: string;
    id: number;
    name: string;
    email: string;
    body: string;
};

export interface CommentsStoreSchema {
    comments: CommentSchema[];
    setComments: (comments: CommentSchema[]) => void;
}
