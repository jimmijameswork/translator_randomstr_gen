# Text Translator & Random String Generator

A React application built with **React**, **TailwindCSS**, and **React Router** that provides two main features:

1. **Text Translator** – Enter text in English and translate it into your favorite language using **RapidAPI**.  
2. **Random String Generator** – Generate random alphanumeric strings using React hooks (`useState`, `useCallback`, `useEffect`).  

---

## 🚀 Features
- Translate English text into multiple languages (Spanish, French, Hindi, Chinese, etc.).
- Generate random strings instantly.
- Responsive UI with **TailwindCSS**.
- **Client-side routing** using `react-router-dom`.
- Clean component-based structure.

---

## 🛠️ Tech Stack
- **React 18+**
- **Tailwind CSS**
- **React Router DOM**
- **Axios**
- **RapidAPI Translation API**

---

## 📂 Project Structure
```
src/
├─ components/
│  ├─ Navbar.jsx
│  ├─ Translator.jsx
│  ├─ RandomString.jsx
├─ pages/
│  ├─ Home.jsx
│  ├─ TranslatePage.jsx
│  ├─ RandomStringPage.jsx
├─ App.jsx
├─ index.js
```

---

## ⚙️ Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/text-translator-app.git
   cd text-translator-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Install Tailwind CSS:
   ```bash
   npm install -D tailwindcss postcss autoprefixer
   npx tailwindcss init -p
   ```

   Add the following to **tailwind.config.js**:
   ```js
   module.exports = {
     content: ["./src/**/*.{js,jsx,ts,tsx}"],
     theme: { extend: {} },
     plugins: [],
   };
   ```

4. Set up environment variables:  
   Create a `.env` file in the root directory:
   ```
   VITE_RAPIDAPI_KEY=your_api_key_here
   ```

---

## ▶️ Usage

### Start Development Server
```bash
npm run dev
```

### Translator
- Navigate to **/translate**.
- Enter text in English.
- Choose a target language.
- Click **Translate** → The translated text will appear.

### Random String Generator
- Navigate to **/random**.
- View an auto-generated string.
- Click **Generate New String** to refresh.

---

## 📌 Notes
- Ensure you are subscribed to the chosen RapidAPI translator API.
- Some APIs may block **frontend-only requests**. If you face CORS or 401/403 issues, set up a **Node.js/Express proxy**.
- Keep your **RapidAPI key** safe and never commit it to GitHub.

---

## 📜 License
This project is licensed under the MIT License.
