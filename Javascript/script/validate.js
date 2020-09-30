
//validation of name 
function validatename(name)
{ 
	var letters = /^[A-Za-z]+$/;
	if(name.value.match(letters))
	{
		return true;
	}
	else
	{
		alert('Username must have alphabet characters only');
		uname.focus();
		return false;
	}
}

//Email validation 
function ValidateEmail(email)
{
	var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	if(email.value.match(mailformat))
	{
		return true;
	}
	else
	{
		alert("You have entered an invalid email address!");
		uemail.focus();
		return false;
	}
}

function ValidateBitrhDate(dob){
	var dateformate=/^(0?[1-9]|1[0-2])[\/](0?[1-9]|[1-2][0-9]|3[01])[\/]\d{4}$/
	if(dob.value.match(dobformat))
	{
		return true;
	}
	else
	{
		alert("You have entered an invalid email address!");
		uemail.focus();
		return false;
	}
}

function passwordvalidation(password,max,min)
{
	var password_length = password.value.length;
	if (password_length == 0 ||password_length >= max || password_length < min)
	{
		alert("Password should not be empty / length be between "+max+" to "+min);
		passid.focus();
		return false;
	}
	return true;
}


