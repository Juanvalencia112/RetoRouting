import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Detail() {
  const { mascotaId } = useParams();
  const [mascota, setMascota] = useState(null);

  useEffect(() => {
    const URL =
      "https://gist.githubusercontent.com/josejbocanegra/829a853c6c68880477697acd0490cecc/raw/99c31372b4d419a855e53f0e891246f313a71b20/mascotas.json";
    
    fetch(URL)
      .then((data) => data.json())
      .then((data) => {
        const found = data.find((m) => m.id === parseInt(mascotaId));
        setMascota(found);
      });
  }, [mascotaId]);

  if (!mascota) {
    return <h1>Cargando...</h1>;
  }

  return (
    <div style={{ textAlign: "center" }}>
      <h1>{mascota.nombre}</h1>
      <img
        src={mascota.foto}
        alt={mascota.nombre}
        style={{ width: "300px", height: "auto" }}
      />
      <h3>{mascota.raza}</h3>
      <h4>{mascota.especie}</h4>
      <p>{mascota.descripcion}</p>
    </div>
  );
}
