/* Chess board
Write a program that creates a string that represents an 8×8 grid, using
newline characters to separate lines. At each position of the grid there
is either a space or a “#” character. The characters should form a chess
board.
Passing this string to console.log should show something like this:
# # # #
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
 # # # #
When you have a program that generates this pattern, define a variable
size = 8 and change the program so that it works for any size, outputting
a grid of the given width and height. */


// The first program before modification.
let chess = "#";
for (let x = 0; x < 0; x++) {
	for (let y = 0; y <= 5; y++) {
		if (y % 2 == 0) {
			chess += " ";
		} else {
			chess += "#";
		}
	}
	console.log(chess);
	chess = "#";
}


// The program after modification.
let chess = "#";
let size = 8;
for (let x = 0; x < size; x++) {
	for (let y = 2; y <= size; y++) {
		if (y % 2 == 0) {
			chess += " ";
		} else {
			chess += "#";
		}
	}
	console.log(chess);
	chess = "#";
}