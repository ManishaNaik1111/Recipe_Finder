🌟 Project Overview
🔹 Recipe Finder is a smart web application that helps users discover personalized recipes based on their available ingredients, mood, and dietary preferences.
🔹 Powered by React.js (Frontend) and FastAPI (Backend), it uses Google Generative AI to create unique and customized recipes.

🚀 Live Demo
📌 [Deploying soon...]

🛠️ Tech Stack
Frontend:
✅ React.js (JavaScript)
✅ React Router for navigation
✅ Axios for API requests
✅ CSS for styling

Backend:
✅ FastAPI (Python)
✅ Google Generative AI API (Gemini)
✅ Pydantic for request validation

Development & Tools:
✅ Visual Studio Code
✅ npm for frontend package management
✅ pip for backend dependencies

🎯 Features
✔️ User Input Form – Enter ingredients, mood, and dietary preferences.
✔️ AI-Generated Recipes – Uses Google Generative AI to create recipes.
✔️ Dynamic Navigation – Recipe appears on a new page after submission.
✔️ Loading Indicator – Shows "Generating recipe..." while waiting.
✔️ Responsive UI – Clean, elegant, and mobile-friendly design.

🎬 Installation & Setup
🔹 Clone the Repository
git clone https://github.com/yourusername/recipe-finder.git
cd recipe-finder
🔹 Install Dependencies
Frontend (React.js)
cd frontend
npm install
npm start
Backend (FastAPI)
cd backend
pip install -r requirements.txt
uvicorn main:app --reload
📡 API Endpoint
POST	/generate-recipe	Generates a recipe based on user input
Example POST request body:
{
  "ingredients": "chicken, tomatoes, onions",
  "mood": "happy",
  "dietary": "low-carb"
}
🛠️ Future Improvements
🔹 Add Image Recognition – Detect ingredients from images.
🔹 User Authentication – Save favorite recipes.
🔹 Voice Input – Allow users to speak instead of typing.

👨‍💻 Contributors
💡 Deeksha Naik – Developer & Designer


📝 License
📄 MIT License - Free to use and modify!
