if (window.DeviceOrientationEvent) {
    window.addEventListener('deviceorientation', function (event) {
        var a = document.getElementById('alpha'),
            b = document.getElementById('beta'),
            g = document.getElementById('gamma'),
            alpha = event.alpha,
            beta = event.beta,
            gamma = event.gamma;

        // 使用textContent屬性來更新元素的內容
        a.textContent = Math.round(alpha);
        b.textContent = Math.round(beta);
        g.textContent = Math.round(gamma);

    }, false);
} else {
    document.querySelector('body').textContent = '你的瀏覽器不支援喔';
}
