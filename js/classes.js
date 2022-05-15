class Sprite {
	// we pass params in an object, this way we don't have to respect the exact order when calling
	constructor({ position, imageSrc }) {
		this.position = position;
		this.height = 150;
		this.width = 50;
		this.image = new Image();
		this.image.src = imageSrc;
	}

	draw() {
		CONTEXT.drawImage(this.image, this.position.x, this.position.y);
	}

	update() {
		this.draw();
	}
}

class Fighter {
	// we pass params in an object, this way we don't have to respect the exact order when calling
	constructor({ 
    position, 
    velocity,
    width, 
    color = "green", 
    health,
    
   }) {
		this.position = position;
		this.velocity = velocity;
		this.height = 150;
		this.width = width;
		this.lastKey;
		this.attackBox = {
			position: this.position,
			width: 100,
			height: 50,
		};
		this.color = color;
		this.isAttacking;
		this.health = health;
    
	}

	draw() {
		CONTEXT.fillStyle = this.color;
		CONTEXT.fillRect(this.position.x, this.position.y, this.width, this.height);
    // attack box
		if (this.isAttacking && lastKey == "ArrowRight") {
			CONTEXT.fillStyle = "red";
			CONTEXT.fillRect(
				this.attackBox.position.x,
				this.attackBox.position.y,
				this.attackBox.width,
				this.attackBox.height
			);
		} else if (this.isAttacking && lastKey == "ArrowLeft") {
			CONTEXT.fillStyle = "red";
			CONTEXT.fillRect(
				this.attackBox.position.x - 50,
				this.attackBox.position.y,
				this.attackBox.width,
				this.attackBox.height
			);
		}
	}

	update() {
		this.draw();
		this.position.x += this.velocity.x;
		this.position.y += this.velocity.y;

		// if Sprite touches the ground, stop velocity = not falling anymore
		if (this.position.y + this.height + this.velocity.y >= CANVAS.height - 52) {
			this.velocity.y = 0;
		} else {
			this.velocity.y += GRAVITY;
		}
	}
	attack() {
		this.isAttacking = true;
		setTimeout(() => {
			this.isAttacking = false;
		}, 100);
	}
}


class Mob {
	// we pass params in an object, this way we don't have to respect the exact order when calling
	constructor({ 
    position, 
    velocity,
    width, 
    health,
    imageSrc
   }) {
		this.position = position;
		this.velocity = velocity;
		this.height = 150;
		this.width = width;
		this.health = health;
    this.image = new Image();
    this.image.src = imageSrc;
	}

	draw() {
		CONTEXT.drawImage(this.image, this.position.x, this.position.y);
	}

	update() {
		this.draw();
		this.position.x += this.velocity.x;
		this.position.y += this.velocity.y;

		// if Sprite touches the ground, stop velocity = not falling anymore
		if (this.position.y + this.height + this.velocity.y >= CANVAS.height - 100) {
			this.velocity.y = 0;
		} else {
			this.velocity.y += GRAVITY;
		}
	}
	
}
