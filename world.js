window.addEventListener('load',function(e) {

var Q = Quintus()
  .include("Sprites, Scenes, Input, 2D, UI")   
  .setup()
  .controls();

Q.scene("level1",function(stage) {
  //stage.collisionLayer(new Q.TileLayer({ dataAsset: 'level.json', sheet: 'tiles' }));
  var bkgnds = [];
  var i = 0;

  while (i < 10) {
    bkgnds.push(stage.insert(new Q.Backgnd({ x: i*32, y: 1, frame: i })));
    console.log(i);
    i++;
  }

  i = 0;
  while (i < 10) {
    bkgnds.push(stage.insert(new Q.Backgnd({ x: 1, y: i*32, frame: i })));
    console.log(i);
    i++;
  }
  
  stage.add("viewport");

});

Q.Sprite.extend("Backgnd", {
     init: function(p) {
       this._super(p, {
         sheet: "tiles"
       });
     }
   });

Q.load("tilemap.png", function() {
  Q.sheet("tiles","tilemap.png", { tilew: 32, tileh: 32 });
  Q.stageScene("level1");
});

});
      /*
      Notes:
      - look into update and step.
      - break this portion out into a structure of js files.
      */
