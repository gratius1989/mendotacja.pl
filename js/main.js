$(document).ready(function() {
  $(".sub-btn button").on("click", function() {
    $(this).parent().parent().next().stop().slideToggle();
    $(this).text(function(i, text) {
      return text === "rozwiń" ? "zwiń" : "rozwiń";
    });
  });

  var bTitle = "";
  var publishing = "";
  var bSrc;
  var $this;
  var subjectHead;
  var subBookOn;

  $(".on").on("click", function() {
    $this = $(this);
    $this.parent().parent().prev().find(".btn").trigger("click");
    $this.parent().prev().addClass("bTop");

    $this.parent().find(".on").find(".book-overlay p").text("kliknij, aby wybrać tę pozycję");

    $this.parent().find(".on").removeClass("on-active");
    $this.parents(".subject-item").find(".sub-price").show();
    $this.parents(".subject-item").find(".sub-quant").show();

    $this.addClass("on-active");
    if ($this.hasClass("on-active")) {
      $this.find(".book-overlay p").text("kliknij, aby anulować wybór");
    }


    $this.parent().find(".on").find(".book-overlay img").attr("src", "img/choice.png");
    $this.find(".book-overlay img").attr("src", "img/choice-on.png");
    bTitle = $this.find(".book-title").text();
    bSrc = $this.find(".book-img img").attr("src");
    publishing = $this.find(".book-info").find(".publishing").text();

    subjectHead = $this.parent().parent().prev();
    subjectHead.css({
      "background-color": "#fff"
    });
    subjectHead.find(".b-placeholder").hide();
    subjectHead.find(".sub-book-on").show();
    subBookOn = $this.parent().parent().prev().find(".sub-book-on");
    subBookOn.find("img").attr("src", bSrc);
    subBookOn.find("strong").text(bTitle);
    subBookOn.find("span").text(publishing);


  });

  var stud;
  var division;
  var totalScore;

  $(".count").on("click", function() {
    stud = $(".quantity-s").val();
    division = $(".quantity-d").val();
    totalScore = stud * division;
    $(".totalScore").text(totalScore);
  });


  // 
  var listValid;
  $(".btn-save").on("click", function() {
    listValid = $(this).prev().val();
    if (listValid == "") {
      $(this).prev().css({
        "outline": "2px solid red"
      });
      $(this).prev().attr("placeholder", "Wypełnij pole");
    } else {
      $(this).prev().css({
        "outline": "none"
      });
    }
  });

  $(".send-form").on("click", function(e) {
    e.preventDefault()
    $(this).siblings().each(function() {
      var formValid = $(this).val();
      if (formValid == "") {
        $(this).css({
          "outline": "2px solid red"
        });
        $(this).attr("placeholder", "Wypełnij pole");
      } else {
        $(this).css({
          "outline": "none"
        });
      }
    });
  });

});