import React, { useState } from "react";
import logo from "../img/logo.png";
import {
  MailOutline,
  LogoFacebook,
  ChevronDown,
  LogoTwitter,
  LogoInstagram,
} from "react-ionicons";
const Sidebar = () => {
  const [sidebarActive, setSidebarActive] = useState(false);

  const toggleSidebar = () => {
    setSidebarActive(!sidebarActive);
  };

  return (
    <aside
      className={`sidebar glassy ${sidebarActive ? "active" : ""}`}
      data-sidebar
    >
      <div className="sidebar-info">
        <figure className="avatar-box">
          <img src={logo} alt="Ibrahim Al-Faloji" width={80} />
        </figure>
        <div className="info-content">
          <h1 className="name" title="Ibrahim Al-Faloji">
            Ibrahim Al-Faloji
          </h1>
          <p className="title">Video Director</p>
        </div>
        <button
          onClick={toggleSidebar}
          className="info_more-btn"
          data-sidebar-btn
        >
          <span className="hidden md:block">Show Contacts</span>
          <ChevronDown
            color={"#bb9206"}
            title={""}
            height="15px"
            width="15px"
          />
        </button>
      </div>
      <div className="sidebar-info_more">
        <div className="separator" />
        <ul className="contacts-list">
          <li className="contact-item">
            <div className="icon-box">
              <MailOutline
                color={"#bb9206"}
                title={"facebook"}
                height="25px"
                width="25px"
              />
            </div>
            <div className="contact-info">
              <p className="contact-title">Email</p>
              <a
                href="mailto:richard@example.com"
                className="contact-link underline"
              >
                richard@example.com
              </a>
            </div>
          </li>
          <li className="contact-item">
            <div className="icon-box">
              <LogoFacebook
                color={"#bb9206"}
                title={"facebook"}
                height="25px"
                width="25px"
              />
            </div>
            <div className="contact-info">
              <p className="contact-title">FaceBook</p>
              <a href="/" className="contact-link underline">
                Ibrahim Khudur
              </a>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <LogoInstagram
                color={"#bb9206"}
                title={"instagram"}
                height="25px"
                width="25px"
              />
            </div>
            <div className="contact-info">
              <p className="contact-title">Instagram</p>
              <a href="/" className="contact-link underline">
                @fal0ji
              </a>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <LogoTwitter
                color={"#bb9206"}
                title={"twitter"}
                height="25px"
                width="25px"
              />
            </div>
            <div className="contact-info">
              <p className="contact-title">Twitter</p>
              <a href="/" className="contact-link underline">
                Ibrahim Khudur
              </a>
            </div>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
