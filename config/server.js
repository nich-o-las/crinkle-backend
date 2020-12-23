module.exports = ({ env }) => ({
  host: env('HOST', process.env.HOST),
  port: env.int('PORT', process.env.PORT),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', 'ca007ea7656d1cece7bd2197465a173d'),
    },
  },
});
