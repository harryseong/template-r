import axios, { AxiosResponse } from "axios";

export const PlacesAPI = {
    async getAll(): Promise<AxiosResponse> {
        const response = await axios
            .get(
                `${process.env.REACT_APP_V1_API_ENDPOINT}/places`,
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                        'x-api-key': process.env.REACT_APP_API_KEY
                    }
                }
            );
        return response;
    }
}
