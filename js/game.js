// NOTE - You must have a level with the name "start".  This is used as the first level in the game.

var game = {
    music: "98_Lost_Mine.mp3",
    background_image: "intro-bg.jpg",
    levels: {

        start: {
            message: "You walk on a street",
            choices: [
                {
                    text: "Go Left",
                    nextLevel: "sewer",
                },

                {
                    text: "Go Right",
                    nextLevel: "hundred",
                },
            ]
        },

        hundred: {
            background_image: "fire.gif",
            music: "Final-Fantasy-7-Boss-Battle.mp3",
            message: "You pick $100 off of the ground and walk a bit more ",
            choices: [
                {
                    text: "Keep it",
                    nextLevel: "trick",
                },
                {
                    text:"Give it to the homeless",
                    nextLevel:"honorable",
                },
            ]
        },

        sewer: {
            message: "You walk straight into an open sewer.",
            choices: [
                {
                    text: "Try Again",
                    nextLevel: "start",
                },
            ]
        },
        
        trick: {
            message:"April Fools! The bill turns into a paint bomb and leaves you drenched.",
            choices: [
                {
                    text:"Try Again",
                    nextLevel:"start",
                },
                ]
        },
        
        honorable: {
            message:"You have done a great deed. Congratulations!",
            choices:[
                {
                    text:"Take the train",
                    nextLevel:"Winner",
                },
                {
                    text:"Pick up Uber",
                    nextLevel:"Rip",
                },
                ]
        },
        
        Rip: {
            message:"Water on the street drenches you as the Uber comes.",
            choices:[
                {
                    text:"Try Again",
                    nextLevel:"start",
                },
                ]
        },
        
        Winner: {
            message:"You win, you reach your destination on time.",
            choices:[
                {
                    text:"Thank you for playing!",
                    nextLevel:"start",
                },
                ]
        },

    }
};
