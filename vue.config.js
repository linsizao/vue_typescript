module.exports = {
  devServer: {
    before(app) {
      app.get("/api/getFeature", (req, res) => {
        res.json([
          { id: 1, name: "阿萨德" },
          { id: 2, name: "大" }
        ]);
      });
    }
  }
}