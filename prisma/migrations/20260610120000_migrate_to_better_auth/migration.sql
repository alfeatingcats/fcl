-- Migrate from Auth.js (next-auth) schema to Better Auth schema

-- Step 1: Account table migration
-- Add new columns (nullable initially)
ALTER TABLE "Account" ADD COLUMN "accountId" TEXT;
ALTER TABLE "Account" ADD COLUMN "providerId" TEXT;
ALTER TABLE "Account" ADD COLUMN "accessToken" TEXT;
ALTER TABLE "Account" ADD COLUMN "refreshToken" TEXT;
ALTER TABLE "Account" ADD COLUMN "accessTokenExpiresAt" TIMESTAMP(3);
ALTER TABLE "Account" ADD COLUMN "refreshTokenExpiresAt" TIMESTAMP(3);
ALTER TABLE "Account" ADD COLUMN "idToken" TEXT;
ALTER TABLE "Account" ADD COLUMN "password" TEXT;
ALTER TABLE "Account" ADD COLUMN "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;
ALTER TABLE "Account" ADD COLUMN "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- Migrate existing data
UPDATE "Account" SET "accountId" = "providerAccountId";
UPDATE "Account" SET "providerId" = "provider";
UPDATE "Account" SET "accessToken" = "access_token";
UPDATE "Account" SET "refreshToken" = "refresh_token";
UPDATE "Account" SET "idToken" = "id_token";
UPDATE "Account" SET "accessTokenExpiresAt" = to_timestamp("expires_at");

-- Drop old columns
ALTER TABLE "Account" DROP COLUMN "type";
ALTER TABLE "Account" DROP COLUMN "provider";
ALTER TABLE "Account" DROP COLUMN "providerAccountId";
ALTER TABLE "Account" DROP COLUMN "access_token";
ALTER TABLE "Account" DROP COLUMN "refresh_token";
ALTER TABLE "Account" DROP COLUMN "expires_at";
ALTER TABLE "Account" DROP COLUMN "token_type";
ALTER TABLE "Account" DROP COLUMN "session_state";
ALTER TABLE "Account" DROP COLUMN "refresh_token_expires_in";

-- Set NOT NULL on required columns
ALTER TABLE "Account" ALTER COLUMN "accountId" SET NOT NULL;
ALTER TABLE "Account" ALTER COLUMN "providerId" SET NOT NULL;

-- Drop old unique constraint and add new one
DROP INDEX IF EXISTS "Account_provider_providerAccountId_key";
CREATE UNIQUE INDEX "Account_accountId_providerId_key" ON "Account"("accountId", "providerId");

-- Step 2: Session table migration
ALTER TABLE "Session" ADD COLUMN "token" TEXT;
ALTER TABLE "Session" ADD COLUMN "expiresAt" TIMESTAMP(3);
ALTER TABLE "Session" ADD COLUMN "ipAddress" TEXT;
ALTER TABLE "Session" ADD COLUMN "userAgent" TEXT;
ALTER TABLE "Session" ADD COLUMN "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;
ALTER TABLE "Session" ADD COLUMN "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- Migrate existing data
UPDATE "Session" SET "token" = "sessionToken";
UPDATE "Session" SET "expiresAt" = "expires";

-- Drop old columns
ALTER TABLE "Session" DROP COLUMN "sessionToken";
ALTER TABLE "Session" DROP COLUMN "expires";

-- Set NOT NULL on required columns
ALTER TABLE "Session" ALTER COLUMN "token" SET NOT NULL;
ALTER TABLE "Session" ALTER COLUMN "expiresAt" SET NOT NULL;

-- Add unique constraint on token
CREATE UNIQUE INDEX "Session_token_key" ON "Session"("token");

-- Step 3: User table migration
ALTER TABLE "User" ADD COLUMN "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;
ALTER TABLE "User" ADD COLUMN "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- Convert emailVerified from DateTime to Boolean
-- All existing users who logged in via OAuth have verified emails
ALTER TABLE "User" ADD COLUMN "emailVerified_bool" BOOLEAN NOT NULL DEFAULT true;
UPDATE "User" SET "emailVerified_bool" = CASE WHEN "emailVerified" IS NOT NULL THEN true ELSE false END;
ALTER TABLE "User" DROP COLUMN "emailVerified";
ALTER TABLE "User" RENAME COLUMN "emailVerified_bool" TO "emailVerified";

-- Set NOT NULL on name and email (existing data should have these)
ALTER TABLE "User" ALTER COLUMN "name" SET NOT NULL;
ALTER TABLE "User" ALTER COLUMN "email" SET NOT NULL;

-- Step 4: Create Verification table
CREATE TABLE "Verification" (
    "id" TEXT NOT NULL,
    "identifier" TEXT NOT NULL,
    "value" TEXT NOT NULL,
    "expiresAt" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Verification_pkey" PRIMARY KEY ("id")
);

-- Drop old VerificationToken table (no data expected)
DROP TABLE IF EXISTS "VerificationToken";
