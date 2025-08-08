# RoyNect - Premium Kashmiri Honey E-Commerce Platform

<div align="center">
  <img src="public/logo.png" alt="RoyNect Logo" width="200"/>
  
  [![React](https://img.shields.io/badge/React-18.3.1-blue.svg)](https://reactjs.org/)
  [![Vite](https://img.shields.io/badge/Vite-5.4.10-646CFF.svg)](https://vitejs.dev/)
  [![Firebase](https://img.shields.io/badge/Firebase-11.1.0-orange.svg)](https://firebase.google.com/)
  [![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4.15-38B2AC.svg)](https://tailwindcss.com/)
  [![Redux Toolkit](https://img.shields.io/badge/Redux_Toolkit-2.4.0-764ABC.svg)](https://redux-toolkit.js.org/)
</div>

## 🍯 Overview

RoyNect is a premium e-commerce platform specializing in authentic **Kashmiri Honey** and **Apis Cerana Honey** from the pristine valleys of Bhadarwah, Jammu & Kashmir. The platform offers a complete end-to-end solution for honey enthusiasts to purchase 100% pure, natural, and unfiltered honey products with seamless shopping experience.

## ✨ Key Features

### 🛒 **E-Commerce Functionality**
- **Product Catalog**: Premium honey products in multiple sizes (0.5kg, 1kg, 2kg)
- **Smart Shopping Cart**: Add/remove items with real-time price calculation
- **Inventory Management**: Real-time stock tracking and updates
- **Multi-size Selection**: Flexible quantity and weight options

### 🔐 **User Authentication & Management**
- **Google OAuth Integration**: Seamless sign-in with Google accounts
- **User Profiles**: Personalized user experience and order history
- **Guest Checkout**: Option to browse without mandatory registration

### 💳 **Payment & Checkout**
- **Razorpay Integration**: Secure payment gateway with multiple payment options
- **Order Management**: Complete order lifecycle from placement to delivery
- **Address Validation**: Real-time pincode verification and serviceability check
- **Shipping Cost Calculator**: Dynamic shipping cost based on location and weight

### 📦 **Order & Logistics**
- **Order Tracking**: Real-time order status updates (Pending → Shipped → Delivered)
- **Shipping Integration**: Delhivery logistics integration for reliable delivery
- **Email Notifications**: Automated order confirmations and status updates
- **Admin Dashboard**: Complete order management and customer communication

### 👑 **Admin Panel**
- **Order Management**: View, update, and track all customer orders
- **Inventory Control**: Real-time stock management and updates
- **Customer Support**: Direct customer communication and issue resolution
- **Analytics Dashboard**: Business insights and performance metrics

### 📧 **Communication System**
- **Email Integration**: Automated email notifications for orders and updates
- **Order Confirmations**: Detailed order confirmation emails with receipts
- **Status Updates**: Real-time email updates for shipping and delivery
- **Admin Notifications**: Instant admin alerts for new orders and issues

### 🎨 **User Experience**
- **Responsive Design**: Optimized for all devices (mobile, tablet, desktop)
- **Modern UI/UX**: Clean, intuitive interface with smooth animations
- **Fast Loading**: Optimized performance with lazy loading and caching
- **SEO Optimized**: Complete SEO implementation with structured data

## 🛠️ Technology Stack

### **Frontend**
- **React 18.3.1** - Modern UI library with hooks and functional components
- **Vite 5.4.10** - Fast build tool and development server
- **TailwindCSS 3.4.15** - Utility-first CSS framework for styling
- **Framer Motion 11.12.0** - Smooth animations and transitions
- **React Router DOM 7.0.1** - Client-side routing and navigation

### **State Management**
- **Redux Toolkit 2.4.0** - Predictable state container
- **React Redux 9.1.2** - React bindings for Redux
- **State Slices**: Organized state management for cart, user, orders, and products

### **Backend & Database**
- **Firebase 11.1.0** - Complete backend solution
  - **Firestore** - NoSQL document database for data storage
  - **Firebase Auth** - User authentication and authorization
  - **Firebase Realtime Database** - Real-time data synchronization

### **Payment & Services**
- **Razorpay** - Secure payment gateway integration
- **Delhivery API** - Shipping and logistics services
- **Email Services** - Automated email communication system

### **UI Components & Icons**
- **React Icons 5.3.0** - Comprehensive icon library
- **Lottie React 2.4.1** - Animation library for engaging micro-interactions
- **React Lazy Load Image** - Optimized image loading for performance

### **Forms & Validation**
- **React Hook Form 7.54.2** - Performant forms with easy validation
- **React Hot Toast 2.4.1** - Beautiful toast notifications

### **Development Tools**
- **ESLint** - Code linting and quality assurance
- **PostCSS & Autoprefixer** - CSS processing and vendor prefixing
- **Vercel** - Deployment and hosting platform

## 📁 Project Structure

```
Beekeeper/
├── public/                          # Static assets
│   ├── logo.png                     # Brand logo
│   ├── manifest.json               # PWA manifest
│   ├── robots.txt                  # SEO robots file
│   └── sitemap.xml                 # SEO sitemap
├── src/
│   ├── assets/                     # Media assets
│   │   ├── Images/                 # Product and UI images
│   │   ├── Videos/                 # Background videos
│   │   ├── Animations/             # Lottie animation files
│   │   └── sounds/                 # Audio assets
│   ├── components/                 # Reusable components
│   │   ├── Cart/                   # Shopping cart components
│   │   ├── SEO/                    # SEO optimization components
│   │   ├── Animations/             # Animation components
│   │   └── [Component files]       # Individual components
│   ├── pages/                      # Main application pages
│   │   ├── About Us/               # About page and components
│   │   ├── Product/                # Product catalog page
│   │   ├── CheckOut/               # Checkout process pages
│   │   ├── My Orders/              # Order history and details
│   │   ├── Admin/                  # Admin dashboard pages
│   │   ├── NavBar/                 # Navigation components
│   │   └── Terms and Conditions/   # Legal pages
│   ├── Store/                      # Redux store configuration
│   │   ├── Cart/                   # Cart state management
│   │   ├── User/                   # User state management
│   │   ├── Honey/                  # Product state management
│   │   └── OrderDetails/           # Order state management
│   ├── Firebase/                   # Firebase configuration
│   │   ├── config.js               # Firebase setup
│   │   └── Services/               # Firebase services
│   ├── RazorpayPG/                # Payment gateway integration
│   ├── ShippingDetails/           # Logistics and shipping
│   ├── Mailer/                    # Email service integration
│   ├── Framer/                    # Animation configurations
│   └── conf/                      # Environment configuration
├── index.html                     # Main HTML template
├── package.json                   # Dependencies and scripts
├── tailwind.config.js            # TailwindCSS configuration
├── vite.config.js                # Vite build configuration
├── eslint.config.js              # ESLint configuration
└── vercel.json                   # Vercel deployment config
```

## 🚀 Getting Started

### Prerequisites
- **Node.js** (v16 or higher)
- **npm** or **yarn** package manager
- **Firebase Account** for backend services
- **Razorpay Account** for payment processing
- **Delhivery Account** for shipping services

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/mohdfaziel/E-Commerce-Honey-Selling-Website-.git
   cd Beekeeper
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   Create a `.env` file in the root directory:
   ```env
   # Firebase Configuration
   VITE_FIREBASE_APIKEY=your_firebase_api_key
   VITE_FIREBASE_AUTHDOMAIN=your_firebase_auth_domain
   VITE_FIREBASE_PROJECT_ID=your_firebase_project_id
   VITE_FIREBASE_STORAGEBUCKET=your_firebase_storage_bucket
   VITE_FIREBASE_MESSAGINGSENDER_ID=your_firebase_messaging_sender_id
   VITE_FIREBASE_APPID=your_firebase_app_id

   # Payment Gateway
   VITE_RAZORPAY_KEY_ID=your_razorpay_key_id

   # API Endpoints
   VITE_API_URL=your_backend_api_url
   ```

4. **Firebase Setup**
   - Create a Firebase project
   - Enable Firestore Database
   - Enable Authentication (Google provider)
   - Configure security rules

5. **Start Development Server**
   ```bash
   npm run dev
   ```

6. **Build for Production**
   ```bash
   npm run build
   ```

## 🔧 Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Create optimized production build
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality checks

## 📱 Features in Detail

### **Shopping Experience**
- **Product Browsing**: Detailed product information with high-quality images
- **Weight Selection**: Choose from 0.5kg, 1kg, or 2kg honey jars
- **Price Calculator**: Real-time price updates based on quantity and weight
- **Stock Verification**: Real-time inventory checking before purchase

### **Checkout Process**
- **Address Validation**: Pincode-based address verification
- **Shipping Calculator**: Dynamic shipping cost calculation
- **Payment Options**: Multiple payment methods via Razorpay
- **Order Confirmation**: Immediate confirmation with order tracking details

### **Order Management**
- **Order Tracking**: Real-time status updates from placement to delivery
- **Email Notifications**: Automated updates at each order stage
- **Order History**: Complete purchase history with detailed information
- **Customer Support**: Direct communication channels for assistance

### **Admin Capabilities**
- **Dashboard Overview**: Comprehensive business metrics and insights
- **Order Management**: Complete order lifecycle management
- **Inventory Control**: Real-time stock updates and management
- **Customer Communication**: Direct email communication system

## 🎨 Design & UI

### **Visual Design**
- **Brand Colors**: Warm honey-inspired color palette (#FFCE23, #F6B012, #DA8A00)
- **Typography**: Clean, readable fonts with proper hierarchy
- **Imagery**: High-quality product images and natural backgrounds
- **Animations**: Smooth Framer Motion animations for enhanced UX

### **Responsive Design**
- **Mobile First**: Optimized for mobile devices
- **Tablet Support**: Perfect tablet experience
- **Desktop**: Full-featured desktop interface
- **Cross-browser**: Compatible with all modern browsers

## 🔒 Security & Performance

### **Security Measures**
- **Firebase Security Rules**: Comprehensive database security
- **Payment Security**: PCI-compliant payment processing
- **Data Encryption**: Secure data transmission and storage
- **Authentication**: Secure Google OAuth integration

### **Performance Optimization**
- **Lazy Loading**: Images and components loaded on demand
- **Code Splitting**: Optimized bundle sizes for faster loading
- **Caching**: Efficient caching strategies for better performance
- **CDN**: Fast content delivery via Vercel's global CDN

## 📊 SEO & Analytics

### **SEO Features**
- **Meta Tags**: Comprehensive meta tag optimization
- **Structured Data**: Schema.org markup for rich snippets
- **Sitemap**: XML sitemap for search engine indexing
- **Open Graph**: Social media sharing optimization

### **Performance Monitoring**
- **Google Analytics**: User behavior tracking and insights
- **Performance Metrics**: Core Web Vitals monitoring
- **Error Tracking**: Comprehensive error monitoring and reporting

## 🌐 Deployment

The application is deployed on **Vercel** with automatic deployments from the main branch.

**Live Demo**: [https://roynect.vercel.app](https://roynect.vercel.app)

### **Deployment Configuration**
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Node Version**: 18.x
- **Environment Variables**: Configured in Vercel dashboard

## 🤝 Contributing

We welcome contributions to improve RoyNect! Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/AmazingFeature`
3. **Commit changes**: `git commit -m 'Add AmazingFeature'`
4. **Push to branch**: `git push origin feature/AmazingFeature`
5. **Open a Pull Request**

### **Development Guidelines**
- Follow existing code style and conventions
- Write meaningful commit messages
- Test thoroughly before submitting
- Update documentation as needed

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Team

**Developer**: [Mohd Faziel](https://github.com/mohdfaziel)
- **Role**: Full Stack Developer
- **Location**: Bhadarwah, Jammu & Kashmir
- **Contact**: roynectt@gmail.com

## 📞 Support & Contact

### **Customer Support**
- **Email**: [roynectt@gmail.com](mailto:roynectt@gmail.com)
- **Phone**: [+91 7006205934](tel:+917006205934)
- **Address**: Bhadarwah, Doda, Jammu & Kashmir, India - 182222

### **Business Hours**
- **Monday - Saturday**: 9:00 AM - 7:00 PM IST
- **Sunday**: 10:00 AM - 5:00 PM IST

## 🙏 Acknowledgments

- **Firebase** for providing robust backend infrastructure
- **Razorpay** for secure payment processing
- **Delhivery** for reliable logistics services
- **Vercel** for seamless deployment and hosting
- **React Community** for excellent ecosystem and support

## 📈 Future Roadmap

### **Upcoming Features**
- **Mobile App**: Native iOS and Android applications
- **Subscription Service**: Monthly honey delivery subscriptions
- **Loyalty Program**: Customer rewards and referral system
- **Multi-language Support**: Regional language support
- **Advanced Analytics**: Enhanced business intelligence dashboard
- **Bulk Orders**: B2B ordering system for businesses
- **Gift Cards**: Digital gift card system
- **Product Reviews**: Customer review and rating system

### **Technical Improvements**
- **PWA Features**: Progressive Web App capabilities
- **Offline Support**: Offline browsing and cart management
- **Push Notifications**: Real-time order updates
- **GraphQL Integration**: Optimized data fetching
- **Microservices**: Scalable backend architecture

---

<div align="center">
  <p><strong>Made with ❤️ in Kashmir</strong></p>
  <p>Experience the pure taste of Himalayan honey with RoyNect</p>
  
  [![Website](https://img.shields.io/badge/Website-roynect.vercel.app-green.svg)](https://roynect.vercel.app)
  [![Email](https://img.shields.io/badge/Email-roynectt@gmail.com-red.svg)](mailto:roynectt@gmail.com)
  [![Phone](https://img.shields.io/badge/Phone-+91_7006205934-blue.svg)](tel:+917006205934)
</div>
