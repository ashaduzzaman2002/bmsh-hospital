import React from "react";
import Heading from "../heading/Heading";
import "./blog-news.css";
import { Calendar, User } from "../../assets/svg/SVGIcon";

const BlogNews = ({ data }) => {
  return (
    <div>
      <div className="blog-news-container">
        <div className="container">
          <div className="blog-row">
            <div>
              <img
                className="w-100 h-100 object-fit-cover"
                src={data.image}
                alt=""
              />
            </div>

            <div className="h-100 d-flex blog-text-box align-items-center">
              <div>
                <h2>{data.title}</h2>
                <div className="d-flex flex-column gap-2 blog-para">
                  {data?.description?.map((item, i) => (
                    <p className="mb-0" key={i}>
                      {item}
                    </p>
                  ))}
                </div>

                <div className="d-flex blog-footer">
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
