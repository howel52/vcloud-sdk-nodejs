// import Client from 'vcloud-sdk-nodejs';
import Client from '../core/index';
import { Policy } from 'src/models';

const client = new Client({
  accesskey: 'xxx',
  secretkey: 'xxx'
});
const policy: Policy = {
  Statement: [
    {
      Effect: 'Allow',
      Action: ['*'],
      Resource: ['*']
    }
  ]
};

console.log(client.SignSts2(policy, 60 * 1000 * 3));
