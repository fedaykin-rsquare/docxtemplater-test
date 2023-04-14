import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

const buildingRequestConfig: AxiosRequestConfig = {
  url: 'https://rtb-api.eng.rsquareon.com/api/v1/proposal/office/buildings',
  method: 'POST',
  headers: {
    Authorization: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJkZXB0TmFtZSI6IldlYuqwnOuwnDHtjIAiLCJwcnZzblBhZ2luZ0NudCI6MTUsInBydnNuTGFuZ0NkIjoiMDEiLCJpc0FieXNzIjoiTiIsInBydnNuQmdDb2xvciI6IiMzNDNhNDAiLCJtb2JUeXBlIjoiU1BQIiwiaXNzIjoiaHR0cHM6Ly9ydGItYXBpLnJzcXVhcmVvbi5jb20iLCJkZXB0SWQiOiJEUDAwMTAiLCJwcnZzblRpcENudCI6NSwicHJ2c25NaWxsaW9uRGlzcHlZbiI6Ik4iLCJwcnZzbkJsZFZpZXdDZCI6IjAxIiwicHJ2c25BbGxUaXBzQ250Ijo1LCJ1c2VyTmFtZSI6IuygleyDgeyatCIsInVzZXJJZCI6IlVTUjAwMDg2NiIsInJvbGVJZHMiOiJST0wxMTA0LFJPTDAwMDEsUk9MMDAwMiIsImlzTW9iWW4iOiJOIiwicHJ2c25GbHJvbU9wZW5ZbiI6IlkiLCJwcnZzblNjcmFwQ250IjoxNSwiZXhwIjoxNjgwOTQzMjI1LCJpYXQiOjE2ODA3NzA0MjUsImVtYWlsIjoiZmVkYXlraW5AcnNxdWFyZS5jby5rciJ9.op7fVjEQityXyzjze4KlidupUcTTkyw-D0KYi__Sm9Q',
    'Content-Type': 'application/json;charset=UTF-8;',
  },
  // data: ['BLD00038613'],
  // data: ['BLD00039446'],
  data: {
    fireBaseToken: 'eEruYkUzzNoMIENVW7qZjv:APA91bEPrMBN1-tGWa4I6P84fID901wUYVx1CongKtvo_U6FYCUG5LhMTSL5MHP4XKmSyd-7v9Oe6sAcJyHG3TILkG4H_AAB0lifuauGnyQo4RZWjPiBVwbnAAxk5q7xdJzR1_4BOTi5',
    // buildingIdList: ['BLD00038613', 'BLD00039446'],
    buildingIdList: ['BLD00048309'],
  },
} as AxiosRequestConfig;

const productRequestConfig: AxiosRequestConfig = {
  url: 'https://rtb-api.eng.rsquareon.com/api/v1/proposal/office/products',
  method: 'POST',
  headers: {
    Authorization: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJkZXB0TmFtZSI6IldlYuqwnOuwnDHtjIAiLCJwcnZzblBhZ2luZ0NudCI6MTUsInBydnNuTGFuZ0NkIjoiMDEiLCJpc0FieXNzIjoiTiIsInBydnNuQmdDb2xvciI6IiMzNDNhNDAiLCJtb2JUeXBlIjoiU1BQIiwiaXNzIjoiaHR0cHM6Ly9ydGItYXBpLnJzcXVhcmVvbi5jb20iLCJkZXB0SWQiOiJEUDAwMTAiLCJwcnZzblRpcENudCI6NSwicHJ2c25NaWxsaW9uRGlzcHlZbiI6Ik4iLCJwcnZzbkJsZFZpZXdDZCI6IjAxIiwicHJ2c25BbGxUaXBzQ250Ijo1LCJ1c2VyTmFtZSI6IuygleyDgeyatCIsInVzZXJJZCI6IlVTUjAwMDg2NiIsInJvbGVJZHMiOiJST0wxMTA0LFJPTDAwMDEsUk9MMDAwMiIsImlzTW9iWW4iOiJOIiwicHJ2c25GbHJvbU9wZW5ZbiI6IlkiLCJwcnZzblNjcmFwQ250IjoxNSwiZXhwIjoxNjgwOTQzMjI1LCJpYXQiOjE2ODA3NzA0MjUsImVtYWlsIjoiZmVkYXlraW5AcnNxdWFyZS5jby5rciJ9.op7fVjEQityXyzjze4KlidupUcTTkyw-D0KYi__Sm9Q',
    'Content-Type': 'application/json;charset=UTF-8;',
  },
  data: {
    fireBaseToken: 'eEruYkUzzNoMIENVW7qZjv:APA91bEPrMBN1-tGWa4I6P84fID901wUYVx1CongKtvo_U6FYCUG5LhMTSL5MHP4XKmSyd-7v9Oe6sAcJyHG3TILkG4H_AAB0lifuauGnyQo4RZWjPiBVwbnAAxk5q7xdJzR1_4BOTi5',
    productIdList: ['PRD10070490']
  },
} as AxiosRequestConfig;

