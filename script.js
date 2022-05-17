// language switcher
function clickFunction(){
    let checkBox = document.getElementById("check-btn")
    let en = document.getElementById("english");
    let id = document.getElementById("indonesia");

    if(checkBox.checked == true){
        en.style.display = "none";
        id.style.display = "block";
    } else{
        en.style.display = "block";
        id.style.display = "none";
    }
}