//var name;
var names=[];
var names2;
var usertr=$("#nameTR");

/*function userData(){
	var myData = {
		name: document.getElementById("name").value,
		email: document.getElementById("email").value,
		dob: document.getElementById("dob").value,
		password: document.getElementById("password").value,
	};	
 return myData;
}*/
/*document.getElementById("form").addEventListener("submit",(e)=>{
	e.preventDefault();
	create();
	Read();
	document.getElementById("form").reset();
});*/

//validation
function validate(){


	var myData = {
		name: $("#name").val(),
		email: $("#email").val(),
		dob: $("#dob").val(),
		password: $("#password").val()
	};	

	/*if (validatename(myData.name)) 
	{
		alert("Please enter the valid name");
		return false;
	}

	else if (ValidateEmail(myData.email)) 
	{
		alert("Please enter the valid email");
		return false;
	}

	else if (ValidateBitrhDate(myData.dob)) 
	{
		alert("Please enter the Birth Date");
		return false;
	}

	else if (passwordvalidation(myData.password,8,16)) 
	{
		alert("Please enter the valid email");
		return false;
	}*/
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

	if (myData.name==="") {
		alert("Enter the name");
		return false;
	}
	if ((myData.email==="") || (!mailformat.test(myData.email))) {
		console.log((mailformat.test(myData.email)));
		alert("Enter the Email");
		return false;
	}
	 if (myData.dob==="") {
		alert("Enter the Date of Birth");
		return false;
	}
	
	if ((myData.password==="")||(myData.password.length<8)) {
		alert("Enter the Password must be greater than 8 length");
		return false;
	}
	
		create(myData);
		Read();
		return true;
	
}


//create the function 
function create(myData){
	//let userData= userData();
	console.log(myData);
	let storage= JSON.parse(localStorage.getItem("names"));
	//var name = document.getElementById("name").value;
	/*if (myData==null) {
		alert("write the name");
	}else{*/
	if(storage!=null){
		names=JSON.parse(localStorage.getItem("names"));
	}/*else{
		//names=JSON.parse(localStorage.getItem("names"));
		//names.push(myData);
		localStorage.setItem("names",JSON.stringify(names));
		}*/
	//}
	names.push(myData);
	localStorage.setItem("names",JSON.stringify(names));
	console.log(myData);
}

function Read(){
	usertr.innerHTML='';
	names2=JSON.parse(localStorage.getItem("names"));
	if (names2==null) {
		usertr.html(`
		<tr>
		<th class="space">#</th>
		<th class="space">NAME</th>
			<th class="space">Email</th>
			<th class="space">DOB</th>
			<th class="space">Password</th>
			<th class="space">OPERATIONS</th>
		</tr>
		`)
		/*usertr.innerHTML`
		<tr>
		<th class="space">#</th>
		<th class="space">NAME</th>
			<th class="space">Email</th>
			<th class="space">DOB</th>
			<th class="space">Password</th>
			<th class="space">OPERATIONS</th>
		</tr>
		`*/	 
	}else{
		usertr.html(`
		<tr>
			<th class="space">#</th>
			<th class="space">NAME</th>
			<th class="space">Email</th>
			<th class="space">DOB</th>
			<th class="space">Password</th>
			<th class="space">OPERATIONS</th>
		</tr>
		`	 )
		for (var i = 0; i<names2.length; i++){
			usertr.append(`
				<tr>
					<td class="space">${i+1}</td>
					<td class="space">${names2[i].name}</td>
					<td class="space">${names2[i].email}</td>
					<td class="space">${names2[i].dob}</td>
					<td class="space">${names2[i].password}</td>
					<td class="space">
						<button Onclick="Update(${i})">Edit</button>
						<button Onclick="Delete(${i})">Delete</button>
					</td>
				</tr>
			`)	
		}
	}
}
function Update(i3){
	let names4= JSON.parse(localStorage.getItem("names"));
	usertr.innerHTML='';
	usertr.html(`
		<tr>
			<th class="space">#</th>
			<th class="space">NAME</th>
			<th class="space">Email</th>
			<th class="space">DOB</th>
			<th class="space">Password</th>
			<th class="space">OPERATIONS</th>
		</tr>
		`)
	for (var i = 0; i < names4.length; i++) {
		if (i==i3) {
			usertr.append(`
			<tr>
				<td class="space">${i+1}</td>
				<td class="space"><input id="newName" placeholder="${names4[i].name}"></input></td>
				<td class="space"><input id="newName" placeholder="${names4[i].email}"></input></td>
				<td class="space"><input id="newName" placeholder="${names4[i].dob}"></input></td>
				<td class="space"><input id="newName" placeholder="${names4[i].password}"></input></td>
				<td class="space">
					<button Onclick="Update2(${i})">Update</button>
					<button Onclick="Read()">Cancel</button>
				</td>
			</tr>
			`)
		}else{
			usertr.append(`
				<tr>
					<td class="space">${i+1}</td>
					<td class="space">${names2[i].name}</td>
					<td class="space">${names2[i].email}</td>
					<td class="space">${names2[i].dob}</td>
					<td class="space">${names2[i].password}</td>
					<td class="space">
						<button Onclick="Update2(${i})">Edit</button>
						<button Onclick="Delete(${i})>Delete</button>
					</td>
				</tr>
			`)
		}
	}
}

function Update2(i){
	let names5=JSON.parse(localStorage.getItem("names"));
	names5[i]=$("#newName").val();
	if (names5[i]=='') {
		alert("write the name");
	}else{
		localStorage.setItem("names", JSON.stringify(names5));
		Read();
	}
	Read();
}

function Delete(i2){
	let names3= JSON.parse(localStorage.getItem("names"));
	names3.splice(i2,1);
	localStorage.setItem("names", JSON.stringify(names3));
	Read();

}