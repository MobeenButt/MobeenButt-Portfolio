document.addEventListener('DOMContentLoaded', () => {
    // Apply saved theme from localStorage if any
    const savedTheme = localStorage.getItem('portfolio-theme');
    if (savedTheme) {
        applyTheme(savedTheme);
        
        // Update active theme option
        document.querySelectorAll('.theme-option').forEach(option => {
            option.classList.remove('active');
            if (option.dataset.theme === savedTheme) {
                option.classList.add('active');
            }
        });
    }

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
    
    // Theme switcher
    const themeOptions = document.querySelectorAll('.theme-option');
    themeOptions.forEach(option => {
        option.addEventListener('click', () => {
            const theme = option.dataset.theme;
            
            // Remove active class from all options
            themeOptions.forEach(o => o.classList.remove('active'));
            
            // Add active class to clicked option
            option.classList.add('active');
            
            // Apply theme
            applyTheme(theme);
            
            // Save theme preference
            localStorage.setItem('portfolio-theme', theme);
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
    
    // List of repositories to exclude
    const excludeRepos = [
        "PD", "HELLO-world", "hello-world", "Even-First", "MobeenButt1",
        "ProgrammingFundamental", "Mobeen_Butt", "OOP", "TASK1", "OOP_LAB", 
        "OOP_PD", "Game_C-", "DSA-LAB", "MobeenButt"
    ];
    
    // Filter repositories
    const filteredRepos = repositories.filter(repo => 
        !excludeRepos.some(excluded => 
            repo.name.toLowerCase() === excluded.toLowerCase()
        )
    );
    
    if (filteredRepos.length === 0) {
        projectsContainer.innerHTML = `
            <div class="no-projects">
                <p>No featured projects available.</p>
            </div>
        `;
        return;
    }
    
    let html = '';
    
    // Project background images based on language or name
    const getProjectImage = (repo) => {
        if (repo.name.toLowerCase().includes('quiz')) {
            return 'https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80';
        } else if (repo.name.toLowerCase().includes('railway')) {
            return 'https://images.unsplash.com/photo-1474487548417-781cb71495f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80';
        } else if (repo.name.toLowerCase().includes('game')) {
            return 'https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80';
        } else if (repo.language === 'Python') {
            return 'https://images.unsplash.com/photo-1526379879527-8559ecfcaec0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80';
        } else if (repo.language === 'C#') {
            return 'https://images.unsplash.com/photo-1599507593499-a3f7d7d97667?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80';
        } else if (repo.language === 'C++') {
            return 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80';
        } else if (repo.language === 'PHP') {
            return 'https://images.unsplash.com/photo-1599507593548-0187ac4043c6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80';
        } else {
            return 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80';
        }
    };
    
    filteredRepos.forEach(repo => {
        // Format date
        const updatedDate = new Date(repo.updated).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        });
        
        const projectImage = getProjectImage(repo);
        
        html += `
            <div class="project-card">
                <div class="project-image" style="background-image: url('${projectImage}')">
                    <div class="project-overlay"></div>
                </div>
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
                            
                            <span title="Updated">
                                <i class="fas fa-calendar-alt"></i> ${updatedDate}
                            </span>
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

// Apply theme to the website
function applyTheme(theme) {
    // Remove any existing theme first
    document.body.removeAttribute('data-theme');
    
    // If it's not the default theme, apply the selected theme
    if (theme !== 'default') {
        document.body.setAttribute('data-theme', theme);
    }
    
    // Extra UI adjustments based on theme (optional)
    if (theme === 'dark') {
        // Any extra dark mode specific adjustments
        document.querySelectorAll('.menu-toggle i').forEach(icon => {
            icon.style.color = '#e2e8f0';
        });
    } else {
        // Reset any theme-specific adjustments
        document.querySelectorAll('.menu-toggle i').forEach(icon => {
            icon.style.color = '';
        });
    }
}