Hooks.once('diceSoNiceReady', (dice3d) => {
  	dice3d.addSystem({id:"tymora-coin",name:"Tymora Coin"},false);
	dice3d.addDicePreset({
		type:"dc",
		labels:[
			'modules/tymora-coin/textures/heads.webp','modules/tymora-coin/textures/tails.webp'
		],
		bumpMaps:[
			'modules/tymora-coin/textures/heads_bump.webp','modules/tymora-coin/textures/tails_bump.webp'
		],
		system:"tymora-coin"
	});
});