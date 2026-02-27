const linkFugitivo = document.getElementById("fugitivo");

linkFugitivo.addEventListener("mouseenter", () => {

  // -------- LINK FOGE --------
  const maxX = window.innerWidth - linkFugitivo.offsetWidth;
  const maxY = window.innerHeight - linkFugitivo.offsetHeight;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  linkFugitivo.style.position = "absolute";
  linkFugitivo.style.left = randomX + "px";
  linkFugitivo.style.top = randomY + "px";


  // -------- MUDA COR DO BOTÃO --------
  const randomColor = `rgb(
    ${Math.floor(Math.random() * 256)},
    ${Math.floor(Math.random() * 256)},
    ${Math.floor(Math.random() * 256)}
  )`;

  linkFugitivo.style.backgroundColor = randomColor;

});