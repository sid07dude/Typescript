// defining a class
class YoutubeVideo {
   
    constructor (public videoTitle : string,public description : string,public publishedOn : string,public likes:number,public dislikes:number,public views : number,public quality:string[],public playbackSpeed:string[]){
       this.videoTitle = videoTitle;
       this.description = description;
       this.publishedOn = publishedOn;
       this.likes = likes;
       this.dislikes = dislikes;
       this.views = views;
       this.quality=quality;
       this.playbackSpeed=playbackSpeed;

    }// end constructor
    
    // method for video title
    getVideoTitle = ()=>{
        return this.videoTitle
    }
    // method for video Description
    getVideoDescription = ()=>{
        return this.description
    }
    // method for video Description
    getPublishedOn = ()=>{
        return this.publishedOn
    }
    // method for Number of Likes
    getNumberOfLikes= ()=>{
        return this.likes
    }
    // method for Number of Views
    getNumberOfViews = ()=>{
        return this.views
    }
    // method for Video Quality
    getQuality = ()=>{
        return this.quality
    }
    // method for Video Quality
     getPlaybackSpeed= ()=>{
        return this.playbackSpeed
    }
  
}// end class 
    
class facebook {
    constructor (public mobileNumber : number,public emailId : string,public birthday : string,public gender:string,public currentCity:string,public hometown : string,public languages:string[],public workplace:string[]){
        this.mobileNumber = mobileNumber;
        this.emailId = emailId;
        this.birthday = birthday;
        this.gender = gender;
        this.currentCity = currentCity;
        this.hometown = hometown;
        this.languages=languages;
        this.workplace=workplace;
 
    }// end constructor
     
    // method for video title
     getMobileNumber = ()=>{
         return this.mobileNumber
    }
    
    // method for video Description
     getEmailId = ()=>{
         return this.emailId
    }
    
    // method for video Description
     getBirthday = ()=>{
         return this.birthday
    }
    
    // method for Number of Views
     getGender = ()=>{
         return this.gender
    }
    
    // method for Video Quality
     getCurrentCity = ()=>{
         return this.currentCity
    }
    
    // method for Video Quality
      getLanguages= ()=>{
         return this.languages
    }

    // method for Video Quality
    getWorkPlace= ()=>{
        return this.workplace
   }
}// end class  
    
let video = new YoutubeVideo("Typescript Tutorials Part 1","This is the basic video of Typescript, Here we are going to learn steps of how to install it...","03 May 2018",129,21,40989,["144p","240p","360p","720p","1028p"],["0.25x","0.5x","0.75x","Normal","1.25x","1.5x","2x"])
    console.log("Youtube Video Details =>");
    let vt = video.getVideoTitle()
    console.log("Video Title : " +vt)
    let vd = video.getVideoDescription()
    console.log("Video Desciption : " +vd)
    let pd = video.getPublishedOn()
    console.log("Published on : " +pd)
    let nv = video.getNumberOfViews()
    console.log("Number of Views : " +nv)
    let nol = video.getNumberOfLikes()  
    console.log("Number of Likes : " +nol)
    let vq = video.getQuality()
    console.log("Video Quality : " +vq[3])
    let ps = video.getPlaybackSpeed()
    console.log("Playback Speed : " +ps[3])

let about = new facebook(9158918567,"sidgajbhiye07@gmail.com","25 Nov 1988","Male","Pune","Nagpur",["English","Hindi","Marathi"],["Company1","Company2","Company3"])  
    console.log(" ");
    console.log("Facebook Details =>");
    let mob = about.getMobileNumber()
    console.log("Mobile Number : "+mob)
    let email = about.getEmailId()
    console.log("Email Id : "+email)
    let bd = about.getBirthday()
    console.log("Birthday : "+bd)
    let gen = about.getGender()
    console.log("Gender : "+gen)
    let cc = about.getCurrentCity()
    console.log("Current City : "+cc)
    let lang = about.getLanguages()
    console.log("Languages known : "+lang[0]+","+lang[1]+","+lang[2])
    let wp = about.getWorkPlace()
    console.log("Workplace : "+wp[2])