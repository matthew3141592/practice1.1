let navBarOpen = false
function navBarToggle() {
    if (navBarOpen == false) {
    document.getElementById('navBar').style.transitionProperty = 'opacity'
    document.getElementById('navBar').style.transitionDuration = '0.5s'
    document.getElementById('navBar').style.opacity = '1.0'
    navBarOpen = true
    }
    else if (navBarOpen == true) {
        document.getElementById('navBar').style.transitionProperty = 'opacity'
        document.getElementById('navBar').style.transitionDuration = '0.5s'
        document.getElementById('navBar').style.opacity = '0'
        navBarOpen = false
    }
}