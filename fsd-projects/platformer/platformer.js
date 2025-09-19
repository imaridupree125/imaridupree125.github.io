$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    toggleGrid();


    // TODO 2 - Create Platforms
      createPlatform(125, 620, 100, 170, "black")
      createPlatform(375, 575, 100, 200, "hotpink")
      createPlatform(490, 575, 75, 20, "black")
      createPlatform(600, 520, 150, 1000, "black")
      createPlatform(400, 390, 100, 20, "black")
      createPlatform(200, 290, 100, 20, "hotpink")
      createPlatform(100, 175, 100, 20, "black")
      createPlatform(300, 175, 700, 20, "hotpink")
      createPlatform(1050, 200, 100, 20, "black")
      
    // TODO 3 - Create Collectables
      createCollectable("steve", 410, 360);
      createCollectable("diamond", 490, 550);
      createCollectable("grace", 1100, 175 )


    
    // TODO 4 - Create Cannons
      createCannon("top", 350, 2000);
      createCannon("right", 200, 2000);
      createCannon("left", 360, 2000)
      createCannon("bottom", 1150, 2000)

    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
