// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

    // each todo is a function
    //additino to the todos: set interval ti update the time throughout the day
    //event listener towards the end of the files
    //function call to start the app



$(function () {
    // TODO: Add a listener for click events on all save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. 
    
    // HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?

        // add event listener for the save buttons

        //$(".saveBtn").on('click', (){

        //})
        //console.log($(this));

        //figure out what block we're in using $(this)
        // key names need to match the key names for getItem localStorage
        // save the item to local storage when user clicks on the save button
            // efficiently, only save that particular hour, use keyword "this" for function



        // use the id as the ley to save the text to the key
        // create a ".on('click', ___)"
        // create two variables, one for the ID, and one for the textContent
          //textContent is from user input value
        // target the save button, save it to the localStorage or 


    // First *******************
    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
    //
    //should be 1 time code

        // jquery .children to select children elements as an array
        //document.querySelectorAll('.time-block') // return an array of all time blcok names and can be used for the for loop (jquery)

        // create a var that will save the current time and use day.js (just the hour) dayjs('hh')
        // LOOP over the time blocks
            // inside the for loop select the .time-block
            
            //for(i = 9; i < 19; i++){
            //document.querySelector('#hour-' + i) //jquery method
            //}
            // CONDITIONAL compare the block hour and the current hour 
                // setAttribute the style based on what day.js returns/is currently
                    // if current HOUR is LESS THAN, apply future
                    // else if current HOUR is EQUAL to current time, apply present
                    // else current HOUR is MORE THAN, apply past
        // use append to attach the Past Present and Future classes to designated boxes

        // bonus: have the time auto refresh every other minute using setInterval
        


    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    //
    //should be 1 time code
        
        // getItem to check & get the user's OLD input get each content by ID, if the ID has an input/is not null, it will have something in the localStorage
            // seperate specific key in localStorage for each hour - whatever you want to name it
            // another for loop starting from hour 9 to hour 18
                // check local storage if !null, display items 
                    //inside the text area [1] of the corresponding hour
                        //use id selector

        // and use the variables assigned to textContent
        // create a for statement ?????


    // TODO: Add code to display the current date in the header of the page.

    // create var for dayjs to geth the curren date (and maybe time)
        function updateCurrentTime(){
    
        var thisDay = dayjs().format('ddd MMM DD, YYYY hh:mm:ss')
            $('#currentDay').text(thisDay) 
        }

        updateCurrentTime;
        setInterval(updateCurrentTime, 1000);

        //select that id and use text.Content to display the date and time
  });
  
  