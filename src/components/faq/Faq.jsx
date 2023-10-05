import React, { useState } from "react";
import "./faq.css";
import Heading from "../heading/Heading";

const Faq = ({ faq }) => {
  const [active, setActive] = useState(null);

  return (
    <div>
      <Heading title={"Faq’s"} />
      <div className="container faq-container">
        <div>
          <img
            className="w-100 h-100 object-fit-cover"
            style={{ maxHeight: 465 }}
            src="/images/faq-image.png"
            alt=""
          />
        </div>

        <div>
          <div class="" id="accordionExample">
            {faq?.map((item, i) => (
              <div key={i} class="accordion-item">
                <h2
                  class={`accordion-header ${i === active && "activeBtn"}`}
                  id={"heading" + i}
                >
                  <button
                    class="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={"#collapse" + i}
                    aria-expanded="true"
                    aria-controls={"collapse" + i}
                    onClick={() => {
                      setActive(i);
                    }}
                  >
                    {item.title}
                  </button>
                </h2>
                <div
                  id={"collapse" + i}
                  class="accordion-collapse collapse"
                  aria-labelledby={"heading" + i}
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
