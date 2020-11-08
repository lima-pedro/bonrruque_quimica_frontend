export interface Pedido {
  id?: number;
  observacoes?: string,
  pontoReferenciaEntrega?: string,
  formaPagamento?: string,
  dataEntrega?: string,
  produtos_pedido?: string,
  clienteId?: number
}