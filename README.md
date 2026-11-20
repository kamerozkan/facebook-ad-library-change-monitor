# Facebook Ad Library Scraper - Meta Ads Monitor & New Ads Alert

Facebook Ad Library scraper, competitor ad monitor and new ads alert for exact Meta Pages. Collect active Facebook and Instagram ads without login or an API key. Export ad copy, links, media and platforms, with verified new, stopped, resumed and asset-change events across runs.

**[Run it on Apify Store](https://apify.com/kamerozkan/facebook-ad-library-change-monitor)**: no servers, no proxies to manage, results as JSON, CSV or Excel, or straight into your app through the API.

## Why use it

- Runs in the cloud on [Apify](https://apify.com/kamerozkan/facebook-ad-library-change-monitor); start it from the browser, the API, a schedule, or tools like Make, n8n and Zapier.
- Pay only for results. The current price and plan discounts are always on the [Store page](https://apify.com/kamerozkan/facebook-ad-library-change-monitor).
- Cap the cost of any run with the maximum cost per run setting.

## Quick start

1. Open the [Actor page](https://apify.com/kamerozkan/facebook-ad-library-change-monitor) and click **Try for free**.
2. Paste an input like the one below and click **Start**.
3. Download the dataset or read it over the API.

```json
{
  "pageIds": [
    "15087023444"
  ],
  "country": "US",
  "mode": "AUTO",
  "maxAdsPerPage": 10,
  "outputMode": "ALL_CHECKED",
  "includeBaseline": true
}
```

## Use it from code

Python ([examples/python_example.py](examples/python_example.py)), Node.js ([examples/node_example.js](examples/node_example.js)) and cURL ([examples/curl.sh](examples/curl.sh)) examples are in the `examples` folder. All of them need an [Apify API token](https://console.apify.com/settings/integrations).

## Use in n8n & Make

- **n8n:** Import [integrations/n8n-workflow.json](integrations/n8n-workflow.json) directly into your n8n workspace, set your `APIFY_TOKEN` environment variable (or Bearer token header), and click **Execute Workflow**.
- **Make / Zapier:** Call the Apify **Run an Actor** module with Actor ID `kamerozkan/facebook-ad-library-change-monitor` and the JSON input above, or POST to `https://api.apify.com/v2/acts/kamerozkan~facebook-ad-library-change-monitor/run-sync-get-dataset-items`.

## Use with AI Agents (Apify MCP)

This Actor works with Claude Desktop, Cursor, Windsurf and any MCP-compatible AI agent through the official [Apify MCP Server](https://mcp.apify.com). Copy [integrations/mcp-config.json](integrations/mcp-config.json) into your MCP client configuration and replace `YOUR_APIFY_TOKEN` with your token.

## Sample output

Real rows from a recent run, with any contact details masked. Full sample: [sample-output.json](sample-output.json).

```json
[
  {
    "recordType": "CURRENT",
    "status": "CURRENT",
    "eventId": null,
    "eventType": null,
    "monitorName": "competitor-watch",
    "monitorKey": "competitor-watch:15087023444:ALL:active",
    "modeUsed": "NEW_LAUNCH_FEED",
    "country": "ALL",
    "keyword": null,
    "advertiserId": "15087023444",
    "advertiserName": "Nike",
    "creativeId": "1702938977100376",
    "format": "DPA",
    "platforms": [
      "AUDIENCE_NETWORK",
      "FACEBOOK",
      "INSTAGRAM",
      "MESSENGER"
    ],
    "firstShown": "2025-04-07",
    "lastShown": "2026-11-20",
    "headline": "{{product.name}}",
    "body": "Bring sports more fully into your day with the Nike App.",
    "destinationUrl": "http://itunes.apple.com/app/id1095459556",
    "primaryAssetUrl": "https://scontent-bos5-1.xx.fbcdn.net/v/t39.35426-6/431631323_928727432024463_5606595664509361185_n.jpg?_nc_cat=103&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=c53f8f&_nc_ohc=0T7Fdwf0ixkQ7kNvwHKf0J3&_nc_oc=Adpsz2ivO2niXvQwsC5eeSNKjgz7W4DrgSXMBcfaOisfzonZsmXsLO0w1-ginusuJGAjEwHeS_YceZ_1p1nty0eC&_nc_zt=14&_nc_ht=scontent-bos5-1.xx&_nc_gid=Pv9NEmPnS8NgYZptt1A79g&_nc_ss=7b289&oh=00_AQQ8onYxuOvGcEGpWcyVZxqglMObrw8pk94-l2F3Nkfjew&oe=6B061EE7",
    "sourceUrl": "https://www.facebook.com/ads/library/?id=1702938977100376",
    "assetUrls": [
      "https://scontent-bos5-1.xx.fbcdn.net/v/t39.35426-6/431631323_928727432024463_5606595664509361185_n.jpg?_nc_cat=103&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=c53f8f&_nc_ohc=0T7Fdwf0ixkQ7kNvwHKf0J3&_nc_oc=Adpsz2ivO2niXvQwsC5eeSNKjgz7W4DrgSXMBcfaOisfzonZsmXsLO0w1-ginusuJGAjEwHeS_YceZ_1p1nty0eC&_nc_zt=14&_nc_ht=scontent-bos5-1.xx&_nc_gid=Pv9NEmPnS8NgYZptt1A79g&_nc_ss=7b289&oh=00_AQQ8onYxuOvGcEGpWcyVZxqglMObrw8pk94-l2F3Nkfjew&oe=6B061EE7",
      "https://scontent-bos5-1.xx.fbcdn.net/v/t39.35426-6/431631323_928727432024463_5606595664509361185_n.jpg?stp=dst-jpg_s600x600_tt6&_nc_cat=103&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=c53f8f&_nc_ohc=0T7Fdwf0ixkQ7kNvwHKf0J3&_nc_oc=Adpsz2ivO2niXvQwsC5eeSNKjgz7W4DrgSXMBcfaOisfzonZsmXsLO0w1-ginusuJGAjEwHeS_YceZ_1p1nty0eC&_nc_zt=14&_nc_ht=scontent-bos5-1.xx&_nc_gid=Pv9NEmPnS8NgYZptt1A79g&_nc_ss=7b289&oh=00_AQSqly-gwgSMpt6DMXJjTtcDtF3A5nhSLSxchgBN7aunGA&oe=6B061EE7",
      "https://scontent-bos5-1.xx.fbcdn.net/v/t39.35426-6/431644642_737508601479774_8272309847273720820_n.jpg?_nc_cat=102&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=c53f8f&_nc_ohc=4K8bP4GtR6IQ7kNvwHZzj7W&_nc_oc=AdrEf_ZUW_DVztjfZkT0IsYVVC7evKsUWbt3CVPxy4c-_zzmhay7RIP2ZCqEWIcKAnKeMM0_FhVhoJKkD9589Hks&_nc_zt=14&_nc_ht=scontent-bos5-1.xx&_nc_gid=Pv9NEmPnS8NgYZptt1A79g&_nc_ss=7b289&oh=00_AQQ_xGNy09rkbHnir9zprqlmSTbDGzQlIn9x4z18LItjuw&oe=6B063B83",
      "https://scontent-bos5-1.xx.fbcdn.net/v/t39.35426-6/431644642_737508601479774_8272309847273720820_n.jpg?stp=dst-jpg_s600x600_tt6&_nc_cat=102&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=c53f8f&_nc_ohc=4K8bP4GtR6IQ7kNvwHZzj7W&_nc_oc=AdrEf_ZUW_DVztjfZkT0IsYVVC7evKsUWbt3CVPxy4c-_zzmhay7RIP2ZCqEWIcKAnKeMM0_FhVhoJKkD9589Hks&_nc
```

## Support

Found a problem or need a field? Open an issue on the [Actor's Issues tab](https://apify.com/kamerozkan/facebook-ad-library-change-monitor/issues) and include your run link.

---
This repository holds usage examples and sample data. The Actor itself runs on Apify.
