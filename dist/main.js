const NumSelect = document.getElementById("NumSelect");
const Cost = document.getElementById("Cost");
const Time = document.getElementById("Time");
const Pixels = document.getElementById("Pixels");
const WaitTime = 30;
const DropletCost = 500;
const PixelsAmount = 30;
function UpdateDisplays() {
    let NumSelectValue = Number(NumSelect.value);
    // Some useless crap to satisfy the compiler
    if (Cost && Pixels && Time) {
        // here is the usefull code
        Cost.innerText = String(DropletCost * NumSelectValue);
        Pixels.innerText = String(PixelsAmount * NumSelectValue);
        Time.innerText = ParseTime(WaitTime * NumSelectValue);
    }
}
function ParseTime(totalSeconds) {
    const days = Math.floor(totalSeconds / 86400);
    totalSeconds %= 86400;
    const hours = Math.floor(totalSeconds / 3600);
    totalSeconds %= 3600;
    const mins = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    const parts = [];
    if (days > 0)
        parts.push(`${days}d`);
    if (hours > 0)
        parts.push(`${hours}h`);
    if (mins > 0)
        parts.push(`${mins}min`);
    if (seconds > 0 || parts.length === 0)
        parts.push(`${seconds}s`);
    return parts.join(" ");
}
document.addEventListener("DOMContentLoaded", UpdateDisplays);
document.addEventListener("input", UpdateDisplays);
