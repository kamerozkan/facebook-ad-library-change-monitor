// Run facebook-ad-library-change-monitor on Apify and print the results. npm install apify-client
import { ApifyClient } from 'apify-client';

const client = new ApifyClient({ token: process.env.APIFY_TOKEN });
const input = {
  "pageIds": [
    "15087023444"
  ],
  "country": "US",
  "mode": "AUTO",
  "maxAdsPerPage": 10,
  "outputMode": "ALL_CHECKED",
  "includeBaseline": true
};
const run = await client.actor('kamerozkan/facebook-ad-library-change-monitor').call(input);
const { items } = await client.dataset(run.defaultDatasetId).listItems();
console.log(items);
