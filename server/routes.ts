import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { fetchUserData, fetchRepositories, fetchContributions } from "./github";

export async function registerRoutes(app: Express): Promise<Server> {
  // GitHub API routes
  app.get("/api/github/user", async (req, res) => {
    try {
      const userData = await fetchUserData();
      res.json(userData);
    } catch (error) {
      console.error("Error fetching GitHub user data:", error);
      res.status(500).json({ message: "Failed to fetch GitHub user data" });
    }
  });

  app.get("/api/github/repos", async (req, res) => {
    try {
      const repos = await fetchRepositories();
      res.json(repos);
    } catch (error) {
      console.error("Error fetching GitHub repositories:", error);
      res.status(500).json({ message: "Failed to fetch GitHub repositories" });
    }
  });

  app.get("/api/github/stats", async (req, res) => {
    try {
      const stats = await fetchContributions();
      res.json(stats);
    } catch (error) {
      console.error("Error fetching GitHub statistics:", error);
      res.status(500).json({ message: "Failed to fetch GitHub statistics" });
    }
  });

  // Contact form submission
  app.post("/api/contact", async (req, res) => {
    try {
      const { name, email, subject, message } = req.body;
      
      if (!name || !email || !subject || !message) {
        return res.status(400).json({ message: "All fields are required" });
      }
      
      // Store the contact message in database
      const contactMessage = await storage.createContactMessage({
        name,
        email,
        subject,
        message,
        createdAt: new Date().toISOString(),
      });
      
      res.status(201).json({ message: "Message sent successfully" });
    } catch (error) {
      console.error("Error submitting contact form:", error);
      res.status(500).json({ message: "Failed to submit contact form" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
