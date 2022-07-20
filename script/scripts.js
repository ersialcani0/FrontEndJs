$(document).ready(function () {
  $("#asi,#asia").click(function () {
    $("#asia").show();
    $("#europe,#antartica,#south,#north,#africa,#australia,#europe1").hide();
  });
});
$(document).ready(function () {
  $("#nor,#nort").click(function () {
    $("#north").show();
    $("#europe,#asia,#antartica,#south,#africa,#australia,#europe1").hide();
  });
});
$(document).ready(function () {
  $("#sou,#sout").click(function () {
    $("#south").show();
    $("#europe,#asia,#antartica,#north,#africa,#australia,#europe1").hide();
  });
});
$(document).ready(function () {
  $("#eur,#euro").click(function () {
    $("#europe,#europe1").show();
    $("#asia,#antartica,#south,#north,#africa,#australia").hide();
  });
});
$(document).ready(function () {
  $("#afr,#afri").click(function () {
    $("#africa").show();
    $("#europe,#asia,#antartica,#south,#north,#australia,#europe1").hide();
  });
});
$(document).ready(function () {
  $("#aus,#aust").click(function () {
    $("#australia").show();
    $("#europe,#asia,#antartica,#south,#north,#africa,#europe1").hide();
  });
});
$(document).ready(function () {
  $("#ant,#anta").click(function () {
    $("#antartica").show();
    $("#europe,#asia,#south,#north,#africa,#australia,#europe1").hide();
  });
});
$(document).ready(function () {
  $("#all,#alll").click(function () {
    $(
      "#europe,#asia,#antartica,#south,#north,#africa,#australia,#europe1"
    ).show();
  });
});


function validation() {
  if (document.Form.Your_name.value == "") {
    alert("Please enter your name!");
    document.Form.Your_name.focus();
    return false;
  }
  if (document.Form.Your_email.value == "") {
    alert("Please enter your Email!");
    document.Form.Your_email.focus();
    return false;
  }
  if (document.Form.password.value == "") {
    alert("Please enter your Password!");
    document.Form.password.focus();
    return false;
  }
  if (document.Form.message.value == "") {
    alert("Please enter your Comment!");
    document.Form.message.focus();
    return false;
  }

  $("#p-id").removeClass("hide");
  
  return false;
  
}
