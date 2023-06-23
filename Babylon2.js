<script>
var createScene = function () {
      

        var scene = new BABYLON.Scene(engine);
    var camera = new BABYLON.ArcRotateCamera("camera", BABYLON.Tools.ToRadians(90), BABYLON.Tools.ToRadians(65), 10, BABYLON.Vector3.Zero(), scene);
var light = new BABYLON.HemisphericLight("hemiLight", new BABYLON.Vector3(-1, 1, 0), scene);
	light.diffuse = new BABYLON.Color3(0.14, 0.2, 4, 0.92);
	light.specular = new BABYLON.Color3(0.9, 1, 4, 0);
	light.groundColor = new BABYLON.Color3(0.14, 0.79, 4, 0.87);
	
	var grass0 = new BABYLON.StandardMaterial("grass0", scene);
	grass0.diffuseTexture = new BABYLON.Texture("textures/grass.png", scene);
	
	var grass1 = new BABYLON.StandardMaterial("grass1", scene);
	grass1.emissiveTexture = new BABYLON.Texture("textures/grass.png", scene);
    grass1.diffuseColor = new BABYLON.Color3(0, 1, 0.87);
	
	var grass2 = new BABYLON.StandardMaterial("grass2", scene);
	grass2.ambientTexture = new BABYLON.Texture("textures/grass.png", scene);
	grass2.diffuseColor = new BABYLON.Color3(0, 0.07, 1, 0.52);
	
	//diffuse texture
	var sphere0 = BABYLON.MeshBuilder.CreateSphere("sphere0", {}, scene);
	sphere0.position.x = -1.5;
	sphere0.material = grass0;	
    	sphere0.textureColor = new BABYLON.Color3(1, 0.2, 0.92);

	
	//emissive texture 
	var sphere1 = BABYLON.MeshBuilder.CreateSphere("sphere1", {}, scene);
	sphere1.material = grass1;
	sphere1.position.y = 1.5
 

	//ambient texture and diffuse color
	var sphere2 = BABYLON.MeshBuilder.CreateSphere("sphere2", {}, scene);
	sphere2.material = grass2;
	sphere2.position.x = 1.5;	


	
    var sphere = BABYLON.MeshBuilder.CreateSphere("sphere", { diameter: 2 }, scene);
               var material = new BABYLON.StandardMaterial("grass1", scene);
        material.diffuseTexture = new BABYLON.Texture("textures/grass.png", scene);
        material.diffuseColor = new BABYLON.Color3(6, 0.07, 4, 0.52);

        sphere.material = material;
        var animation = new BABYLON.Animation(
            "panicAnimation",
            "rotation.y",
            30,
            BABYLON.Animation.ANIMATIONTYPE_FLOAT,
            BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE
 
);
camera.attachControl(canvas, true);
        var keys = [];
        keys.push({
            frame: 0,
            value: 0
        });
        keys.push({
            frame: 100,
            value: Math.PI * 2
        });

        animation.setKeys(keys);
        sphere.animations = [];
        sphere.animations.push(animation);
        scene.beginAnimation(sphere, 0, 100, true);
        
        engine.runRenderLoop(function () {
            scene.render();
        });

        window.addEventListener("resize", function () {
            engine.resize();
        });
    return scene;
};
</script>
