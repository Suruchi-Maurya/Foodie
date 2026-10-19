# Foodie 🍔🍕

Foodie is a front-end web application built for a food ordering and restaurant management platform. It features a clean, responsive layout with multiple pages dedicated to browsing menus, placing orders, managing bookings, and an admin dashboard.

## 🚀 Features

* **Interactive Menu & Popular Dishes:** Explore a variety of food items and popular dishes ([menu.html](menu.html), [popular_dishesh.html](popular_dishesh.html)).
* **Table Booking & Ordering:** Dedicated pages for table reservations ([book.html](book.html)) and online food ordering ([order.html](order.html), [orderForm.html](orderForm.html)).
* **Admin Dashboard:** Integrated responsive Bootstrap 5 admin dashboard ([admin/responsive-bootstrap5-admin-dashboard-main](admin/responsive-bootstrap5-admin-dashboard-main)) for managing operations.
* **User Authentication:** Login and account pages ([login.html](login.html), [loginPageW3s.html](loginPageW3s.html), [logni-bs5.html](logni-bs5.html)).
* **Informational Pages:** About us, services, customer reviews, and contact sections ([about.html](about.html), [services.html](services.html), [contact.html](contact.html)).

---

## 📂 Detailed File Breakdown

To understand how the codebase is organized, here is what each key file handles:

### Core Layouts & Information
* **[index.html](index.html):** The primary landing page featuring welcome banners, quick navigation, and highlights.
* **[about.html](about.html):** Restaurant story, mission, and background details.
* **[services.html](services.html):** Outlines customer-facing dining and delivery services.
* **[contact.html](contact.html):** Contains customer support and inquiry forms.

### Menus & Showcases
* **[menu.html](menu.html):** Comprehensive catalog of food and drink options.
* **[popular_dishesh.html](popular_dishesh.html):** Highlighted section featuring top-rated or trending food items.
* **[slider.html](slider.html) / [tsts.html](tsts.html):** Layout experiments for carousels and customer testimonials/reviews.

### Booking & Purchasing Workflow
* **[book.html](book.html):** Interface for reserving restaurant tables.
* **[order.html](order.html) & [orderForm.html](orderForm.html):** Forms and pages for structuring food delivery or pickup orders.

### Authentication
* **[login.html](login.html) / [logni-bs5.html](logni-bs5.html):** Custom and Bootstrap-based login forms.
* **[loginPageW3s.html](loginPageW3s.html):** Alternative login template design.

### Dashboard & Assets
* **`admin/`**: A fully responsive Bootstrap 5 administrative panel template for handling operational management views.
* **`css/` & `review.css`**: Stylesheets providing custom design rules and layout structures.
* **`js/`**: JavaScript files powering client-side interactivity.
* **`img/` & images (`image1.jpg` - `image6.jpg`)**: Image assets showcasing dishes and UI branding.

---

## 🛠️ Tech Stack

* **HTML5** (90.7%) - Page structure, semantic elements, and markup
* **CSS3** (6.9%) - Custom styling, layouts, and visual design
* **JavaScript** (2.4%) - Interactive elements, DOM behavior, and user flows
* **Bootstrap 5** - Responsive UI grid framework and admin dashboard styling

---

## 💡 Skills Learned & Demonstrated

By building this project, several important web development competencies are demonstrated:

1. **Multi-Page Architecture:** Designing and linking a cohesive multi-page web application rather than a single-page view.
2. **Responsive UI/UX Development:** Utilizing **Bootstrap 5** and custom CSS to ensure layouts adapt smoothly across mobile, tablet, and desktop screens.
3. **Form Design & Integration:** Implementing multi-purpose web forms for user actions such as login authentication, ordering (`orderForm.html`), table reservations (`book.html`), and contact inquiries.
4. **Dashboard Integration:** Structuring a modular admin environment (`admin/`) to separate user-facing operations from management views.
5. **Asset Organization:** Cleanly structuring project resources into organized directories (`img/`, `css/`, `js/`) for maintainability.

---

## 📂 Project Structure

```text
Foodie/
│
├── .vscode/                   # Editor configuration files
├── admin/                     # Responsive Bootstrap 5 admin dashboard
├── css/                       # Stylesheets and custom styles
├── img/                       # Image assets and food icons
├── js/                        # JavaScript files for interactivity
├── about.html                 # About Us page
├── book.html                  # Table booking page
├── contact.html               # Contact form page
├── image1.jpg - image6.jpg    # Food and brand imagery
├── index.html                 # Home landing page
├── login.html                 # User login page
├── loginPageW3s.html          # Alternative login layout
├── logni-bs5.html             # Bootstrap login page
├── menu.html                  # Full food menu
├── order.html                 # Order placement page
├── orderForm.html             # Detailed order form
├── popular_dishesh.html       # Popular dishes showcase
├── review.css                 # Review section stylesheet
├── services.html              # Services offered page
├── slider.html                # Image slider layout
└── tsts.html                  # Testimonials layout
