# Database Setup Guide

## Prisma Authentication Error Fix

If you're getting the error:
```
Error: P1000: Authentication failed against database server, the provided database credentials for `postgres` are not valid.
```

This means your database credentials in `.env` are incorrect or missing.

## Required Environment Variables

Your `.env` file in the `backend` directory must contain:

```env
DATABASE_URL=postgresql://postgres:[YOUR_PASSWORD]@aws-1-eu-west-2.pooler.supabase.com:6543/postgres?pgbouncer=true
DIRECT_URL=postgresql://postgres:[YOUR_PASSWORD]@aws-1-eu-west-2.pooler.supabase.com:5432/postgres
```

## How to Get Your Supabase Credentials

1. Go to your Supabase project dashboard
2. Navigate to **Settings** → **Database**
3. Find the **Connection string** section
4. Copy the connection string for:
   - **Connection pooling** (for `DATABASE_URL`) - uses port **6543**
   - **Direct connection** (for `DIRECT_URL`) - uses port **5432**

## Important Notes

- Replace `[YOUR_PASSWORD]` with your actual database password
- The `DIRECT_URL` is required for Prisma migrations (like `prisma migrate reset`)
- Make sure there are no extra spaces or quotes around the connection strings
- If your password contains special characters, URL-encode them (e.g., `@` becomes `%40`)

## Testing the Connection

After updating your `.env` file, test the connection:

```bash
npx prisma db pull
```

Or verify with:

```bash
npx prisma migrate reset
```

## Common Issues

1. **Wrong password**: Double-check your Supabase database password
2. **Missing DIRECT_URL**: Prisma migrations require `DIRECT_URL` to be set
3. **URL encoding**: Special characters in passwords need to be URL-encoded
4. **Expired credentials**: If you recently reset your database password, update it in `.env`

