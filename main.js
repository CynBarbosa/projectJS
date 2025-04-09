let jugar = Number(prompt("Cuantas veces quieres jugar?"));

for (let i = 1; i <= jugar; i++) {
  let usuario = prompt("Ingrese una opcion: piedra, papel o tijera");
  const opcion = ["piedra", "papel", "tijera"];

  const opcionMaquina = () => {
    let resultadoMaquina = Math.floor(Math.random() * 3);
    return opcion[resultadoMaquina];
  };
  const maquina = opcionMaquina();

  if (usuario === maquina) {
    console.log(
      `El Jugador eligio: ${usuario}, la Maquina eligio: ${maquina}, EMPATE`
    );
  } else if (usuario === "piedra") {
    maquina === "papel"
      ? console.log(
          `El Jugador eligio: ${usuario}, la Maquina eligio: ${maquina}, papel envuelve piedra. PERDISTE!`
        )
      : console.log(
          `El Jugador eligio: ${usuario}, la Maquina eligio: ${maquina}, piedra rompe tijera. GANASTE!`
        );
  } else if (usuario === "papel") {
    maquina === "piedra"
      ? console.log(
          `El Jugador eligio: ${usuario}, la Maquina eligio: ${maquina}, papel envuelve piedra. GANASTE!`
        )
      : console.log(
          `El Jugador eligio: ${usuario}, la Maquina eligio: ${maquina}, tijera corta papel. PERDISTE!`
        );
  } else if (usuario === "tijera") {
    maquina === "piedra"
      ? console.log(
          `El Jugador eligio: ${usuario}, la Maquina eligio: ${maquina}, piedra rompe tijera PERDISTE!`
        )
      : console.log(
          `El Jugador eligio: ${usuario}, la Maquina eligio: ${maquina}, tijera corta papel. GANASTE!`
        );
  } else {
    console.log("La opcion ingresada no es correcta");
  }
}
