LifeSocks.Score = function(game) {};
LifeSocks.Score.prototype = {
	create: function() {
	    var text = "Somebody";
	    var style = { font: "65px Arial", fill: "#ff0044", align: "center" };

	    var t = this.add.text(this.world.centerX-300, 0, text, style);
	    this.add.sprite(0, 0, 'score-bg');

	    var semenSock = this.add.sprite(0, 0, 'semen-sock');

	    semenSock.animations.add('drip', [
                'semen-sock1',
                'semen-sock2',
                'semen-sock3',
                'semen-sock4',
                'semen-sock5',
                'semen-sock6'], 6, true);

	    semenSock.animations.play('drip');
	}
};