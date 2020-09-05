function ExecuteScript(strId)
{
  switch (strId)
  {
      case "60NWbNvWA0H":
        Script1();
        break;
      case "6dfbx48xpQf":
        Script2();
        break;
      case "6I2PTiB9Z3L":
        Script3();
        break;
      case "61wOmveAqjq":
        Script4();
        break;
      case "5zkoCTB3s1N":
        Script5();
        break;
      case "6BXhExZNz0i":
        Script6();
        break;
      case "6IZaFUNeu7K":
        Script7();
        break;
      case "5vkkunnrA4I":
        Script8();
        break;
      case "6IAwkXAq5XP":
        Script9();
        break;
      case "6jhWdadjZTI":
        Script10();
        break;
  }
}

function Script1()
{
  $("#tab-customlink").hide();
}

function Script2()
{
  var player = GetPlayer();
var email="nsdd_cne@ksmc.med.sa";
var subject=player.GetVar("Name");
var body_start="Dear Instructor,";
var mailto_link='mailto:'+email+'?subject='+subject+'&body='+body_start;
win=window.open(mailto_link,'emailWin');
}

function Script3()
{
  $("#tab-customlink").hide();
}

function Script4()
{
  $("#tab-customlink").hide();
}

function Script5()
{
  $("#tab-customlink").hide();
}

function Script6()
{
  $("#tab-customlink").hide();
}

function Script7()
{
  $("#tab-customlink").hide();
}

function Script8()
{
  var currentTime = new Date()
var month = currentTime.getMonth() + 1
var day = currentTime.getDate()
var year = currentTime.getFullYear()
var dateString=month + "/" + day + "/" + year

var player = GetPlayer();
player.SetVar("SystemDate",dateString);
}

function Script9()
{
  $("#tab-customlink").show();
}

function Script10()
{
  window.print();
}

