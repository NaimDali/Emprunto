const API_URL = "http://localhost:4000/auth/";
class AuthService {
  login(credentials) {
    return fetch(API_URL + "login", { method: "POST", body: credentials }).then(
      (response) => {
        if (response.data.jwt) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }
        return response.data;
      }
    );
  }
  logout() {
    localStorage.removeItem("user");
  }
  register(user) {
    return fetch(API_URL + "register", {
      method: "POST",
      body: user,
    });
  }
  getCurrentUser() {
    return JSON.parse(localStorage.getItem("user"));
  }
}
export default new AuthService();
