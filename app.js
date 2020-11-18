const canvas = document.querySelector("#jsCanvas");
const ctx = canvas.getContext("2d");
const colors = document.querySelectorAll("#jsColor");
const thick = document.querySelector("#jsThick");
const modeBtn = document.querySelector("#jsMode");
const saveBtn = document.querySelector("#jsSave");
const clearBtn = document.querySelector("#jsClear");

const DEAULT_COLOR = "#2c2c2c";
const CANVAS_SIZE = [700, 700];
canvas.width = CANVAS_SIZE[0];
canvas.height = CANVAS_SIZE[1];
// ctx 초기값
ctx.fillStyle = "white";
ctx.fillRect(0, 0, canvas.width, canvas.height);
ctx.strokeStyle = DEAULT_COLOR;
ctx.fillStyle = DEAULT_COLOR;
ctx.lineWidth = 2.5;

let painting = false;
let filling = false;

function startPainting() {
    painting = true;
}

function stopPainting() {
    painting = false;
}

function onMouseMove(event) {
    const x = event.offsetX;
    const y = event.offsetY;
    if (!painting) {
        ctx.beginPath(); // 새로운 경로 시작. 없으면 이전에 끝난 위치에서 다시시작
        ctx.moveTo(x, y); // path 이동
    } else {
        ctx.lineTo(x, y); // path와 sub-path들을 연결
        ctx.stroke(); // 연결된 선을 표시
    }
}

function handleColorClick(event) {
    const color = event.target.style.backgroundColor;
    ctx.strokeStyle = color;
    ctx.fillStyle = color;
}

function handleThickChange(event) {
    ctx.lineWidth = event.target.value;
}

function handleModeClick() {
    if (filling === true) {
        filling = false;
        modeBtn.innerText = "FILL";
    } else {
        filling = true;
        modeBtn.innerText = "PAINT";
    }
}

function handleFillCanvas() {
    if (filling === true) ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function handleContextMenu(event) {
    event.preventDefault();
}

function handleSaveClick() {
    const image = canvas.toDataURL("image/png");
    const link = document.createElement("a");
    link.href = image;
    link.download = "painting";
    link.click();
}

function handleClearClick() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

if (colors) {
    Array.from(colors).forEach((color) =>
        color.addEventListener("click", handleColorClick)
    );
}

if (thick) {
    thick.addEventListener("input", handleThickChange);
}

if (modeBtn) {
    modeBtn.addEventListener("click", handleModeClick);
}

if (canvas) {
    canvas.addEventListener("click", handleFillCanvas);
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", startPainting);
    canvas.addEventListener("mouseup", stopPainting);
    canvas.addEventListener("mouseleave", stopPainting);
    canvas.addEventListener("contextmenu", handleContextMenu);
}

if (saveBtn) {
    saveBtn.addEventListener("click", handleSaveClick);
}

if (clearBtn) {
    clearBtn.addEventListener("click", handleClearClick);
}
