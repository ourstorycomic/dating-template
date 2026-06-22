// xu ly cac man hinh cua web to tinh

var selectedDrink = null;
var selectedTime = null;
var no_count = 0; // so lan bam nut "chua biet"

function go(n){
  var allScreens = document.querySelectorAll('.box1');
  for(var i = 0; i < allScreens.length; i++){
    allScreens[i].classList.remove('active');
  }

  var target;
  if(n == 'shy'){
    target = document.getElementById('s_shy');
  }else{
    target = document.getElementById('s' + n);
  }

  if(!target) return;

  if(n == 5){
    buildFinal();
  }

  target.classList.add('active');
}

function sayYes(){
  go(3);
}

// nut "chua biet" se chay tron khi bam vao
function runAway(){
  no_count = no_count + 1;
  var btn = document.getElementById('no-btn');

  if(no_count >= 3){
    go('shy');
    return;
  }

  var app = document.getElementById('app');
  var bounds = app.getBoundingClientRect();

  var newX = Math.random() * (bounds.width - 130);
  var newY = Math.random() * (bounds.height - 60);

  btn.style.position = 'fixed';
  btn.style.left = newX + 'px';
  btn.style.top = newY + 'px';

  var mess = ['Bạn ơi...', 'nghĩ lại đi nè', 'mình hồi hộp lắm rồi'];
  btn.textContent = mess[no_count-1] || 'oke vậy';
}

function pick(el, type){
  var group = document.querySelectorAll('.o_chon[data-group="' + type + '"]');
  group.forEach(function(b){
    b.classList.remove('chon_roi');
  })
  el.classList.add('chon_roi');

  var label = el.querySelector('.ten').textContent.trim();

  if(type == 'drink'){
    selectedDrink = label;
    document.getElementById('drink-next').style.display = 'inline-block';
  }else{
    selectedTime = label;
    document.getElementById('time-next').style.display='inline-block';
  }
}

function buildFinal(){
  var msg = document.getElementById('final-msg');
  var tags = document.getElementById('tag-row');

  msg.textContent = 'Uống ' + (selectedDrink || 'gì đó') + ' vào ' + (selectedTime || 'cuối tuần') + ' nha';

  tags.innerHTML = '';
  if(selectedDrink){
    tags.innerHTML += '<span class="tag">' + selectedDrink + '</span>';
  }
  if(selectedTime){
    tags.innerHTML += '<span class="tag">' + selectedTime + '</span>';
  }
}
