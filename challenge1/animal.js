let x = 200;
let y = 200;

background(255, 255, 255);
noStroke();

///// head////////

// face
fill(150, 50, 0);
ellipse(x, y, 200);

// eyes
fill(0, 0, 0);
ellipse(x - 30, y - 30, 30, 40);
ellipse(x + 30, y - 30, 30, 40);

// eye pupil
fill(255, 255, 255);
ellipse(x - 30, y - 30, 15, 20);
ellipse(x + 30, y - 30, 15, 20);

// mouth
fill(255, 235, 205);
ellipse(x, y + 20, 60);

// nostrils
fill(0, 0, 0);
triangle(x + 10, y, x - 10, y, x, y + 20);
stroke(0, 0, 0);
strokeWeight(2);
line(x, y + 20, x, y + 30);
line(x, y + 30, x + 10, y + 35);
line(x, y + 30, x - 10, y + 35);

// blush
fill(255, 192, 203);
noStroke();
ellipse(x - 60, y, 30);
ellipse(x + 60, y, 30);

// Ears
fill(150, 50, 0);
noStroke();
ellipse(x - 70, y - 80, 50);
ellipse(x + 70, y - 80, 50);

// body
fill(150, 50, 0);
triangle(x, y + 60, x - 80, y + 150, x + 80, y + 150);

// bow
fill(0, 0, 0);
triangle(x, y + 100, x - 20, y + 90, x - 20, y + 110);
triangle(x, y + 100, x + 20, y + 90, x + 20, y + 110);