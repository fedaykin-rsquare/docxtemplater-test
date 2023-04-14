import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

// <{fireBaseToken=eEruYkUzzNoMIENVW7qZjv:APA91bEPrMBN1-tGWa4I6P84fID901wUYVx1CongKtvo_U6FYCUG5LhMTSL5MHP4XKmSyd-7v9Oe6sAcJyHG3TILkG4H_AAB0lifuauGnyQo4RZWjPiBVwbnAAxk5q7xdJzR1_4BOTi5, proposalPath=test, proposalStatus=COMPLETED, proposalId=PDF00030955},[Method:"POST", User-Agent:"rsquare-dev-proposal-api", Content-Type:"application/json"]>

const requestConfig: AxiosRequestConfig = {
  url: 'https://rtb-api.eng.rsquareon.com/api/v1/proposal/PDF00030955',
  method: 'POST',
  headers: {
    'User-Agent': 'rsquare-dev-proposal-api',
    'Content-Type': 'application/json',
  },
  body: {
    proposalPath: 'test',
    proposalStatus: 'COMPLETED',
    proposalId: 'PDF00030955',
    fireBaseToken: 'eEruYkUzzNoMIENVW7qZjv:APA91bEPrMBN1-tGWa4I6P84fID901wUYVx1CongKtvo_U6FYCUG5LhMTSL5MHP4XKmSyd-7v9Oe6sAcJyHG3TILkG4H_AAB0lifuauGnyQo4RZWjPiBVwbnAAxk5q7xdJzR1_4BOTi5',
  },
  json: true,
} as AxiosRequestConfig;

(async () => {
  const { data } = await axios.request<string, AxiosResponse<string>>(requestConfig);

  console.log('data :', data);
})();