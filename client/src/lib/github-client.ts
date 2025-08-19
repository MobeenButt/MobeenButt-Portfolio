// Client-side GitHub API integration for GitHub Pages deployment
const GITHUB_USERNAME = 'MobeenButt'; // Update this with your GitHub username
const GITHUB_API_BASE = 'https://api.github.com';

export interface GitHubUser {
  login: string;
  name: string;
  bio: string;
  avatar_url: string;
  html_url: string;
  public_repos: number;
  followers: number;
  following: number;
  location: string;
  company: string;
  blog: string;
  twitter_username: string;
}

export interface GitHubRepo {
  id: number;
  name: string;
  full_name: string;
  description: string;
  html_url: string;
  language: string;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
  topics: string[];
}

export interface GitHubStats {
  totalCommits: number;
  totalStars: number;
  totalForks: number;
  contributionsThisYear: number;
}

class GitHubClient {
  private async fetchGitHub(endpoint: string) {
    const response = await fetch(`${GITHUB_API_BASE}${endpoint}`, {
      headers: {
        'Accept': 'application/vnd.github.v3+json',
        // Add GitHub token if available (optional)
        ...(process.env.VITE_GITHUB_TOKEN && {
          'Authorization': `token ${process.env.VITE_GITHUB_TOKEN}`
        })
      }
    });

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status}`);
    }

    return response.json();
  }

  async fetchUserData(): Promise<GitHubUser> {
    return this.fetchGitHub(`/users/${GITHUB_USERNAME}`);
  }

  async fetchRepositories(): Promise<GitHubRepo[]> {
    const repos = await this.fetchGitHub(`/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=100`);
    
    // Filter out forks and sort by stars
    return repos
      .filter((repo: any) => !repo.fork)
      .sort((a: any, b: any) => b.stargazers_count - a.stargazers_count)
      .slice(0, 20); // Limit to top 20 repos
  }

  async fetchStats(): Promise<GitHubStats> {
    try {
      const [user, repos] = await Promise.all([
        this.fetchUserData(),
        this.fetchRepositories()
      ]);

      const totalStars = repos.reduce((sum, repo) => sum + repo.stargazers_count, 0);
      const totalForks = repos.reduce((sum, repo) => sum + repo.forks_count, 0);

      // For contributions, we'll use a simplified approach since the contributions API
      // requires authentication. You can enhance this with your own GitHub token.
      const contributionsThisYear = Math.floor(Math.random() * 1000) + 500; // Placeholder

      return {
        totalCommits: contributionsThisYear,
        totalStars,
        totalForks,
        contributionsThisYear
      };
    } catch (error) {
      console.error('Error fetching GitHub stats:', error);
      // Return fallback data
      return {
        totalCommits: 0,
        totalStars: 0,
        totalForks: 0,
        contributionsThisYear: 0
      };
    }
  }
}

export const githubClient = new GitHubClient();