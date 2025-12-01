# Newsletter Sign-up Form

This is a responsive Newsletter Sign-up Form built using HTML, CSS, and JavaScript.  
Users can enter their email to subscribe, and the app validates the input before showing a success message.  
The project follows the official Frontend Mentor design, including error states and a confirmation page.

## 🧠 Features
- Email input validation (empty input + invalid format)
- Error messages styled according to the design
- Dynamic styling for invalid emails (red border + background)
- Stores the user's email using localStorage
- Redirects to a success page with a personalized message
- Fully responsive layout for mobile and desktop

## 🚀 How It Works
1. User enters an email address
2. JavaScript checks:
   - If the input is empty
   - If the format is invalid using Regex
3. If valid:
   - Email is stored in `localStorage`
   - Page navigates to `accepted.html`
4. Success page displays the entered email dynamically

## Live Link
https://afayad323-lgtm.github.io/newsLetter-sign-up/

## 🧩 Technologies Used
- HTML5  
- CSS3  
- JavaScript (vanilla)

- 
## 📜 Email Validation
The project uses this Regex:

/^[^\s@]+@[^\s@]+.[^\s@]+$/



This ensures:
- No spaces
- One @ symbol only
- A valid domain with a dot

## 🎯 Learning Goals
- Form validation in JavaScript  
- Handling user input errors  
- Using localStorage  
- Responsive web design  
- DOM manipulation  

## 🙌 Acknowledgements
Design by [Frontend Mentor].  
Built by Ahmed Fayad.
