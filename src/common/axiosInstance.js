import axios from "axios";

const usersMSInstance = axios.create({
  baseURL: "https://192.168.1.17:8080/v1/users"
  // baseURL: process.env.URL_USERS_MS
})

export {
  usersMSInstance
}
