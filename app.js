document.addEventListener('DOMContentLoaded', evt => {
    let app = document.querySelector('#app');

    console.log(app);
    let image_url = './images/view.jpg';

    let panorama = new PANOLENS.ImagePanorama(image_url);

    let viewer = new PANOLENS.Viewer({
        container:app,
        enableReticle: false,
        viewIndicator: true,
        autoRotate: true,
        autoRotateSpeed: 0.5,
        autoRotateDirection: 'right',
        autoRotateActivationDuration: 5000,
        dwellTime: 1000,
        controlBar: true
    })

    viewer.add(panorama);
})
