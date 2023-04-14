import React from "react";
import './Contact.css';

const Contact = () => (
  <>
    <div style={{padding: '0.5rem 2rem'}}>
      <p>CarLo is one of the fastest growing auto chatbot in the country. We will help you not just to show car randomly but also show the car according to the user preference. It will also help you to find which car is the correct choice for you. More importantly, we will even help you get the best deals that are available in the country.</p>
    <section>
    <div className="supportUs-refactor">
      <p>
        Email:
      </p>
      <p style={{color: 'green' , marginLeft: '10px' }}>
        mohitdubey@gmail.com
      </p>
    </div>
    <div className="supportUs-refactor" style={{marginTop: '1rem'}}>
      <p>
        phone:
      </p>
      <p style={{color: 'green', marginLeft: '7px'}}>
        9074923087
      </p>
    </div>

    </section>
    </div>
  </>
);

export default Contact;
