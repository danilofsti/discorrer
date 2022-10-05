import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://192.168.15.12:5001/api',
  timeout: 10000,
});

export async function read(url) {
  try{
    const { data } = await axiosInstance.get(url);
    return data;
  }catch (error) {
    console.log(error)
  }
}

export async function exclude(url) {
  await axiosInstance.delete(url);
}

export async function create(url, object) {
  try{
    const {data} = await axiosInstance.post(url, object);
    return data;
  }catch (error) {
    console.log(error)
  }
}

export async function edit(url, object) {
  try{
    const {data} = await axiosInstance.put(url, object);
    return data;
  }catch (error) {
    console.log(error)
  }
}
