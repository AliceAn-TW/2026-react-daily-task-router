import "./App.css";

import {
  HashRouter,
  NavLink,
  Routes,
  Route,
  useNavigate,
  Outlet,
  useParams,
} from "react-router-dom";

const Home = () => {
  return <p>這是首頁</p>;
};
const Todo = () => {
  return (
    <>
      <p>這是 Todo 頁面</p>
      <Logout />
    </>
  );
};
const Login = () => {
  return <p>這是登入頁面</p>;
};
const Register = () => {
  return <p>這是註冊頁面</p>;
};

const Logout = () => {
  let navigate = useNavigate();

  return (
    <button type="button" onClick={() => navigate("/login")}>
      登出
    </button>
  );
};

const Post = () => {
  let navigate = useNavigate();

  return (
    <>
      <p>這是 Post 頁面</p>
      <button type="button" onClick={() => navigate("/post/123456")}>
        了解 Post 詳細內容
      </button>
      <hr />
      <Outlet />
    </>
  );
};
const PostDetail = () => {
  const params = useParams();
  return (
    <>
      <p>這是 Post 詳細內容頁面</p>
      <p>Post ID :{params.postId}</p>
    </>
  );
};

function App() {
  return (
    <div className="container">
      <HashRouter>
        <div className="nav-link">
          <NavLink to="/">
            <p>回到首頁</p>
          </NavLink>
          <NavLink to="/register">
            <p>註冊頁面</p>
          </NavLink>
          <NavLink to="/login">
            <p>登入頁面</p>
          </NavLink>
          <NavLink to="/todo">
            <p>Todo 頁面</p>
          </NavLink>
          <NavLink to="/post">
            <p>Post 頁面</p>
          </NavLink>
        </div>
        {/* Routes, Route 練習區 */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/todo" element={<Todo />} />
          <Route path="/post" element={<Post />}>
            <Route path=":postId" element={<PostDetail />} />
          </Route>
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>你找錯地方，是不是迷路了</p>
              </main>
            }
          />
        </Routes>
        {/* 練習區 */}
      </HashRouter>
    </div>
  );
}

export default App;
