import { fetchUtils } from 'react-admin';
import simpleRestProvider from 'ra-data-simple-rest';

const httpClient = fetchUtils.fetchJson;

const dataProvider = simpleRestProvider('http://localhost:3001', httpClient);

export default dataProvider;
