const gameEngine = new GameEngine();

const ASSET_MANAGER = new AssetManager();
ASSET_MANAGER.queueDownload("./pochita pixel boi.png")
ASSET_MANAGER.queueDownload("./pipe.png")
ASSET_MANAGER.downloadAll(() => {
	const canvas = document.getElementById("gameWorld");
	const ctx = canvas.getContext("2d");

	gameEngine.init(ctx);
	gameEngine.addEntity(new player(gameEngine,10,10))
	gameEngine.addEntity(new pipe(gameEngine,50,50))
	gameEngine.start();
});
