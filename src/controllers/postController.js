function Post(req, res) {
    console.log("hello world");
    res.json({ message: 'Post, World!' });
  }

  export default Post;