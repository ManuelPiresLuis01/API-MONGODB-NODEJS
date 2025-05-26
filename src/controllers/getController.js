function Get(req, res) {
    console.log("hello world");
    res.json({ message: 'Get, World!' });
  }

  export default Get;