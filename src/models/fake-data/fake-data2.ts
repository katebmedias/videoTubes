import { Video } from "../video-model";

export class FakeData2 {
    init(): Array<Video> {
        var video1 = new Video();
        video1.title = "aaa";
        video1.shortDescription = "";
        video1.description = "";
        video1.date = "1 هفته پیش";
        video1.duration = "18:42";
        video1.image = "https://i.ytimg.com/vi/n7diJVM697c/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLAO918IyrijWKsI2tt2YrckGL_9kg";
        video1.link = "1";
        video1.viewCount = 5;
        video1.id = 3;

        var video2 = new Video();
        video2.title = "bbb";
        video2.shortDescription = "";
        video2.description = "";
        video2.date = "2 هفته پیش";
        video2.duration = "2:25";
        video2.image = "https://i.ytimg.com/vi/n7diJVM697c/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLAO918IyrijWKsI2tt2YrckGL_9kg";
        video2.link = "2";
        video2.viewCount = 7;
        video2.id = 4;

        var videos: Array<Video> = [];
        videos.push(video1);
        videos.push(video2);

        return videos;
    }
}