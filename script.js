// Cargar entradas dinámicas desde localStorage
window.onload = () => {
  const extras = JSON.parse(localStorage.getItem('rutasExtra')) || [];
  for (const item of extras) {
    crearEnlace(item);
  }
};

document.getElementById("addForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const nombre = document.getElementById("nombre").value.trim();
  const ruta = document.getElementById("ruta").value.trim();
  const icono = document.getElementById("icono").value.trim();

  if (nombre && ruta && icono) {
    const nuevo = { nombre, ruta, icono };
    const extras = JSON.parse(localStorage.getItem('rutasExtra')) || [];
    extras.push(nuevo);
    localStorage.setItem('rutasExtra', JSON.stringify(extras));
    crearEnlace(nuevo);
    this.reset();
  }
});

function crearEnlace({ nombre, ruta, icono }) {
  const contenedor = document.getElementById("menu");
  const a = document.createElement("a");
  a.className = "menu-item";
  a.href = ruta;
  a.innerHTML = `<img src="${icono}" alt="">${nombre}`;
  contenedor.appendChild(a);
}
