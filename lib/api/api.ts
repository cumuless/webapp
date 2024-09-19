import { getAuthToken, getUserID } from '@lib/auth/AuthManager';
import { store } from '@lib/store';
import { logError } from '@lib/utils';

const BASE_URL = 'https://api.cumuless.com';

export async function fetchRecentSearches() {
  return new Promise((resolve, reject) => {
    // store.getState().
    makeApiCall('/recent_searches', 'GET')
      .then((response) => {
        if (!response.ok) {
          reject(new Error(`HTTP error! Status: ${response.status}`));
        } else {
          return response.json();
        }
      })
      .then((data) => resolve(data))
      .catch((error) => {
        logError(`Failed when fetching recent searches with error ${error}`, 'api.ts');
      });
  });
}

export async function makeApiCall(
  url: string,
  method: string = 'GET',
  params: Record<string, string> = {},
  body: object | null = null
) {
  const token = await getAuthToken();
  const userId = await getUserID();

  // Construct the URL with query parameters if any
  params['userId'] = userId;

  const queryParams = new URLSearchParams(params).toString();
  const finalUrl = queryParams ? `${BASE_URL}${url}?${queryParams}` : url;

  const options: RequestInit = {
    method,
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  };

  // Add the body if provided and if the method is not GET
  if (body && method !== 'GET') {
    options.body = JSON.stringify(body);
  }

  return fetch(finalUrl, options);
}
