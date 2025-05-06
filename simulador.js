// ---------- Header ----------
// ----Foto de Perfil----
const imgPerfil = document.getElementById(`imgPerfil`);
const botonFotoPerfil = document.getElementById(`botonFotoPerfil`);
const inputFotoPerfil = document.getElementById(`inputFotoPerfil`);

botonFotoPerfil.addEventListener(`click`, () => {
  inputFotoPerfil.classList.toggle(`oculto`);
  inputFotoPerfil.click();
});

inputFotoPerfil.addEventListener(`change`, () => {
  const archivo = inputFotoPerfil.files[0];
  if (archivo) {
    const nuevaFoto = new FileReader();
    nuevaFoto.onload = (event) => {
      const urlImagen = event.target.result;
      imgPerfil.src = urlImagen;
      localStorage.setItem(`imgPerfil`, urlImagen);
      inputFotoPerfil.classList.add(`oculto`);
    };
    nuevaFoto.readAsDataURL(archivo);
  }
});
// ----Nombre Perfil----
const nombrePerfil = document.getElementById(`nombrePerfil`);
const botonNombrePerfil = document.getElementById(`botonNombrePerfil`);
const inputNombrePerfil = document.getElementById(`inputNombrePerfil`);

botonNombrePerfil.addEventListener(`click`, () => {
  inputNombrePerfil.classList.toggle(`oculto`);
  inputNombrePerfil.focus();
});
inputNombrePerfil.addEventListener(`keydown`, (tecla) => {
  if (tecla.key === `Enter`) {
    const nuevoNombre = inputNombrePerfil.value.trim();
    if (nuevoNombre !== "") {
      nombrePerfil.textContent = nuevoNombre;
      localStorage.setItem(`nombrePerfil`, nuevoNombre);
      inputNombrePerfil.classList.add(`oculto`);
      inputNombrePerfil.value = "";
    }
  }
});
// ----Informacion Perfil----
const informacionPerfil = document.getElementById(`informacionPerfil`);
const botoInformacionPerfil = document.getElementById(`botoInformacionPerfil`);
const inputInformacionPerfil = document.getElementById(
  `inputInformacionPerfil`
);

botoInformacionPerfil.addEventListener(`click`, () => {
  inputInformacionPerfil.classList.toggle(`oculto`);
  inputInformacionPerfil.focus();
});
inputInformacionPerfil.addEventListener(`keydown`, (tecla) => {
  if (tecla.key === `Enter`) {
    const nuevaInfo = inputInformacionPerfil.value.trim();
    if (nuevaInfo !== "") {
      informacionPerfil.textContent = nuevaInfo;
      localStorage.setItem(`informacionPerfil`, nuevaInfo);
      inputInformacionPerfil.classList.add(`oculto`);
      inputInformacionPerfil.value = "";
    }
  }
});
window.addEventListener("DOMContentLoaded", () => {
  const nombreGuardado = localStorage.getItem(`nombrePerfil`);
  const infoGuardada = localStorage.getItem(`informacionPerfil`);
  const fotoGuardada = localStorage.getItem(`imgPerfil`);
  const comentarioGuardado =
    JSON.parse(localStorage.getItem(`comentario`)) || [];
  comentarioGuardado.forEach((texto) => {
    const p = document.createElement(`p`);
    p.classList.add(`comentario`);
    p.textContent = texto;
    comentarios.appendChild(p);
  });
  if (fotoGuardada) {
    imgPerfil.src = fotoGuardada;
  }
  if (nombreGuardado) {
    nombrePerfil.textContent = nombreGuardado;
  }
  if (infoGuardada) {
    informacionPerfil.textContent = infoGuardada;
  }
  if (comentarioGuardado) {
    comentario.textContent = comentarioGuardado;
  }
});
// ---------- Main ----------
// ----Boton Like----
const botonLike = document.getElementById(`botonLike`);
let liked = false;

botonLike.addEventListener(`click`, () => {
  liked = !liked;
  if (liked) {
    botonLike.classList.add(`liked`);
  } else {
    botonLike.classList.remove(`liked`);
  }
});

// ----Boton Comentario----
const comentarioBoton = document.getElementById(`botonComentario`);
const inputComentario = document.getElementById(`inputComentario`);
let comentario = false;

comentarioBoton.addEventListener(`click`, () => {
  comentario = !comentario;
  if (comentario) {
    comentarioBoton.classList.add(`comentario`);
    inputComentario.focus();
  } else {
    comentarioBoton.classList.remove(`comentario`);
  }
});

// ----Boton de Favorito----
const botonFavoritos = document.getElementById(`botonFavoritos`);
let favoritos = false;

botonFavoritos.addEventListener(`click`, () => {
  favoritos = !favoritos;
  if (favoritos) {
    botonFavoritos.classList.add(`favoritos`);
  } else {
    botonFavoritos.classList.remove(`favoritos`);
  }
});

// ----Seccion Comentarios----
const comentarios = document.getElementById(`comentarios`);
const inputComentarios = document.getElementById(`inputComentarios`);
const buttonInput = document.getElementById(`buttonInput`);

buttonInput.addEventListener(`click`, () => {
  const texto = inputComentarios.value.trim();
  if (texto !== "") {
    const nuevoComentario = document.createElement(`p`);
    nuevoComentario.classList.add("comentario");
    nuevoComentario.textContent = texto;
    comentarios.appendChild(nuevoComentario);
    const comentariosPrevios =
      JSON.parse(localStorage.getItem(`comentario`)) || [];
    comentariosPrevios.push(texto);
    localStorage.setItem(`comentario`, JSON.stringify(comentariosPrevios));

    inputComentarios.value = "";
  }
});

window.addEventListener("DOMContentLoaded", () => {
  const nombreGuardado = localStorage.getItem(`nombrePerfil`);
  const infoGuardada = localStorage.getItem(`informacionPerfil`);
  const fotoGuardada = localStorage.getItem(`imgPerfil`);
  const comentarioGuardado = localStorage.getItem(`comentario`);
  if (fotoGuardada) {
    imgPerfil.src = fotoGuardada;
  }
  if (nombreGuardado) {
    nombrePerfil.textContent = nombreGuardado;
  }
  if (infoGuardada) {
    informacionPerfil.textContent = infoGuardada;
  }
  if (comentarioGuardado) {
    comentario.textContent = comentarioGuardado;
  }
});
