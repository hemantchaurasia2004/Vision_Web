import { useState, useEffect, FunctionComponent } from "react";

const VisionFrame: FunctionComponent = () => {
  const [animatedText, setAnimatedText] = useState<string>("⠧⠊⠎⠊⠕⠝");

  useEffect(() => {
    const originalText = "⠧⠊⠎⠊⠕⠝";
    const targetText = "Vision";

    const updateText = (index: number) => {
      const newTextArray = animatedText.split('');
      newTextArray[index] = targetText[index];
      setAnimatedText(newTextArray.join(''));
    };

    const animateText = (index: number) => {
      setTimeout(() => {
        updateText(index);
        if (index + 1 < targetText.length) {
          animateText(index + 1);
        } else if (index + 1 === targetText.length) {
          setAnimatedText(targetText);
        }
      }, 500);
    };

    const animationTimeout = setTimeout(() => {
      animateText(0);
    }, 2000);

    return () => clearTimeout(animationTimeout);
  }, [animatedText]);

  return (
    <div className="w-[1038px] flex flex-row items-start justify-center max-w-full text-left text-77xl text-whitesmoke font-b03">
      <h1 className="m-0 h-24 w-[404px] relative text-inherit font-normal font-inherit inline-block max-w-full mq450:text-10xl mq1050:text-29xl">
        {animatedText}
      </h1>
    </div>
  );
};

export default VisionFrame;
