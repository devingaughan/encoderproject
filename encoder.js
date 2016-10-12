var code = {
  65: "a",
  66: "b",
  67: "c",
  68: "d",
  69: "e",
  70: "f",
  71: "g",
  72: "h",
  73: "i",
  74: "j",
  75: "k",
  76: "l",
  77: "o",
  78: "m",
  79: "n",
  80: "p",
  81: "q",
  82: "r",
  83: "s",
  84: "t",
  85: "u",
  86: "v",
  87: "w",
  88: "x",
  89: "y",
  90: "z",
  8: "",
}


$("#inputText").keydown(function(e) {
  //var letter = document.getElementById('inputText').value;// takes value in input box
  var key = e.keyCode;
  $("#textArea").append(code[key]);

});
$("input[type='radio']").click(function(e) {
  $("input:checked").prop('checked', true);
  $(this).prop('checked', false);
});
if($("input:checked" == "Heiroglyphics")) {
  var code = {
    65: "<img src='a.gif' alt='A'>",
    66: "<img src='b.gif' alt='B'>",
    67: "<img src='c.gif' alt='C'>",
    68: "<img src='d.gif' alt='D'>",
    69: "<img src='e.gif' alt='E'>",
    70: "<img src='f.gif' alt='F'>",
    71: "<img src='g.gif' alt='G'>",
    72: "<img src='h.gif' alt='H'>",
    73: "<img src='i.gif' alt='I'>",
    74: "<img src='j.gif' alt='J'>",
    75: "<img src='k.gif' alt='K'>",
    76: "<img src='l.gif' alt='L'>",
    77: "<img src='m.gif' alt='M'>",
    78: "<img src='n.gif' alt='N'>",
    79: "<img src='o.gif' alt='O'>",
    80: "<img src='p.gif' alt='P'>",
    81: "<img src='q.gif' alt='Q'>",
    82: "<img src='r.gif' alt='R'>",
    83: "<img src='s.gif' alt='S'>",
    84: "<img src='t.gif' alt='T'>",
    85: "<img src='u.gif' alt='U'>",
    86: "<img src='v.gif' alt='V'>",
    87: "<img src='w.gif' alt='W'>",
    88: "<img src='x.gif' alt='X'>",
    89: "<img src='y.gif' alt='Y'>",
    90: "<img src='z.gif' alt='Z'>",
    8: "",
  }


  $("#inputText").keydown(function(e) {
    //var letter = document.getElementById('inputText').value;// takes value in input box
    var key = e.keyCode;
    $("#textArea").append(code[key]);

});
}
