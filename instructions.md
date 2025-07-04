### 1. Overview and Introduction

This document outlines the requirements for the development of a personal portfolio website for an iOS Engineer and content creator. The primary purpose of this website is to serve as a professional, centralized hub that showcases technical projects, consolidates content from various platforms, and effectively communicates a personal brand centered around the philosophy of continuous learning ("Just Learn.").

The website will replace any existing portfolio with a clean, minimalist, and highly functional design that provides tangible proof of skills to potential employers, recruiters, and the wider tech community.

### 2. Goals and Objectives

The success of this project will be measured by its ability to achieve the following goals:

* **Primary Goal:** Create a minamlsitc, clean test compelling digital portfolio to attract and impress recruiters and hiring managers, ultimately leading to career opportunities in iOS engineering.
* **Secondary Goals:**
    * **Establish a Strong Personal Brand:** Clearly communicate professional identity, work ethic, and passion for software development.
    * **Create a Centralized Content Hub:** Aggregate all created content (social media posts, articles) into a single, easily discoverable location.
    * **Demonstrate Technical Proficiency:** Showcase a breadth of skills in UI/UX implementation, Swift, and iOS frameworks through a detailed project gallery.
    * **Reflect Discipline and Consistency:** Visibly demonstrate a commitment to daily learning and knowledge sharing.

### 3. Target Audience (User Personas)

1.  **Primary: The Recruiter / Hiring Manager**
    * **Needs:** To quickly assess a candidate's skills, experience, and professionalism. They have limited time and need to see clear, tangible evidence of ability.
    * **Goals:** Find the candidate's GitHub, LinkedIn, and project examples within seconds. Understand the candidate's technical capabilities and problem-solving approach.

2.  **Secondary: The Tech Lead / Fellow Engineer**
    * **Needs:** To evaluate the technical depth of a candidate's work. They are interested in code quality, architectural decisions, and the challenges faced during development.
    * **Goals:** Review project source code on GitHub. Understand the specific technologies and patterns used in a project.

3.  **Tertiary: The Network Contact / Follower**
    * **Needs:** To learn more about you and easily find all the content you create.
    * **Goals:** Find links to all your social platforms. Browse your articles and posts in one place.

### 4. Functional Requirements

#### 4.1. Global Elements (Header & Footer)

* **Header Navigation:**
    * Must be persistent across all pages.
    * Must contain clear navigation links to: **Home**, **Projects**, and **Posts**.
    * The current active page should be visually indicated (e.g., with an underline, bold text, or different color).
* **Footer:**
    * Must be persistent across all pages.
    * Must contain links to all social profiles: **LinkedIn, X/Twitter, GitHub, Medium, YouTube.**
    * Must include a copyright notice (e.g., "© 2025 [Your Name]").

#### 4.2. Page 1: Homepage

The homepage serves as the digital "front door" and must make a strong, professional first impression.

* **FR-H1: Hero Section:**
    * A high-quality, professional photograph of you shall be prominently displayed.
    * Your name and title must be displayed clearly (e.g., "Jane Doe | iOS Engineer").
    * The personal slogan "Just Learn." must be present.
* **FR-H2: Social Links:**
    * A set of icons linking to LinkedIn, X/Twitter, GitHub, Medium, and YouTube must be clearly visible and functional.
* **FR-H3: About Section:**
    * A concise section (2-4 paragraphs) that introduces you.
    * Content should briefly cover your journey into iOS development, your passion for the field, and your philosophy of disciplined, continuous growth.

#### 4.3. Page 2: Projects

This page acts as a visual, interactive portfolio of your technical work.

* **FR-P1: Project Grid Layout:**
    * All projects must be displayed in a responsive grid format.
    * Each item in the grid represents a single project and must display:
        * A high-quality thumbnail image or GIF of the project.
        * The project's title.
    * Clicking on any project in the grid must navigate the user to its dedicated Project Detail Page.
* **FR-P2: Project Detail Page:**
    * Each project must have its own unique URL (e.g., `yourwebsite.com/projects/project-name`).
    * The page must contain the following sections:
        * **Project Title.**
        * **High-Quality Media:** A gallery of screenshots, GIFs, or embedded videos showcasing the final product.
        * **Project Description:** A brief overview of the project's purpose and functionality.
        * **Key Learnings & Technical Details:** A section detailing the specific technologies used (e.g., SwiftUI, UIKit, Combine, Core Data), architecture patterns (e.g., MVVM), and key concepts learned.
        * **Challenges & Solutions:** A brief narrative describing a specific technical challenge encountered and the steps taken to solve it. This demonstrates problem-solving ability.
        * **External Links:**
            * A mandatory link to the project's **GitHub repository**.
            * (If applicable) A link to the original **Dribbble design**, crediting the designer.
            * (If applicable) A link to the live **App Store page**.

#### 4.4. Page 3: Posts

This page serves as a comprehensive library of all your written content.

* **FR-PO1: Post Grid Layout:**
    * All content pieces (articles, social media posts) must be displayed in a responsive grid, ordered by reverse chronological order.
    * Each item in the grid must display:
        * The title of the post or a text snippet.
        * A visual indicator (e.g., an icon) of the original platform (Medium, X/Twitter, LinkedIn).
        * The publication date.
* **FR-PO2: Content Handling:**
    * **Medium Articles:** Clicking on a Medium post should navigate the user to a dedicated page on your website that contains the full article content. This is for SEO benefits and content ownership. A canonical link to the original Medium article should be included in the page's HTML `<head>` tag.
    * **X/Twitter, LinkedIn Posts:** Clicking on these posts should open a new tab and navigate the user directly to the original post on the respective platform.

### 5. Non-Functional Requirements (NFRs)

* **NFR-1: Responsiveness:** The website must be fully responsive and provide an optimal viewing experience on all major devices (desktop, tablet, and mobile).
* **NFR-2: Performance:** The website must be fast and efficient.
    * Page load times should be under 3 seconds on a standard connection.
    * All images must be optimized for the web (compressed and appropriately sized).
* **NFR-3: Accessibility (a11y):** The website should be accessible to users with disabilities, adhering to WCAG 2.1 Level AA guidelines where possible. This includes:
    * Semantic HTML.
    * Alt text for all images.
    * Keyboard navigability.
    * Sufficient color contrast.
* **NFR-4: Search Engine Optimization (SEO):** The site should be built with SEO best practices to ensure it is discoverable on search engines. This includes:
    * Proper use of title tags, meta descriptions, and header tags.
    * A `sitemap.xml` and `robots.txt` file.
    * Clean, crawlable URLs.
* **NFR-5: Security:** The website must be served over HTTPS.