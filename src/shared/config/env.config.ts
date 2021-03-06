import 'dotenv/config';

export const ENV = {
    NODE_ENV: process.env.NODE_ENV || 'local',
    DOMAIN_NAME: process.env.DOMAIN_NAME || 'http://localhost:3000',
    PORT: process.env.PORT || 3000,

    DATABASE_HOST: process.env.DATABASE_HOST,
    DATABASE_USERNAME: process.env.DATABASE_USERNAME,
    DATABASE_PASSWORD: process.env.DATABASE_PASSWORD,
    DATABASE_TYPE: process.env.DATABASE_TYPE || 'postgres',
    DATABASE_PORT: process.env.DATABASE_PORT || 5432,
    DATABASE_NAME: process.env.DATABASE_NAME,
    ACCESS_TOKEN_SECRET: process.env.ACCESS_TOKEN_SECRET,
    ACCESS_TOKEN_EXPIRATION: process.env.ACCESS_TOKEN_EXPIRATION || 3000000,
    REFRESH_TOKEN_EXPIRATION: process.env.REFRESH_TOKEN_EXPIRATION || 2592000000,
    REFRESH_TOKEN_SECRET: process.env.REFRESH_TOKEN_SECRET,
    EMAIL_TOKEN_SECRET: process.env.EMAIL_TOKEN_SECRET,
    RESETPASS_TOKEN_SECRET: process.env.RESETPASS_TOKEN_SECRET,
    URL: process.env.URL,
    EMAIL_SERVER: process.env.EMAIL_SERVER,
    SMTP: {
        HOST: process.env.SMTP_HOST,
        PORT: process.env.SMTP_PORT,
        SSL: process.env.SMTP_SSL,
        USER: process.env.SMTP_USER,
        PASS: process.env.SMTP_PASS,
    }
}