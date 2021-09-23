import axios, { AxiosResponse } from 'axios';

export const checkAdmin = async (uuid: string): Promise<void> => {
  const axiosResp: AxiosResponse<boolean> = await axios.get(
    `http://localhost:3000/user/${uuid}`
  );
};
