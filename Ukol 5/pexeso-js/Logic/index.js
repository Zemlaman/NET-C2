window.onload = () => {
    import("./presentation/pexeso-gui.js")
        .then((module) => {
            const PexesoGUI = module.PexesoGUI;
            const component = document.getElementById("pexeso");

            const pexeso = new PexesoGUI();
            pexeso.render();
        });
};
