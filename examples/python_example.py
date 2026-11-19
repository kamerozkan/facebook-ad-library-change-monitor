"""Run facebook-ad-library-change-monitor on Apify and print the results. pip install apify-client"""
import os

from apify_client import ApifyClient

client = ApifyClient(os.environ["APIFY_TOKEN"])
run_input = {'pageIds': ['15087023444'],
 'country': 'US',
 'mode': 'AUTO',
 'maxAdsPerPage': 10,
 'outputMode': 'ALL_CHECKED',
 'includeBaseline': True}
run = client.actor("kamerozkan/facebook-ad-library-change-monitor").call(run_input=run_input)
for item in client.dataset(run["defaultDatasetId"]).iterate_items():
    print(item)
