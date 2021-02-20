  player;
  nonPlayer;
  maze1;







function preload(){
bgImage = loadImage("Bg.jpg");
}



function setup(){
    createCanvas(1400, 800);
     maze1= createSprite(430, 400,100,20);
    maze1.shapeColor="brown";
     maze2 = createSprite(470,465,20,130);
    maze2.shapeColor="brown";
     maze3 = createSprite(544,370,20,160);
    maze3.shapeColor="brown";
     maze4 = createSprite(634,460,200,20);
    maze4.shapeColor="brown";
      maze5 = createSprite(620,520,170,20);
    maze5.shapeColor="brown";
      maze6 = createSprite(695,560,20,100);
    maze6.shapeColor="brown";
      maze7 = createSprite(735,610,100,20);
    maze7.shapeColor="brown";
      maze8 = createSprite(741,420,20,100);
    maze8.shapeColor="brown";
      maze9 = createSprite(695,710,20,100);
    maze9.shapeColor="brown";
      maze10 = createSprite(650,730,20,70);
    maze10.shapeColor="brown";
      maze11 = createSprite(610,685,100,20);
    maze11.shapeColor="brown";
      maze12 = createSprite(534, 560,20,100);
    maze12.shapeColor="brown";
      maze13 = createSprite(494,610,100,20);
    maze13.shapeColor="brown";
      maze14 = createSprite(440,650,20,100);
    maze14.shapeColor="brown";
      maze15= createSprite(455,710,50,20);
    maze15.shapeColor="brown";
      maze16 = createSprite(575,490,20,50);
    maze16.shapeColor="brown";
      maze17= createSprite(430, 520,100,20);
    maze17.shapeColor="brown";
      maze18= createSprite(695,440,20,50);
    maze18.shapeColor="brown";
      maze19= createSprite(470,680 ,20,50);
    maze19.shapeColor="brown";
      maze20= createSprite(585,650,20,70);
    maze20.shapeColor="brown";
      maze21 = createSprite(752,575,20,90);
    maze21.shapeColor="brown";
     maze22= createSprite(625,555,20,50);
     maze22.shapeColor = "brown";
}



function draw(){
background(bgImage);
drawSprites();
}