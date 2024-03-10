import { FunctionComponent } from "react";
import FrameComponent3 from "./FrameComponent3";

const FrameComponent: FunctionComponent = () => {
  return (
    <div className="flex flex-col items-start justify-start gap-[16px] max-w-full text-left text-45xl text-whitesmoke font-b03">
      <h1 className="m-0 w-[269px] h-16 relative text-inherit font-normal font-inherit inline-block mq450:text-19xl mq1050:text-32xl">{`⠧⠊⠎⠊⠕⠝ `}</h1>
      <div className="w-[695px] h-24 relative text-13xl inline-block mq450:text-lgi mq1050:text-7xl">
        <p className="m-0">⠇⠕⠗⠑⠍ ⠊⠏⠎⠥⠍ ⠊⠎ ⠁ ⠛⠕⠕⠙ ⠺⠁⠽ ⠞⠕ ⠞⠽⠏⠑</p>
        <p className="m-0">⠇⠕⠗⠑⠍ ⠊⠏⠎⠥⠍ ⠁ ⠛⠕⠕⠙ ⠺⠁⠽ ⠞⠕ ⠞⠽⠏⠑</p>
        <FrameComponent3 />
      </div>
    </div>
  );
};

export default FrameComponent;
