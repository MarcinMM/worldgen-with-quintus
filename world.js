window.addEventListener('load',function(e) {

var Q = Quintus()                          // Create a new engine instance              
  .include("Sprites, Scenes, Input, 2D, UI") // Load any needed modules              
  .setup()                           // Add a canvas element onto the page
  .controls();                       // Add in touch support (for the UI)

Q.scene("level1",function(stage) {
  //stage.collisionLayer(new Q.TileLayer({ dataAsset: 'level.json', sheet: 'tiles' }));
  var bkgnds = [];
  var i = 0;

  while (i < 10) {
    bkgnds.push(stage.insert(new Q.Backgnd({ x: i*32, y: 1, frame: i })));
    console.log(i);
    i++;
  }
  //var bkgnd = stage.insert(new Q.Backgnd());
  
  //stage.add("viewport").follow(player);
  stage.add("viewport");

  //stage.insert(new Q.Enemy({ x: 700, y: 0 }));
  //stage.insert(new Q.Enemy({ x: 800, y: 0 }));
  
  //stage.insert(new Q.Tower({ x: 180, y: 50 }));
});

Q.Sprite.extend("Backgnd", {
     init: function(p) {
       this._super(p, {
         sheet: "tiles"
         //frame: 1
       });
     }
   });

Q.load("tilemap.png", function() {
  Q.sheet("tiles","tilemap.png", { tilew: 32, tileh: 32 });
  //Q.compileSheets("sprites.png","sprites.json");
  Q.stageScene("level1");
});

});
      /*
      Notes:
      - look into update and step.
      - break this portion out into a structure of js files.
      */
