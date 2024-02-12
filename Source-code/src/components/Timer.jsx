/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";

export default function Clock() {
  const [tiempoRestante, setTiempoRestante] = useState({
    horas: 0,
    minutos: 0,
    segundos: 0,
  });

  useEffect(() => {
    const intervalo = setInterval(() => {
      const ahora = new Date();
      const horaLimite = new Date(ahora);
      horaLimite.setHours(21, 0, 0, 0);

      if (ahora.getHours() >= 21) {
        horaLimite.setDate(horaLimite.getDate() + 1);
      }

      const diferencia = horaLimite - ahora;

      const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
      const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

      setTiempoRestante({
        horas,
        minutos,
        segundos,
      });
    }, 1000);

    return () => clearInterval(intervalo);
  }, []);

  return (
    <div>
      <h1>
        {tiempoRestante.horas} HOURS, {tiempoRestante.minutos} MINUTES AND {tiempoRestante.segundos} SECONDS.
      </h1>
    </div>
  );
}