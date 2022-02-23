import { useState } from "react";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";

const initialState = {
  name: "",
  email: "",
  message: "",
};
export const Contact = (props) => {
  const [{ name, email, message }, setState] = useState(initialState);
  const [disable, setDisable] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };
  const clearState = () => setState({ ...initialState });

  const handleSubmit = (e) => {
    setDisable(true);
    e.preventDefault();
    emailjs
      .sendForm(
        "service_skesb7n",
        "template_34t1c9t",
        e.target,
        "user_j8oLkLwhIpwH45yBShM52"
      )
      .then(
        (result) => {
          Swal.fire({
            icon: "success",
            title: "پیام با موفقیت ارسال شد",
          });
          e.target.reset();
          setDisable(false);
        },
        (error) => {
          Swal.fire({
            icon: "error",
            title: "مشکل در برقراری اتصال",
            text: error.text,
          });
          setDisable(false);
        }
      );
  };
  return (
    <div>
      <div id="contact">
        <div className="container">
          <div className="col-md-8">
            <div className="row">
              <div className="section-title">
                <h2>ارتباط با من</h2>
                <p>
                  لطفا نظرات، پیشنهادات و انتقادات خود را با ما درمیان بگذارید.
                </p>
              </div>
              <form name="sentMessage" validate onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-control"
                        placeholder="ایمیل"
                        required
                        onChange={handleChange}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-control"
                        placeholder="نام و نام خانوادگی"
                        required
                        onChange={handleChange}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <textarea
                    name="message"
                    id="message"
                    className="form-control"
                    rows="4"
                    placeholder="متن پیام"
                    required
                    onChange={handleChange}
                  ></textarea>
                  <p className="help-block text-danger"></p>
                </div>
                <div id="success"></div>
                <button
                  type="submit"
                  className="btn btn-custom btn-lg"
                  disabled={disable}
                >
                  ارسال پیام
                </button>
              </form>
            </div>
          </div>
          <div className="col-md-3 col-md-offset-1 contact-info">
            <div className="contact-item">
              <h3>راه های ارتباطی دیگر</h3>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  تلفن <i className="fa fa-phone"></i>
                </span>{" "}
                {props.data ? props.data.phone : "loading"}
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  ایمیل <i className="fa fa-envelope-o"></i>
                </span>{" "}
                {props.data ? props.data.email : "loading"}
              </p>
            </div>
          </div>
          <div className="col-md-12">
            <div className="row">
              <div className="social">
                <ul>
                  <li>
                    <a href={props.data ? props.data.linkedin : "/"}>
                      <i className="fa fa-linkedin"></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.instagram : "/"}>
                      <i className="fa fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.youtube : "/"}>
                      <i className="fa fa-youtube"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="footer">
        <div className="container text-center">
          <p>
            &copy; 2022 Powered by{" "}
            <a href="https://www.linkedin.com/in/mahdi-mohammadi81">
              Mahdi Mohammadi
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
