class App {
    constructor() {
      
        

        // create the canvas html element and attach it to the webpage
        var canvas = document.createElement("canvas");
        canvas.style.width = "100%";
        canvas.style.height = "100%";
        canvas.id = "gameCanvas";
        document.body.appendChild(canvas);

        // initialize babylon scene and engine
        var engine = new BABYLON.Engine(engine);
        var scene = new BABYLON.Scene(scene);

        var camera = new BABYLON.UniversalCamera("UniversalCamera", new BABYLON.Vector3(0, 0, -10), scene);
        camera.attachControl(canvas, true);
        var light1 = new BABYLON.HemisphericLight("light1", new Vector3(1, 1, 0), scene);
        var sphere = MeshBuilder.CreateSphere("sphere", { diameter: 1 }, scene);

        // hide/show the Inspector
       

        // run the main render loop
      
}
}
new App();