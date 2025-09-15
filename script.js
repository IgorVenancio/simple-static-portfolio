:root {
    /* Light theme */
    --background: #FFFFFF;
    --foreground: #1a1a1a;
    --card: #FFFFFF;
    --card-foreground: #1a1a1a;
    /* Changed from purple to blue tones */
    --primary: #2563eb;
    --primary-foreground: #FFFFFF;
    --secondary: #f8fafc;
    --secondary-foreground: #64748b;
    --muted: #f1f5f9;
    --muted-foreground: #64748b;
    --accent: #3b82f6;
    --accent-foreground: #FFFFFF;
    --border: #e2e8f0;
    --input: #FFFFFF;
    --ring: rgba(59, 130, 246, 0.3);
    --radius: 0.75rem;
}

        [data-theme="dark"] {
            /* Dark theme */
            --background: #0f172a;
            --foreground: #f8fafc;
            --card: #1e293b;
            --card-foreground: #f8fafc;
            /* Changed from purple to blue tones */
            --primary: #3b82f6;
            --primary-foreground: #FFFFFF;
            --secondary: #1e293b;
            --secondary-foreground: #94a3b8;
            --muted: #334155;
            --muted-foreground: #94a3b8;
            --accent: #60a5fa;
            --accent-foreground: #FFFFFF;
            --border: #334155;
            --input: #1e293b;
            --ring: rgba(96, 165, 250, 0.3);
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'DM Sans', sans-serif;
            line-height: 1.6;
            color: var(--foreground);
            background-color: var(--background);
            scroll-behavior: smooth;
            transition: background-color 0.3s ease, color 0.3s ease;
        }

        h1, h2, h3, h4, h5, h6 {
            font-family: 'Space Grotesk', sans-serif;
            font-weight: 600;
            line-height: 1.2;
        }

        /* Navigation */
        .navbar {
            position: fixed;
            top: 0;
            width: 100%;
            background: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(10px);
            z-index: 1000;
            transition: all 0.3s ease;
            border-bottom: 1px solid var(--border);
        }

        [data-theme="dark"] .navbar {
            background: rgba(15, 23, 42, 0.95);
        }

        .navbar.scrolled {
            background: var(--background);
            box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
        }

        .nav-container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 1rem 2rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .logo {
            font-family: 'Space Grotesk', sans-serif;
            font-size: 1.5rem;
            font-weight: 700;
            color: var(--primary);
            text-decoration: none;
        }

        .nav-links {
            display: flex;
            list-style: none;
            gap: 2rem;
            align-items: center;
        }

        .nav-links a {
            text-decoration: none;
            color: var(--foreground);
            font-weight: 500;
            transition: color 0.3s ease;
            position: relative;
        }

        .nav-links a:hover {
            color: var(--accent);
        }

        .nav-links a.active {
            color: var(--accent);
        }

        .nav-links a.active::after {
            width: 100%;
        }

        .nav-links a:hover::after {
            width: 100%;
        }

        /* Added theme toggle and language toggle buttons */
        .nav-controls {
            display: flex;
            align-items: center;
            gap: 1rem;
        }

        .theme-toggle, .lang-toggle {
            background: none;
            border: 2px solid var(--border);
            border-radius: var(--radius);
            padding: 0.5rem;
            cursor: pointer;
            color: var(--foreground);
            transition: all 0.3s ease;
            font-size: 1rem;
        }

        .theme-toggle:hover, .lang-toggle:hover {
            border-color: var(--accent);
            color: var(--accent);
        }

        .lang-toggle {
            font-family: 'Space Grotesk', sans-serif;
            font-weight: 600;
            padding: 0.5rem 1rem;
        }

        .mobile-menu-btn {
            display: none;
            background: none;
            border: none;
            font-size: 1.5rem;
            color: var(--primary);
            cursor: pointer;
        }

        /* Hero Section */
        .hero {
            height: 100vh;
            background: var(--background);
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            position: relative;
            overflow: hidden;
        }

        .hero-content {
            position: relative;
            z-index: 2;
            max-width: 800px;
            padding: 0 2rem;
        }

        .hero h1 {
            font-size: clamp(2.5rem, 5vw, 4rem);
            margin-bottom: 1rem;
            color: var(--foreground);
        }

        .hero p {
            font-size: 1.25rem;
            margin-bottom: 2rem;
            color: var(--muted-foreground);
        }

        .cta-button {
            display: inline-block;
            padding: 1rem 2rem;
            background: var(--accent);
            color: var(--accent-foreground);
            text-decoration: none;
            border-radius: var(--radius);
            font-weight: 600;
            transition: all 0.3s ease;
            box-shadow: 0 4px 15px rgba(59, 130, 246, 0.3);
        }

        .cta-button:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 25px rgba(59, 130, 246, 0.4);
        }

        /* Section Styles */
        .section {
            padding: 5rem 0;
        }

        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 2rem;
        }

        .section-title {
            text-align: center;
            font-size: 2.5rem;
            margin-bottom: 1rem;
            color: var(--foreground);
            position: relative;
        }

        .section-subtitle {
            text-align: center;
            color: var(--muted-foreground);
            margin-bottom: 3rem;
            font-size: 1.1rem;
        }

        .section-title::after {
            content: '';
            position: absolute;
            bottom: -10px;
            left: 50%;
            transform: translateX(-50%);
            width: 60px;
            height: 3px;
            background: var(--accent);
            border-radius: 2px;
        }

        /* About Section */
        .about {
            background: var(--secondary);
        }

        .about-content {
            display: grid;
            grid-template-columns: 1fr 2fr;
            gap: 4rem;
            align-items: center;
        }

        .about-image {
            width: 100%;
            height: 400px;
            background: url('/placeholder.svg?height=400&width=300') center/cover;
            border-radius: var(--radius);
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        }

        .about-text h3 {
            font-size: 1.5rem;
            margin-bottom: 1rem;
            color: var(--foreground);
        }

        .about-text p {
            margin-bottom: 1rem;
            color: var(--muted-foreground);
        }

        /* Completely redesigned Tech Stack section to match the provided image */
        .tech-stack {
            background: var(--background);
        }

        .tech-categories {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
            gap: 2rem;
            margin-top: 2rem;
        }

        .tech-category {
            background: var(--card);
            border: 1px solid var(--border);
            border-radius: var(--radius);
            padding: 2rem;
            transition: all 0.3s ease;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
        }

        .tech-category:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        }

        .category-header {
            display: flex;
            align-items: center;
            gap: 1rem;
            margin-bottom: 1rem;
        }

        .category-icon {
            width: 48px;
            height: 48px;
            background: var(--accent);
            border-radius: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.5rem;
            color: var(--accent-foreground);
        }

        .category-info h3 {
            font-size: 1.25rem;
            color: var(--foreground);
            margin-bottom: 0.25rem;
        }

        .category-info p {
            color: var(--muted-foreground);
            font-size: 0.9rem;
        }

        .tech-tags {
            display: flex;
            flex-wrap: wrap;
            gap: 0.75rem;
            margin-top: 1.5rem;
        }

        .tech-tag {
            background: var(--muted);
            color: var(--foreground);
            padding: 0.5rem 1rem;
            border-radius: 20px;
            font-size: 0.875rem;
            font-weight: 500;
            transition: all 0.3s ease;
        }

        .tech-tag:hover {
            background: var(--accent);
            color: var(--accent-foreground);
        }

        .more-tag {
            background: var(--border);
            color: var(--muted-foreground);
        }

        /* Projects */
        .projects {
            background: var(--secondary);
        }

        .projects-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
            gap: 2rem;
            margin-top: 2rem;
        }

        .project-card {
            background: var(--card);
            border-radius: var(--radius);
            overflow: hidden;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
            transition: transform 0.3s ease;
            border: 1px solid var(--border);
        }

        .project-card:hover {
            transform: translateY(-10px);
        }

        .project-image {
            width: 100%;
            height: 200px;
            background: url('/placeholder.svg?height=200&width=350') center/cover;
        }

        .project-content {
            padding: 1.5rem;
        }

        .project-title {
            font-size: 1.25rem;
            margin-bottom: 0.5rem;
            color: var(--foreground);
        }

        .project-description {
            color: var(--muted-foreground);
            margin-bottom: 1rem;
        }

        .project-tags {
            display: flex;
            flex-wrap: wrap;
            gap: 0.5rem;
            margin-bottom: 1rem;
        }

        .tag {
            background: var(--accent);
            color: var(--accent-foreground);
            padding: 0.25rem 0.75rem;
            border-radius: 20px;
            font-size: 0.875rem;
        }

        .project-links {
            display: flex;
            gap: 1rem;
        }

        .project-link {
            color: var(--primary);
            text-decoration: none;
            font-weight: 500;
            transition: color 0.3s ease;
        }

        .project-link:hover {
            color: var(--accent);
        }

        /* Experience & Education */
        .timeline {
            position: relative;
            max-width: 800px;
            margin: 0 auto;
        }

        .timeline::before {
            content: '';
            position: absolute;
            left: 50%;
            top: 0;
            bottom: 0;
            width: 2px;
            background: var(--border);
            transform: translateX(-50%);
        }

        .timeline-item {
            position: relative;
            margin-bottom: 3rem;
            width: 50%;
        }

        .timeline-item:nth-child(odd) {
            left: 0;
            padding-right: 2rem;
        }

        .timeline-item:nth-child(even) {
            left: 50%;
            padding-left: 2rem;
        }

        .timeline-content {
            background: var(--card);
            padding: 1.5rem;
            border-radius: var(--radius);
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
            position: relative;
            border: 1px solid var(--border);
        }

        .timeline-date {
            color: var(--accent);
            font-weight: 600;
            margin-bottom: 0.5rem;
        }

        .timeline-title {
            color: var(--foreground);
            margin-bottom: 0.5rem;
        }

        .timeline-company {
            color: var(--muted-foreground);
            font-style: italic;
            margin-bottom: 1rem;
        }

        /* Contact */
        .contact {
            background: var(--background);
        }

        .contact-content {
            max-width: 600px;
            margin: 0 auto;
        }

        .contact-form {
            display: grid;
            gap: 1.5rem;
        }

        .form-group {
            display: grid;
            gap: 0.5rem;
        }

        .form-group label {
            font-weight: 500;
            color: var(--foreground);
        }

        .form-group input,
        .form-group textarea {
            padding: 1rem;
            border: 2px solid var(--border);
            border-radius: var(--radius);
            background: var(--input);
            color: var(--foreground);
            font-family: inherit;
            transition: border-color 0.3s ease;
        }

        .form-group input:focus,
        .form-group textarea:focus {
            outline: none;
            border-color: var(--accent);
            box-shadow: 0 0 0 3px var(--ring);
        }

        .form-group textarea {
            resize: vertical;
            min-height: 120px;
        }

        .submit-btn {
            padding: 1rem 2rem;
            background: var(--accent);
            color: var(--accent-foreground);
            border: none;
            border-radius: var(--radius);
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
            justify-self: start;
        }

        .submit-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 5px 15px rgba(59, 130, 246, 0.3);
        }

        /* Footer */
        .footer {
            background: var(--foreground);
            color: var(--background);
            text-align: center;
            padding: 2rem 0;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
            .nav-links {
                display: none;
                position: absolute;
                top: 100%;
                left: 0;
                width: 100%;
                background: var(--background);
                flex-direction: column;
                padding: 1rem 2rem;
                box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
                border: 1px solid var(--border);
            }

            .nav-links.active {
                display: flex;
            }

            .mobile-menu-btn {
                display: block;
            }

            .nav-controls {
                order: -1;
            }

            .about-content {
                grid-template-columns: 1fr;
                text-align: center;
            }

            .timeline::before {
                left: 20px;
            }

            .timeline-item {
                width: 100%;
                left: 0 !important;
                padding-left: 3rem !important;
                padding-right: 0 !important;
            }

            .projects-grid {
                grid-template-columns: 1fr;
            }

            .tech-categories {
                grid-template-columns: 1fr;
            }
        }

        /* Animations */
        .fade-in {
            opacity: 0;
            transform: translateY(30px);
            transition: all 0.6s ease;
        }

        .fade-in.visible {
            opacity: 1;
            transform: translateY(0);
        }

        /* Added hidden class for language switching */
        .hidden {
            display: none !important;
        }