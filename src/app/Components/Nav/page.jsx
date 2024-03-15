"use client"
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Nav = () => {
  const route = useRouter()
  return (
    <>
      <div className="nav">

        <div>
          <img src="https://lithoreact.themezaa.com/assets/img/webp/logo-black.webp" alt="" />
        </div>

        <ul>

          {/* NEXT ROUTING  */}

          <li className="home"> <Link href="/">Home</Link></li>
          <li> <Link href="/Pages/Page">Pages</Link></li>
          <li><Link href="/Pages/Portfolio">Portfolio</Link></li>
          <li> <Link href="/Pages/Elements">Elements</Link></li>


          {/* ROUIE ROUTING  */}

          <li onClick={() => route.push("/Pages/Features")}>
            Features
            {/* <Link href="/Pages/Features">Features</Link> */}
          </li>


          <li onClick={() => route.push("/Pages/Blog")}>
            Blog
            {/* <Link href="/Pages/Blog">Blog</Link> */}
          </li>


          <li onClick={() => route.push("/Pages/Footer")}>
            Shop
            {/* <Link href="/Pages/Footer">Shop</Link> */}
          </li>


        </ul>

        <div className="icons">
          <FaFacebookF />
          <FaInstagram />
          <FaTwitter />

        </div>

      </div>
      <hr />
    </>
  )
}

export default Nav
