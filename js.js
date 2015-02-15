// Напишете игра, която показва заглавие на световноизвестен филм, но във всяка дума да има до 50% липсваши букви на случаен принцип всеки път. Ако думата е от две букви, то скритата буква трябва да е първата. Допълнително трябва да бъдат изписани имената на актьори от филма.

// За да спечели играчът трябва да познае заглавието на филма с не повече от 3 опита в рамките на минута.

// Например:

// по___ит_л_т_ _а и__ез_ал__ ки__т
// Харисън Форд
// Отговор: Похитителите на изчезналия кивот


	
	//	the timing function
	function timing()
	{
		setTimeout(function() {alert("The time is out!"); }, 60000);
	}

	//	the function for checking the film
	function checking()
	{
		var myanswer = document.getElementById("textfield").value;
		var rightanswer = "The Great Gatsby";
		
		if ( myanswer == rightanswer )
		{
			alert("Correct answer!");
		}
		else 
		{
			alert("Wrong answer!");
		}
			
	}
	
	//	the function for writing the help
	function thequestion()
	{
		document.getElementById("question").innerHTML = "The Great Gatsby";
	}
	
	//	spliting the right answer into a different objects -- this is not finished!!!!!
	function splitting() 
	{
    var rightanswer = "The Great Gatsby";
    var thefilm = str.split(' ');

	var firstword = res[0];		//	first word

	var flength = firstword.length;
	for( var i = 0 ; i < flength; i++)
	{
			
	}
	
	var secondtword = res[1];		//	second word



	var thirdword = res[2];		//	third word
	}	
	
	//	randomizing	--	not putted in usage
	function randomize()
	{
		var rightanswer = "The Great Gatsby";
		var riglength = rightanswer.length;
		document.write(Math.floor(Math.random() * riglength) + 1);
	}
	
