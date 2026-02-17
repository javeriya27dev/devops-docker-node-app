Dockerized Node.js Application with CI/CD

![Docker](https://img.shields.io/badge/Docker-Containerized-blue)
![Node.js](https://img.shields.io/badge/Node.js-Backend-green)
![GitHub Actions](https://img.shields.io/badge/CI-GitHub_Actions-orange)

📌 Project Overview

This project demonstrates an end-to-end DevOps workflow by developing, containerizing, and automating a Node.js application using Docker, Docker Compose, Docker Hub, and GitHub Actions.

The objective of this project was to understand containerization, image management, and CI pipeline automation.

---

## 🛠️ Technologies Used

- Node.js
- Docker
- Docker Compose
- Git & GitHub
- GitHub Actions
- Docker Hub

---

 📂 Project Structure
<pre>
bash
devops-node-app/
│
├── app.js
├── package.json
├── Dockerfile
├── docker-compose.yml
├── .dockerignore
└── .github/
    └── workflows/
        └── ci.yml

</pre>
## 📋 Prerequisites

Make sure you have installed:

- Docker
- Git
- Node.js (optional for local testing)

⚙️ How to Run Locally

 1️⃣ Clone Repository
 
git clone 

cd devops-node-app
 
 2️⃣ Build Docker Image
 
 docker build -t devops-node-app .
 
 3️⃣ Run Container
 
 docker run -p 3000:3000 devops-node-app
 
 4️⃣ Run Using Docker Compose

Build and start the container:

<pre>
bash
docker-compose up --build

</pre>

 Access the application:
http://localhost:3000

🔄 CI/CD Pipeline

This project uses GitHub Actions to:

- Automatically build Docker image on every push
- Verify Docker build success
- Prepare image for Docker Hub deployment

Workflow file location:

.github/workflows/ci.yml

## 👩‍💻 Author: Khan Javeriya

MBA (IT) Graduate | DevOps & Cloud Learner  
Hands-on with AWS, Docker, CI/CD
