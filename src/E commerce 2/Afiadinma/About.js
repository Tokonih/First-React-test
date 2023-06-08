import "./Afiadinma.css";
import Test from "../components/Test";

function Contact() {
  return (
      <div>
        <Test/>
      <div className="about_sec1">
        <div className="About">
          <h1>About Us</h1>
        </div>

        <div className="ent">
          <h3>
            At Afiadinma Enterprises, We Work Hard To Provide You The Best Quality
            Products.
          </h3>
          <button>Read More</button>
        </div>
      </div>

      <div className="comp">
        <div className="comp-">
          <h2>Our Company</h2>
          <p>
            We exist to give you the confidence to be whoever you want to be
            when it comes to fashion.{" "}
          </p>
          <p>
            Our audience are unique, and we do everything we can to help them
            find their fit when it comes to fashion.
          </p>
          <p>
            We don’t do fashion like anyone else does fashion. Our Brands, look
            between the lines to bring you the freshest clothing, shoes,
            accessories and gifts. When it comes to our curation of brands at
            Afiadinma Enterprises, we select the best of those to give you the
            biggest variety, amazing exclusives and coolest collaborations.
          </p>
        </div>
        <div className="comp2">
          <div>
            <p>
              We continually strive to make your experience with us as seamless
              as possible in our free shipping and returns (T&C apply)
            </p>
            <p>
              Whether inspired by a look in a magazine or a friend’s vibe, you
              can now find similar pieces faster and easier
            </p>
          </div>
          <div>
            <p className="comp2-right">
              than ever before with our photo search technology that is coming
              live in few months. Snap or upload an image and Style Match
              searches all our products to show you the closest things.
            </p>
          </div>
        </div>
      </div>

      <div className="interest">
        <h1>Interested in shopping with us?</h1>
        <h1>Click the button below!</h1>
        <button>Go To Shop</button>
      </div>
    </div>
  );
}
export default Contact;
