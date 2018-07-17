import { Comment } from "../comment-model";

export class FakeData4 {
    init(): Array<Comment> {
        var comment1 = new Comment();
        comment1.username = "katebmedia";
        comment1.creationDate = "چهارشنبه 20/5/97";
        comment1.description = "خیلی هم خوب و عالی";

        var comment2 = new Comment();
        comment2.username ="morteza";
        comment2.creationDate = "دیروز";
        comment2.description = "اصلا هم جالب نبود";


        var comments: Array<Comment> = [];
        comments.push(comment1);
        comments.push(comment2);

        return comments;
    }
}