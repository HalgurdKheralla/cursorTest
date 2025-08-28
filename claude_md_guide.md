# CLAUDE.md - MinMap Admin Dashboard Development Guide

## Project Overview

**MinMap Admin Dashboard** is a comprehensive web-based administrative platform supporting the MinMap mobile application ecosystem. This is a dual-sided marketplace for baby and child products with an integrated subscription-based learning hub.

### Key Components
- **Super Admin Dashboard**: Platform management interface for internal team
- **Vendor Dashboard**: Self-service portal for external merchants
- **Mobile App Management System**: Complete control over mobile app content, features, and design

## Architecture & Technology Stack

### Recommended Tech Stack
- **Frontend**: React.js with TypeScript
- **UI Framework**: Tailwind CSS for styling
- **State Management**: Redux Toolkit or Zustand
- **Backend**: Node.js with Express.js
- **Database**: PostgreSQL (primary), Redis (caching)
- **Authentication**: JWT with role-based access control
- **File Storage**: AWS S3 for media assets
- **Real-time**: Socket.io for live updates

### Key Technical Requirements
- Page load times under 3 seconds
- 99.9% uptime availability
- Support for 1000+ concurrent users
- Mobile-responsive design (tablet support)
- SSL/TLS encryption
- GDPR/CCPA compliance

## Core Features by Dashboard

### Super Admin Dashboard Features

#### 1. Dashboard & Analytics
- Real-time KPI metrics display
- Interactive charts with date filtering
- Activity feed with recent platform events
- Custom report builder with export capabilities
- Predictive analytics and trend forecasting

#### 2. User & Vendor Management
- User directory with advanced search/filtering
- Vendor application approval workflow
- Role-based permission system
- Commission rate management (global/individual)
- Automated payout processing

#### 3. E-commerce Management
- Product approval workflow
- Order tracking across all vendors
- Category and promotion management
- Inventory oversight
- Dispute resolution system

#### 4. Content Management (Learning Hub)
- Article management with WYSIWYG editor
- Video upload and management system
- Quiz creation and attachment tools
- Subscription plan configuration
- Editorial workflow management

#### 5. Mobile App Control System
- **Homepage Layout Designer**: Drag-and-drop interface for app homepage
- **Theme Management**: Control app colors, fonts, branding
- **Feature Toggle Dashboard**: Enable/disable features remotely
- **Content Publishing**: Real-time content updates without app store
- **A/B Testing Platform**: Visual test builder for layouts and features
- **Push Notification System**: Segmented campaigns with rich media
- **App Analytics**: User behavior tracking, heat maps, conversion funnels

### Vendor Dashboard Features

#### 1. Business Overview
- Sales performance with trend analysis
- Product performance rankings
- Order status overview
- Account balance and payouts

#### 2. Product & Inventory Management
- Multi-image product listing
- Rich text description editor
- Inventory tracking with alerts
- Pricing management
- Performance analytics per product

#### 3. Order Fulfillment
- Order processing queue
- Shipping integration
- Return processing workflow
- Customer communication tools

#### 4. Financial Management
- Earnings breakdown with commission transparency
- Payout history and requests
- Tax reporting assistance

## Database Schema Considerations

### Core Entities
```
Users (customers, admins, vendors)
- id, email, role, created_at, profile_data

Vendors
- id, user_id, business_name, status, commission_rate, verification_data

Products
- id, vendor_id, name, description, price, category_id, status, inventory

Orders
- id, user_id, vendor_id, status, total_amount, shipping_info

Content (articles, videos)
- id, title, type, content, author_id, category_id, status

Subscriptions
- id, user_id, plan_id, status, start_date, end_date

App_Configurations (for mobile app control)
- id, key, value, type, environment, last_updated
```

### Key Relationships
- Users can have multiple roles (customer, vendor, admin)
- Vendors can have multiple products
- Orders can contain multiple products from different vendors
- Content can have attached quizzes
- App configurations control mobile app behavior

## API Structure

### Authentication Endpoints
```
POST /api/auth/login
POST /api/auth/register
POST /api/auth/refresh
POST /api/auth/logout
```

### Super Admin Endpoints
```
GET /api/admin/dashboard/metrics
GET /api/admin/users
POST /api/admin/users/{id}/update-role
GET /api/admin/vendors
POST /api/admin/vendors/{id}/approve
GET /api/admin/products
POST /api/admin/products/{id}/feature
GET /api/admin/orders
POST /api/admin/content
GET /api/admin/analytics/sales
GET /api/admin/app-config
POST /api/admin/app-config/update
```

### Vendor Endpoints
```
GET /api/vendor/dashboard
GET /api/vendor/products
POST /api/vendor/products
PUT /api/vendor/products/{id}
GET /api/vendor/orders
POST /api/vendor/orders/{id}/update-status
GET /api/vendor/analytics
GET /api/vendor/payouts
```

### Mobile App Configuration Endpoints
```
GET /api/app/config
POST /api/app/config/homepage-layout
POST /api/app/config/theme
POST /api/app/config/features
POST /api/app/notifications/send
GET /api/app/analytics
```

