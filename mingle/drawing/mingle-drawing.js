
$(function() {


    $('#homeKey').click(function() {
        $('#menuBar').animate({width:'toggle'})
    })

    $('#menuBack').click(function() {
        $('#menuBar').animate({width:'toggle'})
    })

})

// 캔버스 함수
const canvas = document.getElementById('jsCanvas')
const ctx = canvas.getContext('2d');

// 캔버스 사이즈 여기서조정
canvas.width = 1800;
canvas.height = 900;

let painting = false;

function startPainting(e) {
    const x = e.offsetX;
    const y = e.offsetY;
    ctx.beginPath();
    ctx.moveTo(x, y);
    painting=true;
}

function stopPainting() {
    ctx.closePath();
    painting=false;
}

function onMouseMove(e) {
    const x = e.offsetX;
    const y = e.offsetY;
    if(!painting) {
        return;
    }
    ctx.lineTo(x, y);
    ctx.stroke();
}

if (canvas) {
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", startPainting);
    canvas.addEventListener("mouseup", stopPainting);
    canvas.addEventListener("mouseleave", stopPainting);
}

// 그림 선 스타일 추후 함수넣어서 동적으로
ctx.strokeStyle = "orange";
ctx.lineWidth = 2.5;
ctx.lineCap = 'round';
