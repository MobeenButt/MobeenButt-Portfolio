document.addEventListener('DOMContentLoaded', () => {
    // Mobile menu toggle
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            const icon = menuToggle.querySelector('i');
            if (icon.classList.contains('fa-bars')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }
    
    // Close mobile menu when clicking a nav link
    const navItems = document.querySelectorAll('.nav-links a');
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                const icon = menuToggle.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    });
    
    // Contact form submission
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                subject: document.getElementById('subject').value,
                message: document.getElementById('message').value
            };
            
            try {
                const response = await fetch('/api/contact', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(formData)
                });
                
                const data = await response.json();
                
                if (response.ok) {
                    alert('Message sent successfully!');
                    contactForm.reset();
                } else {
                    alert(`Error: ${data.message || 'Failed to send message'}`);
                }
            } catch (error) {
                console.error('Error submitting form:', error);
                alert('Failed to send message. Please try again later.');
            }
        });
    }
    
    // Fetch GitHub data
    fetchGitHubUser();
    fetchGitHubRepositories();
    fetchGitHubStats();
});

// Fetch GitHub user data
async function fetchGitHubUser() {
    try {
        const response = await fetch('/api/github/user');
        if (!response.ok) {
            throw new Error('Failed to fetch GitHub user data');
        }
        const userData = await response.json();
        updateUserInfo(userData);
    } catch (error) {
        console.error('Error fetching GitHub user data:', error);
    }
}

// Update user information in the UI
function updateUserInfo(userData) {
    // You can add more user info here as needed
    document.querySelectorAll('.user-name').forEach(el => {
        el.textContent = userData.name || userData.login;
    });
    
    // Update social links if available
    if (userData.html_url) {
        document.querySelectorAll('a[href*="github.com/MobeenButt"]').forEach(el => {
            el.href = userData.html_url;
        });
    }
    
    if (userData.blog) {
        const blogLinks = document.querySelectorAll('.blog-link');
        blogLinks.forEach(el => {
            el.href = userData.blog.startsWith('http') ? userData.blog : `https://${userData.blog}`;
            el.style.display = 'inline-flex';
        });
    }
    
    if (userData.location) {
        document.querySelectorAll('.location').forEach(el => {
            el.textContent = userData.location;
        });
    }
    
    if (userData.email) {
        document.querySelectorAll('a[href*="mailto:contact@mobeenbutt.com"]').forEach(el => {
            el.href = `mailto:${userData.email}`;
        });
    }
}

// Fetch GitHub repositories
async function fetchGitHubRepositories() {
    try {
        const response = await fetch('/api/github/repos');
        if (!response.ok) {
            throw new Error('Failed to fetch GitHub repositories');
        }
        const repositories = await response.json();
        displayRepositories(repositories);
    } catch (error) {
        console.error('Error fetching GitHub repositories:', error);
        document.getElementById('projects-container').innerHTML = `
            <div class="error-message">
                <p>Failed to load GitHub repositories. Please try again later.</p>
            </div>
        `;
    }
}

// Display repositories in the UI
function displayRepositories(repositories) {
    const projectsContainer = document.getElementById('projects-container');
    
    if (!repositories || repositories.length === 0) {
        projectsContainer.innerHTML = `
            <div class="no-projects">
                <p>No repositories found.</p>
            </div>
        `;
        return;
    }
    
    let html = '';
    
    repositories.forEach(repo => {
        // Format date
        const updatedDate = new Date(repo.updated).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        });
        
        html += `
            <div class="project-card">
                <div class="project-info">
                    <h3>${repo.name}</h3>
                    <p>${repo.description}</p>
                    
                    <div class="project-meta">
                        ${repo.language ? `
                            <div class="project-language">
                                <span class="language-dot language-${repo.language}"></span>
                                <span>${repo.language}</span>
                            </div>
                        ` : ''}
                        
                        <div class="project-stats">
                            ${repo.stars > 0 ? `
                                <span title="Stars">
                                    <i class="fas fa-star"></i> ${repo.stars}
                                </span>
                            ` : ''}
                            
                            ${repo.forks > 0 ? `
                                <span title="Forks">
                                    <i class="fas fa-code-branch"></i> ${repo.forks}
                                </span>
                            ` : ''}
                        </div>
                    </div>
                    
                    <div class="project-buttons">
                        <a href="${repo.htmlUrl}" target="_blank" class="btn project-btn primary">
                            <i class="fab fa-github"></i> View on GitHub
                        </a>
                        ${repo.homepage ? `
                            <a href="${repo.homepage}" target="_blank" class="btn project-btn secondary">
                                <i class="fas fa-external-link-alt"></i> Live Demo
                            </a>
                        ` : ''}
                    </div>
                </div>
            </div>
        `;
    });
    
    projectsContainer.innerHTML = html;
}

// Fetch GitHub statistics
async function fetchGitHubStats() {
    try {
        const response = await fetch('/api/github/stats');
        if (!response.ok) {
            throw new Error('Failed to fetch GitHub statistics');
        }
        const stats = await response.json();
        updateGitHubStats(stats);
    } catch (error) {
        console.error('Error fetching GitHub statistics:', error);
    }
}

// Update GitHub statistics in the UI
function updateGitHubStats(stats) {
    if (stats.publicRepos) {
        document.getElementById('repos-count').textContent = stats.publicRepos;
    }
    
    if (stats.totalStars) {
        document.getElementById('stars-count').textContent = stats.totalStars;
    }
    
    if (stats.totalForks) {
        document.getElementById('forks-count').textContent = stats.totalForks;
    }
    
    if (stats.followers) {
        document.getElementById('followers-count').textContent = stats.followers;
    }
}