let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
 cursor: "<span style='color: #DBF1EB;'>|</span>",
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: #B7FFED;">Creo y dieño páginas web con HTML Y CSS.</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
