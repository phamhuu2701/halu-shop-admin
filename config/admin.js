module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'e94b64779ce9a0d47f9be6ed35a9865a'),
  },
});
