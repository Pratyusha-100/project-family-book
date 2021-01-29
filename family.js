var imgA=["family.png", "man.jpg", "women.jpg", "boy.jpg", "girl.png"];
var imgName = ["Family", "Father", "Mother", "Brother", "Me"];

var i = 0;
function nextSlide(){
    if (i == 5) {
        i = 0;
    }
    document.getElementById("album").src = imgA[i];
    document.getElementById("name").innerHTML = imgName[i];

    i++;
}