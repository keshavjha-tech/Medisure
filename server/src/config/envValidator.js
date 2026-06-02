const requiredEnv = ['MONGODB_URI', 'JWT_SECRET', 'RAZORPAY_KEY', 'FRONTEND_URL'];

export const validateEnv = () => {
    requiredEnv.forEach((env) => {
        if (!process.env[env]) {
            console.error(`CRITICAL ERROR: Environment variable ${env} is missing.`);
            process.exit(1); // Fail fast
        }
    });
};