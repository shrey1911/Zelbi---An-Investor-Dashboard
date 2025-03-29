# Zelbi - An Investor Dashboard

A modern, full-stack investment dashboard application that helps investors track, analyze, and manage their investments efficiently.

## 🌟 Features

- **User Authentication & Authorization**
  - Secure login and signup system
  - Email verification
  - Password reset functionality
  - Profile management

- **Investment Dashboard**
  - Real-time investment tracking
  - Portfolio analytics
  - Performance metrics
  - Investment history

- **AI-Powered Insights**
  - Smart investment recommendations
  - Market trend analysis
  - Risk assessment
  - Predictive analytics

- **Project Management**
  - Investment project tracking
  - Document management
  - Team collaboration
  - Progress monitoring

## 🛠️ Tech Stack

### Frontend
- React.js
- Redux Toolkit
- Tailwind CSS
- Axios

### Backend
- Node.js
- Express.js
- MongoDB
- JWT Authentication
- Cloudinary for Image Storage

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- MongoDB
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/shrey1911/Zelbi---An-Investor-Dashboard.git
```

2. Install Frontend Dependencies
```bash
cd frontend
npm install
```

3. Install Backend Dependencies
```bash
cd ../backend
npm install
```

4. Set up environment variables
- Create `.env` files in both frontend and backend directories
- Add necessary environment variables (see `.env.example`)

5. Start the Development Servers

Frontend:
```bash
cd frontend
npm start
```

Backend:
```bash
cd backend
npm run dev
```

## 📝 Environment Variables

### Frontend (.env)
```
REACT_APP_API_URL=your_backend_url
```

### Backend (.env)
```
PORT=4000
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
SMTP_MAIL_USERNAME=your_smtp_username
SMTP_MAIL_PASSWORD=your_smtp_password
SMTP_MAIL_FROM=your_smtp_from
SMTP_MAIL_HOST=your_smtp_host
SMTP_MAIL_PORT=your_smtp_port
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Authors

- Shrey Patel - [shrey1911](https://github.com/shrey1911)

## 🙏 Acknowledgments

- Thanks to all contributors who have helped shape this project
- Special thanks to the open-source community for their valuable resources
