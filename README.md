# Article Management Platform (Frontend)

**Technologies**: Next.js 15, TypeScript, Redux, JWT, Tailwind CSS, Material UI  
**Features**: Auth, Articles Creating, Day-Based Visibility, Stars Rating, Protected Routes  

## 🛠 Local Setup

1. **Clone & Install**  
  ```bash
git clone https://github.com/frzfrsfra3/frontend_devteam.git
cd frontend_devteam
npm i or npm i --force
```
   

2. **Configure Environment**  
   Create `.env.local` for development environment or `.env.prod` for production environment and add your backend url to variable of NEXT_PUBLIC_API_BASE_URL :
   ```env
   NEXT_PUBLIC_API_BASE_URL="http://localhost:8000/api"
   ```

3. **Run Development Server**  
   ```bash
   npm run dev
   ```

4. **Production Build**  
   ```bash
   npm run build
   npm start
   ```
