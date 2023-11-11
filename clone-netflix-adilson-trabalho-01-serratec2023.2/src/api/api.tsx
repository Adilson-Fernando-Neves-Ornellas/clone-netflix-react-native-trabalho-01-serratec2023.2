import axios from "axios"

export const chaveApi = "8ff8235ec2a961b906a47f849db24d94";

export const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3'
})

