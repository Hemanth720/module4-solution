var names = new Array();
names[0] ="Hemanth";
names[1] ="Spandana";
names[2] ="manesh";
names[3] ="vamshi";
names[4] ="Yaakov";
names[5] ="John";
names[6] ="jim";
names[7] ="anil";
names[8] ="pramod";
names[9] ="suresh";

for(var i=0; i<names.length; i++){
    if(names[i].charAt(0)==='J'|| names[i].charAt(0)==='j'){
        console.log("Goodbye "+ names[i])
	}
	else{
		console.log("Hello "+ names[i])
	}
}