import { ContentClient } from 'dc-delivery-sdk-js';
export default function getAmplience() {
  return new ContentClient({
    baseUrl: process.env.DYNAMIC_CONTENT_BASE_URL || '',
    hubName: process.env.DYNAMIC_CONTENT_HUB_NAME || '',
  });
}