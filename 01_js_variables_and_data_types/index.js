// ❗ Use console.log() To Check Answers

// ✅ Using console.log()

    // console.log("Hey there!");

    // let playerStatus = "stopped";

    // let currentSong = null;

    // console.log("player status is", playerStatus);

// ✅ JS Data Types (Primitive)

    // String
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
        // const title = "Sweet Dreams";
        // console.log(typeof title);

    // Number
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number
        // const duration = 216;
        // console.log(typeof duration);

    // Boolean
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean
        // const favorite = true;
        // console.log(typeof favorite);

    // Undefined => empty value
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined

        // console.log(typeof undefined);

    // Null => absence of value
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null

        // let currentSong = null;
        // console.log(typeof currentSong);

    // Symbol => unique identifier (rarely used)
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol

        // let id = Symbol("test");

        // console.log(typeof id);
    
    // BigInt => numbers larger than those JS can represent with a Number
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt

        // let bigNum = 123456789101112131415n;

        // console.log(typeof bigNum);

// ✅ let vs. const

    // 💡 what are main differences / use cases?

    // let 
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let

        // let currentSong = "Sweet Dreams";

        // let currentSong = "Cry Me a River";
        // console.log(currentSong);

    // const
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const

        // const duration = 216;

        // const duration;
        
        // duration = 5;

// ✅ Conditional Statements

    // if...else

        const duration = 216;

        if (duration < 180) {
            console.log("This song is short!");
        } else {
            console.log("This song isn't short.");
        }

    // if...else if...else

        const duration = 216;

        if (duration > 240) {
            console.log("This song is long!");
        } else if (duration < 180) {
            console.log("This song is short!");
        } else {
            console.log("This song is a normal length.");
        }
        
        
    // (Date Comparisons)
    
        let sweetDreamsLastPlayedAt = new Date("2021-12-12 10:30 AM")
        let cryMeARiverLastPlayedAt = new Date("2021-12-12 11:30 AM")
        console.log(sweetDreamsLastPlayedAt <= cryMeARiverLastPlayedAt)

    ternary operator
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator

        let favorite = true;

        { favorite ? console.log("This song is my favorite!") : console.log("This song is not my favorite!") }

        // or 

        console.log(`This song ${favorite ? 'is' : 'is not'} my favorite!`)

console.log("------------------------");
console.log("⬇️ Activities ⬇️");
console.log("🚨 Comment Out Lecture Code Above Before Starting 🚨");
console.log("💡 Use console.log() To Check Answers 💡");
console.log("------------------------");

// For the activities below, I've ommitted the let/const keywords and replaced
// them with ____. Go ahead and fill them in with the choice you think is appropriate

// 🚧 Activity 1: Using if...else

    // 🚧 "time" will be a random number between 0 and 24
    // const time = Math.ceil(Math.random()*24); // gets number between 0 and 24 and rounds it down 
    // log a message to the console indicating whether "time" is in the AM or PM
    // uncomment the code between the 🚧 🚧 🚧 🚧 🚧 🚧 🚧 🚧 🚧 🚧 🚧 🚧 🚧 🚧 and
    // fill in the ❓ with the proper expression.


    // this line of code generates a random number between 0 and 24 and assigns its value to `time`
    const time = Math.ceil(Math.random()*24);
    // // 🚧 🚧 🚧 🚧 🚧 🚧 🚧 🚧 🚧 🚧 🚧 🚧 🚧 🚧
    // if (❓) {

        console.log(`${time} is in the AM.`)

    In all other cases...
    } else {

        console.log(`${time} is in the PM.`)
///


        if (time < 12) {

            console.log(`${time} is in the AM.`)
   
       // In all other cases...
        } else {
   
            console.log(`${time} is in the PM.`)
   
        }
   
    // }
    // // 🚧 🚧 🚧 🚧 🚧 🚧 🚧 🚧 🚧 🚧 🚧 🚧 🚧 🚧



    // // ✨ BONUS: Try refactoring the above expression using a ternary operator.

    // // ternary version
    

    // // 🚨 Be sure to comment out any code above before proceeding to the next activity.

// 🚧 Activity 2: Using if...else if...else

    // We are given variables today, yesterday, tomorrow, and otherDate

    // Our task is to print:

    // - "This date is in the past" if otherDate is before today.
    // - "This date is in the future" if otherDate is after today.
    // - "This date is today!" if otherDate is today.

    // 1. replace the ____ with `let` or `const` below
    // 2. complete the conditional logic below the variable assignments
    // 3. and then try reassigning otherDate to different values to test your logic
    // to different values to

    // // 🚧 🚧 🚧 🚧 🚧 🚧 🚧 🚧 🚧 🚧 🚧 🚧 🚧 🚧

    // ____ today = new Date();
    // ____ year = today.getFullYear();
    // ____ month = today.getMonth();
    // ____ day = today.getDate();

    // ____ yesterday = new Date(`${year}-${month}-${day-1}`);
    // ____ tomorrow = new Date(`${year}-${month}-${day+1}`);
    // ____ otherDate = yesterday;

    // // 🚧 🚧 🚧 🚧 🚧 🚧 🚧 🚧 🚧 🚧 🚧 🚧 🚧 🚧



    // // 🚨 Format your if...else if...else conditional below
    


    // // 🚧 🚧 🚧 🚧 🚧 🚧 🚧 🚧 🚧 🚧 🚧 🚧 🚧 🚧

    // if (____) {
    //     console.log('This date is in the past')
    // } else if (____) {
    //     console.log('This date is in the future')
    // } else {
    //     console.log('This date is today!')
    // }

    // otherDate = tomorrow;
    
    // if (____) {
    //     console.log('This date is in the past')
    // } else if (____) {
    //     console.log('This date is in the future')
    // } else {
    //     console.log('This date is today!')
    // }

    // // 🚧 🚧 🚧 🚧 🚧 🚧 🚧 🚧 🚧 🚧 🚧 🚧 🚧 🚧
   