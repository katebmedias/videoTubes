import { Video } from "../video-model";

export class FakeData1 {
    init(): Array<Video> {
        var video1 = new Video();
        video1.title = "غوغای جناب خان و بهرام افشاری در خندوانه 97 - بهتاش فریبا خیلی خنده";
        video1.shortDescription = "";
        video1.description = "";
        video1.date = "1 هفته پیش";
        video1.duration = "18:42";
        video1.image = "../assets/imgs/hqdefault.webp";
        video1.link = "1";
        video1.viewCount = 5;
        video1.id = 1;

        var video2 = new Video();
        video2.title = "غوغای";
        video2.shortDescription = "";
        video2.description = "";
        video2.date = "2 هفته پیش";
        video2.duration = "2:25";
        video2.image = "../assets/imgs/hqdefault2.webp";
        video2.link = "2";
        video2.viewCount = 7;
        video2.id = 2;

        var videos: Array<Video> = [];
        videos.push(video1);
        videos.push(video2);

        return videos;
    }
}