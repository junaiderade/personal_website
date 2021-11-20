//Tiny Turtle
import tt_gameplay from "../../Images/Project_Pics/Tiny_Turtle/Gameplay.png";
import tt_store from "../../Images/Project_Pics/Tiny_Turtle/Store.png";
import tt_ads from "../../Images/Project_Pics/Tiny_Turtle/Ads.png";
import tt_bg from "../../Images/Project_Pics/Tiny_Turtle/Ocean_Background.jpg";
import tt_achievements from "../../Images/Project_Pics/Tiny_Turtle/Achievements.png";
import tt_leaderboards from "../../Images/Project_Pics/Tiny_Turtle/Leaderboards.png";


//Angular Calorie Caculator
import a_ui from "../../Images/Project_Pics/Calorie_Calculator/UI.png";
import a_breakdown from "../../Images/Project_Pics/Calorie_Calculator/Breakdown.png";
import a_results from "../../Images/Project_Pics/Calorie_Calculator/Results.png";
import a_bg from "../../Images/Project_Pics/Calorie_Calculator/Background.jpg";

//YelpCamp
import yc_comment from "../../Images/Project_Pics/YelpCamp/Comment.png";
import yc_home from "../../Images/Project_Pics/YelpCamp/Home.png";
import yc_post from "../../Images/Project_Pics/YelpCamp/Post.png";
import yc_bg from "../../Images/Project_Pics/YelpCamp/Background.jpg";




export const project_items = [

    //Tiny Turtle
    {
        name: "Tiny Turtle",

        background: tt_bg,

        carousel: 
        [
            {
                image: tt_gameplay,
                caption: "Addictive Gameplay"
            },
            {
                image: tt_store,
                caption: "In App Purchasing"
            },
            {
                image: tt_ads,
                caption: "Advertisements Plug-In"
            },
            {
                image: tt_leaderboards,
                caption: "Posts Global High Scores"
            },
            {
                image: tt_achievements,
                caption: "Awards Players Achievements"
            }

        ],

        released: false,

        release_notes: "Releasing 2022",

        icons: 
        [
            "fab fa-app-store",
            "fab fa-google-play"
        ],

        link : "Link not yet available",

        description: "A free running game where you play as a turtle dodging trash in multiple environments.",

        features: 
        [
            "Addictive Gameplay",
            "In-App Purchasing",
            "Advertisements",
            "Achievements",
            "Leaderboards"
        ],

        technical: 
        [
            "Coded in C#","Uses Unity Game Engine","Drawn in Procreate on iPad", "Uses Xcode for iOS build", "Uses Android Studio for Android Build"
        ]

    },
    //Angular Calorie Calculator
    {
        name: "Angular Calorie Calculator",

        background: a_bg,

        carousel: 
        [
            {
                image: a_ui,
                caption: "UI built in Angular"
            },
            {
                image: a_breakdown,
                caption: "Methodology Breakdown"
            },
            {
                image: a_results,
                caption: "Detailed Results"
            }
        ],

        released: true,

        release_notes: "Released August 2019",

        icons: 
        [
            "fas fa-desktop",
        ],

        link : "http://junaid-personal-projects.s3-website-us-east-1.amazonaws.com/",

        description: "A free running game where you play as a turtle dodging trash in multiple environments.",

        features: 
        [
            "Addictive Gameplay",
            "In-App Purchasing",
            "Advertisements",
            "Achievements",
            "Leaderboards"
        ],

        technical: 
        [
            "Coded in JavaScript using Angular Framework","Deployed using AWS S3","Procreate", "Xcode", "Android Studio"
        ]

    },
    //YelpCamp
    {
        name: "YelpCamp",

        background: yc_bg,

        carousel: 
        [
            {
                image: yc_home,
                caption: "Allows users to view campgrounds listed by others"
            },
            {
                image: yc_post,
                caption: "Allows users to post new campgrounds"
            },
            {
                image: yc_comment,
                caption: "Allows users to comment on the posts of others"
            }
        ],

        released: true,

        release_notes: "Released March 2019",

        icons: 
        [
            "fas fa-desktop",
        ],

        link : "https://desolate-everglades-56309.herokuapp.com/campgrounds",

        description: "A website I created to teach myself express and mongoDB. The website's function is to allow campers to post their favorite campsites to the internet for everyone to see.",

        features: 
        [
            "Addictive Gameplay",
            "In-App Purchasing",
            "Advertisements",
            "Achievements",
            "Leaderboards"
        ],

        technical: 
        [
            "Coded in JavaScript using Angular Framework","Deployed using AWS S3","Procreate", "Xcode", "Android Studio"
        ]

    }


]