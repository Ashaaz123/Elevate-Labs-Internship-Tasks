# DevOps Internship - Task 5 (Task 6 in PDF): Host a Static Website with GitHub Pages

## 📌 Objective
Deploy a modern, responsive HTML/CSS/JS static website using **GitHub Pages** with continuous deployment.

## 📁 Repository Structure
```
├── index.html                   # Responsive Portfolio & Project Landing Page
├── css/
│   └── style.css               # Modern CSS3 styling (dark mode, glassmorphism)
├── js/
│   └── script.js               # Theme toggling and interactive behavior
├── .github/workflows/
│   └── deploy-pages.yml        # Automated GitHub Actions deployment
├── CNAME.example                # Template for custom domain support
├── INTERVIEW_QUESTIONS.md       # Model answers for assessment viva
└── README.md
```

## 🚀 How to Deploy on GitHub Pages

### Method 1: Automated Deployment via GitHub Actions (Recommended)
1. Push this code to a new GitHub repository named `devops-static-website` (or any name).
2. Go to **Settings** > **Pages** in your GitHub repository.
3. Under **Build and deployment > Source**, select **GitHub Actions**.
4. The `.github/workflows/deploy-pages.yml` workflow will automatically trigger on push to `main` and deploy the site!
5. Access your live website at:
   `https://<YOUR-GITHUB-USERNAME>.github.io/<REPO-NAME>/`

### Method 2: Classic Branch-Based Deployment
1. Go to repository **Settings** > **Pages**.
2. Under **Build and deployment > Source**, select **Deploy from a branch**.
3. Select branch: `main` and folder: `/ (root)`.
4. Click **Save**.
5. Wait 1-2 minutes; your live site will be ready at the published URL.

## 🎨 Customization
- Open `index.html` to update your name, email, GitHub handle, and bio.
- Open `css/style.css` to tweak primary accent colors or typography.
- Open `js/script.js` to modify theme persistence or add interactive scripts.
