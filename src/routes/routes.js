import Get from "../controllers/getController.js";
import Post from "../controllers/postController.js";

const routes = (app) => {
  app.route("/teste")
  .get(Get)
  .post(Post);
}


export default routes;