var LifeSocks = {
	playerData: {
		name: null,
		isHost: null
	},
};
LifeSocks.Boot = function () {
	socket.on('playerData', function(arg) {
		console.log('playerData:', arg);
		LifeSocks.playerData = arg;
	});
};
LifeSocks.Boot.prototype = {
	preload: function () {
		this.load.image('preloaderBg', '/assets/loadingbar_back.png');
		this.load.image('preloaderBar', '/assets/loadingbar.png');
	},
	create: function () {
		this.game.stage.backgroundColor = '#EBA2C5';

		// Stretch to fill
		this.game.scale.fullScreenScaleMode = Phaser.ScaleManager.EXACT_FIT;
		this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
		this.stage.disableVisibilityChange = true;
		this.game.state.start('Preloader');
	}
};
