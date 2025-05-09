const cvs = document.querySelector('#tree'),
    cvsCtx = cvs.getContext('2d');

cvs.width = cvs.offsetWidth * window.devicePixelRatio;
cvs.height = cvs.offsetHeight * window.devicePixelRatio;
cvs.style.width = cvs.offsetWidth + 'px';
cvs.style.height = cvs.offsetHeight + 'px';

cvsCtx.transform(1, 0, 0, -1, cvs.width / 2, cvs.height);

function drawBranch(cvsCtx, totalLength, start, end, lineWidth, strokeStyle, callback) {
    const deltaX = end.x - start.x;
    const deltaY = end.y - start.y;
    let length = 0;
    let lastTime = 0;

    requestAnimationFrame(function draw() {
        if (Date.now() - lastTime > 16) {
            lastTime = Date.now();
            length += 10;
            length > totalLength && (length = totalLength);
            const progress = length / totalLength;

            cvsCtx.beginPath();
            cvsCtx.strokeStyle = strokeStyle;
            cvsCtx.lineWidth = lineWidth;
            cvsCtx.lineCap = 'round';
            cvsCtx.moveTo(start.x, start.y);
            cvsCtx.lineTo(start.x + deltaX * progress, start.y + deltaY * progress);
            cvsCtx.stroke();
        }
        if (length !== totalLength) {
            requestAnimationFrame(draw);
        } else {
            callback();
        }
    });
}

function drawTree(cvsCtx, start, length, width, dir, bias) {
    const end = new Vector2D().scale(length).rotate(dir).add(start);

    drawBranch(cvsCtx, length, start, end, width, '#000', function () {
        if (width >= 1) {
            drawTree(cvsCtx, end, length * 0.8, width * 0.8, dir + Math.PI * 0.125 + bias * (0.5 - Math.random()), bias * 0.9);
            drawTree(cvsCtx, end, length * 0.8, width * 0.8, dir - Math.PI * 0.125 + bias * (0.5 - Math.random()), bias * 0.9);
        }

        if (width < 5 && Math.random() < 0.2) {
            cvsCtx.save();
            cvsCtx.strokeStyle = '#c72c35';
            cvsCtx.lineWidth = Math.random() * 10 + 3;
            cvsCtx.lineCap = 'round';
            cvsCtx.beginPath();
            cvsCtx.moveTo(end.x, end.y - 1);
            cvsCtx.lineTo(end.x, end.y + 1);
            cvsCtx.stroke();
            cvsCtx.restore();
        }
    });
}

drawTree(
    cvsCtx,
    new Vector2D(0, 0),
    Math.min(cvs.width, cvs.height) * 0.2,
    Math.min(cvs.width, cvs.height) * 0.02,
    Math.PI * -0.5 + (0.5 - Math.random()),
    Math.PI / 3
);
