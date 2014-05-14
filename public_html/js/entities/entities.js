    game.PlayerEntity = me.ObjectEntity.extend({
    init: function(x, y, settings) {
        settings.image = "player1-spritesheet";
        settings.spritewidth ="72";
        settings.spriteheight ="96";
        settings.width = 72;
        settings.height = 96;
        this.parent(x, y, settings);
        
        this.collidable = true;
        
        this.renderable.addAnimation("idle", [3]);
        this.renderable.addAnimation("jump", [2]);
        this.renderable.addAnimation("run", [4,5,6,7,8,9,10,11,12,13,14]);
        this.renderable.addAnimation("duck", [1]);
        
        this.renderable.setCurrentAnimation("run");
        
        this.setVelocity(5, 20);
        
        me.game.viewport.follow(this.pos, me.game.viewport.AXIS.BOTH);
    },
  update: function(deltaTime)  {
        if(me.input.isKeyPressed("left")) {
            this.vel.x -= this.accel.x * me.timer.tick;
           
        }
        else if(me.input.isKeyPressed("right")) {
            this.vel.x += this.accel.x * me.timer.tick;
        }
         else{
            this.vel.x =0;
        }
        if(me.input.isKeyPressed("jump")) {
        if(!this.jumping && !this.falling) {
            this.vel.y = -this.maxVel.y * me.timer.tick;
            this.jumping = true;
        }
        
            
        }
      
        var collision = me.game.world.collide(this);
        this.updateMovement();
        return true;
        
         var collision = this.collide();
     return true;
 
   }  
  });
  
  
 
game.EnemyEntity = me.ObjectEntity.extend({
    init: function(x, y, settings) {
        settings.image = "fly-spritesheet";
        settings.spritewidth ="72";
        settings.spriteheight ="87";
        this.parent(x, y, settings);
        
        this.collidable = true;
        
        this.renderable.addAnimation("idle", [1]);
        this.renderable.setCurrentAnimation("idle");
        
        this.setVelocity(5, 20);
    },
        update: function()  {}
    
        
         
});
        
   
   game.LevelTrigger = me.ObjectEntity.extend({
       init: function(x, y, settings) {
           this.parent(x, y, settings);
           this.collidable = true;
           this.level = settings.level;
           this.xSpawn = settings.xSpawn;
           this.ySpawn = settings.ySpawn;
       },
               
                
               
       onCollision: function(){
           this.collidable = true;
           var x = this.xSpawn;
           var y = this.ySpawn;
           me.levelDirector.loadLevel(this.level);
           me.state.current().resetPlayer(x, y);
       }
   });
   
 
