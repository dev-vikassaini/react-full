import React, { userState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { usersAction } from "./redux/actions/usersAction";
import PlaceholderUser from "./PlaceholderUser";
import { getUsers } from "./sagas/actions/users.saga.action";

import {
  Routes,
  Route,
  Link,
  useNavigate,
  useLocation,
  Navigate,
  Outlet,
  useHref,
  useLinkClickHandler,
} from "react-router-dom";
import { fakeAuthProvider } from "./Auth/authService";

export default function AppForRoute() {
  return (
    <div>
      <h1>Basic Example</h1>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="dashboard" element={<Dashboard />}>
            {" "}
            <Route path="messages" element={<DashboardMessages />} />
            <Route path="tasks" element={<DashboardTasks />} />
          </Route>
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </div>

    // <AuthProvider>
    //   <h1>Auth Example</h1>
    //   <Routes>
    //     <Route element={<Layout />}>
    //       <Route path="/" element={<PublicPage />} />
    //       <Route path="/login" element={<LoginPage />} />
    //       <Route
    //         path="/protected"
    //         element={
    //           <RequireAuth>
    //             <ProtectedPage />
    //           </RequireAuth>
    //         }
    //       />
    //     </Route>
    //   </Routes>
    // </AuthProvider>
  );
}

function Layout() {
  return (
    <div>
      {/* A "layout route" is a good place to put markup you want to
              share across all the pages on your site, like navigation. */}
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/nothing-here">Nothing Here</Link>
          </li>
        </ul>
      </nav>

      <hr />

      {/* An <Outlet> renders whatever child route is currently active,
              so you can think about this <Outlet> as a placeholder for
              the child routes we defined above. */}
      <Outlet />
    </div>
  );
}

function Home() {
  // const dispatch = useDispatch();
  // const products = useSelector((state) => state.UserSagaReducer);
  // debugger
  // useEffect(() => {
  //   dispatch(getUsers());
  // }, []);

  return (
    <div>
      <h2>Home</h2>

      {/* <div>
        {isLoading ? (
          <div>Loading...</div>
        ) : error ? (
          <div>Error</div>
        ) : (
          <table className="table" border="1">
            <thead>
              <tr>
                <th>Name</th>
                <th>Username</th>
                <th>Email</th>
              </tr>
            </thead>
            {usersListFromSaga.map((user, index) => (
              <tbody>
                <tr key={user.id.toString()}>
                  <td>{user.name}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                </tr>
              </tbody>
            ))}
          </table>
        )}
      </div> */}
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

function Dashboard() {
  const dispatch = useDispatch();
  const userList = useSelector((state) => state.userList);
  const { loading, users, error } = userList;
  useEffect(() => {
    dispatch(usersAction());
  }, [dispatch]);
  return (
    <div>
      <h2>Dashboard</h2>
      {loading ? (
        <h2>Loading .....</h2>
      ) : error ? (
        <h2>{error}</h2>
      ) : (
        <PlaceholderUser users={users} />
      )}
      <Outlet />
    </div>
  );
}

function DashboardMessages() {
  return (
    <div>
      <h2>DashboardMessages</h2>
    </div>
  );
}

function DashboardTasks() {
  return (
    <div>
      <h2>DashboardTasks</h2>
    </div>
  );
}

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}

function Layout1() {
  return (
    <div>
      <AuthStatus />

      <ul>
        <li>
          <Link to="/">Public Page</Link>
        </li>
        <li>
          <Link to="/protected">Protected Page</Link>
        </li>
      </ul>

      <Outlet />
    </div>
  );
}

let AuthContext = React.createContext();

function AuthProvider({ children }) {
  let [user, setUser] = React.useState(null);

  let signin = (newUser, callback) => {
    return fakeAuthProvider.signin(() => {
      setUser(newUser);
      callback();
    });
  };

  let signout = (callback) => {
    return fakeAuthProvider.signout(() => {
      setUser(null);
      callback();
    });
  };

  let value = { user, signin, signout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

function useAuth() {
  return React.useContext(AuthContext);
}

function AuthStatus() {
  let auth = useAuth();
  let navigate = useNavigate();

  if (!auth.user) {
    return <p>You are not logged in.</p>;
  }

  return (
    <p>
      Welcome {auth.user}!{" "}
      <button
        onClick={() => {
          auth.signout(() => navigate("/"));
        }}
      >
        Sign out
      </button>
    </p>
  );
}

function RequireAuth({ children }) {
  let auth = useAuth();
  let location = useLocation();

  if (!auth.user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}

function PublicPage() {
  return <h3>Public</h3>;
}

function ProtectedPage() {
  return <h3>Protected</h3>;
}

function LoginPage() {
  let navigate = useNavigate();
  let location = useLocation();
  let auth = useAuth();

  let from = location.pathname || "/";

  function handleSubmit(event) {
    event.preventDefault();

    let formData = new FormData(event.currentTarget);
    let username = formData.get("username");

    auth.signin(username, () => {
      // Send them back to the page they tried to visit when they were
      // redirected to the login page. Use { replace: true } so we don't create
      // another entry in the history stack for the login page.  This means that
      // when they get to the protected page and click the back button, they
      // won't end up back on the login page, which is also really nice for the
      // user experience.
      navigate(from, { replace: true });
    });
  }

  return (
    <div>
      <p>You must log in to view the page at {from}</p>

      <form onSubmit={handleSubmit}>
        <label>
          Username: <input name="username" type="text" />
        </label>{" "}
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
