function checkMe(){
	var str = document.getElementById("textOnly").value;
	const regex = new RegExp('^[A-Za-z]+$');
	if(str == ""){
		document.getElementById("msg").innerHTML = "";
		document.getElementById("msg").style.color = "black";
		return;
	}
	if(regex.test(str)){
		document.getElementById("msg").innerHTML = "Допустимое значение";
		document.getElementById("msg").style.color = "black";
	}else{
		document.getElementById("msg").innerHTML = "В значении должны быть только латинские буквы!";
		document.getElementById("msg").style.color = "red";
	}
}
