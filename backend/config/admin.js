module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '099975bb48151d523b33c82c017e264c'),
  },
});
