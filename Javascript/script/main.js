//var name;
var names=[];
var names2;
var usertr=document.getElementById("nameTR");

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
		name: document.getElementById("name").value,
		email: document.getElementById("email").value,
		dob: document.getElementById("dob").value,
		password: document.getElementById("password").value
	};	

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
		usertr.innerHTML+=`
		<tr>
		<th class="space">#</th>
		storage
		<th class="space">NAME</th>
			<th class="space">Email</th>
			<th class="space">DOB</th>
			<th class="space">Password</th>
			<th class="space">OPERATIONS</th>
		</tr>
		`	 
	}else{
		usertr.innerHTML+=`
		<tr>
			<th class="space">#</th>
			<th class="space">NAME</th>
			<th class="space">Email</th>
			<th class="space">DOB</th>
			<th class="space">Password</th>
			<th class="space">OPERATIONS</th>
		</tr>
		`	 
		for (var i = 0; i<names2.length; i++){
			usertr.innerHTML+=`
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
			`	 	
		}
	}
}
function Update(i3){
	let names4= JSON.parse(localStorage.getItem("names"));
	usertr.innerHTML='';
	usertr.innerHTML+=`
		<tr>
			<th class="space">#</th>
			<th class="space">NAME</th>
			<th class="space">Email</th>
			<th class="space">DOB</th>
			<th class="space">Password</th>
			<th class="space">OPERATIONS</th>
		</tr>
		`	 
	for (var i = 0; i < names4.length; i++) {
		if (i==i3) {
			usertr.innerHTML+=`
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
			`
		}else{
			usertr.innerHTML+=`
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
			`	 	
		}
	}
}

function Update2(i){
	let names5=JSON.parse(localStorage.getItem("names"));
	names5[i]=document.getElementById("newName").value;
	if (names5[i]=='') {
		alert("write the name");
	}else{
		localStorage.setItem("names", JSON.stringify(names5));
		Read();
	}
}

function Delete(i2){
	let names3= JSON.parse(localStorage.getItem("names"));
	names3.splice(i2,1);
	localStorage.setItem("names", JSON.stringify(names3));
	Read();

}