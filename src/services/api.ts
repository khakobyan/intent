import axios from 'axios'
import { Platform } from 'react-native';
import {BASE_URL_ANDROID, BASE_URL_IOS} from '../utils/env';

const axiosApiConfig = {
  baseURL: Platform.OS == 'ios' ? `${BASE_URL_IOS}` : `${BASE_URL_ANDROID}`,
  timeout: 5000,
};

export const api = axios.create(axiosApiConfig);
