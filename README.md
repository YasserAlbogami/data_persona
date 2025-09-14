# 🔍Data Personality Test Web Application

**Data Personality Test** is a web app that classifies users into **6 data-related personas** based on their preferences and working style.
Built with **Django backend** and **React.js frontend**, it provides an interactive quiz experience and displays results with detailed insights.

---

## 🌟 Features

* 📝 **Interactive Quiz**: 10-question personality test for data roles
* 🎯 **Persona Classification**: Users classified as one of 6 types:

  * **AI Scientist** 📊🔍
  * **Data Scientist** ⚙️🤝📈
  * **ML Engineer** 🛠️🗄️
  * **Data Engineer** 📈📊
  * **Data Analyst** 🤖⚡
  * **AI Engineer** 🧠⚡
* 📊 **Result Dashboard**: View strengths, tools, and next steps
* 🌐 **Multi-language Support**: English & Arabic (Najdi accent)
* ⚡ **Responsive UI**: Modern React.js design

---

## 🚀 Tech Stack

* **Django** – Backend API & database
* **React.js** – Frontend with React Router, React Query, and custom UI components
* **SQLite / PostgreSQL** – User responses and quiz data storage
* **Axios / Fetch** – Communication between frontend & backend
* **TypeScript** – Type safety in frontend

---

## 📡 API Endpoints

### Quiz & Persona

| Method | Endpoint              | Description                                |
| -----: | --------------------- | ------------------------------------------ |
|   POST | `/api/save_persona/`  | Save user responses and calculate persona. |


---

### Frontend Routes

| Route        | Component      | Description                      |
| ------------ | -------------- | -------------------------------- |
| `/`          | Index          | Landing page / quiz introduction |
| `/quiz`      | Quiz           | Interactive 10-question test     |
| `/result`    | Result         | Show user persona and details    |
| `/roles`     | RoleComparison | Compare all personas             |
| `/roles/:id` | RoleDetail     | Detailed info of one persona     |

---

## 📁 Folder Structure

```
data-personality-app/
├── backend/             # Django backend (apps, models, views, serializers, urls)
├── frontend/            # React.js frontend (pages, components, hooks)
├── .venv/               # Python virtual environment
├── main.py              # Django project entry point
├── requirements.txt     # Python dependencies
├── pyproject.toml       # Optional project config
├── .gitignore           # Git ignore rules
├── .python-version      # Python version pin
└── README.md            # Project documentation
```

---
### 📥 Setup & Installation

You must open **two different terminals**: one for the frontend and one for the backend.

#### 1. Clone the Repo

```bash
git clone https://github.com/YasserAlbogami/data_persona.git
cd data_persona
```

#### 2. Frontend

```bash
cd frontend
npm install
npm run dev
```

#### 3. Backend

```bash
cd backend
python -m venv venv
source venv/bin/activate   # On Windows: venv\Scripts\activate
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```

---

## 🧑‍💻 Contributing

Contributions are welcome! Fork the repo and open a pull request.

---

## 📜 License

Copyright (c) 2025 Yasser

All rights reserved. Unauthorized copying, modification, or distribution is prohibited.

---

## 📬 Contact

Developed by **Data Science Club Tech Team**
📧 \[[yasserayalbogami@gmail.com](mailto:yasserayalbogami@gmail.com)]

---

## 🌍 Future Plans

* 📲 Mobile-friendly frontend
* 🔔 Email alerts for quiz completions
* ☁️ Cloud sync for user results
* 🧩 Analytics dashboard for persona trends


