
var htmlMenu = [];
htmlMenu[0] = "<div id='teste'>BOA TARDE FAMILIA</div> <input id='press1' type='button' onclick='sumir()' value='Sumir'> <input id='press2' type='button' onclick='ver()' value='Ver'>";
htmlMenu[1] = '\n#teste{background-color:lime;\ntext-align: center;\n} \n';
htmlMenu[2] = "function sumir(){ document.getElementById('teste').style.visibility='hidden'}; function ver(){ document.getElementById('teste').style.visibility='visible'};";


function editor() {
  var html = document.getElementById("html");
  var css = document.getElementById("css");
  var js = document.getElementById("js");
  var code = document.getElementById("code").contentWindow.document;

  document.body.onload = function () {
    code.open();
    code.writeln(
      "<style>" +
      cssEditor.getValue() +
      "</style>" +
      "<script>" +
      jsEditor.getValue() +
      "</script>" +
      htmlEditor.getValue()
    );
    code.close();
  };

  document.getElementById('press').onclick = function () {

    code.open();
    code.writeln(
      "<style>" +
      cssEditor.getValue(cssEditor.setValue(cssEditor.getValue() +
        htmlMenu[1])) +
      "</style>" +
      "<script>" +
      jsEditor.getValue(jsEditor.setValue(jsEditor.getValue() +
        htmlMenu[2])) +
      "</script>" +
      htmlEditor.getValue(htmlEditor.setValue(htmlEditor.getValue() +
        htmlMenu[0]))
    );
    code.close();
  };

  document.body.onkeyup = function () {
    code.open();
    code.writeln(
      "<style>" +
      cssEditor.getValue() +
      "</style>" +
      "<script>" +
      jsEditor.getValue() +
      "</script>" +
      htmlEditor.getValue()
    );
    code.close();
  };
}

editor();
