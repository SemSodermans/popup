//zorgt voor een delay van 2 seconden
window.onload = function () { setTimeout(showPopup, 2000) };


function showPopup() {
    //element oproepen
    var popup = document.getElementById("popup");
    //het kruisje oproepen
    var span = document.getElementsByClassName("close")[0];
    //teller toevoegen zodat de popup maar 1 keer verschijnt
    var count = 0;
    window.onscroll = function () {
        if (count == 0) {
            popup.style.display = "block";
            count++;

        }
    }

    //kruisje als sluit gebruiken
    span.onclick = function () {
        popup.style.display = "none";
        count++;
    }

    //homescherm als sluit gebruiken
    window.onclick = function (event) {
        if (event.target == popup) {
            popup.style.display = "none";
            count++;
        }
    }
};
