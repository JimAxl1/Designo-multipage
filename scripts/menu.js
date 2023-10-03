var btn_openMenu = document.getElementById("open_menu");
var btn_closeMenu = document.getElementById("close_menu");
var y = document.getElementById("modal")
btn_openMenu.onclick = function(){
  y.style.display = "block";
  btn_openMenu.style.display = "none"
  btn_closeMenu.style.display = "block"
  document.body.style.overflow = "hidden"
}
btn_closeMenu.onclick = function(){
  y.style.display = "none";
  btn_closeMenu.style.display = "none"
  btn_openMenu.style.display = "block"
  document.body.style.overflow = "visible"
}