# TheBigShot
Javascript &amp; Canvas Game


### Background and Overview
***
CannonBall is an interactive, turn based strategy game that faces off 2 players. It requires each player to calculate the trajectory of their cannonball making the appropriate adjustments to hit their target.

Users will control the angle of the cannon, velocity,  along with it’s location on the screen, all effecting the velocity and distance of the cannonball.
If a player is hit, they will loose life, and if the ground is hit, there will be an audio/graphical explosion resulting in removal of the ground where the collision occurred.



### Functionality & MVP

In CannonBall, users will be able to:
- [ ] Choose betweem a player or a computer opponent.
- [ ] Hear sounds and collisions.
- [ ] Start, pause or reset the game.
- [ ] Effect the physics and game speed.

### Wireframes

This app will consist of a single screen with the game canvas, player controls, pause button and nav links to the Github, my Linkden.
The canvas will start with the instructions on how to play the game and then will promt the player to choose either a human or computer opponent.
The pause button, health bars to show damage, velocity & angle meters will be located at the stop of the canvas.
Game play will take place towards the bottom of the screen.

![](https://github.com/BigNatty35/TheBigShot/blob/master/cannonWireFrames/How%20to%20play%20modal.png)
![](https://github.com/BigNatty35/TheBigShot/blob/master/cannonWireFrames/Game%20Play.png)

### Architecture and Technologies

This project will be implemented witht he following technologies:
- Vanilla Javascript
- HTML5 Canvas for DOM manipulation and rendering
- Webpack the bundle and sever up the various scripts

In addition to the web pack enry file, there will be 6 scripts involved in this project:

`game.js`: will house all of the rendering for the game.
`terrain.js`: will construct the environments for the game.
`Cannon.js`: will structure the cannon.
`Cannonball.js`: will structue the cannonball.
`CannonMovement`: will handle the physics logic for the cannonball and collsion detection.
`Audio.js`: will house the audio logic.





### Implementation Timeline


#### Over the weekend:

- [x] researched collision detection 
- [x] created movable objects on canvas

**Day 1**: Create webpack.config.js along with package.json. Start to make out the difference classes needed to play the game. Goals for the day:

- [ ] create a moving cannon
- [ ] be able to shoot on key press
- [ ] get the adjustable physics down for the cannonball


**Day 2**: Learn how to implement a sound and explosion on collision. 
	Goals for the day:

- [ ] create the terrain for the cannons.
- [ ] be able to deplete the terrain upon collision.
- [ ] make an explosion and sound when collision occurs.

**Day 3**: Work on the gameplay along with creating an AI.
	Goals for the day:

- [ ] create and AI that can hit an opponent
- [ ] create health meters that are rendered on the screen
- [ ] create a reset and pause button and start.

**Day 4**: Complete up all the styling and make sure everthing is polished.
  Goals for the day:
- [ ] Make sure I can switch turns between players, 
- [ ] Be able to adjust the speed of the game.
- [ ] End game successfully when opponent  runs out of energy.

