/* ========== hamburger menu ========== */
function hamburger() {
  var x = document.getElementById("pages-phone");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}


/* ========== tilt effect ========== */
const MAX_ROT_X = 10;
const MAX_ROT_Y = 14;
const SCALE     = 1.04;

function applyTilt(el, options = {}) {
    const rotXMax = options.rotX ?? MAX_ROT_X;
    const rotYMax = options.rotY ?? MAX_ROT_Y;
    const scale   = options.scale ?? SCALE;
    const shine   = el.querySelector('.shine');

    el.addEventListener('mousemove', e => {
        const r = el.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width;
        const y = (e.clientY - r.top)  / r.height;

        const rotY =  (x - 0.5) * rotYMax;
        const rotX = -(y - 0.5) * rotXMax;

        el.style.transform =
            `rotateX(${rotX}deg) rotateY(${rotY}deg) scale(${scale})`;

        if (shine) {
            shine.style.opacity = '1';
            shine.style.background =
                `radial-gradient(circle at ${x * 100}% ${y * 100}%,
                rgba(255,255,255,0.18) 0%, transparent 65%)`;
        }
    });

    el.addEventListener('mouseleave', () => {
        el.style.transform = `rotateX(0deg) rotateY(0deg) scale(1)`;
        if (shine) shine.style.opacity = '0';
    });
}

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.movie').forEach(card => applyTilt(card));

    applyTilt(document.getElementById('featured'), {
        rotX: 5,
        rotY: 7,
        scale: 1,
    });
});