import Test from "../components/Test";
import Btn from "../components/Btn";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Contact() {
  // function Contact(){
  // const [formData, setformData] = useState({
  //     first_name: '',
  //     last_name:'',
  //     email: '',
  //     phone: '',
  //     age:'',
  //     gender:'',
  //     occupation:'',
  //     message:'',
  //     emailpromo: false,
  // })
  const [fname, setFname] = useState("");
  const [Lname, setLname] = useState("");
  const [Email, setEmail] = useState("");
  const [Phone, setPhone] = useState("");
  const [Age, setAge] = useState("");
  const [Gender, setGender] = useState("");
  const [Occupation, setOccupation] = useState("");
  const [Message, setMessage] = useState("");
  const [emailInfo, setemailInfo] = useState(false)
  const [err, seterr] = useState(false)
  const navigate = useNavigate()
//   const history = useHistory()

  const handleEmailInfo = (e)=>{
    e.target.checked ? setemailInfo(true) : setemailInfo(false)
    console.log(setemailInfo)
  };

  const handleSubmit =(e) =>{
    e.preventDefault()
    if(fname === '' || Lname === '' || Email === '' || Phone === '' || Age === '' || Gender ==='' || Occupation === '' || Message === ''  ){
        seterr (true)
        return
    }

    let userInfo = {
        first_name: fname,
        last_name: Lname,
        Email: Email, 
        Phone: Phone,
        Age: Age,
        Gender: Gender,
        Occupation: Occupation,
        Message: Message,
        // Emailinfo: emailinfo
    }
    console.log(userInfo)
    navigate("/UserDetails", {state: userInfo})
    
  }

  // }
  return (
    <div className="form-container">
      <Test />

      <div className="header">
        <h1>Contact Us</h1>
      </div>
      <form action="" className="form " onSubmit={handleSubmit}>
        <div className="form-grid">
          <div className="form-group">
            <label htmlFor="">First name</label>
            <input
              type="text "
              value={fname}
              onChange={(e) => setFname(e.target.value)}
            />
            {err === true && fname=== ''? <span>First name is required</span>: null}
          </div>

          <div className="form-group">
            <label htmlFor="">Last name</label>
            <input
              type="text "
              value={Lname}
              onChange={(e) => setLname(e.target.value)}
              
            />
            {err === true && Lname=== ''? <span>Last name is required</span>: null}
          </div>

          <div className="form-group">
            <label htmlFor="">Email</label>
            <input
              type="email"
              value={Email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {err === true && Email === ''? <span>Email is required</span>: null}

          </div>
          <div className="form-group">
            <label htmlFor="">Phone</label>
            <input
              type="Number "
              value={Phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            {err === true && Phone === ''? <span>Phone is required</span>: null}

          </div>
          <div className="form-group">
            <label htmlFor="">Age</label>
            <input
              type="text "
              value={Age}
              onChange={(e) => setAge(e.target.value)}
            />
            {err === true && Age === ''? <span>Age required</span>: null}

          </div>
          <div className="form-group">
            <label htmlFor="">Gender</label>
            <select value={Gender} onChange={(e) => setGender(e.target.value)}>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="others">Others</option>
            </select>
            {err === true && Gender === ''? <span>Gender required</span>: null}

          </div>

          <div className="form-group">
            <label htmlFor="">Occupation</label>
            <select
              name=""
              id=""
              value={Occupation}
              onChange={(e) => setOccupation(e.target.value)}
            >
              <option value="Doctor(Medical)">Doctor(Medical)</option>
              <option value="Lawyer">Female</option>
              <option value="Nurse">Nurse</option>
              <option value="ICT">ICT</option>
              <option value="Farmer">Farmer</option>
              <option value="Chef">Chef</option>
              <option value="Other">Other</option>
            </select>
            {err === true && Occupation === ''? <span>Occupation required</span>: null}

          </div>
          <div className="form-group">
            <label htmlFor="">Message</label>
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              value={Message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            {err === true && Message === ''? <span>Message required</span>: null}

          </div>
          <div className="form-checkbox">
            <span>Send me promotions to my email</span>
            <input type="checkbox" checked={emailInfo} onChange={handleEmailInfo}/>
          </div>
          {emailInfo === true ? <span>you have accepted email promotion</span> : null}
        </div>

        <div>
          <Btn
            color="white"
            bgColor="#5887A4"
            title="Submit"
            width="100%"
            padding="10px 5px"
          />
        </div>
      </form>
    </div>
  );
}
export default Contact;