## UI/UX Guidelines

### Design Principles
- Clean, intuitive interface design
- Consistent navigation patterns
- Mobile-first responsive approach
- Accessibility compliance (WCAG 2.1 AA)

### Component Library Structure
```
/components
  /common (buttons, inputs, modals)
  /charts (analytics visualizations)
  /forms (product forms, user forms)
  /tables (data tables with sorting/filtering)
  /layout (navigation, headers, sidebars)
  /mobile-preview (live app preview components)
```

### Color Scheme & Branding
- Primary: Baby/child-friendly color palette
- Admin sections: Professional blue/gray tones
- Vendor sections: Green/success tones for earnings
- Error states: Gentle red tones
- Success states: Soft green tones

## Key Development Priorities

### Phase 1: Foundation (Months 1-2)
1. Set up project structure and authentication
2. Implement basic dashboard layouts
3. User and role management system
4. Basic vendor management features

### Phase 2: Core Features (Months 3-4)
1. Product and order management
2. Payment processing integration
3. Basic analytics implementation
4. File upload and media management

### Phase 3: Mobile App Control (Months 5-6)
1. App configuration management system
2. Real-time content publishing
3. Feature toggle implementation
4. Push notification system

### Phase 4: Advanced Features (Months 7-8)
1. Advanced analytics and reporting
2. A/B testing platform
3. Performance optimization
4. Security hardening and testing

## Security Considerations

### Authentication & Authorization
- JWT tokens with short expiration
- Role-based access control (RBAC)
- Multi-factor authentication for admins
- Rate limiting on all endpoints

### Data Protection
- Input validation and sanitization
- SQL injection prevention
- XSS protection
- CSRF tokens for state-changing operations
- Audit logging for all admin actions

### Mobile App Security
- Secure configuration delivery
- Feature flag validation
- Content sanitization before publishing

## Integration Requirements

### Third-Party Services
- **Payment Processing**: Stripe, PayPal integration
- **Shipping**: FedEx, UPS, DHL APIs
- **Email**: SendGrid for transactional emails
- **SMS**: Twilio for notifications
- **Analytics**: Google Analytics, Mixpanel
- **File Storage**: AWS S3 with CDN
- **Search**: Elasticsearch for product search

### Mobile App Integration
- **Code Push**: Microsoft CodePush or similar
- **Analytics**: Firebase Analytics
- **Crash Reporting**: Crashlytics
- **Push Notifications**: Firebase Cloud Messaging

## Testing Strategy

### Unit Testing
- Jest for JavaScript/TypeScript
- React Testing Library for components
- Minimum 80% code coverage

### Integration Testing
- API endpoint testing
- Database integration tests
- Third-party service mocks

### E2E Testing
- Cypress for critical user flows
- Admin workflows (vendor approval, product management)
- Vendor workflows (product listing, order processing)

## Performance Optimization

### Frontend Optimization
- Code splitting and lazy loading
- Image optimization and CDN usage
- Bundle size monitoring
- Progressive Web App features

### Backend Optimization
- Database query optimization
- Redis caching strategy
- API response caching
- Background job processing

### Mobile App Performance
- Real-time configuration updates
- Minimal payload for config changes
- Efficient asset delivery

## Monitoring & Analytics

### Application Monitoring
- Error tracking (Sentry)
- Performance monitoring (New Relic)
- Uptime monitoring
- Real-time alerts

### Business Metrics
- Daily Active Users (DAU)
- Monthly Recurring Revenue (MRR)
- Vendor onboarding conversion
- Content engagement rates
- Mobile app performance metrics

## Development Workflow

### Git Strategy
- Feature branch workflow
- Pull request reviews required
- Automated testing on PR
- Staging environment deployment

### Code Standards
- ESLint + Prettier configuration
- TypeScript strict mode
- Consistent naming conventions
- Documentation requirements

### Deployment Pipeline
- Automated testing
- Security scanning
- Performance testing
- Blue-green deployments
- Rollback capabilities

## Success Metrics

### Launch Criteria
- All core features functional
- Performance benchmarks met
- Security audit completed
- 95% vendor adoption within 3 months

### Post-Launch KPIs
- 90% user satisfaction score
- 99.5% platform uptime
- 50% reduction in manual admin tasks
- Real-time mobile app updates without app store dependency

## Notes for Claude Code Sessions

### When Working on This Project:
1. **Always consider mobile app impact** - Any content or feature changes should include mobile app configuration updates
2. **Prioritize real-time capabilities** - Users expect instant updates, especially for mobile app changes
3. **Security first** - This handles sensitive financial and user data
4. **Scalability mindset** - Design for growth from day one
5. **User experience focus** - Both admin and vendor interfaces should be intuitive
6. **Baby product context** - Remember this is for parents and baby products (safety, trust, quality are paramount)

### Common Development Patterns:
- Use consistent API response formats
- Implement optimistic updates where possible
- Always include loading states and error handling
- Mobile-first responsive design
- Comprehensive input validation
- Audit trails for all administrative actions