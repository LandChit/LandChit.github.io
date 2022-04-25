



function hide_all(){
    document.getElementById("AM").style.display = "none";
    document.getElementById("TS").style.display = "none";
    document.getElementById("AS").style.display = "none";
    document.getElementById("SC").style.display = "none";

}

function program(id) {

    hide_all()
    active = null

    if (id === 0) {
        document.getElementById("AM").style.display = "flex";


    } else if (id === 1) {
        document.getElementById("TS").style.display = "flex";


    } else if (id === 2) {
        document.getElementById("AS").style.display = "flex";


    } else if (id === 3) {
        document.getElementById("SC").style.display = "flex";

    }
}
