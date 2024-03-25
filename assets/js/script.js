// Enter an event, then save to local storage 

var todayDate = moment().format('dddd, MMMM Do');
$("#currentDay").html(todayDate);

// variable for when saved button is pushed
var saveBtn = $(".saveBtn");


// function for description block colors  (past present future)
function timeBlockColor() {
    var hour = moment().hour();
    $(".time-block").each(function() {
        var timeNow = parseInt($(this).attr("id").split("hour")[1]);

        if (hour < timeNow) {
            $(this).addClass('future').removeClass("past present");
        }
        else if (hour > timeNow) {
            $(this).addClass('past').removeClass("present future");
        }
        else if (hour === timeNow) {
            $(this).addClass('present').removeClass("past future")
        }
    })
};
timeBlockColor();


// Save button will save what's typed in description in local storage
saveBtn.on("click", function() {
    var timeDescription = $(this).siblings(".hour").text();
    var descriptionText = $(this).siblings(".description").val();
    localStorage.setItem(timeDescription, descriptionText);
});

// retrieve
function getDescription() {
    $(".hour").each(function() {
        var timeNow = $(this).text();
        var planDescription = localStorage.getItem(timeNow);

        if(planDescription !== null) {
            $(this).siblings(".description").val(planDescription);
        }
    });
}
getDescription();