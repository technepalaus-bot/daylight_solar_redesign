# ============================================================
# SUPABASE CONFIGURATION FOR VERCEL DEPLOYMENT
# ============================================================

## 🔑 Step 1: Get Connection String from Supabase

1. Go to [Supabase Dashboard](https://app.supabase.com)
2. Select your project
3. Click **Settings** → **Database**
4. Under "Connection string", select **Nodejs** (for Prisma)
5. Copy the connection string (starts with `postgresql://`)
6. Replace `[YOUR-PASSWORD]` with your database password

Example:
```
postgresql://postgres:[YOUR-PASSWORD]@db.xxxxxxxxxxxx.supabase.co:5432/postgres
```

## 🚀 Step 2: Add to .env.local (for local development)

```bash
# Supabase Database URL (from Step 1)
DATABASE_URL="postgresql://postgres:password@db.xxxxxxxxxxxx.supabase.co:5432/postgres"

NEXTAUTH_SECRET="your-dev-secret"
NEXTAUTH_URL="http://localhost:3000"
NEXT_PUBLIC_SITE_URL="http://localhost:3000"

# Optional: Email configuration
EMAIL_HOST="smtp.gmail.com"
EMAIL_PORT="587"
EMAIL_USER="your-email@gmail.com"
EMAIL_PASS="your-app-password"
ADMIN_EMAIL="admin@yourmail.com"
```

## 🌐 Step 3: Add to Vercel Environment Variables

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Select your project
3. **Settings** → **Environment Variables**
4. Add these variables:

| Name | Value |
|------|-------|
| `DATABASE_URL` | `postgresql://postgres:password@db.xxxxxxxxxxxx.supabase.co:5432/postgres` |
| `NEXTAUTH_SECRET` | `your-generated-production-secret` (use: `openssl rand -base64 32`) |
| `NEXTAUTH_URL` | `https://your-domain.vercel.app` |
| `NEXT_PUBLIC_SITE_URL` | `https://your-domain.vercel.app` |
| `EMAIL_HOST` | `smtp.gmail.com` |
| `EMAIL_PORT` | `587` |
| `EMAIL_USER` | `your-email@gmail.com` |
| `EMAIL_PASS` | `your-app-password` |
| `ADMIN_EMAIL` | `admin@yourmail.com` |

## 📊 Step 4: Push Database Schema to Supabase

```bash
# Create migrations (if not already done)
npx prisma migrate dev --name init

# Push to Supabase
npx prisma db push
```

## ✅ Step 5: Deploy to Vercel

1. Commit changes: `git add . && git commit -m "Update to Supabase PostgreSQL"`
2. Push to GitHub: `git push origin main`
3. Vercel auto-deploys from GitHub

## 🎉 Done!

Your data will be securely stored in Supabase PostgreSQL and accessible through your Vercel admin panel!

### Useful Links:
- [Supabase Dashboard](https://app.supabase.com)
- [Vercel Dashboard](https://vercel.com/dashboard)
- [Prisma Docs](https://www.prisma.io/docs/)
