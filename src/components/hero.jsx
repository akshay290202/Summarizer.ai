import React from "react";
import { logo } from "../assets";

const hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <div className="flex gap-0">
          <img src={logo} alt="sum.ai" className="w-28 object-contain " />
          <div className="flex items-end leading-6 text-xl font-semibold">
            .ai
          </div>
        </div>
        <button
          type="button"
          onClick={() => window.open("https://github.com/akshay290202")}
          className="black_btn"
        >
          Github
        </button>
      </nav>

      <h1 className="head_text">
        Summarize Articles with <br className="max-md:hidden" />
        <span className="orange_gradient">OpenAI GPT-4</span>
      </h1>

      <h2 className="desc">
        Simplify your reading with Sumz.ai, an article summarizer that
        transforms lengthy articles into clear and concise summary.
      </h2>
    </header>


  );
};

export default hero;
