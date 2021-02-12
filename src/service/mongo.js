import axios from 'axios'

const base_url = "http://localhost:4000/questions"

export function getList() {
    const response = axios.get(base_url)
    return response
}

export function addQuestion(request) {
    axios.post(base_url, request)
}

export function editQuestion(id, request) {
    axios.put(`${base_url}/${id}`, request)
}

export function removeQuestion(id) {
    axios.delete(`${base_url}/${id}`)
}
