import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com'


export const fetchApi = async (url) => {
    const {data} = await axios.get((url), {
        headers: {
            'X-RapidAPI-Key': 'fedb3d05d3msh90b0d5ddd0df7b0p1030bbjsnc66034acbbdc',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
          }
        
    })

    return data
}