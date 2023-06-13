import Navigation from "../components/Test";
import { useLocation } from "react-router-dom";

function UserDetails() {
  const resp = useLocation();
  const result = resp.state;
  console.log(result)

  return (
    <div>
      <Navigation />
      <div className="header">
        <h2>User Details</h2>
      </div>
      <div className="user_details">
        <div className="user_detail">
          <h3>Full Name</h3>
          <p>{result.first_name}</p>
        </div>

        <div className="user_detail">
          <h3>Last Name</h3>
          <p>{result.last_name}</p>
        </div>

        <div className="user_detail">
          <h3>Email</h3>
          <p>{result.Email}</p>
        </div>

        <div className="user_detail">
          <h3>Phone</h3>
          <p>{result.Phone}</p>
        </div>

        <div className="user_detail">
          <h3>Age</h3>
          <p>{result.Age}</p>
        </div>

        <div className="user_detail">
          <h3>Gender</h3>
          <p>{result.Gender}</p>
        </div>

        <div className="user_detail">
          <h3>Occupation</h3>
          <p>{result.Occupation}</p>
        </div>

        <div className="user_detail">
          <h3>Message</h3>
          <p>{result.Message}</p>
        </div>
        <div className="user_detail">
          <h3> Promotion </h3>
          <p>{result.emailInfo ? "I accept the promotional emails" : "i do not want promtional emails"}</p>
        </div>
      </div>
    </div>
  );
}
export default UserDetails;
