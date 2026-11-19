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
    "monitorKey": "competitor-watch:15087023444:US:active",
    "modeUsed": "NEW_LAUNCH_FEED",
    "country": "US",
    "keyword": null,
    "advertiserId": "15087023444",
    "advertiserName": "Nike",
    "creativeId": "1016451784037642",
    "format": "DPA",
    "platforms": [
      "FACEBOOK",
      "INSTAGRAM"
    ],
    "firstShown": "2025-06-20",
    "lastShown": "2026-11-09",
    "headline": "{{product.name}}",
    "body": "Get the gear that goes hard on and off the field.",
    "destinationUrl": "https://www.nike.com/us/en_us",
    "primaryAssetUrl": "https://scontent-ord5-1.xx.fbcdn.net/v/t39.35426-6/509094198_1485897442775736_2519419118144931021_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=c53f8f&_nc_ohc=m32__VZvkLwQ7kNvwGssyqv&_nc_oc=AdqMU-4a0MJTmHWCinvuo-glSZjXkzgtQk9WR28nfgdnwZ0wMqkUzJUSzpiYqRf5a7M-UspR6HIc1J9pbH4tPfhJ&_nc_zt=14&_nc_ht=scontent-ord5-1.xx&_nc_gid=ePqdk3CihlY3cUgnMtuDaw&_nc_ss=7b289&oh=00_AQRWOn6wnB3_ZyPFfrDN8A5Pi9EvK6fVFH7RrScywC87oA&oe=6AF742F5",
    "sourceUrl": "https://www.facebook.com/ads/library/?id=1016451784037642",
    "assetUrls": [
      "https://scontent-ord5-1.xx.fbcdn.net/v/t39.35426-6/509094198_1485897442775736_2519419118144931021_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=c53f8f&_nc_ohc=m32__VZvkLwQ7kNvwGssyqv&_nc_oc=AdqMU-4a0MJTmHWCinvuo-glSZjXkzgtQk9WR28nfgdnwZ0wMqkUzJUSzpiYqRf5a7M-UspR6HIc1J9pbH4tPfhJ&_nc_zt=14&_nc_ht=scontent-ord5-1.xx&_nc_gid=ePqdk3CihlY3cUgnMtuDaw&_nc_ss=7b289&oh=00_AQRWOn6wnB3_ZyPFfrDN8A5Pi9EvK6fVFH7RrScywC87oA&oe=6AF742F5",
      "https://scontent-ord5-1.xx.fbcdn.net/v/t39.35426-6/509094198_1485897442775736_2519419118144931021_n.jpg?stp=dst-jpg_s600x600_tt6&_nc_cat=111&ccb=1-7&_nc_sid=c53f8f&_nc_ohc=m32__VZvkLwQ7kNvwGssyqv&_nc_oc=AdqMU-4a0MJTmHWCinvuo-glSZjXkzgtQk9WR28nfgdnwZ0wMqkUzJUSzpiYqRf5a7M-UspR6HIc1J9pbH4tPfhJ&_nc_zt=14&_nc_ht=scontent-ord5-1.xx&_nc_gid=ePqdk3CihlY3cUgnMtuDaw&_nc_ss=7b289&oh=00_AQSpHvBhC4r5odyCYYgv8f9sExdTPHeVdLi5PMz3KUuX8Q&oe=6AF742F5",
      "https://scontent-ord5-1.xx.fbcdn.net/v/t39.35426-6/509290535_730168202720612_5631758797674183318_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=c53f8f&_nc_ohc=RpXLOaKtdSAQ7kNvwGdl69t&_nc_oc=AdrYxgbWnd4f_w8h-d-btZJDnnONW-zqVqvWfYJFyE8j2Q7yjEPGopOTD8WYhxXZCrssZ9p8idjnnmeojtW14bXo&_nc_zt=14&_nc_ht=scontent-ord5-1.xx&_nc_gid=ePqdk3CihlY3cUgnMtuDaw&_nc_ss=7b289&oh=00_AQS29DtCE3Da5j8hk36t1-FHTfB-KA7IKYBo3JAqQoSWvg&oe=6AF75181",
      "https://scontent-ord5-1.xx.fbcdn.net/v/t39.35426-6/509290535_730168202720612_5631758797674183318_n.jpg?stp=dst-jpg_s600x600_tt6&_nc_cat=109&ccb=1-7&_nc_sid=c53f8f&_nc_ohc=RpXLOaKtdSAQ7kNvwGdl69t&_nc_oc=AdrYxgbWnd4f_w8h-d-btZJDnnONW-zqVqvWfYJFyE8j2Q7yjEPGopOTD8WYhxXZCrssZ9p8idjnnmeojtW14bXo&_nc_zt=14&_nc_ht=scontent-ord5-1.xx&_nc_gid=ePqdk3CihlY3cUgnMtuDaw&_nc_ss=7b289&oh=00_AQSbdb7Xf0Xmv_oIDuydADi2Ckn0PMcm38fqEepGMsWI7g&oe=6AF75181",
      "https://scontent-ord5-2.xx.fbcdn.net/v/t3
```

## Support

Found a problem or need a field? Open an issue on the [Actor's Issues tab](https://apify.com/kamerozkan/facebook-ad-library-change-monitor/issues) and include your run link.

---
This repository holds usage examples and sample data. The Actor itself runs on Apify.
