import classes from "./Banner.module.css";
import {useRef} from 'react';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()

async function createInquiry(name, email, phone, inquiry) {
  const response = await fetch('/api/legal-drafting', {
      method: 'POST',
      headers: {
          "Content-type": "application/json; charset=UTF-8"
      },
      body: JSON.stringify({
          name: name,
          email: email,
          phone: phone,
          inquiry: inquiry,
      }),
  });

  const data = await response.json();
  if (!response.ok) {
      throw new Error(data.message || 'something went wrong')
  }

  return data;

}

export default function Banner() {


  const nameInputRef = useRef();
  const emailInputRef = useRef();
  const phoneInputRef = useRef();
  const inquiryInputRef = useRef();


  async function handlerButton(){

    const enteredName =  nameInputRef.current.value;
    const enteredEmail =  emailInputRef .current.value;
    const enteredPhone =  phoneInputRef.current.value;
    const enteredInquiry =  inquiryInputRef.current.value;


    try {
      
        const result = await createInquiry(enteredName, enteredEmail, enteredPhone, enteredInquiry)

        toast("Your Inquiry is submitted")
        
    } catch (err) {
        if(err.message=="Please Fill all the Fields"){
          toast(err.message);
        }

        if(err.message=="Please Enter Valid Name"){
          toast(err.message);
        }

        if(err.message=="Please Enter Valid Email"){
          toast(err.message);
        }

        if(err.message=="Please Enter Valid Phone Number"){
          toast(err.message);
        }

        }
        }



  return (
    <div className={classes.container}>
      <div className={classes.imgMobile}>
        <img
          className={classes.mi}
          src="/Fintaximages/legal-drafting.png"
          alt=""
        />
      </div>
      <div className={classes.imagePart}>
        <div className={classes.headerBackground}>
          <span className={classes.formheading}>
            Any Inquiry??
          </span>
          <div className={classes.form}>
            <h2 className={classes.formh2heading}>
              FINTAX
            </h2>
            <span className={classes.formInputs}>
              <span>
                <span
                  className={`${classes.inputLable} ${classes.inputLable1}`}
                >
                  Name*{" "}
                </span>
                <input
                  placeholder="Your Name"
                  ref={nameInputRef}
                  className={classes.input}
                  type="text"
                  name=""
                  id=""
                />
              </span>

              <span>
                <span
                  className={`${classes.inputLable} ${classes.inputLable2}`}
                >
                  Email*{" "}
                </span>
                <input
                  placeholder="Your Email-address"
                  ref={emailInputRef}
                  className={classes.input}
                  type="text"
                  name=""
                  id=""
                />
              </span>

              <span>
                <span
                  className={`${classes.inputLable} ${classes.inputLable3}`}
                >
                  Mobile*
                </span>
                <input
                  placeholder="Your Mobile Number"
                  ref={phoneInputRef}
                  className={classes.input}
                  type="Number"
                  name=""
                  id=""
                />
               
              </span>
              
              <span>
                <span
                  className={`${classes.inputLable} ${classes.inputLable3}`}
                >
                  Inquiry*
                </span>
                <input
                  placeholder="Your Inquiry"
                  className={classes.input}
                  ref={inquiryInputRef}
                  type="text"
                  name=""
                  id=""
                />
               
              </span>
              <span>
                <button onClick={handlerButton} className={classes.buttonForm} type="submit">
                  Send Inquiry
                </button>
              </span>
            </span>
          </div>
        </div>
      </div>



      <h1 className={classes.headingh1}>
      What Is Website Disclaimer Policy?
      </h1>

      <p className={classes.headingp2}>
      An internet site disclaimer is a prison word protecting the fundamental problems that occur out of the operation of a website.
      </p>

      <h1 className={classes.headingh1}>
        How to use it?
      </h1>

      <p className={classes.headingp2}>
      This internet site copyright note and disclaimer can be used by way of any internet site or weblog or e-commerce store. All web sites can use this to point out to readers and customers of their internet site the felony prerequisites that avoid the use of records and any different touchy information or important points displayed on the website. The disclaimer can be displayed in a distinguished region on the website. This shows the readers/customers to bide by way of the regulations for use of statistics handy on the website.
      </p>

      <h1 className={classes.headingh1}>
        Our Services
      </h1>

      <p className={classes.headingp2}>
      You can choose which document you want us to draft by our experienced lawyers with a free consultation call to understand the significance and get the document customized as per your business requirement. Let us draft an Appointment Letter for you from scratch, personalized and customized as per your needs!
      </p>

      <div className={classes.mobileVersionQuery}>
        <div className={classes.headerBackground}>
          <span className={classes.formheading}>
          Any Inquiry??
          </span>
          <div className={classes.form}>
            <h2 className={classes.formh2heading}>
              FINTAX
            </h2>
            <span className={classes.formInputs}>
              <span>
                <span
                  className={`${classes.inputLable} ${classes.inputLable1}`}
                >
                  Name*{" "}
                </span>
                <input
                  placeholder="Your Name"
                  className={classes.input}
                  ref={nameInputRef}
                  type="text"
                  name=""
                  id=""
                />
              </span>

              <span>
                <span
                  className={`${classes.inputLable} ${classes.inputLable2}`}
                >
                  Email*{" "}
                </span>
                <input
                  placeholder="Your Email-address"
                  ref={emailInputRef}
                  className={classes.input}
                  type="text"
                  name=""
                  id=""
                />
              </span>

              <span>
                <span
                  className={`${classes.inputLable} ${classes.inputLable3}`}
                >
                  Mobile*
                </span>
                <input
                  placeholder="Your Mobile Number"
                  ref={phoneInputRef}
                  className={classes.input}
                  type="Number"
                  name=""
                  id=""
                />
              </span>

              <span>
                <span
                  className={`${classes.inputLable} ${classes.inputLable3}`}
                >
                  Inquiry*
                </span>
                <input
                  placeholder="Your Inquiry"
                  ref={inquiryInputRef}
                  className={classes.input}
                  type="text"
                  name=""
                  id=""
                />
              </span>

              <span>
                <button onClick={handlerButton} className={classes.buttonForm} type="submit">
                  Send Inquiry
                </button>
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
