export function recorridoAlimentosPerro() {
  return fetch("/data/productos.json")
    .then((res) => res.json())
    .then((data) =>
      data.filter((producto) => producto.categoria === "alimento perro"),
    )
    .catch((err) => {
      console.error("Error al cargar productos:", err);
      return [];
    });
}

export function recorridoAlimentosGato() {
  return fetch("/data/productos.json")
    .then((res) => res.json())
    .then((data) =>
      data.filter((producto) => producto.categoria === "alimento gato"),
    )
    .catch((err) => {
      console.error("Error al cargar productos:", err);
      return [];
    });
}

export function recorridoSnacks() {
  return fetch("/data/productos.json")
    .then((res) => res.json())
    .then((data) => data.filter((producto) => producto.categoria === "snacks"))
    .catch((err) => {
      console.error("Error al cargar productos:", err);
      return [];
    });
}

export function recorridoZeeDog() {
  return fetch("/data/productos.json")
    .then((res) => res.json())
    .then((data) =>
      data.filter((producto) => producto.categoria === "accesorios zee.dog"),
    )
    .catch((err) => {
      console.error("Error al cargar productos:", err);
      return [];
    });
}

export function recorridoZeeCat() {
  return fetch("/data/productos.json")
    .then((res) => res.json())
    .then((data) =>
      data.filter((producto) => producto.categoria === "accesorios zee.cat"),
    )
    .catch((err) => {
      console.error("Error al cargar productos:", err);
      return [];
    });
}

export function recorridoArenas() {
  return fetch("/data/productos.json")
    .then((res) => res.json())
    .then((data) => data.filter((producto) => producto.categoria === "arenas"))
    .catch((err) => {
      console.error("Error al cargar productos:", err);
      return [];
    });
}

export function recorridoJuguetes() {
  return fetch("/data/productos.json")
    .then((res) => res.json())
    .then((data) =>
      data.filter((producto) => producto.categoria === "juguetes"),
    )
    .catch((err) => {
      console.error("Error al cargar productos:", err);
      return [];
    });
}
