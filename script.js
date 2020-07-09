function clock(){
  let hours = document.getElementById('hr');
  let minutes = document.getElementById('minutes');
  let div = document.querySelector('div');
  let h1 = document.querySelector('h1');
  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let d = new Date().getDate();
  let month = new Date().getMonth();
  let year = new Date().getFullYear();

  hours.innerHTML = h + ' : ';
  minutes.innerHTML = m;
  h1.innerHTML = d + '.' + month + '.' + year;
  var interval = setInterval(clock, 1000);
  if(m <= 9){
    minutes.innerHTML = '0' + m;
  } 
}
clock();
