"use client";
import React from "react";
export default function Case() {
  const handleSubmit = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const phone = e.target.phone.value;
    const subject = e.target.subject.value;
    const description = e.target.description.value;
    const status = e.target.status.value;
    const type = e.target.phone.type;
    const reason = e.target.reason.value;

    console.log("Form submitted");
    console.log(" Name:", name);
    console.log("Email:", email);
    console.log("Phone no:", phone);
    console.log("Subject:", subject);
    console.log("Description:", description);
    console.log("Status:", status);
    console.log("Type:", type);
    console.log("Case Reason:", reason);
  };
  return (
    <div className="absoulte ">
      <img
        src="images/AdobeStock-PiC4DyYWeh 1.svg"
        alt="service image"
        height={300}
        width={500}
        className="object-cover sm:w-full w-[60rem] sm:h-[40rem] h-[40rem]  "
      />
      <div className=" relative mt-[-40rem]">
        <form
          onSubmit={handleSubmit}
          className=" sm:w-[40rem] sm:h-[32rem] m-12 p-4 grid gap-4 grid-cols-2 border border-gray-800 rounded-[1rem] bg-gradient-to-r from-gray-600 to-[#202B51] text-gray-100"
        >
          <input type="hidden" name="orgid" value="00DHz0000003dAe" />
          <input type="hidden" name="retURL" value="http://google.com" />

          <div className="mt-[2rem]">
            <label htmlFor="name" className="font-bold  ">
              Contact Name
            </label>
            <input
              id="name"
              maxLength="80"
              name="name"
              size="20"
              type="text"
              className="w-full px-2 py-1 border border-gray-600 text-white rounded-md bg-gradient-to-r from-gray-600 to-gray-300 mt-3"
            />
          </div>
          <div className="mt-[2rem]">
            <label htmlFor="email" className="font-bold">
              Email
            </label>
            <input
              id="email"
              maxLength="80"
              name="email"
              size="20"
              type="text"
              className="w-full px-2 py-1 border border-gray-600 text-white rounded-md bg-gradient-to-r from-gray-600 to-gray-300 mt-3"
            />
          </div>
          <div>
            <label htmlFor="phone" className="font-bold">
              Phone
            </label>
            <input
              id="phone"
              maxLength="40"
              name="phone"
              size="20"
              type="text"
              className="w-full px-2 py-1 border border-gray-600 text-white rounded-md bg-gradient-to-r from-gray-600 to-gray-300 mt-3"
            />
          </div>

          <div>
            <label htmlFor="subject" className="font-bold">
              Subject
            </label>
            <input
              id="subject"
              maxLength="80"
              name="subject"
              size="20"
              type="text"
              className="w-full px-2 py-1 border border-gray-600 text-white rounded-md bg-gradient-to-r from-gray-600 to-gray-300 mt-3"
            />
          </div>
          <div>
            <label htmlFor="description" className="font-bold">
              Description
            </label>
            <textarea
              name="description"
              className="w-full px-2 py-1 border border-gray-600 text-white rounded-md bg-gradient-to-r from-gray-600 to-gray-300 mt-3"
            ></textarea>
          </div>

          <div>
            <label htmlFor="status" className="font-bold">
              Status
            </label>
            <select
              id="status"
              name="status"
              className="w-full px-2 py-1 border  border-gray-600 text-white rounded-md bg-gradient-to-r from-gray-600 to-gray-300 mt-3"
            >
              <option value="">--None--</option>
              <option value="On Hold">On Hold</option>
              <option value="Escalated">Escalated</option>
              <option value="Closed">Closed</option>
              <option value="New">New</option>
            </select>
          </div>

          <div>
            <label htmlFor="type" className="font-bold">
              Type
            </label>
            <select
              id="type"
              name="type"
              className="w-full px-2 py-1 border border-gray-600 text-white rounded-md bg-gradient-to-r from-gray-600 to-gray-300 mt-3"
            >
              <option value="">--None--</option>
              <option value="Problem">Problem</option>
              <option value="Feature Request">Feature Request</option>
              <option value="Question">Question</option>
            </select>
          </div>

          <div>
            <label htmlFor="reason" className="font-bold">
              Case Reason
            </label>
            <select
              id="reason"
              name="reason"
              className="w-full px-2 py-1 border border-gray-600 text-white rounded-md bg-gradient-to-r from-gray-600 to-gray-300 mt-3"
            >
              <option value="">--None--</option>
              <option value="User didn't attend training">
                User didn't attend training
              </option>
              <option value="Complex functionality">
                Complex functionality
              </option>
              <option value="Existing problem">Existing problem</option>
              <option value="Instructions not clear">
                Instructions not clear
              </option>
              <option value="New problem">New problem</option>
            </select>
          </div>

          <div className="btn col-span-2 flex justify-center">
            <input
              type="submit"
              name="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded-md cursor-pointer mt-[2rem]"
            />
          </div>
        </form>
      </div>
    </div>
  );
}
