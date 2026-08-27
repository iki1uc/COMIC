// picosso.js – dein Lieblingspinsel

export function PICOSSO(ctx, alpha, beta, gamma) {

    // alpha – Zerfall
    ctx.strokeStyle = "#0f0";
    ctx.beginPath();
    ctx.moveTo(10, 150);
    ctx.lineTo(150, 150 - alpha);
    ctx.stroke();

    // beta – Neuordnung
    ctx.strokeStyle = "#0a0";
    ctx.beginPath();
    ctx.moveTo(150, 150 - alpha);
    ctx.lineTo(300, 150 - beta);
    ctx.stroke();

    // gamma – Rückkehr
    ctx.strokeStyle = "#050";
    ctx.beginPath();
    ctx.moveTo(300, 150 - beta);
    ctx.lineTo(450, 150 - gamma);
    ctx.stroke();
}
