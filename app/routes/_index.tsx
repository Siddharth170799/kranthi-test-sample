import type { MetaFunction } from "@remix-run/node";

import styles from "app/styles/style.css";
import { LinksFunction } from "@remix-run/node";
import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

import "bootstrap/dist/css/bootstrap.min.css";
export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: styles }];
};

export default function Index() {
  const [dropDown, isDropdownOpen] = useState(false);

  const drop = () => {
    isDropdownOpen(!dropDown);
  };
  return (
    <>
      <nav className="nav ">
        <div style={{ marginRight: "15%", marginLeft: "5%" }}>
          5th Road, Jawahar AutoNagar, VIJAYAWADA, AP INDIA 520007
        </div>
        <div style={{ marginRight: "22%" }}>
          +91 0866-2542977, 2542116, 6573666
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src="http://3.bp.blogspot.com/-EzeswpQ0o7M/URusTcu183I/AAAAAAAAACQ/U6b9mbyvO-4/s1600/facebook+logo+7.jpg"
            style={{ height: "20px", width: "20px" }}
          />
          <img
            src="http://pluspng.com/img-png/twitter-png-logo-logo-twitter-in-png-2500.png"
            style={{ height: "20px", width: "20px" }}
          />
          <img
            src="https://www.iconninja.com/files/120/380/10/social-google-google-plus-search-media-icon.svg"
            style={{ height: "20px", width: "20px" }}
          />
        </div>
      </nav>
      <div className="hello container-fluid">
        <img src="https://krantiroadtransport.com/images/logo.png" />
        <div className="relative inline-block text-left">
          <div>
            <button
              type="button"
              className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
              id="menu-button"
              aria-expanded={!dropDown}
              aria-haspopup="true"
              onClick={drop}
              style={{ fontSize: "13px", fontFamily: "sans-serif" }}
            >
              <b>About</b>
              <svg
                className="-mr-1 h-5 w-5 text-gray-400"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
          </div>
          {/* 
  {!dropDown &&<div className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" >
    <div className="py-1" role="none">
    
      <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem"  id="menu-item-0">Company Profile</a>
      <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem"  id="menu-item-1">Mission, Vison & Values</a>
      <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem"  id="menu-item-2">GOD Father</a>
      <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem"  id="menu-item-2">Management</a> 
       <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem"  id="menu-item-2">Sister Concern</a>
     
    </div>
  </div> } */}
        </div>

        <div style={{ fontSize: "13px", fontFamily: "sans-serif" }}>
          <b>TRACK CONSIGNMENT</b>
        </div>
        <div style={{ fontSize: "13px", fontFamily: "sans-serif" }}>
          <b>BRANCH LOCATOR</b>
        </div>
        <div style={{ fontSize: "13px", fontFamily: "sans-serif" }}>
          <b>BOOKING REQUEST</b>
        </div>
        <div style={{ fontSize: "13px", fontFamily: "sans-serif" }}>
          <b>CONTACT US</b>
        </div>
      </div>

      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://3.imimg.com/data3/BK/PT/MY-11814031/screenshot-2-500x500.png"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://krantiroadtransport.com/images/logo.png"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://krantiroadtransport.com/images/graph.jpg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      {/* <div style={{ textAlign: "center" }}>
        <img
          style={{
            textAlign: "center",
            marginLeft: "5rem",
            marginRight: "5rem",
            width: "1400px",
          }}
          src="https://3.imimg.com/data3/BK/PT/MY-11814031/screenshot-2-500x500.png"
        />
      </div> */}

      <b>
        <h1>
          <div
            style={{ margin: "3rem", marginLeft: "22rem", fontSize: "30px" }}
          >
            PROFILE
          </div>
        </h1>
      </b>

      <div className="flex" style={{ marginLeft: "5rem" }}>
        <div className="w-0.5/2 p-4" style={{ marginTop: "35px" }}>
          <div style={{ textAlign: "center" }}>
            <div>
              Kranti road transport, was established in the year 1985. We are{" "}
            </div>
            one of the leading service providers in the states of Andhra Pradesh
            and Telangana.
          </div>
          <div style={{ marginTop: "35px", textAlign: "center" }}>
            <div>
              Kranti has a network of 484 branches in Andhra Pradesh, Telangana,
            </div>{" "}
            Yanam and Chennai city with a fleet of 315 trucks and a work force
            of 3000 employees.
          </div>
        </div>
        <div className="w-1/2 p-4">
          <img
            src="https://krantiroadtransport.com/images/graph.jpg"
            style={{ width: "600px" }}
            className="w-full"
            alt="Graph"
          />
        </div>
      </div>
    </>
  );
}
