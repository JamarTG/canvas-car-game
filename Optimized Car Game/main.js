window.onload = () => {
	alert("Note. Use the down arrow keys on keyboard or the center button on phones to neutralize the car....Click 'OK' to start game")


	const canvas = document.getElementById('canvas');
	const ctx = canvas.getContext('2d');


	//score of the player
	let score = 0;

    
	let cpuSpeed = 8


	const CAR_WIDTH = 120
	const CAR_HEIGHT = 100

	canvas.height = 700
	canvas.width = 500

	const frameid = window.requestAnimationFrame(mainLoop)



	//end of the road value
	const roadEnd = 680

	//sets x and y coordinates of road and road2
	const roadx = 0;
	var roady = 0;
	const road2x = 0;
	var road2y = canvas.height * -1;

	//sets the x and y coordinates of the player's car
	var playerXPos = canvas.width / 2;
	var playerYPos = 580;

	//sets the x and y coordinates of the computer's car
	var cpuXPos = Math.ceil(Math.random() * canvas.width) - 50
	var cpuYPos = -400;

	//sets the speed of the roads and cars
	var roadSpeed = 13; //road speed
	const sidespeed = 4; //sideway movement speed

	//defines the current direction of the car
	var moving = '';

	//tells whether we are able to use the keys
	var keyDisabled = false

	//list the type of cars that can be created
	var cartype = ['https://i.postimg.cc/Mv02SdF4/Mini-van.png', 'https://i.postimg.cc/nXH8cq8L/taxi.png', 'https://i.postimg.cc/rdmv5cwX/truck.png', 'https://i.postimg.cc/xXgwkqY3/Ambulance.png', 'https://i.postimg.cc/CBnX6N8c/Audi.png', 'https://i.postimg.cc/2qKgwJ1q/Mini-truck.png']



	//runs when the game is over
	function gameOverAnimation() {

		ctx.clearRect(0, 0, 500, 700)
		canvas.border = "5px solid #fff"
		ctx.fillStyle = "red"
		ctx.font = "60px Pushster";
		ctx.fillText("GAME OVER", canvas.width / 5, (canvas.height / 2) + 60)
		ctx.fillStyle = "white"
		ctx.font = "30px Pushster";
		ctx.fillText("\" Refresh\" to restart", (canvas.width / 10) * 3, (canvas.height / 2) - 40)
		ctx.fillText(`Your Score:`, ((canvas.width / 10) * 3) + 20, (canvas.height / 2) - 150)
		ctx.font = "60px Pushster"
		ctx.fillText(`${score}`, ((canvas.width / 10) * 3) + 75, (canvas.height / 2) - 80)

		window.requestAnimationFrame(gameOverAnimation)

	}

	function drawScore() {
		ctx.fillStyle = "white"
		ctx.font = "30px Pushster";
		ctx.fillText(`Score: ${score}`, 300, 60)

	}

	//Android control functions
	function moveLeft() {
		if (moving != "gameover") {
			moving = "left"
		}

	}

	function moveRight() {
		if (moving != "gameover") {
			moving = "right"
		}

	}

	function neutralize() {
		if (moving != "gameover") {
			moving = "neutral"
		}
	}

	/*detects whether the car has reached the edge of the track*/
	function edgeDetection() {
		/*this checks whether the ecar has reached the end. If so, it will return true and it will be passed to the gameOverAnimation function which end the game when true is passed to it */

		if (playerXPos <= -30) {
			moving = "neutral"
			window.cancelAnimationFrame(frameid)
			return true
		} else if (playerXPos >= 420) {
			moving = "neutral"
			window.cancelAnimationFrame(frameid)
			return true
		} else if (playerYPos <= 0) {
			moving = "neutral"
			return false
		} else if (playerYPos > roadEnd) {
			moving = "neutral"
			return false
		} else {
			return false
		}
	}



	//move the car in the direction store in the moving variable
	function carDirection(m) {
		if (m === "neutral") {
			playerXPos += 0
			playerYPos += 0
		} else if (m === "left") {
			playerXPos -= sidespeed
		} else if (m === "right") {
			playerXPos += sidespeed
		} else if (m === "down") {
			playerYPos += 0
		} else if (m === "up") {
			playerYPos -= 0
		}
	}

	//this handles the different keyboard events to move the car
	function gameControls(e) {

		if (moving != 'gameover') {
			e = e || window.event;

			if (e.keyCode == '38') {
				moving = "up";
				carDirection(moving)
			} else if (e.keyCode == '40') {
				moving = "down";
				carDirection(moving)
			} else if (e.keyCode == '37') {
				if (!keyDisabled) {

					moving = "left";
					carDirection(moving)
				}
			} else if (e.keyCode == '39') {
				// right arrow
				if (!keyDisabled) {
					moving = "right";
					carDirection(moving)
				}
			} else if (e.keyCode == '39') {
				// right arrow
				moving = "right";
				carDirection(moving)
			} else {
				moving = 'neutral'
			}
		}
	}

	const roadAnimation = () => {
		//draws road
		ctx.drawImage(img, roadx, roady, canvas.width, canvas.height)

		//draws road2
		ctx.drawImage(img2, road2x, road2y, canvas.width, canvas.height)

		//moves roads downwards using its y-coordinate 
		roady += roadSpeed
		road2y += roadSpeed

		/*if the first road ever gets lower than the canvas move the firstroad to the top and move road 2 above it off the canvas*/
		if (roady >= canvas.height) {
			roady = 0
			road2y = canvas.height * -1
		}
	}

	function generateCar() {
		cpuCar = new Image() //creates the computer car

		/*if the computer car is below the canvas..randomly generate another car(or change the coordinates)*/
		if (!(cpuYPos >= -100 && cpuYPos <= roadEnd)) {
			//not on the canvas-change the color
			source = `${cartype[Math.floor(Math.random()*cartype.length)]}`
			cpuCar.src = source
		} else {
			//this only runs if the car can be seen //on the canvas - don't change the color
			cpuCar.src = source
		}

		ctx.drawImage(cpuCar, cpuXPos, cpuYPos++, CAR_WIDTH, CAR_HEIGHT)

		cpuCar.onload = function() {

			moveCar()
		}
	}

	function moveCar() {
		cpuYPos += cpuSpeed
	}

	const carCollision = () => (Math.abs(playerXPos - cpuXPos) <= 45 && Math.abs(cpuYPos - playerYPos) <= 90) ;

	const drawCar = () => {
		carImg = new Image();
		carImg.src = "https://i.postimg.cc/1tjsKF9b/Black-viper.png"
		
        carImg.onload = () => {

            //clears the screen
			ctx.clearRect(0, 0, 500, 700);
			
            //play the road animation
            roadAnimation();
			ctx.drawImage(carImg, playerXPos, playerYPos, CAR_WIDTH, CAR_HEIGHT);
		}
	}

	function mainLoop() {

		img = new Image();
		img2 = new Image();
		img.src = 'https://i.postimg.cc/8P96st7v/post-53-1139607373.jpg';
		img2.src = 'https://i.postimg.cc/8P96st7v/post-53-1139607373.jpg';



		drawCar()
		drawScore()

		setInterval(generateCar(), 100)
		if (cpuYPos >= roadEnd) {
			cpuYPos = -400;
			cpuXPos = Math.ceil(Math.random() * 420)


			cpuSpeed += 0.5
			roadSpeed += 0.1

			if (moving != 'gameover') {
				++score
			}

			window.requestAnimationFrame(generateCar)
		}

		if (edgeDetection() || carCollision()) {
			moving = "gameover";
			document.getElementById("bod").backgroundColor = "red";
			window.requestAnimationFrame(gameOverAnimation);

			car.src = 'gameover';
		}

		document.onkeydown = gameControls;
		document.getElementById("left").onmouseover = moveLeft
		document.getElementById("right").onmouseover = moveRight
		document.getElementById("center").onmouseover = neutralize
		carDirection(moving)

		const frameid = window.requestAnimationFrame(mainLoop)

	}


}