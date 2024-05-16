import photo from "./assets/cactus_img.jpg";

function App() {
  return (
    <div className="bg-[#E5EAF0] h-[100vh] flex justify-center ">
      <div className="w-fit h-fit mt-40 px-4 pt-4 pb-5 rounded-xl bg-[#FAFAF9]">
        {/* Photo */}
        <div>
          <img className="rounded-xl w-[21rem]" src={photo} />
        </div>
        {/* Text Div */}
        <div className="my-4 ">
          <h3 className="bg-[#E6D6FC] w-fit py-1 px-4 rounded-lg text-[0.75rem] font-bold text-[#883AE1]">
            Design
          </h3>
          <div className="mb-[0.375rem]">
            <h1 className="text-[1.125rem] font-bold ">Embracing Minimalism</h1>
            <div className="pb-[1.25rem]">
              <p className="text-[0.875rem]">
                From minimalist sculptures to minimalist <br /> paintings, this
                blog will inspire you to <br />
                appreciate the beauty that lies in simplicity
              </p>
            </div>
          </div>
        </div>
        {/* End Text Div */}
        {/* Ending */}
        <div className="mt-5 border-t-2">
          <p className="pt-3">Mohammed Darabie</p>
        </div>
        {/* End Ending */}
      </div>
    </div>
  );
}

export default App;