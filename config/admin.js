module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'e349234669b0580f06467cfb05d34eb9'),
  },
});
