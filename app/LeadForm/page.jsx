"use client";
import React from "react";

export default function LeadForm() {
  const handleSubmit = (e) => {
    e.preventDefault();

    const first_name = e.target.first_name.value;
    const last_name = e.target.last_name.value;
    const email = e.target.email.value;
    const company = e.target.company.value;
    const city = e.target.city.value;
    const state = e.target.state.value;

    console.log("Form submitted");
    console.log("First name:", first_name);
    console.log("Last name:", last_name);
    console.log("Email:", email);
    console.log("Company:", company);
    console.log("City:", city);
    console.log("State/Province:", state);
  };

  return (
    <div className="absoulte ">
      <img
        src="images/image 103.svg"
        alt="service image"
        height={700}
        width={500}
        className="object-cover sm:w-full w-[60rem] sm:h-[40rem] h-[40rem]  "
      />
      <div className=" relative mt-[-30rem]">
        <form
          onSubmit={handleSubmit}
          className=" sm:w-[40rem] sm:h-[20rem] m-12 p-4 grid gap-4 grid-cols-2 border border-[#aa788ff8] rounded-[1rem] bg-gradient-to-r from-[#aa788ff8] to-[#202B51] text-gray-100"
        >
          <input type="hidden" name="orgid" value="00DHz0000003dAe" />
          <input type="hidden" name="retURL" value="http://google.com" />

          <div className="element w-full mt-[1rem]">
            <label htmlFor="first_name">First Name</label>
            <input
              id="first_name"
              maxLength="40"
              name="first_name"
              size="20"
              type="text"
              className="w-full px-2 py-1 border border-gray-300 rounded-[2px]"
            />
          </div>
          <div className="element w-full mt-[1rem]">
            <label htmlFor="last_name">Last Name</label>
            <input
              id="last_name"
              maxLength="80"
              name="last_name"
              size="20"
              type="text"
              className="w-full px-2 py-1 border border-gray-300 rounded-[2px]"
            />
          </div>
          <div className="element w-full">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              maxLength="80"
              name="email"
              size="20"
              type="text"
              className="w-full px-2 py-1 border border-gray-300 rounded-md"
            />
          </div>
          <div className="element w-full">
            <label htmlFor="company">Company</label>
            <input
              id="company"
              maxLength="40"
              name="company"
              size="20"
              type="text"
              className="w-full px-2 py-1 border border-gray-300 rounded-md"
            />
          </div>
          <div className="element w-full">
            <label htmlFor="city">City</label>
            <input
              id="city"
              maxLength="40"
              name="city"
              size="20"
              type="text"
              className="w-full px-2 py-1 border border-gray-300 rounded-md"
            />
          </div>
          <div className="element w-full">
            <label htmlFor="state">State/Province</label>
            <input
              id="state"
              maxLength="20"
              name="state"
              size="20"
              type="text"
              className="w-full px-2 py-1 border border-gray-300 rounded-md"
            />
          </div>
          <div className="btn col-span-2 flex justify-center">
            <input
              type="submit"
              name="submit"
              className="px-4 py-2 bg-[#170729] text-white rounded-md cursor-pointer"
            />
          </div>
        </form>
      </div>
    </div>
  );
}
