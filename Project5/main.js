
let sidebar = document.querySelector('.sidebar');
let body = document.querySelector('.content');
let navbtn = document.querySelector('.nav-btn');

navbtn.onclick = function(){
    $('.sidebar').css('transform','translateX(0px)')
    sidebar.classList.toggle("active");
}
body.onclick = function(){
    $('.sidebar').css('transform','translateX(-300px)')
  
}

