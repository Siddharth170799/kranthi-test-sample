
// {/* 
// <div id="default-carousel" className="relative w-full" data-carousel="slide">
//     <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
//         <div className="hidden duration-700 ease-in-out" data-carousel-item>
//         <img src="https://3.imimg.com/data3/BK/PT/MY-11814031/screenshot-2-500x500.png" />
//         <img  src="https://3.imimg.com/data3/BK/PT/MY-11814031/screenshot-2-500x500.png" />
//             <img src="https://3.imimg.com/data3/BK/PT/MY-11814031/screenshot-2-500x500.png" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
//         </div>
//         <div className="hidden duration-700 ease-in-out" data-carousel-item>
//             <img src="https://content3.jdmagicbox.com/comp/vijayawada/12/0866p866std4000412/catalogue/kranti-road-transport-pvt-ltd-auto-nagar-vijayawada-transporters-9j68m1uesb-250.jpg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
//         </div>
//         <div className="hidden duration-700 ease-in-out" data-carousel-item>
//             <img src="/docs/images/carousel/carousel-3.svg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
//         </div>
//         <div className="hidden duration-700 ease-in-out" data-carousel-item>
//             <img src="/docs/images/carousel/carousel-4.svg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
//         </div>
//         <div className="hidden duration-700 ease-in-out" data-carousel-item>
//             <img src="/docs/images/carousel/carousel-5.svg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
//         </div>
//     </div>
//     <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
//         <button type="button" className="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
//         <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
//         <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
//         <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
//         <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
//     </div>
//     <button type="button" className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
//         <span className="sr-only">Previous</span>
//     </button>
//     <button type="button" className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
//         <span className="sr-only">Next</span>
//     </button>
// </div> */}
// import type { MetaFunction } from "@remix-run/node";
// import styles from "~/styles/style.css";
// import { LinksFunction } from "@remix-run/node";
// import { useState } from "react";
// import Carousel from "react-bootstrap/Carousel";
// import ExampleCarouselImage from "components/ExampleCarouselImage";

// import "bootstrap/dist/css/bootstrap.min.css";
// export const meta: MetaFunction = () => {
//   return [
//     { title: "New Remix App" },
//     { name: "description", content: "Welcome to Remix!" },
//   ];
// };

// export const links: LinksFunction = () => {
//   return [{ rel: "stylesheet", href: styles }];
// };

// export default function Index() {
//   const [dropDown, isDropdownOpen] = useState(false);

//   const drop = () => {
//     isDropdownOpen(!dropDown);
//   };

//   return (
//     <>
//       <nav className="nav ">
//         <div style={{ marginRight: "15%", marginLeft: "5%" }}>
//           5th Road, Jawahar AutoNagar, VIJAYAWADA, AP INDIA 520007
//         </div>
//         <div style={{ marginRight: "22%" }}>
//           +91 0866-2542977, 2542116, 6573666
//         </div>
//         <div
//           style={{
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//           }}
//         >
//           <img
//             src="http://3.bp.blogspot.com/-EzeswpQ0o7M/URusTcu183I/AAAAAAAAACQ/U6b9mbyvO-4/s1600/facebook+logo+7.jpg"
//             style={{ height: "20px", width: "20px" }}
//           />
//           <img
//             src="http://pluspng.com/img-png/twitter-png-logo-logo-twitter-in-png-2500.png"
//             style={{ height: "20px", width: "20px" }}
//           />
//           <img
//             src="https://www.iconninja.com/files/120/380/10/social-google-google-plus-search-media-icon.svg"
//             style={{ height: "20px", width: "20px" }}
//           />
//         </div>
//       </nav>
//       <div className="hello container-fluid">
//         <img src="https://krantiroadtransport.com/images/logo.png" />
//         <div className="relative inline-block text-left">
//           <div>
//             <button
//               type="button"
//               className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
//               id="menu-button"
//               aria-expanded={!dropDown}
//               aria-haspopup="true"
//               onClick={drop}
//               style={{ fontSize: "13px", fontFamily: "sans-serif" }}
//             >
//               <b>About</b>
//               <svg
//                 className="-mr-1 h-5 w-5 text-gray-400"
//                 viewBox="0 0 20 20"
//                 fill="currentColor"
//                 aria-hidden="true"
//               >
//                 <path
//                   fill-rule="evenodd"
//                   d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0
import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

function App() {
  const [dropDown, isDropdownOpen] = useState(false);

  const drop = () => {
    isDropdownOpen(!dropDown);
  };

  return (
    <div className="App">
      <nav className="nav">
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
                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 011.06-1.06z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
            {dropDown && (
              <div
                className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="menu-button"
              >
                <div className="py-1" role="none">
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700"
                    role="menuitem"
                    id="menu-item-0"
                  >
                    Company Profile
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700"
                    role="menuitem"
                    id="menu-item-1"
                  >
                    Mission, Vison & Values
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700"
                    role="menuitem"
                    id="menu-item-2"
                  >
                    GOD Father
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://picsum.photos/800/400"
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
            src="https://picsum.photos/800/400"
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
            src="https://picsum.photos/800/400"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default App;