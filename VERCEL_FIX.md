# How to Fix the "P1001: Can't reach database" Error

You need to add **two** separate environment variables in Vercel to allow the build (migrations) and the app to work correctly with Supabase.

### Step 1: Get the Keys from Supabase
1.  Log in to your [Supabase Dashboard](https://supabase.com/dashboard).
2.  Open your Project.
3.  Click the **Connect** button (top right).
4.  Select **ORMs** -> **Prisma**.
5.  You will see two different URLs.
    *   **Transaction Mode** (Port 6543): Copy this.
    *   **Session Mode** (Port 5432): Copy this.

*(If you don't see the specific ports, check the checkmark for "Use connection pooling")*

### Step 2: Update Vercel Settings
1.  Go to your Project in Vercel.
2.  Click **Settings** -> **Environment Variables**.
3.  **Edit `DATABASE_URL`**:
    *   Paste the **Transaction Mode** URL (Port 6543).
    *   *Example endpoint:* `...supabase.co:6543/postgres?pgbouncer=true`
4.  **Add `DIRECT_URL`**:
    *   Paste the **Session Mode** URL (Port 5432).
    *   *Example endpoint:* `...supabase.co:5432/postgres`

### Step 3: Redeploy
1.  Go to **Deployments** in Vercel.
2.  Click the three dots (`...`) on the failed build.
3.  Select **Redeploy**.

This works because `DIRECT_URL` allows Prisma to run migrations during the build (which needs a direct connection), while `DATABASE_URL` handles the website traffic efficiently.
