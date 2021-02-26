import http from "../http-common"
class BudgetData {
  getAll(data) {
    return http.get("/budgets", data);
  }
  create(data) {
    return http.post("/budgets", data);
  }
  update(data) {
    return http.put(`/budgets`, data);
  }
  delete(data) {
    return http.delete(`/budgets`, data);
  }
}
export default new BudgetData();