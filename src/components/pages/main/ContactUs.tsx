export default function ContactUs() {
  return (
    <div className="flex sm:flex-col space-x-8 sm:space-x-0 sm:space-y-3 sm:items-center justify-between py-10">
      <div className="w-2/3 sm:w-full flex flex-col space-y-5">
        <div className="text-24 font-weight-500">Contact us</div>
        <div className="flex flex-col space-y-4">
          <div className="w-full h-10 flex items-center px-3 rounded-4 border">
            <input className="w-full " placeholder="name" />
          </div>
          <div className="w-full h-10 flex items-center px-3 rounded-4 border">
            <input className="w-full " placeholder="email" />
          </div>
          <div className="w-full h-40 flex p-3 rounded-4 border">
            <textarea className="w-full" placeholder="message" />
          </div>
          <button className="w-full h-10 flex items-center justify-center rounded-4 bg-green-950 text-white">
            SUBMIT
          </button>
        </div>
      </div>
      <div className="w-1/3 sm:w-full flex flex-col justify-center space-y-2 p-5 bg-[#d9dfdb]">
        <div className="text-18 font-weight-500">Compony Info</div>
        <div className="flex flex-col ">
          <div>주소: 서울 강남구 테헤란로 100</div>
          <div>전화: 1600-0000</div>
          <div>이메일: company@comany.com</div>
        </div>
      </div>
    </div>
  );
}
