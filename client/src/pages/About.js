import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
          At Ecommerce Website, we are passionate about Selling top Products. we are committed to deliver you the best Quality Products in minimum time. We work hard every day to uphold those values. Whether you are a new customer or a long-time supporter, we thank you for choosing us, and we look forward to serving you for years to come.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;