import http from "../http-common"
class BudgetData {
  getAll(id) {
    return http.get(`/budgets/${id}`);
  }
  create(data) {
    console.log(data, 'running start')
    return http.post("/budgets", data);
  }
  update(id, data) {
    return http.put(`/budgets/:id`, data);
  }
  delete(data) {
    return http.delete(`/budgets`, data);
  }
}
export default new BudgetData();