const retailBuildingsRequestConfig: AxiosRequestConfig = {
  url: 'https://rtb-api.eng.rsquareon.com/api/v1/proposal/retail/buildings',
  method: 'POST',
  headers: {
    Authorization: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJkZXB0TmFtZSI6IldlYuqwnOuwnDHtjIAiLCJwcnZzblBhZ2luZ0NudCI6MTUsInBydnNuTGFuZ0NkIjoiMDEiLCJpc0FieXNzIjoiTiIsInBydnNuQmdDb2xvciI6IiMzNDNhNDAiLCJtb2JUeXBlIjoiU1BQIiwiaXNzIjoiaHR0cHM6Ly9ydGItYXBpLnJzcXVhcmVvbi5jb20iLCJkZXB0SWQiOiJEUDAwMTAiLCJwcnZzblRpcENudCI6NSwicHJ2c25NaWxsaW9uRGlzcHlZbiI6Ik4iLCJwcnZzbkJsZFZpZXdDZCI6IjAxIiwicHJ2c25BbGxUaXBzQ250Ijo1LCJ1c2VyTmFtZSI6IuygleyDgeyatCIsInVzZXJJZCI6IlVTUjAwMDg2NiIsInJvbGVJZHMiOiJST0wxMTA0LFJPTDAwMDEsUk9MMDAwMiIsImlzTW9iWW4iOiJOIiwicHJ2c25GbHJvbU9wZW5ZbiI6IlkiLCJwcnZzblNjcmFwQ250IjoxNSwiZXhwIjoxNjgwOTQzMjI1LCJpYXQiOjE2ODA3NzA0MjUsImVtYWlsIjoiZmVkYXlraW5AcnNxdWFyZS5jby5rciJ9.op7fVjEQityXyzjze4KlidupUcTTkyw-D0KYi__Sm9Q',
    'Content-Type': 'application/json;charset=UTF-8;',
  },
  // data: ['BLD00038613'],
  data: {
    fireBaseToken: 'eEruYkUzzNoMIENVW7qZjv:APA91bEPrMBN1-tGWa4I6P84fID901wUYVx1CongKtvo_U6FYCUG5LhMTSL5MHP4XKmSyd-7v9Oe6sAcJyHG3TILkG4H_AAB0lifuauGnyQo4RZWjPiBVwbnAAxk5q7xdJzR1_4BOTi5',
    buildingIdList: ['BLD00039446']
  },
} as AxiosRequestConfig;

const retailProductRequestConfig: AxiosRequestConfig = {
  url: 'https://rtb-api.eng.rsquareon.com/api/v1/proposal/retail/products',
  method: 'POST',
  headers: {
    Authorization: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJkZXB0TmFtZSI6IldlYuqwnOuwnDHtjIAiLCJwcnZzblBhZ2luZ0NudCI6MTUsInBydnNuTGFuZ0NkIjoiMDEiLCJpc0FieXNzIjoiTiIsInBydnNuQmdDb2xvciI6IiMzNDNhNDAiLCJtb2JUeXBlIjoiU1BQIiwiaXNzIjoiaHR0cHM6Ly9ydGItYXBpLnJzcXVhcmVvbi5jb20iLCJkZXB0SWQiOiJEUDAwMTAiLCJwcnZzblRpcENudCI6NSwicHJ2c25NaWxsaW9uRGlzcHlZbiI6Ik4iLCJwcnZzbkJsZFZpZXdDZCI6IjAxIiwicHJ2c25BbGxUaXBzQ250Ijo1LCJ1c2VyTmFtZSI6IuygleyDgeyatCIsInVzZXJJZCI6IlVTUjAwMDg2NiIsInJvbGVJZHMiOiJST0wxMTA0LFJPTDAwMDEsUk9MMDAwMiIsImlzTW9iWW4iOiJOIiwicHJ2c25GbHJvbU9wZW5ZbiI6IlkiLCJwcnZzblNjcmFwQ250IjoxNSwiZXhwIjoxNjgwOTQzMjI1LCJpYXQiOjE2ODA3NzA0MjUsImVtYWlsIjoiZmVkYXlraW5AcnNxdWFyZS5jby5rciJ9.op7fVjEQityXyzjze4KlidupUcTTkyw-D0KYi__Sm9Q',
    'Content-Type': 'application/json;charset=UTF-8;',
  },
  data: {
    fireBaseToken: 'eEruYkUzzNoMIENVW7qZjv:APA91bEPrMBN1-tGWa4I6P84fID901wUYVx1CongKtvo_U6FYCUG5LhMTSL5MHP4XKmSyd-7v9Oe6sAcJyHG3TILkG4H_AAB0lifuauGnyQo4RZWjPiBVwbnAAxk5q7xdJzR1_4BOTi5',
    productIdList: ['PRD10070490']
  },
} as AxiosRequestConfig;

