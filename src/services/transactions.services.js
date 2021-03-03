import http from "../http-common"
class TransactionData {
  getAll(id) {
    return http.get(`/transactions/${id}`);
  }
  create(data) {
    return http.post("/transactions", data);
  }
  update(id, data) {
    return http.put(`/transactions/${id}`, data);
  }
  delete(data) {
    return http.delete(`/transactions`, data);
  }
}
export default new TransactionData();