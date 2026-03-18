<template>
  <div class="modal fade" id="checkoutModal" tabindex="-1">
    <div class="modal-dialog">
      <div class="modal-content">

        <div class="modal-header">
          <h5 class="modal-title">Finalizar Compra</h5>
          <button class="btn-close" data-bs-dismiss="modal"></button>
        </div>

        <div class="modal-body">

          <label class="form-label">Tipo de entrega</label>
          <select v-model="tipoEntrega" class="form-select">
            <option value="retiro">Retiro en tienda</option>
            <option value="envio">Envío a domicilio</option>
          </select>


          <div v-if="tipoEntrega === 'envio'" class="mt-3">
            <label class="form-label">Dirección</label>
            <input v-model="direccion" type="text" class="form-control">

            <label class="form-label mt-3">Forma de pago</label>
            <select v-model="formaPago" class="form-select">
              <option value="efectivo">Efectivo</option>
              <option value="transferencia">Transferencia</option>
              <option value="tarjeta">Tarjeta</option>
            </select>

            <div v-if="formaPago === 'efectivo'" class="mt-3">
              <label class="form-label">Pago con cuánto</label>
              <input v-model="vuelto" type="number" class="form-control">
              <div v-if="vuelto < total" class="text-danger">El monto ingresado es menor al total</div>
            </div>
          </div>

        </div>

        <div class="modal-footer">
          <button class="btn btn-success" @click="enviarPedido">
            Enviar Pedido por WhatsApp
          </button>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["carrito"],
  data() {
    return {
      tipoEntrega: "retiro",
      direccion: "",
      formaPago: "efectivo",
      vuelto: "",
      errorMensaje: ""
    }
  },
  computed: {
    total() {
      return this.carrito.reduce((acc, producto) => acc + producto.precio * producto.cantidad, 0);
    }
  },
  methods: {
    enviarPedido() {
      // Validación: si es efectivo, el vuelto debe ser mayor o igual al total
      if (this.tipoEntrega === 'envio' && this.formaPago === 'efectivo' && Number(this.vuelto) < this.total) {
        this.errorMensaje = 'El monto ingresado es menor al total.';
        return;
      }
      this.errorMensaje = '';

      const productosTexto = this.carrito.map(producto => {
        const subtotal = producto.precio * producto.cantidad;
        return `• ${producto.nombre}\nFormato: ${producto.formato}\nCantidad: ${producto.cantidad}\nSubtotal: $${subtotal.toLocaleString("es-CL")}`;
      }).join("\n\n");

      const entrega = this.tipoEntrega === "envio"
        ? `🚚 Envío a: ${this.direccion}`
        : `📍 Retiro en tienda`;

      const pago = this.formaPago === "efectivo"
        ? `💵 Efectivo (vuelto para $${this.vuelto})`
        : `💳 ${this.formaPago}`;

      const mensaje =
        `🐾 Nueva solicitud de compra\n\n${productosTexto}\n\n💰 Total: $${this.total.toLocaleString("es-CL")}\n\n${entrega}\n${pago}`;

      const url = `https://api.whatsapp.com/send?phone=56911111111&text=${encodeURIComponent(mensaje)}`;
      window.open(url, "_blank");
    }
  }
}
</script>