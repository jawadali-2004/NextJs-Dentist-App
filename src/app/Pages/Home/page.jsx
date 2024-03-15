import Nav from "@/app/Components/Nav/page";
import { FaUserDoctor } from "react-icons/fa6";
import { CiDollar } from "react-icons/ci";
import { IoIosTimer } from "react-icons/io";

const Home = () => {
  return (
    <>
      <Nav/>
      <div className="main">
      
        <div className="move">

        <div className="text">
          <h1>We make your <br />
             smile shine like <br />
              the sun</h1>
        </div>

        <div className="flex">

          <div  className="butt">

          <button>BOOK ONLINE</button>

          </div>

          <div className="contact">

            <h1>CALL NOW 123 456 7890</h1>
            <div className="line"></div>

          </div>

        </div>


        </div>
       

      </div>

      <div className="second">
          <div className="timer">
            <div className="icon-1">
              <IoIosTimer />
            </div>
            <div className="text-1">
              <h1> 24 Hours service</h1>

              <p>
                Lorem, ipsum dolor sit <br /> amet consectetur adi.
              </p>
            </div>
          </div>
          <div className="timer">
            <div className="icon-1">
             <FaUserDoctor />
            </div>
            <div className="text-1">
              <h1> Qualified doctors</h1>

              <p>
                Lorem, ipsum dolor sit <br /> amet consectetur adi.
              </p>
            </div>
          </div>
          <div className="timer">
            <div className="icon-1">
            <CiDollar />

            </div>
            <div className="text-1">
              <h1> Affordable prices</h1>

              <p>
                Lorem, ipsum dolor sit <br /> amet consectetur adi.
              </p>
            </div>
          </div>
      </div>
      <hr />
    </>
  )
}

export default Home
