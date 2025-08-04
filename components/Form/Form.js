// import React from 'react'

// function Form() {
//     return (
//         <div>
//             <form>
//                 <div className="grid grid-cols-2 gap-8">
//                     <div className="col-span-2 md:col-span-1">
//                         <div className="relative md:mb-4 md-1 group">
//                             <input
//                                 type="text"
//                                 name="name"
//                                 id="name"
//                                 className="peer z-0 w-full border-b-2 border-black bg-transparent pt-4 pb-1 px-0 text-gray-900 focus:outline-none"
//                                 required
//                             />
//                             <label
//                                 htmlFor="name"
//                                 className="absolute left-0 top-4 text-gray-600 transition-all duration-300 group-focus-within:-translate-y-4 group-focus-within:text-sm peer-valid:-translate-y-6 peer-valid:text-sm"
//                             >
//                                 First Name
//                             </label>
//                             <div className="absolute bottom-0 left-1/2 h-0.5 w-0 bg-[#005E7C] transition-all duration-700 group-focus-within:w-full group-focus-within:left-0"></div>
//                         </div>
//                     </div>

//                     <div className="col-span-2 md:col-span-1">
//                         <div className="relative md:mb-4 md-1 group">
//                             <input
//                                 type="text"
//                                 name="name"
//                                 id="name"
//                                 className="peer w-full border-b-2 border-black bg-transparent pt-4 pb-1 px-0 text-gray-900 focus:outline-none"
//                                 required
//                             />
//                             <label
//                                 htmlFor="name"
//                                 className="absolute left-0 top-4 text-gray-600 transition-all duration-300 group-focus-within:-translate-y-4 group-focus-within:text-sm peer-valid:-translate-y-6 peer-valid:text-sm"
//                             >
//                                 Last Name
//                             </label>
//                             <div className="absolute bottom-0 left-1/2 h-0.5 w-0 bg-[#005E7C] transition-all duration-700 group-focus-within:w-full group-focus-within:left-0"></div>
//                         </div>
//                     </div>

//                     <div className="col-span-2 md:col-span-1">
//                         <div className="relative md:mb-4 md-1 group">
//                             <input
//                                 type="text"
//                                 name="name"
//                                 id="name"
//                                 className="peer w-full border-b-2 border-black bg-transparent pt-4 pb-1 px-0 text-gray-900 focus:outline-none"
//                                 required
//                             />
//                             <label
//                                 htmlFor="name"
//                                 className="absolute left-0 top-4 text-gray-600 transition-all duration-300 group-focus-within:-translate-y-4 group-focus-within:text-sm peer-valid:-translate-y-6 peer-valid:text-sm"
//                             >
//                                 Phone Number
//                             </label>
//                             <div className="absolute bottom-0 left-1/2 h-0.5 w-0 bg-[#005E7C] transition-all duration-700 group-focus-within:w-full group-focus-within:left-0"></div>
//                         </div>
//                     </div>

//                     <div className="col-span-2 md:col-span-1">
//                         <div className="relative md:mb-4 md-1 group">
//                             <input
//                                 type="text"
//                                 name="name"
//                                 id="name"
//                                 className="peer w-full border-b-2 border-black bg-transparent pt-4 pb-1 px-0 text-gray-900 focus:outline-none"
//                                 required
//                             />
//                             <label
//                                 htmlFor="name"
//                                 className="absolute left-0 top-4 text-gray-600 transition-all duration-300 group-focus-within:-translate-y-4 group-focus-within:text-sm peer-valid:-translate-y-6 peer-valid:text-sm"
//                             >
//                                 Email
//                             </label>
//                             <div className="absolute bottom-0 left-1/2 h-0.5 w-0 bg-[#005E7C] transition-all duration-700 group-focus-within:w-full group-focus-within:left-0"></div>
//                         </div>
//                     </div>

//                     <div className="col-span-2">
//                         <div className="relative md:mb-4 md-1 group">
//                             <input
//                                 type="text"
//                                 name="name"
//                                 id="name"
//                                 className="peer w-full border-b-2 border-black bg-transparent pt-4 pb-1 px-0 text-gray-900 focus:outline-none"
//                                 required
//                             />
//                             <label
//                                 htmlFor="name"
//                                 className="absolute left-0 top-4 text-gray-600 transition-all duration-300 group-focus-within:-translate-y-4 group-focus-within:text-sm peer-valid:-translate-y-6 peer-valid:text-sm"
//                             >
//                                 Add Description
//                             </label>
//                             <div className="absolute bottom-0 left-1/2 h-0.5 w-0 bg-[#005E7C] transition-all duration-700 group-focus-within:w-full group-focus-within:left-0"></div>
//                         </div>
//                     </div>
                    
