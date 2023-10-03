import React from "react";
import Heading from "../heading/Heading";
import "./blog-news.css";
import { Calendar, User } from "../../assets/svg/SVGIcon";

const BlogNews = () => {
  return (
    <div>
      <Heading title={"Blogs & News"} path="/blog-news" />
      <div className="blog-news-container">
        <div className="container">
          <div className="blog-row">
            <div>
              <img
                className="w-100 h-100 object-fit-cover"
                src="/images/blog-1.png"
                alt=""
              />
            </div>

            <div className="h-100 d-flex align-items-center">
              <div>
                <h2>Educational Seminar at BNI</h2>
                <h4>Educational Seminar at BNI</h4>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>

                <div className="d-flex">
                  <div>
                    <Calendar /> <small>10.05.2021</small>
                  </div>
                  <div>
                    <User /> <small>By Wilson Workman</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogNews;
