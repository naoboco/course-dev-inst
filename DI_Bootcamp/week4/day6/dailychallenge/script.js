class Video {
    constructor(title, uploader, time) {
        this.title = title;
        this.uploader = uploader;
        this.time = time;
    }

    watch() {
        console.log(`${this.uploader} watched all ${this.time} of ${this.title}!`);
    }
}

const video1 = new Video("Learn JavaScript", "John", 300);
video1.watch();

const video2 = new Video("React Tutorial", "Sarah", 600);
video2.watch();

const videoData = [
    { title: "Python Basics", uploader: "Alice", time: 450 },
    { title: "HTML Tutorial", uploader: "David", time: 320 },
    { title: "CSS Animation", uploader: "Emma", time: 280 },
    { title: "Node.js Guide", uploader: "Michael", time: 720 },
    { title: "JavaScript Projects", uploader: "Naomie", time: 540 }
];

const videos = videoData.map(({ title, uploader, time }) => {
    return new Video(title, uploader, time);
});

videos.forEach(video => video.watch());