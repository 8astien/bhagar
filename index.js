// General CONST
const CANVAS = document.querySelector("canvas");
const CONTEXT = CANVAS.getContext("2d");
const GRAVITY = 0.7;

CANVAS.width = 1024;
CANVAS.height = 576;
CONTEXT.fillRect(0, 0, CANVAS.width, CANVAS.height);


const BACKGROUND = new Sprite({
  position: {
    x: 0,
    y: 0,
  },
  imageSrc: "./assets/background_layer_3.png",
});
 
const PLAYER = new Fighter({
  position: {
    x: 500,
    y: 0,
  },
  velocity: {
    x: 0,
    y: 10,
  },
  width: 50,
  health: 500
});

const MOB = new Fighter({
  position: {
    x: 800,
    y: 0,
  },
  velocity: {
    x: 0,
    y: 10,
  },
  width: 150,
  color: "blue",
  health: 50
});


PLAYER.draw();
MOB.draw();


console.log(PLAYER);


const KEYS = {
  ArrowRight: {
    pressed: false,
  },
  ArrowLeft: {
    pressed: false,
  },
  ArrowUp: {
    pressed: false,
  },
};
let lastKey;

function animate() {
  window.requestAnimationFrame(animate);
  CONTEXT.fillStyle = "black";
  CONTEXT.fillRect(0, 0, CANVAS.width, CANVAS.height);

  BACKGROUND.update()
  PLAYER.update();
  MOB.update();
  //   MOB.velocity.x = -2

  PLAYER.velocity.x = 0;

  if (KEYS.ArrowRight.pressed && lastKey === "ArrowRight") {
    PLAYER.velocity.x = 10;
  } else if (KEYS.ArrowLeft.pressed && lastKey === "ArrowLeft") {
    PLAYER.velocity.x = -10;
  }
  ///////////////////////
  // collision///////////
  //////////////////////
  if (
    PLAYER.attackBox.position.x + PLAYER.attackBox.width >= MOB.position.x &&
    PLAYER.attackBox.position.x <= MOB.position.x + MOB.width &&
    PLAYER.attackBox.position.y + PLAYER.attackBox.height >= MOB.position.y &&
    PLAYER.attackBox.position.y <= MOB.position.y + MOB.height &&
    PLAYER.isAttacking
  ) {
    console.log("go");
    PLAYER.isAttacking == false;
  }
}

animate();

window.addEventListener("keydown", (event) => {
  switch (event.key) {
    case "ArrowRight":
      KEYS.ArrowRight.pressed = true;
      lastKey = "ArrowRight";
      break;
    case "ArrowLeft":
      KEYS.ArrowLeft.pressed = true;
      lastKey = "ArrowLeft";
      break;
    case "ArrowUp":
      PLAYER.velocity.y = -20;
      break;
    case " ":
      PLAYER.attack();
      break;
  }
});

window.addEventListener("keyup", (event) => {
  switch (event.key) {
    case "ArrowRight":
      KEYS.ArrowRight.pressed = false;
      break;
    case "ArrowLeft":
      KEYS.ArrowLeft.pressed = false;
      break;
    case "ArrowUp":
      KEYS.ArrowUp.pressed = false;
      break;
  }
});