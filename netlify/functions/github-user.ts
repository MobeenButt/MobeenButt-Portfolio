import { Handler } from '@netlify/functions';
import { fetchUserData } from '../../server/github';

export const handler: Handler = async (event, context) => {
  if (event.httpMethod !== 'GET') {
    return {
      statusCode: 405,
      body: JSON.stringify({ message: 'Method Not Allowed' }),
    };
  }

  try {
    const userData = await fetchUserData();
    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify(userData),
    };
  } catch (error) {
    console.error('Error fetching GitHub user data:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Failed to fetch GitHub user data' }),
    };
  }
};