import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0x366307a38875d0591523D4157719E74C4ed8EeF4'
);

export default instance;
