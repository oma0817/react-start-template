const { parse } = JSON;
const auth = {
  clear(key) {
    if (localStorage && localStorage.getItem(key)) {
      return localStorage.removeItem(key);
    }
    if (localStorage && localStorage.getItem(key)) {
      return localStorage.removeItem(key);
    }
    return null;
  },
  clearAppStorage() {
    return localStorage.clear();
  },
  get(key) {
    return parse(localStorage.getItem(key));
  },
  setToken(token) {
    return localStorage.setItem("token", token);
  },
  getToken() {
    return localStorage.getItem("token");
  },
  setRefreshToken(token) {
    return localStorage.setItem("refreshToken", token);
  },
  getRefreshToken() {
    return localStorage.getItem("refreshToken");
  },
  setEmail(email) {
    return localStorage.setItem("email", email);
  },
  getEmail() {
    return localStorage.getItem("email");
  },
  setFirst(first) {
    return localStorage.setItem("first", first);
  },
  getFirst() {
    return localStorage.getItem("first");
  },
};
export default auth;
