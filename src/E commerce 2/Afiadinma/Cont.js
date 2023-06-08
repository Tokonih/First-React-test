import "./Afiadinma.css";
import Test from "../components/Test";

function About() {
  return (
    <div>
      <Test />
      <div className="contact">
        <h1>Contact Details</h1>
      </div>

      <div className="contact-">
        <div>
          <div>
            <h4>Our Location</h4>
            <p>984a Saka Jojo Street, Victoria Island, Lagos 101241, Nigeria</p>
          </div>
        </div>
        <div>
          <div>
            <h4>Call Us</h4>
            <p>Call Us</p>
          </div>
        </div>
        <div>
          <div>
            <h4>Our Email</h4>
            <p>hello@afiadinma.ng</p>
            <p>support@afiadinma.ng</p>
          </div>
        </div>
      </div>

      <div className="count2">
        <h3>Send Us a Message</h3>
        <form action="">
          <div className="inputs">
            {/* <label htmlFor="">Name</label> */}
            <input type="text" placeholder="Name"/>
            <span></span>
          </div>
          <div className="inputs">
            {/* <label htmlFor="">Name</label> */}
            <input type="email" placeholder="Email" />
            <span></span>
          </div>
          <div className="inputs">
            {/* <label htmlFor="">Name</label> */}
            <input type="text"  placeholder="Subject" />
            <span></span>
          </div>
          <div className="inputs">
            {/* <label htmlFor="">Name</label> */}
            <textarea name="" id="" cols="100" rows="10"  placeholder="Message"></textarea>
            <span></span>
          </div>
          <button>Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default About;
