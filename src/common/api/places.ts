import axios, { AxiosResponse } from "axios";

export const PlacesAPI = {
    async getAll(): Promise<AxiosResponse> {
        const url = `${process.env.REACT_APP_V1_API_ENDPOINT}/places`;
        const headers = {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'x-api-key': process.env.REACT_APP_API_KEY
        };

        const response = await axios.get(url, { headers });
        return response;
    }
}
