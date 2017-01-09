// Update with your config settings.

module.exports = {

  development: {
    client: "pg",
    connection: "postgres://localhost/messages_dev"
  },
  test: {
    client: "pg",
    connection: "postgres://localhost/messages_test"
  },
  production: { },

};
