export default function Footer() {
  return (
    <footer className="relative pt-[50px] px-[100px] sm:px-[25px] pb-20 sm:pb-[50px] bg-[#d6d2c9]">
      <div className="flex flex-col">
        <span className="text-18">고객센터</span>
        <a href="tel:1600-3689" className="text-30">
          1600-3689
        </a>
        <span className="text-15">월-금 / 10-17시 (점심시간 13-14)</span>
      </div>
      <div className="mt-[70px] pt-[22px] pb-3 text-12 border-t border-[#b3b0a9] break-keep">
        <div className="flex flex-col">
          <div className="font-weight-500">(주)컴퍼니</div>
          <div className="flex sm:flex-col">
            <div>대표: 이루리</div>
            <div className="mx-1.5 sm:hidden">|</div>
            <div>주소: 서울 강남구 강남대로162길 41-4</div>
            <div className="mx-1.5 sm:hidden">|</div>
            <div>사업자등록번호: 214-80-00000</div>
            <div className="mx-1.5 sm:hidden">|</div>
            <div>통신판매업신고: 2023-서울강남-00000</div>
          </div>
          <div className="flex sm:flex-col">
            <div>전화: 1600-0000</div>
            <div className="mx-1.5 sm:hidden">|</div>
            <div>팩스: 02-540-0000</div>
            <div className="mx-1.5 sm:hidden">|</div>
            <div>이메일: company@comany.com</div>
            <div className="mx-1.5 sm:hidden">|</div>
            <div>
              <a href="/" className="underline">
                개인정보처리방침
              </a>
              <a href="/" className="ml-2 underline">
                이용약관
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="text-13">© 2023 COMPANY All rights reserved.</div>
    </footer>
  );
}
