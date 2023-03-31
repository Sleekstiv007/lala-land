import React from "react";

const Rooms = () => {
  return (
    <div className="max-w-[1100px] h-[500px] bg-blue-100 mx-auto my-20 pt-16 lg:mb-[20%] md:mb-[35%] px-4 grid lg:grid-cols-3 gap-4">
      <div className="lg:top-20 relative lg:col-span-1 col-span-2">
        <h3 className="text-2xl font-bold font-display">Fine Interior</h3>
        <p className="pt-4 text-xl md:text-sm">
          Our accommodations offer a range of options to suit every budget and
          taste, all conveniently located close to the beach.
        </p>
      </div>

      <div className="grid grid-cols-2 col-span-2 gap-2">
        <img
          className="object-cover h-full w-full"
          src="https://images.unsplash.com/photo-1609602126247-4ab7188b4aa1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGJlZHJvb21zJTIwd2l0aCUyMHZpZXclMjBvZiUyMHRoZSUyMHdhdGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          alt="/"
        />
        <img
          className="object-cover w-full h-full row-span-2 "
          src="https://plus.unsplash.com/premium_photo-1661964149621-cf949f3a95a0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8cmVzb3J0JTIwYmVkcm9vbSUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60"
          alt="/"
        />
        <img
          className="object-cover w-full h-full"
          src="https://plus.unsplash.com/premium_photo-1663061414669-bb34bcd3ff2f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzb3J0JTIwYmVkcm9vbSUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          alt="/"
        />
      </div>
    </div>
  );
};

export default Rooms;
