import React, { useState, useEffect } from 'react';

import { CloseModal } from '../Icons';

import style from './style.module.scss';

export interface ModalProps {
  open: boolean;
  children: any;
  className?: string;
  title: string;
  titleDesc?: string;
  onCancel: (value: boolean) => void;
}

export default function Modal(props: ModalProps) {
  const { open = false, className, children, title, titleDesc, onCancel } = props;

  useEffect(() => {
    document.body.classList[open ? 'add' : 'remove']('hide-scroll-body');
  }, [open]);

  return (
    open ?
      <>
        <div className={`${open ? 'modal-open' : ''} animated fadeIn justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none`}>
          <div className="relative w-auto my-6 mx-auto max-w-3xl">
            <div className={`animated fadeInUp z-60 px-[40px] py-[32px] border-0 rounded-lg shadow-lg relative flex flex-col w-full ${style['modal']} ${className || ''} outline-none focus:outline-none lg:m-0 lg:m-3`}>
              <div className="flex text-white items-start justify-between rounded-t mb-[30px]">
                <div>
                  <h3 className="text-[28px]">
                    {title}
                  </h3>
                  {titleDesc && (
                    <p className="text-base text-[#BCC6F9]">
                      {titleDesc}
                    </p>
                  )}
                </div>

                <button
                  className="p-1 ml-auto bg-transparent border-0 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                  onClick={() => onCancel(false)}
                >
                  <span className="h-6 w-6 text-2xl block outline-none focus:outline-none">
                    <CloseModal />
                  </span>
                </button>
              </div>

              {/* content */}
              <div className="relative flex-auto">
                {children}
              </div>
            </div>
          </div>
        </div >
        <div className="opacity-70 fixed inset-0 z-40 bg-black" />
      </> : null
  );
}
