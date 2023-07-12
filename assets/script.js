// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

$(function () {
    // TODO: Add a listener for click events on all save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. 
    
    // HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?

        // create a ".on('click', ___)"
        // create two variables, one for the ID, and one for the content
          //content is from user input value
        // target the save button, save it to the localStorage
        $(".saveBtn").on('click', function(){
            // figure out what block we're in using $(this)
            // seperate specific key in localStorage for each hour - whatever you want to name it
            var key =$(this).parent().attr('id')
            // select the text area to save for the corresponding save button
            var value = $(this).siblings('textarea').val()
            // save the item to local storage when user clicks on the save button
            // efficiently, only save that particular hour, use keyword "this" for function
            localStorage.setItem(key, value)

        })

    // First *******************
    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
    //

        // jquery .children to select children elements as an array
        // document.querySelectorAll('.time-block') // return an array of all time blcok names and can be used for the for loop (jquery)
        // we need to know current hour

        function updateGrid() {

            var allHourBlocks = $('.time-block')
            var currentHour = dayjs().hour(); //maybe format() instead of hour, military time
            allHourBlocks.each(function(){
                // the var is assigned to  whatever THIS container element is that is being targeted with an id, and is splitting the string of the id "hour-x" right at the '-'
                var currentIndex = $(this).attr('id').split('-')[1];


                // CONDITIONAL compare the block hour and the current hour 
                // setAttribute the style based on what day.js returns/is currently ********** use i instead
                    // if current HOUR is LESS THAN, apply future
                    // else if current HOUR is EQUAL to current time, apply present
                    // else current HOUR is MORE THAN, apply past

                if ( currentIndex < currentHour ) {
                    $(this).addClass('past');
                }
                else if ( currentIndex == currentHour ) {
                    $(this).addClass('present');
                } 
                else  {
                    $(this).addClass('future');
                }

            });

            

        }

        updateGrid();

    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    //
        // getItem to check & get the user's OLD input get each content by ID, if the ID has an input/is not null, it will have something in the localStorage
        // for loop starting from hour 9 to hour 18
        for (var i = 9; i < 20; i++) {
        // target the all with id hour-, with looping thru the index, the puts  into the text area
        // seperate specific key in localStorage for each hour - whatever you want to name it
        $('#hour-' + i + ' textarea').val(localStorage.getItem('hour-' + i))
        }

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
  
  