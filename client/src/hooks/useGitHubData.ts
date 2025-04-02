import { useQuery } from "@tanstack/react-query";
import { GitHubUser, GitHubRepo, GitHubStats } from "@/types/github";

export function useGitHubUser() {
  return useQuery<GitHubUser>({
    queryKey: ["/api/github/user"],
    staleTime: 5 * 60 * 1000, // 5 minutes cache
  });
}

export function useGitHubRepos() {
  return useQuery<GitHubRepo[]>({
    queryKey: ["/api/github/repos"],
    staleTime: 5 * 60 * 1000, // 5 minutes cache
  });
}

export function useGitHubStats() {
  return useQuery<GitHubStats>({
    queryKey: ["/api/github/stats"],
    staleTime: 5 * 60 * 1000, // 5 minutes cache
  });
}
