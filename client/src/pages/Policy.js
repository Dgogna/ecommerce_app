import React from "react";
import Layout from "./../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/policy.webp"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p>At Ecommerce App, we take your privacy seriously. We collect personal information from our customers in order to process orders, communicate with you, and provide a better shopping experience. This may include your name, address, email address, phone number, payment information, and any other information you provide to us.  If you have any questions or concerns about how we use your data, please don't hesitate to contact us.</p>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;