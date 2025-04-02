import axios from "axios";

const GITHUB_USERNAME = "MobeenButt";
const GITHUB_API_BASE = "https://api.github.com";

// Fetch GitHub user data
export async function fetchUserData() {
  const response = await axios.get(`${GITHUB_API_BASE}/users/${GITHUB_USERNAME}`);
  return response.data;
}

// Fetch GitHub repositories
export async function fetchRepositories() {
  const response = await axios.get(`${GITHUB_API_BASE}/users/${GITHUB_USERNAME}/repos`, {
    params: {
      sort: "updated",
      per_page: 100 // Increased to get all repositories
    }
  });
  
  return response.data.map((repo: any) => ({
    id: repo.id,
    name: repo.name,
    description: repo.description || "No description available",
    htmlUrl: repo.html_url,
    homepage: repo.homepage,
    language: repo.language,
    stars: repo.stargazers_count,
    forks: repo.forks_count,
    updated: repo.updated_at
  }));
}

// Fetch GitHub contributions and statistics
export async function fetchContributions() {
  try {
    // Get user data
    const userData = await fetchUserData();
    
    // Get repositories to count stars and forks
    const repos = await axios.get(`${GITHUB_API_BASE}/users/${GITHUB_USERNAME}/repos`);
    
    // Calculate total stars and forks
    const totalStars = repos.data.reduce((total: number, repo: any) => total + repo.stargazers_count, 0);
    const totalForks = repos.data.reduce((total: number, repo: any) => total + repo.forks_count, 0);
    
    return {
      publicRepos: userData.public_repos,
      followers: userData.followers,
      totalStars,
      totalForks,
      contributionsUrl: `https://github.com/users/${GITHUB_USERNAME}/contributions`
    };
  } catch (error) {
    console.error("Error fetching GitHub contributions:", error);
    throw error;
  }
}
