let jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults({
  static: "./build",
});

const users = router.db.get("users");




//Регистрация
server.post('/users', (req, res, next) => {
  const defaultDate = {
    address: null,
    roles: 'Пользователь',
    avatar: null,
    token: getRandomToken(50),
  };
  const loginCheck = users.some((user) => user.login === req.body.login);
  if (
    req.body.login === undefined ||
    req.body.password === undefined ||
    req.body.name === undefined
  ) {
    res.status(400);
    res.send();
  } else if (loginCheck.toJSON()) {
    res.status(400).json({ error: 'Такой логин уже существует' });
    res.send();
  }
  req.body = { ...req.body, ...defaultDate };
  next();
});

server.use(jsonServer.bodyParser);
server.use(middlewares);

server.use(router);
server.listen(process.env.PORT || 8000, () => {
  console.log("JSON server is running on 8000");
});
