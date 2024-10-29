import React from "react";

const Footer = () => {
  return (
    <div className=" bg-slate-400  py-8 px-6 mt-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* About Section */}
        <div>
          <p className="mb-4 text-sm">
            All the products sold in our shop are authentic and guaranteed. We
            purchase our inventory via authorized dealers. If you want 100%
            authentic perfume in Bangladesh, this is the place.
          </p>
          <h1 className="text-lg font-semibold">Contact</h1>
          <p className="text-sm mt-2">Phone: 017-123-4567</p>
          <p className="text-sm">Email: md.mamun.ur.rashid.cse@gmail.com</p>
          <p className="text-sm">Address: 123, ABC Road, Dhaka, Bangladesh</p>
        </div>

        {/* Delivery Information Section */}
        <div>
          <h1 className="text-lg font-semibold">Countrywide Delivery</h1>
          <p className="text-sm mt-2">Delivery within 3-5 working days</p>
          <p className="text-sm">Inside Dhaka: Home delivery 3-5 days</p>
          <p className="text-sm">
            Charge: <span className="font-semibold">100 TK</span>
          </p>
          <p className="text-sm mt-4">Outside Dhaka: Home delivery 5-7 days</p>
          <p className="text-sm">
            Charge: <span className="font-semibold">130 TK</span>
          </p>
        </div>

        {/* Payment Method Section */}
        <div>
          <h1 className="text-lg font-semibold">Payment Method</h1>
          <p className="text-sm mt-2">Cash on Delivery</p>
        </div>

        {/* Return Policy Section */}
        <div>
          <h1 className="text-lg font-semibold">Return / Refund Policy</h1>
          <p className="text-sm mt-2">
            We offer returns within 3 working days of purchase. You can return
            your product for store credit, a different product, or a refund to
            the original payment method. However, branded perfume items are
            sealed (sealed open branded items are forbidden to return). The item
            must be unused, in the same condition that the customer received it,
            and in the original packaging with a receipt or proof of purchase.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
