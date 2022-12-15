const switchers = [...document.querySelectorAll('.switcher')]

switchers.forEach(item => {
	item.addEventListener('click', function() {
		switchers.forEach(item => item.parentElement.classList.remove('is-active'))
		this.parentElement.classList.add('is-active')
	})
})


var loading = function(e) {
    e.preventDefault();
    e.stopPropagation();
    e.target.classList.add('loading');
    e.target.setAttribute('disabled','disabled');
    setTimeout(function(){
      e.target.classList.remove('loading');
      e.target.removeAttribute('disabled');
    },1500);
  };
  
  var btns = document.querySelectorAll('button');
  for (var i=btns.length-1;i>=0;i--) {
    btns[i].addEventListener('click',loading);
  }

// This code will check if the user has entered the correct login credentials

// Get username and password from the form
const username = document.getElementById('username').value;
const password = document.getElementById('password').value;

// Check if the username and password match
if(username == 'shoewear@gmail.com' && password == '1234') {
	// If they match, log the user in
	alert('Login successful!');
	window.location.href = 'admin\admin.html';
}
else {
	// If they don't match, display an error message
	alert('Incorrect username or password');
}
  