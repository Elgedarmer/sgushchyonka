if (document.addEventListener) {
    document.addEventListener("DOMContentLoaded", function() {
        loaded();
    });
} else if (document.attachEvent) {
    document.attachEvent("onreadystatechange", function() {
        loaded();
    });
}

function loaded() {

    setInterval(loop, 1000);

}

var x = 0;

var titleText = [ "SpY", "c4tk", "Elgedarmer", "My_SqU", "Work-Hard", "Sleep less","Squshenka" ];

function loop() {

    document.getElementsByTagName("title")[0].innerHTML = titleText[x++%titleText.length];

}