//                     <div className='col-span-2'>
//                         <button className='py-3 px-6 bg-primary text-white'>
//                             Submit
//                         </button>
//                     </div>
//                 </div>
//             </form>
//         </div>
//     )
// }

// export default Form






import React, { useState } from 'react';
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'

function Form() {
    const [value, setValue] = useState()
    const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div>
      <form>
        <div className="grid grid-cols-2 gap-8">
          <div className="col-span-2 md:col-span-1">
            <div className="relative md:mb-4 md-1 group">
              <input
                type="text"
                name="firstName"
                id="firstName"
                className="peer z-0 w-full border-b-2 border-gray-500 bg-transparent pt-4 pb-1 px-0 text-gray-900 focus:outline-none"
                required
              />
              <label
                htmlFor="firstName"
                className="absolute left-0 top-4 text-gray-600 transition-all duration-300 group-focus-within:-translate-y-4 group-focus-within:text-sm peer-valid:-translate-y-6 peer-valid:text-sm"
              >
                First Name
              </label>
              <div className="absolute bottom-0 left-1/2 h-0.5 w-0 bg-[#005E7C] transition-all duration-700 group-focus-within:w-full group-focus-within:left-0"></div>
            </div>
          </div>

          <div className="col-span-2 md:col-span-1">
            <div className="relative md:mb-4 md-1 group">
              <input
                type="text"
                name="lastName"
                id="lastName"
                className="peer w-full border-b-2 border-gray-500 bg-transparent pt-4 pb-1 px-0 text-gray-900 focus:outline-none"
                required
              />
              <label
                htmlFor="lastName"
                className="absolute left-0 top-4 text-gray-600 transition-all duration-300 group-focus-within:-translate-y-4 group-focus-within:text-sm peer-valid:-translate-y-6 peer-valid:text-sm"
              >
                Last Name
              </label>
              <div className="absolute bottom-0 left-1/2 h-0.5 w-0 bg-[#005E7C] transition-all duration-700 group-focus-within:w-full group-focus-within:left-0"></div>
            </div>
          </div>

          <div className="col-span-2 md:col-span-1">
      <div
        className={`relative md:mb-4 md-1 group ${
          isExpanded ? "h-auto" : "h-12"
        } transition-all duration-500`}
      >
        {/* PhoneInput styled to look like email input */}
        <PhoneInput
          international={false}
          defaultCountry="PK"
          placeholder="Phone Number"
          value={value}
          onChange={setValue}
          onClick={() => setIsExpanded(true)} // Expand input on click
          className="peer w-full border-b-2 border-gray-500 bg-transparent pt-4 pb-1 px-0 text-gray-900 focus:outline-none"
        />
        {/* <label
          htmlFor="phone"
          className="absolute left-12 top-4 text-gray-600 transition-all duration-300 group-focus-within:-translate-y-4 group-focus-within:text-sm peer-valid:-translate-y-6 peer-valid:text-sm"
        >
          Phone Number
        </label> */}
        <div className="absolute bottom-0 left-1/2 h-0.5 w-0 bg-[#005E7C] transition-all duration-700 group-focus-within:w-full group-focus-within:left-0"></div>
      </div>

      
          </div>


          <div className="col-span-2 md:col-span-1">
            <div className="relative md:mb-4 md-1 group">
              <input
                type="text"
                name="email"
                id="email"
                className="peer w-full border-b-2 border-gray-500 bg-transparent pt-4 pb-1 px-0 text-gray-900 focus:outline-none"
                required
              />
              <label
                htmlFor="email"
                className="absolute left-0 top-4 text-gray-600 transition-all duration-300 group-focus-within:-translate-y-4 group-focus-within:text-sm peer-valid:-translate-y-6 peer-valid:text-sm"
              >
                Email
              </label>
              <div className="absolute bottom-0 left-1/2 h-0.5 w-0 bg-[#005E7C] transition-all duration-700 group-focus-within:w-full group-focus-within:left-0"></div>
            </div>
          </div>

          <div className="col-span-2">
            <div className="relative md:mb-4 md-1 group">
              <input
                type="text"
                name="description"
                id="description"
                className="peer w-full border-b-2 border-gray-500 bg-transparent pt-4 pb-1 px-0 text-gray-900 focus:outline-none"
                required
              />
              <label
                htmlFor="description"
                className="absolute left-0 top-4 text-gray-600 transition-all duration-300 group-focus-within:-translate-y-4 group-focus-within:text-sm peer-valid:-translate-y-6 peer-valid:text-sm"
              >
                Add Description
              </label>
              <div className="absolute bottom-0 left-1/2 h-0.5 w-0 bg-[#005E7C] transition-all duration-700 group-focus-within:w-full group-focus-within:left-0"></div>
            </div>
          </div>
          
          <div className='col-span-2'>
            <button className='py-3 px-6 bg-primary text-white'>
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Form;

