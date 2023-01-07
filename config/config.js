require('dotenv').config();

const config = {
  env: process.env.NODE_ENV || 'dev',
  isProd: process.env.NODE_ENV === 'production',
  port: process.env.PORT || 3000,
  dbUrl: process.env.DATABASE_URL,
  ApiKey: process.env.API_KEY,
  JwtKey: process.env.JWT_KEY,
  smtpEmail: process.env.EMAIL_SENDER,
  smtpPassword: process.env.PASS_EMAIL_SENDER
}

module.exports = { config };
