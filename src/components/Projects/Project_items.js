//Goals and Gains
import gng_bg from "../../Images/Project_Pics/Goals_And_Gains/gngBackground.jpg"
import gng_multi from "../../Images/Project_Pics/Goals_And_Gains/gngMulti.png"


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
//YelpCamp
    
    //Tiny Turtle
    {
        name: "Tiny Turtle",

        background: tt_bg,

        carousel: 
        [
            {
                image: tt_gameplay,
                caption: "Enagaging Gameplay"
            },
            {
                image: tt_store,
                caption: "In-App Purchasing Available"
            },
            {
                image: tt_ads,
                caption: "Uses Advertisement API"
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

        released: true,

        release_notes: "Released April 2022",

        icons: 
        [
            "fab fa-app-store",
        ],

        link : "https://apps.apple.com/ml/app/tiny-turtle/id1524053527",

        description: "A free runner mobile game where you play as a turtle dodging trash in the ocean! I made this game as a fun way to raise awareness about protecting aquatic wildlife.",

        features: 
        [
            "Complex algorithms designed to increase difficulty as the player progresses in skill",
            "APIs for In-App Purchasing, Advertisements, and posting to Leaderboards",
            "Multiple playable characters which each have different special abilities",
            "A variety of enemies ranging from plastic trash to sharks",
            "3 different maps for the player to play on",
            "Powerups which can be encountered including a speed boost, coin magnet, and shield",
            "An in-game store which allows players to purchase new characters, new maps, upgrades, and more"

        ],

        technical: 
        [
            "Coded in C#","Uses Unity Game Engine","Drawn in Procreate on iPad", "Uses Xcode for iOS build",
            "Uses Unity Ads for Advertising"
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

        description: "In order to create an accurate diet plan to achieve your fitness goals, you need to properly estimate your caloric intake. There are online calculators that can help you with this but most of them dont take into account your activity level AND the time you spend in the gym, so, I decided to build one that does....and learn a bit about the Angular Framework while I'm doing it.",

        features: 
        [
            "Form component where user can fill out their details",
            "A detailed breakdown of how a user's results are calculated",
        ],

        technical: 
        [
            "Coded in JavaScript using Angular Framework","Deployed using AWS S3"
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

        description: "A website I created to teach myself ExpressJS and MongoDB. The website's function is to allow campers to post their favorite campsites to the internet for everyone to see.",

        features: 
        [
            "Users can create posts, edit posts, and delete posts",
            "Users can interact with other posts by commenting",
            "Application requires user to create an account"
        ],

        technical: 
        [
            "Backend coded in ExpressJS",
            "UI in HTML, CSS, JS",
            "Deployed using Heroku"
        ]

    },
    {
        name: "Goals and Gains",

        background: gng_bg,

        carousel: 
        [

            {
                image: gng_multi,
                caption: "Premilinary Screenshots!"
            }
        ],

        released: false,

        release_notes: "Development in progress",

        icons: 
        [
            "fab fa-app-store",
            "fab fa-google-play"
        ],

        link : "https://desolate-everglades-56309.herokuapp.com/campgrounds",

        description: "This app will be a social network for personal development! It is a work in progress.",

        features: 
        [
            "TBD"
        ],

        technical: 
        [
            "Front-end built in React Native",
            "Back-end build in Express on NodeJS",
            "Will be deployed using AWS: EC2, RDS (for database), and S3 (for photo storage)"
        ]

    }


]