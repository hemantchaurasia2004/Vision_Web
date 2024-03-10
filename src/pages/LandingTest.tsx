import { FunctionComponent } from "react";
import VisionFrame from "../components/VisionFrame";
import FrameComponent from "../components/FrameComponent";

const LandingTest: FunctionComponent = () => {
  return (
    <div className="w-full relative bg-gray overflow-hidden flex flex-col items-start justify-start pt-[313px] pb-9 pr-[50px] pl-[121px] box-border gap-[490px] tracking-[normal] mq450:gap-[122px] mq450:pl-5 mq450:box-border mq750:gap-[245px] mq750:pl-[60px] mq750:pr-[25px] mq750:box-border">
      <VisionFrame />
      <section className="w-[1027px] flex flex-col items-start justify-start pt-0 px-0 pb-[120px] box-border gap-[82px] max-w-full text-left text-45xl text-whitesmoke font-b03 lg:pb-[78px] lg:box-border mq450:pb-[33px] mq450:box-border mq750:gap-[20px] mq1050:gap-[41px] mq1050:pb-[51px] mq1050:box-border">
        <div className="flex flex-col items-start justify-start gap-[16px] max-w-full">
          <h1 className="m-0 w-[269px] h-16 relative text-inherit font-normal font-inherit inline-block mq450:text-19xl mq1050:text-32xl">{`⠧⠊⠎⠊⠕⠝ `}</h1>
          <div className="w-[695px] h-24 relative text-13xl inline-block mq450:text-lgi mq1050:text-7xl">
            <p className="m-0">⠇⠕⠗⠑⠍ ⠊⠏⠎⠥⠍ ⠊⠎ ⠁ ⠛⠕⠕⠙ ⠺⠁⠽ ⠞⠕ ⠞⠽⠏⠑</p>
            <p className="m-0">⠇⠕⠗⠑⠍ ⠊⠏⠎⠥⠍ ⠁ ⠛⠕⠕⠙ ⠺⠁⠽ ⠞⠕ ⠞⠽⠏⠑</p>
            <p className="m-0">{`⠇⠗⠑⠍ ⠊⠏⠎⠥⠍ ⠊⠎ ⠁ ⠛⠕⠕⠙ ⠁⠽ ⠞⠕ ⠞⠽⠏⠑ `}</p>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start pt-0 pb-10 pr-0.5 pl-[3px] box-border max-w-full">
          <div className="flex-1 flex flex-row items-start justify-start py-0 pr-px pl-0 box-border relative max-w-full">
            <img
              className="h-[524.1px] w-[1014.9px] absolute my-0 mx-[!important] top-[0px] left-[-2.3px] object-contain z-[1]"
              alt=""
            />
            <div className="h-[531px] flex-1 bg-gainsboro box-border flex flex-row items-start justify-start relative max-w-full border-[3px] border-solid border-black">
              <div className="self-stretch w-[1013px] relative bg-gainsboro box-border hidden max-w-full z-[0] border-[3px] border-solid border-black" />
              <img
                className="h-[522.9px] w-[1012.6px] absolute my-0 mx-[!important] bottom-[0px] left-[-0.7px] object-contain z-[2]"
                loading="lazy"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="flex flex-row items-start justify-start py-0 px-[11px] box-border max-w-full">
          <FrameComponent />
        </div>
        <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-3.5 box-border max-w-full">
          <div className="flex-1 flex flex-row items-start justify-start py-0 pr-px pl-0 box-border relative max-w-full">
            <img
              className="h-[524.1px] w-[1014.9px] absolute my-0 mx-[!important] top-[0px] left-[-2.3px] object-contain z-[1]"
              alt=""
            />
            <div className="h-[531px] flex-1 bg-gainsboro box-border flex flex-row items-start justify-start relative max-w-full border-[3px] border-solid border-black">
              <div className="self-stretch w-[1013px] relative bg-gainsboro box-border hidden max-w-full z-[0] border-[3px] border-solid border-black" />
              <img
                className="h-[522.9px] w-[1012.6px] absolute my-0 mx-[!important] bottom-[0px] left-[-0.7px] object-contain z-[2]"
                loading="lazy"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
      <section className="self-stretch flex flex-row items-start justify-end">
        <img
          className="h-[185px] w-[185px] relative overflow-hidden shrink-0"
          loading="lazy"
          alt=""
          src="/vision-logo-1.svg"
        />
      </section>
    </div>
  );
};

export default LandingTest;
