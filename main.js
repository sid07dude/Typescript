// defining a class
var YoutubeVideo = /** @class */ (function () {
    function YoutubeVideo(videoTitle, description, publishedOn, likes, dislikes, views, quality, playbackSpeed) {
        var _this = this;
        this.videoTitle = videoTitle;
        this.description = description;
        this.publishedOn = publishedOn;
        this.likes = likes;
        this.dislikes = dislikes;
        this.views = views;
        this.quality = quality;
        this.playbackSpeed = playbackSpeed;
        // method for video title
        this.getVideoTitle = function () {
            return _this.videoTitle;
        };
        // method for video Description
        this.getVideoDescription = function () {
            return _this.description;
        };
        // method for video Description
        this.getPublishedOn = function () {
            return _this.publishedOn;
        };
        // method for Number of Likes
        this.getNumberOfLikes = function () {
            return _this.likes;
        };
        // method for Number of Views
        this.getNumberOfViews = function () {
            return _this.views;
        };
        // method for Video Quality
        this.getQuality = function () {
            return _this.quality;
        };
        // method for Video Quality
        this.getPlaybackSpeed = function () {
            return _this.playbackSpeed;
        };
        this.videoTitle = videoTitle;
        this.description = description;
        this.publishedOn = publishedOn;
        this.likes = likes;
        this.dislikes = dislikes;
        this.views = views;
        this.quality = quality;
        this.playbackSpeed = playbackSpeed;
    } // end constructor
    return YoutubeVideo;
}()); // end class 
var facebook = /** @class */ (function () {
    function facebook(mobileNumber, emailId, birthday, gender, currentCity, hometown, languages, workplace) {
        var _this = this;
        this.mobileNumber = mobileNumber;
        this.emailId = emailId;
        this.birthday = birthday;
        this.gender = gender;
        this.currentCity = currentCity;
        this.hometown = hometown;
        this.languages = languages;
        this.workplace = workplace;
        // method for video title
        this.getMobileNumber = function () {
            return _this.mobileNumber;
        };
        // method for video Description
        this.getEmailId = function () {
            return _this.emailId;
        };
        // method for video Description
        this.getBirthday = function () {
            return _this.birthday;
        };
        // method for Number of Views
        this.getGender = function () {
            return _this.gender;
        };
        // method for Video Quality
        this.getCurrentCity = function () {
            return _this.currentCity;
        };
        // method for Video Quality
        this.getLanguages = function () {
            return _this.languages;
        };
        // method for Video Quality
        this.getWorkPlace = function () {
            return _this.workplace;
        };
        this.mobileNumber = mobileNumber;
        this.emailId = emailId;
        this.birthday = birthday;
        this.gender = gender;
        this.currentCity = currentCity;
        this.hometown = hometown;
        this.languages = languages;
        this.workplace = workplace;
    } // end constructor
    return facebook;
}()); // end class  
var video = new YoutubeVideo("Typescript Tutorials Part 1", "This is the basic video of Typescript, Here we are going to learn steps of how to install it...", "03 May 2018", 129, 21, 40989, ["144p", "240p", "360p", "720p", "1028p"], ["0.25x", "0.5x", "0.75x", "Normal", "1.25x", "1.5x", "2x"]);
console.log("Youtube Video Details =>");
var vt = video.getVideoTitle();
console.log("Video Title : " + vt);
var vd = video.getVideoDescription();
console.log("Video Desciption : " + vd);
var pd = video.getPublishedOn();
console.log("Published on : " + pd);
var nv = video.getNumberOfViews();
console.log("Number of Views : " + nv);
var nol = video.getNumberOfLikes();
console.log("Number of Likes : " + nol);
var vq = video.getQuality();
console.log("Video Quality : " + vq[3]);
var ps = video.getPlaybackSpeed();
console.log("Playback Speed : " + ps[3]);
var about = new facebook(9158918567, "sidgajbhiye07@gmail.com", "25 Nov 1988", "Male", "Pune", "Nagpur", ["English", "Hindi", "Marathi"], ["Company1", "Company2", "Company3"]);
console.log(" ");
console.log("Facebook Details =>");
var mob = about.getMobileNumber();
console.log("Mobile Number : " + mob);
var email = about.getEmailId();
console.log("Email Id : " + email);
var bd = about.getBirthday();
console.log("Birthday : " + bd);
var gen = about.getGender();
console.log("Gender : " + gen);
var cc = about.getCurrentCity();
console.log("Current City : " + cc);
var lang = about.getLanguages();
console.log("Languages known : " + lang[0] + "," + lang[1] + "," + lang[2]);
var wp = about.getWorkPlace();
console.log("Workplace : " + wp[2]);
