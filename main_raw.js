$(function() {
  prettyPrint();
});

function about() {
  if ($("#btn-about").hasClass("highlighted")) {
    closeTab("about");
  } else {
    if ($("#btn-contact").hasClass("highlighted")) {
      closeTab("contact");
    }
    if ($("#btn-connect").hasClass("highlighted")) {
      closeTab("connect");
    }
    openTab("about");
  }
}

function contact() {
  if ($("#btn-contact").hasClass("highlighted")) {
    closeTab("contact");
  } else {
    if ($("#btn-about").hasClass("highlighted")) {
      closeTab("about");
    }
    if ($("#btn-connect").hasClass("highlighted")) {
      closeTab("connect");
    }
    openTab("contact");
  }
}

function connect() {
  if ($("#btn-connect").hasClass("highlighted")) {
    closeTab("connect");
  } else {
    if ($("#btn-about").hasClass("highlighted")) {
      closeTab("about");
    }
    if ($("#btn-contact").hasClass("highlighted")) {
      closeTab("contact");
    }
    openTab("connect");
  }
}

function openTab(name) {
  $("#headline").animate({"top": "-=32%"}, "slow");
  $("#btn-" + name).addClass("highlighted");
  $("#" + name).delay("slow").fadeIn("slow");
}

function closeTab(name) {
  $("#" + name).fadeOut("slow");
  $("#btn-" + name).delay("slow").removeClass("highlighted");
  $("#headline").animate({"top": "+=32%"}, "slow");
}
