function display_c() {
    var refresh = 1000; // Refresh rate in milli seconds
    mytime = setTimeout('display_ct()', refresh)
}

function display_ct() {
    var x = new Date()
    document.getElementById('datetime').innerHTML = x.toLocaleTimeString([], {weekday:'short',day:'numeric',month:'short',hour: '2-digit', minute: '2-digit' });
    display_c();
}