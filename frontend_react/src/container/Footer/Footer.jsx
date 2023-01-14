import React, { useState } from 'react';

import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import { client } from '../../client';
<<<<<<< Updated upstream
import './Footer.scss';

const Footer = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { username, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: 'contact',
      name: username,
      email: email,
      message: message,
    };

    client.create(contact)
      .then(() => {
        setLoading(false);
        setIsFormSubmitted(true);
      })
      .catch((err) => console.log(err));
  };

=======
import './Footer.scss'

const Footer = () => {
  const [formData, setFormData] = useState({name: "", email: "", message: ""});
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);


>>>>>>> Stashed changes
  return (
    <>
      <h2 className="head-text">Take a coffee & chat with me</h2>

      <div className="app__footer-cards">
<<<<<<< Updated upstream
        <div className="app__footer-card ">
          <img src={images.email} alt="email" />
          <a href="mailto:anguslindcheng@gmail.com" className="p-text">anguslindcheng@gmail.com</a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="phone" />
          <a href="tel:+61 403 779 594" className="p-text">+61 403 779 594</a>
        </div>
      </div>
      {!isFormSubmitted ? (
        <div className="app__footer-form app__flex">
          <div className="app__flex">
            <input className="p-text" type="text" placeholder="Your Name" name="username" value={username} onChange={handleChangeInput} />
          </div>
          <div className="app__flex">
            <input className="p-text" type="email" placeholder="Your Email" name="email" value={email} onChange={handleChangeInput} />
          </div>
          <div>
            <textarea
              className="p-text"
              placeholder="Your Message"
              value={message}
              name="message"
              onChange={handleChangeInput}
            />
          </div>
          <button type="button" className="p-text" onClick={handleSubmit}>{!loading ? 'Send Message' : 'Sending...'}</button>
        </div>
      ) : (
        <div>
          <h3 className="head-text">
            Thank you for getting in touch!
          </h3>
        </div>
      )}
      <div className="copyright">
          <p className="p-text">@2022 Angus</p>
          <p className="p-text">All rights reserved</p>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'app__whitebg',
);
=======
        <div classname="app__footer-card">
          <img src={images.email} alt="email" />
          <a href="mailto:anguslindcheng@gmail.com" className="p-text">anguslindcheng@gmail.com</a>
        </div>
        <div classname="app__footer-card">
          <img src={images.mobile} alt="mobile" />
          <a href="tel:0403 779 594" className="p-text">0403 779 594</a>
        </div>
      </div>

      <div className="app__footer-form app__Flex">
        <div className="app__flex">
          <input className="p-text" type="text" placeholder="Your name" name="name" value={name} onChange={handleChangeInput}/>
        </div>
        <div className="app__flex">
          <input className="p-text" type="text" placeholder="Your email" email="email" value={email} onChange={handleChangeInput}/>
        </div>
        <div>
          <textarea
            className="p-text"
            placeholder="Your Message"
            value={message}
            name={message}
            onChange={handleChangeInput}
          />
        </div>
        <button type="button" className="p-text" onCLick="handleSubmit">{loading ? "Sending" : "Submit Message"}</button>
      </div>


    </>
  )
}

export default AppWrap (
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'app__whitebg'
)
>>>>>>> Stashed changes
