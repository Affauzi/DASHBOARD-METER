import http from "../http-common";

class DataAntares {
  getAll() {
    //get all data for table
    return http.get("/data");
  }
  getOne() {
    // console.log("_________no Meter:", localStorage.getItem("user"));
    var no_meter = sessionStorage.getItem("user");
    //console.log(no_meter, typeof no_meter);
    var url = `/data/${no_meter}`;
    // console.log("------------URL:", url);
    return http.get(url);
  }

  //   get(id) {
  //     return http.get(`/tutorials/${id}`);
  //   }

  //   create(data) {
  //     return http.post("/tutorials", data);
  //   }

  //   update(id, data) {
  //     return http.put(`/tutorials/${id}`, data);
  //   }

  //   delete(id) {
  //     return http.delete(`/tutorials/${id}`);
  //   }

  //   deleteAll() {
  //     return http.delete(`/tutorials`);
  //   }

  //   findByTitle(title) {
  //     return http.get(`/tutorials?title=${title}`);
  //   }
}

export default new DataAntares();
