import http from "../http-common";

class PaymentService {
  getAll() {
    //get all data for table
    return http.get("/data");
  }
}

export default new PaymentService();
