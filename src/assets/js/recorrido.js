export function obtenerProductosPorCategoria(categoria) {
  return fetch("/data/productos.json")
    .then((res) => res.json())
    .then((data) =>
      data.filter((producto) => producto.categoria === categoria),
    );
}