const warehouseRequestConfig: AxiosRequestConfig = {
  url: 'https://rtb-api.eng.rsquareon.com/api/v1/proposal/warehouses',
  method: 'POST',
  headers: {
    Authorization: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJkZXB0TmFtZSI6IldlYuqwnOuwnDHtjIAiLCJwcnZzblBhZ2luZ0NudCI6MTUsInBydnNuTGFuZ0NkIjoiMDEiLCJpc0FieXNzIjoiTiIsInBydnNuQmdDb2xvciI6IiMzNDNhNDAiLCJtb2JUeXBlIjoiU1BQIiwiaXNzIjoiaHR0cHM6Ly9ydGItYXBpLnJzcXVhcmVvbi5jb20iLCJkZXB0SWQiOiJEUDAwMTAiLCJwcnZzblRpcENudCI6NSwicHJ2c25NaWxsaW9uRGlzcHlZbiI6Ik4iLCJwcnZzbkJsZFZpZXdDZCI6IjAxIiwicHJ2c25BbGxUaXBzQ250Ijo1LCJ1c2VyTmFtZSI6IuygleyDgeyatCIsInVzZXJJZCI6IlVTUjAwMDg2NiIsInJvbGVJZHMiOiJST0wxMTA0LFJPTDAwMDEsUk9MMDAwMiIsImlzTW9iWW4iOiJOIiwicHJ2c25GbHJvbU9wZW5ZbiI6IlkiLCJwcnZzblNjcmFwQ250IjoxNSwiZXhwIjoxNjgwOTQzMjI1LCJpYXQiOjE2ODA3NzA0MjUsImVtYWlsIjoiZmVkYXlraW5AcnNxdWFyZS5jby5rciJ9.op7fVjEQityXyzjze4KlidupUcTTkyw-D0KYi__Sm9Q',
    'Content-Type': 'application/json;charset=UTF-8;',
  },
  data: {
    fireBaseToken: 'eEruYkUzzNoMIENVW7qZjv:APA91bEPrMBN1-tGWa4I6P84fID901wUYVx1CongKtvo_U6FYCUG5LhMTSL5MHP4XKmSyd-7v9Oe6sAcJyHG3TILkG4H_AAB0lifuauGnyQo4RZWjPiBVwbnAAxk5q7xdJzR1_4BOTi5',
    warehouseIdList: ['BLD50013151']
  },
} as AxiosRequestConfig;


const warehouseProductRequestConfig: AxiosRequestConfig = {
  url: 'https://rtb-api.eng.rsquareon.com/api/v1/proposal/warehouse-products',
  method: 'POST',
  headers: {
    Authorization: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJkZXB0TmFtZSI6IldlYuqwnOuwnDHtjIAiLCJwcnZzblBhZ2luZ0NudCI6MTUsInBydnNuTGFuZ0NkIjoiMDEiLCJpc0FieXNzIjoiTiIsInBydnNuQmdDb2xvciI6IiMzNDNhNDAiLCJtb2JUeXBlIjoiU1BQIiwiaXNzIjoiaHR0cHM6Ly9ydGItYXBpLnJzcXVhcmVvbi5jb20iLCJkZXB0SWQiOiJEUDAwMTAiLCJwcnZzblRpcENudCI6NSwicHJ2c25NaWxsaW9uRGlzcHlZbiI6Ik4iLCJwcnZzbkJsZFZpZXdDZCI6IjAxIiwicHJ2c25BbGxUaXBzQ250Ijo1LCJ1c2VyTmFtZSI6IuygleyDgeyatCIsInVzZXJJZCI6IlVTUjAwMDg2NiIsInJvbGVJZHMiOiJST0wxMTA0LFJPTDAwMDEsUk9MMDAwMiIsImlzTW9iWW4iOiJOIiwicHJ2c25GbHJvbU9wZW5ZbiI6IlkiLCJwcnZzblNjcmFwQ250IjoxNSwiZXhwIjoxNjgwOTQzMjI1LCJpYXQiOjE2ODA3NzA0MjUsImVtYWlsIjoiZmVkYXlraW5AcnNxdWFyZS5jby5rciJ9.op7fVjEQityXyzjze4KlidupUcTTkyw-D0KYi__Sm9Q',
    'Content-Type': 'application/json;charset=UTF-8;',
  },
  data: {
    fireBaseToken: 'eEruYkUzzNoMIENVW7qZjv:APA91bEPrMBN1-tGWa4I6P84fID901wUYVx1CongKtvo_U6FYCUG5LhMTSL5MHP4XKmSyd-7v9Oe6sAcJyHG3TILkG4H_AAB0lifuauGnyQo4RZWjPiBVwbnAAxk5q7xdJzR1_4BOTi5',
    productIdList: ['PRD50007197']
  },
} as AxiosRequestConfig;


try {
  (async () => {
    // const { data } = await axios.request<number, AxiosResponse<number>>(buildingRequestConfig);
    // const { data } = await axios.request<number, AxiosResponse<number>>(productRequestConfig);
    const { data } = await axios.request<number, AxiosResponse<number>>(retailBuildingsRequestConfig);
    // const { data } = await axios.request<number, AxiosResponse<number>>(retailProductRequestConfig);
    // const { data } = await axios.request<number, AxiosResponse<number>>(warehouseRequestConfig);
    // const { data } = await axios.request<number, AxiosResponse<number>>(warehouseProductRequestConfig);

    console.log('response data :::: ', data);
  })();
} catch (e) {
  console.error(JSON.stringify(e));
}