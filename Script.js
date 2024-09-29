document.getElementById('calculate').addEventListener('click', function) {

}
if (dob) {
    alert('Please Enter a valid date');
    return;
}

var years = today.getFulYear() - dob.getFulYear();
var months = today.getmonths() - dob.getmonths();
var days = today.getdate() - dob.getdate();

if (date)