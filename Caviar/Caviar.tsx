

const Caviar = () => {
  return (
    <>
      <div className="py-10 bg-[url('../../../src/assets/image/caviar.jpg.jpg')]">
        <div className="py-24">
          <h1 className="ms-0 md:ms-40 px-5 md:px-0 text-7xl text-white font-bold pb-3 ">Wir sind gerne für Sie da...</h1>
        </div>
      </div>

      <div className="bg-gray-200 pb-32">
        <div className="container mx-auto px-5 md:px-[100px]">
          <div className="">
            <div className="flex flex-col md:flex-row gap-20 md:gap-10 justify-center">
              <div className="ps-14 bg-white pt-10  -mt-10 rounded-2xl pr-[60px] pb-28 md:pb-0">
                <div className="flex items-center pb-10 ">
                  <img className="w-32 object-cover" src="caviarKing.png.png" alt="photo" />
                  <div className="ms-5">
                    <h1 className="font-medium text-xl text-slate-700">Kontakt</h1>
                    <p className="font-normal text-lg text-slate-700">Wir sind gerne für Sie da</p>
                  </div>
                </div>
                <p className="w-[450px]  border-t border-slate-300 mb-10"></p>
                <h4 className="font-bold text-4xl text-slate-700 pb-5">+4179 329 44 44</h4>
                <p className="font-semibold text-2xl text-slate-700">info@hammerstein1870.group</p>
              </div>

              <div className=" bg-gray-100 pt-20 pb-20 ps-14 pr-[200px] -mt-10 rounded-2xl">
                <h1 className="font-bold text-2xl text-slate-700">Destination</h1>
                <div className="mt-10 ">
                  <div className="flex items-center pb-10 gap-5  mb-10">
                    <div className="bg-white w-20 h-20 rounded-lg flex justify-center items-center"><svg fill="black" width="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M172.3 501.7C27 291 0 269.4 0 192 0 86 86 0 192 0s192 86 192 192c0 77.4-27 99-172.3 309.7-9.5 13.8-29.9 13.8-39.5 0zM192 272c44.2 0 80-35.8 80-80s-35.8-80-80-80-80 35.8-80 80 35.8 80 80 80z" /></svg></div>
                    <div className="">
                      <h4 className="font-bold text-xl text-slate-700 pb-5">Address</h4>
                      <p className="font-normal text-lg text-slate-700">Hammerstein Group Gmbh <br />
                        Gewerbestrasse 5 <br />
                        6330 Cham
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-5">
                    <div className="bg-white w-20 h-20 rounded-lg flex justify-center items-center mb-5">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="black" width="24" viewBox="0 0 512 512"><path d="M256 8C119 8 8 119 8 256S119 504 256 504 504 393 504 256 393 8 256 8zm92.5 313h0l-20 25a16 16 0 0 1 -22.5 2.5h0l-67-49.7a40 40 0 0 1 -15-31.2V112a16 16 0 0 1 16-16h32a16 16 0 0 1 16 16V256l58 42.5A16 16 0 0 1 348.5 321z" /></svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-xl text-slate-700 pb-5">Öffnungszeiten</h4>
                      <p className="font-normal text-lg text-slate-700">Montag – Freitag:</p>
                      <p className="font-normal text-lg text-slate-700">08:00 – 17:00 Uhr</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Caviar;