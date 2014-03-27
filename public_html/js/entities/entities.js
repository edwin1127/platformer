game.PlayerEntity = me.ObjectEntity.extend({
    init: function(x, y, settings) {
        settings.image = "player1-spritesheet";
        settings.spritewidth ="72";
        settings.spriteheight ="97";
        this.parent(x, y, settings);
    },
            
     update: function()  {
    }
});