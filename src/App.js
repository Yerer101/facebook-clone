import "./App.css";
import LoginPage from "./components/LoginPage";

function App() {
  return (
    <div className="App">
      <div className="welcome">
        <div className="face-blue">facebook</div>
        <div className="welcome-title">
          Connect with friends and the world around you on Facebook
        </div>
      </div>
      <div className="login-container">
        <LoginPage />
        <div className="forgot">Forgot password?</div>
        <div className="border-bottom"></div>
        <button className="create-btn">Create New Account</button>
      </div>
      <div className="notification">
        <span className="dark">Create a Page</span> for a celebrity, band or
        business.
      </div>
    </div>
  );
}

export default App;
