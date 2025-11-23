# AWS 2026 Goals Web App – Dream Board

A tiny, kid-friendly full-stack serverless application built on AWS to help students learn how the cloud works using a simple, fun, hands-on project.

Students type in their name and one big goal, click **“Save my goal 🚀”**, and instantly see it appear on a shared list for the whole class. Behind the simple UI is a fully serverless AWS backend.

## 🚀 Features

- Simple input form where students enter their name and goal  
- Goals appear instantly in a shared list  
- Fully serverless: S3 + API Gateway + Lambda + DynamoDB  

## 🧠 What This Project Demonstrates

- How a static frontend calls serverless APIs  
- The workflow: **API Gateway → Lambda → DynamoDB**  
- Handling CORS and IAM permissions  
- Real AWS architecture simplified for beginners  

## 🗂 AWS Services Used

### **Amazon S3**
- Hosts the static site (HTML/CSS/JS)
- Public bucket with Static Website Hosting enabled

### **Amazon API Gateway (HTTP API)**
- Routes:
  - `GET /goals`
  - `POST /save-post`
- Provides CORS configuration  
- Integrates directly with Lambda  

### **AWS Lambda (Node.js)**
- **getGoals.js** → Scan DynamoDB and return list of goals  
- **saveGoal.js** → Validate input and insert new item  

### **Amazon DynamoDB**
- Table: **StudentGoals**  
- Primary key: `id` (string)  
- Attributes: `name`, `goal`, `createdAt`  

## 🌍 Volunteering Initiative

This project was originally built for a youth STEM outreach event where we taught students about cloud technology, APIs, and goal-setting.  
You can view photos and the full story on my LinkedIn post below:

🔗 **LinkedIn Post:** [View the volunteering event here](https://www.linkedin.com/posts/giovanebarnes_had-a-great-time-volunteering-today-with-activity-7398126791858614272-bTzk?utm_source=share&utm_medium=member_desktop&rcm=ACoAACFeHa8Br1ruG1CThcZZsPm8R1cJ2PMUEqQ)
