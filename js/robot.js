"use strict";

//constructor
function Robot(){
    this.x = null;
    this.y = null;
    this.orientation = null;
    this.maze = null;
}

Robot.prototype.setMaze = function(maze){
    this.maze = maze;
    this.x = maze.startX;
    this.y = maze.startY;
    this.orientation = maze.startOrientation;
}

Robot.prototype.turnRight = function(){
    if (!this.maze || !this.maze.isValidDirection(this.orientation)){
        return false;
    }
    var rights = {
        //if facing north, right will be east
        north: "east",
        east: "south",
        south: "west",
        west: "north"
    }
    this.orientation = rights[this.orientation];
    return true;
}

Robot.prototype.turnLeft = function(){
    if (!this.maze || !this.maze.isValidDirection(this.orientation)){
        return false;
    }
    var lefts = {
        //if facing north, right will be east
        north: "west",
        east: "north",
        south: "east",
        west: "south"
    }
    this.orientation = lefts[this.orientation];
    return true;
}