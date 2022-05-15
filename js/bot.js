function botMapLimit() {
	let botPosition = MOB.position.x;
	if (botPosition < 80) {
		MOB.velocity.x = 10;
	} else if (botPosition > 800) {
		MOB.velocity.x = -10;
	}
}

function botGen() {
	let dice = Math.floor(Math.random() * 6);
	switch (dice) {
        case 1 :
            MOB.position.x = 1200;
            MOB.health = 50;
            break;
        case 2 :
            MOB.position.x = -200;  
            MOB.health = 50; 
            break;
        case 3 :
            MOB.position.x = 200; 
            MOB.position.y = -1000;
            MOB.health = 50;
            break;
        case 4 :
            MOB.position.x = 450; 
            MOB.position.y = -800;
            MOB.health = 50;
            break; 
        case 5 :
            MOB.position.x = 800; 
            MOB.position.y = -600;
            MOB.health = 50;
            break;
        case 6 :
            MOB.position.x = 950; 
            MOB.position.y = -700;
            MOB.health = 50;
            break;
    }
}
