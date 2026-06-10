import axios from "axios"

const api = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/"
})

// esto me permite luego hacer
// axios.get("/users")

export default api