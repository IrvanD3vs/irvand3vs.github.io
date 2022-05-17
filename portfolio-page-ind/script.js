function veFunction(){
    let veBtn = document.getElementById("ve-btn");
    let ve = document.getElementById("video-editing");
    let gd = document.getElementById("graphic-design");

    if(veBtn.onclick){
        ve.style.display = "block";
        gd.style.display = "none";
    }
}

function gdFunction(){
    let gdBtn = document.getElementById("gd-btn");
    let ve = document.getElementById("video-editing");
    let gd = document.getElementById("graphic-design");

    if(gdBtn.onclick){
        ve.style.display = "none";
        gd.style.display = "block";
    }
}