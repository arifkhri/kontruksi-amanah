import Lottie from 'lottie-react';
import { Fragment, MutableRefObject, useEffect, useRef } from 'react';

export interface ITabsContent {
  title: string;
  desc: string;
}

interface TabsContentPropsMinimal {
  active: boolean;
  lottieAnimation: any;
  onAnimEnd: () => void;
}

export interface TabsContentProps extends ITabsContent, TabsContentPropsMinimal {}

export function TabsContentBase(props: TabsContentProps) {
  const lottieRef: any = useRef(); // FIXME(?): no any type
  const lottieInitialized: MutableRefObject<boolean> = useRef(false);

  useEffect(() => {
    playBasedOnActiveState();
  }, [props.active]);

  useEffect(() => {
    if (lottieInitialized && lottieRef.current != null) {
      if (!props.active) {
        lottieRef.current.stop();
      }
      lottieInitialized.current = true;
    }
  }, [lottieRef.current]);

  const playBasedOnActiveState = () => {
    if (props.active) {
      lottieRef.current.stop();
      lottieRef.current.play();
    }
    else {
      lottieRef.current.stop();
    }
  };

  const interactivity: any = {
    mode: 'scroll',
    actions: [
      {
        type: 'stop',
        frames: [0],
        visibility: [0, 0.1]
      },
      {
        type: 'play',
        frames: [0, 60],
        visibility: [0.1, 1]
      },
    ]
  };

  return (
    <Fragment>
      <Lottie
        aria-hidden
        role="presentation"
        autoPlay={false}
        animationData={props.lottieAnimation}
        interactivity={interactivity}
        lottieRef={lottieRef}
        onLoopComplete={() => {
          props.active && props.onAnimEnd();
        }}
        rendererSettings={{
          progressiveLoad: true,
          hideOnTransparent: true,
        }}
      />
      <div className="lg:mt-10 mt-5 lg:min-w-[380px]">
        <div className="font-semibold lg:text-[38px] text-[28px] lg:text-left text-center lg:leading-[44px] leading-[31px] mb-4">{props.title}</div>
        <div className="font-medium lg:text-[18px] lg:text-left text-center lg:leading-[30px] leading-6 mb-4">{props.desc}</div>
      </div>
    </Fragment>
  );
}
