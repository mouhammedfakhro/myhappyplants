## MyHappyPlants - Project Setup Guide

# Prerequisites
Before setting up the project, ensure you have the following installed on your system:
Node.js
Download it here: https://nodejs.org/en/download

# Installation Steps

1. Clone the Repository
```bash
git clone <repository-url>
cd myhappyplants
```

2. Install Dependencies
```bash
npm install
```

3. Configure Environment Variables
    - Create an ".env" file in the root of the project.
    - Place the env values inside the file.
    - Save the file.

4. Setup Prisma (Database) & Generate Prisma Client
```bash
npx prisma generate
```

5. Run Database Migration
```bash
npx prisma migrate dev
```

6. Start the Development Server
```bash
npm run dev
```

7. Running Tests
```bash
npm test
```

Notes: 
* Our Perenual API has a limited number of requests. Once the API call limit is reached, the API key gets blocked. If items do not appear on the Discovery page in the app, it is likely due to exceeding the API call limit.
* You can aquire a new API key here: https://perenual.com/docs/api
* Replace the "NEXT_PUBLIC_PERENUAL_API_KEY" in the .env file with the new API key.
* The new key will become active a few hours after activation.