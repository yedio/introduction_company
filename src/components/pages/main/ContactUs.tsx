import { setCurrentTime } from '../../../libs/client/utils';

export default function ContactUs() {
  const handleContact = (event: any) => {
    event.preventDefault();

    // 스프레트시트 샘플
    // https://docs.google.com/spreadsheets/d/1Bn4m6iA_Xch1zzhNvo_6CoQWqOAgwwkOWJKC-phHx2Q/copy

    const scriptURL =
      'https://script.google.com/macros/s/AKfycbw1UELQfnHRkevaK77uAe_Doni81s_qdQ7n6E03tWUffKAile4h042fa7y3B1DxCbF-9w/exec';

    const form = document.getElementById(
      'submit-to-google-sheet'
    ) as HTMLFormElement;

    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
      .then(response => {
        console.log('Success!', response);
        form.reset();
      })
      .catch(error => console.error('Error!', error.message));
  };

  return (
    <div className="flex sm:flex-col space-x-8 sm:space-x-0 sm:space-y-3 sm:items-center justify-between py-10">
      <div className="w-2/3 sm:w-full flex flex-col space-y-5">
        <div className="text-24 font-weight-500">Contact us</div>
        <form
          id="submit-to-google-sheet"
          className="flex flex-col space-y-4"
          onSubmit={handleContact}
          autoComplete="off"
        >
          <input className="hidden" name="time" value={setCurrentTime()} />
          <input
            className="w-full h-10 flex items-center px-3 rounded-4 border"
            name="name"
            placeholder="name"
            required
          />
          <input
            className="w-full h-10 flex items-center px-3 rounded-4 border"
            name="email"
            placeholder="email"
            required
          />
          <input
            className="w-full h-40 flex p-3 rounded-4 border"
            name="message"
            placeholder="message"
            required
          />
          <button
            className="w-full h-10 flex items-center justify-center rounded-4 bg-green-950 text-white"
            type="submit"
          >
            SUBMIT
          </button>
        </form>
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
