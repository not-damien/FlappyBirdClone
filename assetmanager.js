class AssetManager {
    constructor() {
        this.successCount = 0;
        this.errorCount = 0;
        this.cache = [];
        this.downloadQueue = [];
    };

    queueDownload(path) {
        console.log("Queueing " + path);
        this.downloadQueue.push(path);
    };

    isDone() {
        return this.downloadQueue.length === this.successCount + this.errorCount;
    };

    downloadAll(callback) {//todo ass audio case switch
        if (this.downloadQueue.length === 0) setTimeout(callback, 10);
        for (let i = 0; i < this.downloadQueue.length; i++) {
            var that = this
            const path = this.downloadQueue[i];
            var ext = path.substring(path.length - 3);
            console.log(path);
            switch (ext) {
                case 'jpg':
                case 'png':
                    const img = new Image();

                    img.addEventListener("load", () => {
                        console.log("Loaded " + img.src);
                        this.successCount++;
                        if (this.isDone()) callback();
                    });

                    img.addEventListener("error", () => {
                        console.log("Error loading " + img.src);
                        this.errorCount++;
                        if (this.isDone()) callback();
                    });

                    img.src = path;
                    this.cache[path] = img;
                    break;
                    case 'wav':
                    case 'mp3':
                    case 'mp4':
                        var aud = new Audio();
                        aud.addEventListener("loadeddata", function () {
                            console.log("Loaded " + this.src);
                            that.successCount++;
                            if (that.isDone()) callback();
                        });
    
                        aud.addEventListener("error", function () {
                            console.log("Error loading " + this.src);
                            that.errorCount++;
                            if (that.isDone()) callback();
                        });
    
                        aud.addEventListener("ended", function () {
                            aud.pause();
                            aud.currentTime = 0;
                        });
    
                        aud.src = path;
                        aud.load();
    
                        this.cache[path] = aud;
                        break;
                }
        }
    };

    getAsset(path) {
        return this.cache[path];
    };
};

