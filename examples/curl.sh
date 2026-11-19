#!/usr/bin/env bash
# Run facebook-ad-library-change-monitor synchronously and get the dataset items back. Needs APIFY_TOKEN.
curl -s -X POST "https://api.apify.com/v2/acts/kamerozkan~facebook-ad-library-change-monitor/run-sync-get-dataset-items" \
  -H "Authorization: Bearer $APIFY_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"pageIds": ["15087023444"], "country": "US", "mode": "AUTO", "maxAdsPerPage": 10, "outputMode": "ALL_CHECKED", "includeBaseline": true}'
