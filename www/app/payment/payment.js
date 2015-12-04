function isNumberKey(evt){
  var charCode = (evt.which) ? evt.which : event.keyCode
  if (charCode > 31 && (charCode < 48 || charCode > 57))
    return false;
  return true;
};

function yearcard(){
  var years = [];
  currentYear = new Date().getFullYear() - 2000
  for (var i=0; i<11; i++){
  	years.push(i + currentYear);
  }
  return years;
};

var listYears = yearcard();
var select = document.getElementById('YearList');
var fragment = document.createDocumentFragment();
listYears.forEach(function(year, index) {
    var options = document.createElement('option');
    options.innerHTML = year;
    options.value = year;
    fragment.appendChild(options);
});
select.appendChild(fragment);