// Function to update the colors of time blocks based on the current hour
function hourchanging() {
  // Get the current hour using dayjs library
  var timenow = dayjs().hour();

  // Iterate through each time block element with class 'time-block'
  $(".time-block").each(function() {
      // Extract the hour from the time block's ID
      var changecolors = parseInt($(this).attr("id").split("-")[1]);
      
      // Compare the hour to the current hour and apply appropriate class
      if (changecolors < timenow) {
          $(this).addClass("past").removeClass("present future");
      } else if (changecolors === timenow) {
          $(this).removeClass("past future").addClass("present");
      } else {
          $(this).removeClass("past present").addClass("future");
      }
  });
}

// Set the current day text using dayjs
$("#currentDay").text(dayjs().format("dddd, MMMM D, YYYY"));

// Document ready function
$(document).ready(function(){
  // Save button click event
  $('.saveBtn').on("click", function(){ 
    // Get the value and time associated with the clicked save button
    var value = $(this).siblings('.description').val(); 
    var time = $(this).parent().attr('id');

    // Store the value in local storage with the associated time
    localStorage.setItem(time, value);

    // Display a notification
    $('.notification').addClass('show');
  });
});

// Function to scroll to the top of the page
function scrollToTop() {
  window.scrollTo({
      top: 0,
      behavior: 'smooth'
  });
}

// Scroll event listener to display 'scroll to top' button
window.onscroll = function() {
  var scrollBtn = document.getElementById('scrollToTopBtn');
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      scrollBtn.style.display = 'block';
  } else {
      scrollBtn.style.display = 'none';
  }
};
// Set description field values from local storage for each hour
// Note: The following code can be optimized using a loop, but it's left as is for clarity
$('#hour-0 .description').val(localStorage.getItem('hour-0'));
$('#hour-1 .description').val(localStorage.getItem('hour-1'));
$('#hour-2 .description').val(localStorage.getItem('hour-2'));
$('#hour-3 .description').val(localStorage.getItem('hour-4'));
$('#hour-5 .description').val(localStorage.getItem('hour-5'));
$('#hour-6 .description').val(localStorage.getItem('hour-6'));
$('#hour-7 .description').val(localStorage.getItem('hour-7'));
$('#hour-8 .description').val(localStorage.getItem('hour-8'));
$('#hour-9 .description').val(localStorage.getItem('hour-9'));
$('#hour-10 .description').val(localStorage.getItem('hour-10'));
$('#hour-11 .description').val(localStorage.getItem('hour-11'));
$('#hour-12 .description').val(localStorage.getItem('hour-12'));
$('#hour-13 .description').val(localStorage.getItem('hour-13'));
$('#hour-14 .description').val(localStorage.getItem('hour-14'));
$('#hour-15 .description').val(localStorage.getItem('hour-15'));
$('#hour-16 .description').val(localStorage.getItem('hour-16'));
$('#hour-17 .description').val(localStorage.getItem('hour-17'));
$('#hour-18 .description').val(localStorage.getItem('hour-18'));
$('#hour-19 .description').val(localStorage.getItem('hour-19'));
$('#hour-20 .description').val(localStorage.getItem('hour-20'));
$('#hour-21 .description').val(localStorage.getItem('hour-21'));
$('#hour-22 .description').val(localStorage.getItem('hour-22'));
$('#hour-23 .description').val(localStorage.getItem('hour-23'));


// Call the hourchanging function to initially set the colors
hourchanging();
