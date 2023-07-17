import clsx from 'clsx';
import { Suspense, lazy, useEffect, useState } from 'react';
import { TabsButton } from './TabsButton';
import styles from './tabs.module.scss';

const TabsContentMarketplace = lazy(() => import('./TabsContentMarketplace'));
const TabsContentOrder = lazy(() => import('./TabsContentOrder'));
const TabsContentProduct = lazy(() => import('./TabsContentProduct'));
const TabsContentStock = lazy(() => import('./TabsContentStock'));
const TabsContentReport = lazy(() => import('./TabsContentReport'));

interface TabsProps {
  tabs: string[]
}

export function TabsComponent(props: TabsProps) {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [renderLottie, setRenderLottie] = useState<boolean>(false);

  const isActive = (index: number) => {
    return activeIndex === index;
  };

  const selectTab = (index: number) => {
    return (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      navigateToTab(index, e.target as HTMLElement);
    };
  };

  const navigateToTab = (index: number, el?: HTMLElement) => {
    setActiveIndex(index);
    scrollToTabElement(el != null ? el : document.getElementById(`tab_item_${index}`)!);
  };

  /**
   * Untuk mobile, scroll ketika tab button diklik agar tab buttonnya ketengah.
   * @param target Tab Button sebagai target element
   */
  const scrollToTabElement = (target: HTMLElement) => {
    if (globalThis.innerWidth > 1024) return;

    const scrollEl = document.getElementById('tabsScroll');
    if (scrollEl) {
      const elCenter = scrollEl.offsetWidth / 2;
      const targetHalfWidth = target.offsetWidth / 2;
      scrollEl.scrollLeft = target.offsetLeft - (elCenter - targetHalfWidth);
    }
  };

  const intersectCallback = (entries: any) => {
    if (renderLottie === false && entries[0].intersectionRatio > 0.1) {
      setRenderLottie(true);
    }
  };

  useEffect(() => {
    let intersect: IntersectionObserver;
    const targets = [
      document.querySelector('#tabs-content-marketplace')!,
      document.querySelector('#tabs-content-order')!,
      document.querySelector('#tabs-content-product')!,
      document.querySelector('#tabs-content-stock')!,
      document.querySelector('#tabs-content-report')!,
    ];
    if (window !== null) {
      intersect = new window.IntersectionObserver(
        intersectCallback,
        {
          root: null,
          rootMargin: '0px',
          threshold: 0.1,
        }
      );
      targets.forEach(target => intersect.observe(target));
    }

    return () => {
      targets.forEach(target => intersect.unobserve(target));
    };
  }, [window]);

  return (
    <div
      id="tab-contents"
      className="bg-volt-100 border border-volt-400 lg:mx-14 mx-8 px-6 py-4 mb-[3.25rem] rounded-[2rem]"
    >
      <div id="tabsScroll" className={clsx('scroll-smooth relative overflow-x-auto', styles['tab-btn-wrapper'])}>
        <div className="min-w-[512px]">
          <div role="tablist" className="grid grid-flow-row grid-cols-5 border-b border-volt-600 overflow-y-hidden">
            {props.tabs.map((tabName, i) => {
              return (
                <TabsButton
                  key={`tab_item_${i}`}
                  id={`tab_item_${i}`}
                  name={tabName}
                  active={isActive(i)}
                  onClick={selectTab(i)}
                />
              );
            })}
          </div>
        </div>
      </div>
      <div className="relative lg:pt-8 pt-6">
        <div
          id="tabs-content-marketplace"
          role="tabpanel"
          className={styles['tabs-content']}
          data-show={isActive(0)}
        >
          <Suspense fallback={<></>}>
            <TabsContentMarketplace
              active={isActive(0)}
              onAnimEnd={() => navigateToTab(1)}
            />
          </Suspense>
        </div>
        <div
          id="tabs-content-order"
          role="tabpanel"
          className={styles['tabs-content']}
          data-show={isActive(1)}
        >
          {renderLottie && <Suspense fallback={<></>}>
            <TabsContentOrder
              active={isActive(1)}
              onAnimEnd={() => navigateToTab(2)}
            />
          </Suspense>}
        </div>
        <div
          id="tabs-content-product"
          role="tabpanel"
          className={styles['tabs-content']}
          data-show={isActive(2)}
        >
          {renderLottie && <Suspense fallback={<></>}>
            <TabsContentProduct
              active={isActive(2)}
              onAnimEnd={() => navigateToTab(3)}
            />
          </Suspense>}
        </div>
        <div
          id="tabs-content-stock"
          role="tabpanel"
          className={styles['tabs-content']}
          data-show={isActive(3)}
        >
          {renderLottie && <Suspense fallback={<></>}>
            <TabsContentStock
              active={isActive(3)}
              onAnimEnd={() => navigateToTab(4)}
            />
          </Suspense>}
        </div>
        <div
          id="tabs-content-report"
          role="tabpanel"
          className={styles['tabs-content']}
          data-show={isActive(4)}
        >
          {renderLottie && <Suspense fallback={<></>}>
            <TabsContentReport
              active={isActive(4)}
              onAnimEnd={() => navigateToTab(0)}
            />
          </Suspense>}
        </div>
      </div>
    </div>
  );
}
