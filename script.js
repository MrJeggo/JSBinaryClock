


function startTime() {
  
  const today = new Date();

  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  
  // regular time
  let time = ("00" + h).slice(-2) + ":" + ("00" + m).slice(-2) + ":" + ("00" + s).slice(-2);
  document.getElementById('regular').innerHTML = time;

  // binary
  document.getElementById('hours').innerHTML = h.toString(2).padStart(8, '0');
  document.getElementById('mins').innerHTML = m.toString(2).padStart(8, '0');
  document.getElementById('secs').innerHTML = s.toString(2).padStart(8, '0');
  
  // hex
  document.getElementById('hex').innerHTML = h.toString(16).toUpperCase().padStart(2, '0') + ' ' + m.toString(16).toUpperCase().padStart(2, '0') + ' ' + s.toString(16).toUpperCase().padStart(2, '0');

  
  setTimeout(startTime, 1000);
}
