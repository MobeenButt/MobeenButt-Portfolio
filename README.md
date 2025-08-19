# Mobeen Butt - Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Express.js. Features real-time GitHub integration, contact form, and a beautiful UI with multiple themes.

## 🚀 Features

- **Modern React Frontend**: Built with React 18, TypeScript, and Tailwind CSS
- **GitHub Integration**: Real-time data fetching from GitHub API
- **Responsive Design**: Mobile-first approach with beautiful animations
- **Contact Form**: Functional contact form with backend integration
- **Multiple Themes**: Built-in theme switcher with multiple color schemes
- **Performance Optimized**: Fast loading with optimized builds
- **SEO Friendly**: Proper meta tags and semantic HTML

## 🛠️ Tech Stack

### Frontend
- React 18 with TypeScript
- Tailwind CSS for styling
- Framer Motion for animations
- React Query for data fetching
- Wouter for routing
- Radix UI components

### Backend
- Express.js with TypeScript
- Drizzle ORM for database operations
- In-memory storage (can be configured for PostgreSQL)
- RESTful API design

### Development Tools
- Vite for fast development and building
- ESBuild for server bundling
- TypeScript for type safety
- PostCSS for CSS processing

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/MobeenButt/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   # Edit .env file with your configuration
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

The application will be available at `http://localhost:5000`

## 🏗️ Build for Production

1. **Build the application**
   ```bash
   npm run build
   ```

2. **Start production server**
   ```bash
   npm start
   ```

## 📁 Project Structure

```
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/     # React components
│   │   ├── hooks/          # Custom React hooks
│   │   ├── lib/            # Utility libraries
│   │   ├── pages/          # Page components
│   │   └── types/          # TypeScript type definitions
│   └── index.html
├── server/                 # Express backend
│   ├── index.ts           # Server entry point
│   ├── routes.ts          # API routes
│   ├── storage.ts         # Data storage layer
│   └── github.ts          # GitHub API integration
├── shared/                # Shared types and schemas
│   └── schema.ts          # Database schemas
└── package.json
```

## 🔧 Configuration

### Environment Variables

- `DATABASE_URL`: PostgreSQL connection string (optional, uses in-memory storage by default)
- `GITHUB_TOKEN`: GitHub personal access token for enhanced API limits (optional)
- `NODE_ENV`: Environment mode (development/production)
- `PORT`: Server port (default: 5000)

### GitHub Integration

The portfolio automatically fetches data from GitHub using the public API. For enhanced rate limits, you can provide a GitHub personal access token in the environment variables.

## 🎨 Customization

### Themes
The application includes multiple built-in themes:
- Default (Blue)
- Purple
- Green
- Red
- Dark Mode

### Personal Information
Update the following files to customize with your information:
- `server/github.ts` - Update the GitHub username
- `client/src/components/` - Update personal details in components
- `client/src/components/Contact.tsx` - Update contact information

## 📱 API Endpoints

- `GET /api/github/user` - Fetch GitHub user data
- `GET /api/github/repos` - Fetch GitHub repositories
- `GET /api/github/stats` - Fetch GitHub statistics
- `POST /api/contact` - Submit contact form

## 🚀 Deployment

The application can be deployed to various platforms:

### Netlify (Recommended for Static + Serverless)
1. **Connect your repository to Netlify**
   - Go to [Netlify](https://netlify.com) and connect your GitHub repository
   - Or use Netlify CLI: `npm install -g netlify-cli && netlify deploy`

2. **Configuration is automatic** - The `netlify.toml` file handles:
   - Build command: `npm run build:client`
   - Publish directory: `dist/public`
   - Serverless functions for API endpoints
   - SPA routing redirects

3. **Set environment variables** in Netlify dashboard:
   - `DATABASE_URL` (if using PostgreSQL)
   - `GITHUB_TOKEN` (optional, for enhanced API limits)

4. **Deploy**
   ```bash
   # For production deployment
   netlify deploy --prod
   ```

### Vercel
1. Connect your repository
2. Set build command: `npm run build`
3. Set output directory: `dist`

### Railway/Heroku (Full-stack)
1. Connect your repository
2. Set start command: `npm start`
3. Configure environment variables

### Docker
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build
EXPOSE 5000
CMD ["npm", "start"]
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Contact

- **Email**: contact@mobeenbutt.com
- **GitHub**: [@MobeenButt](https://github.com/MobeenButt)
- **LinkedIn**: [Mobeen Butt](https://linkedin.com/in/mobeenbutt)

---

Built with ❤️ by Mobeen Butt