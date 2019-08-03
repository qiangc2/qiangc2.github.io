
function changeStep(move) {
  $(".step-link").toggleClass("active", false);
  $("#" + move).toggleClass("active", true);
}

function changeAnnotation(move) {
  $(".annotation-step").hide();
  $("#" + move + "-annotation").delay(300).fadeIn(500);
}

$(document).ready(function() {
  $("a.step-link").click(function(e) {
    var move = $(this).attr('id');
    changeStep(move);
    changeAnnotation(move);
    return false;
  });
});
