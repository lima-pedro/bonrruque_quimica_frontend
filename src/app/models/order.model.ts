export interface Order {
  id: string,
  observacoes: string,
  pontoReferenciaEntrega: string,
  formaPagamento: string,
  dataEntrega: string,
  produtos_pedido: string,
  clienteId: number
}