import { Service } from "../service";

class ApiPublication extends Service {
  getPublications() {
    return this.request({
      url: `publications`
    });
  }

  deletePublication(id) {
    return this.request({
      url: `publications/${id}`,
      method: "DELETE"
    });
  }

  getPublication(id) {
    return this.request({
      url: `publications/${id}`
    });
  }

  updatePublication({ id, body, headers }) {
    return this.request({
      url: `publications/${id}`,
      method: "PUT",
      body,
      headers
    });
  }

  createPublication(body) {
    return this.request({
      url: `publications`,
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    });
  }
}

export default new ApiPublication();
