const gameEngine = new GameEngine();

const ASSET_MANAGER = new AssetManager();
ASSET_MANAGER.queueDownload("./pochita pixel boi.png")
ASSET_MANAGER.queueDownload("./pipe.png")
ASSET_MANAGER.queueDownload("./Pochita Barks.mp3")
ASSET_MANAGER.downloadAll(() => {
	const canvas = document.getElementById("gameWorld");
	const ctx = canvas.getContext("2d");
	gameEngine.init(ctx);
	new SceneManager(gameEngine);
	gameEngine.start();
});
