
var navbox;
function extend(){
    if (navbox){
        document.getElementById("navbox").style.display="none";
        navbox = false;
    } else {
        document.getElementById("navbox").style.display="flex";
        navbox = true;
    }
}
function close_nav(){
    document.getElementById("navbox").style.display="none";
    navbox = false;
}


function close_program(){
    document.getElementById("program-display").src="pages/blank.html";
    document.getElementById("program").style.display="none";
    // for nav icons
    document.getElementById('credits').classList.remove('active-program');
    document.getElementById('aboutme').classList.remove('active-program');
    // non docked
    document.getElementById('aboutme').style.display = "none";
}

function open_program(program){
    close_program()
    let progrm = "pages/"+ program + ".html"
    if (program === 'aboutme'){
        var pathlogo = "img/icons/aboutme.png";
    } else{
        var pathlogo = "img/icons/"+program+".svg"
    }
    
    document.getElementById("program-display").src=progrm;
    document.getElementById("program-logo").src= pathlogo;
    document.getElementById("program-title").textContent=program;
    document.getElementById("program").style.display="flex";
    document.getElementById(program).classList.add('active-program');
    document.getElementById(program).style.display= "block";
    close_nav()
}