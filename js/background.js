

// on launch -- initial wallpaper
document.body.style.backgroundImage = "url('../img/backgrounds/sunset_tree.jpg')";



function setWallpaper(wallpaper){
    let path = "../img/backgrounds/"+wallpaper+".jpg";
    // document.getElementById('preview-window').src=path;
    document.body.style.backgroundImage = "url('"+path+"')";
}

var hhh;
function hello(){
    hhh = "asdasd"
}
function prnt(){
    console.log(hhh)
}

setWallpaper("forrest_mist")



