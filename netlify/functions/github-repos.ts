import { Handler } from '@netlify/functions';
import { fetchRepositories } from '../../server/github';

export const handler: Handler = async (event, context) => {
  if (event.httpMethod !== 'GET') {
    return {
      statusCode: 405,
      body: JSON.stringify({ message: 'Method Not Allowed' }),
    };
  }

  try {
    const repos = await fetchRepositories();
    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify(repos),
    };
  } catch (error) {
    console.error('Error fetching GitHub repositories:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Failed to fetch GitHub repositories' }),
    };
  }
};