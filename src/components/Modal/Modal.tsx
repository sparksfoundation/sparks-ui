import React, { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { H3 } from "../Text";
import { clsxm } from "../../common/clsxm";

export type ModalProps = {
  isOpen: boolean;
  closeModal: () => void;
  heading: string;
  children: React.ReactNode;
};

export const Modal = ({
  isOpen,
  closeModal,
  heading,
  children,
}: ModalProps) => {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        onClose={closeModal}
        className="fixed inset-0 z-10 flex items-center justify-center"
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel
                className={clsxm(
                  "w-full max-w-2xl transform overflow-hidden rounded-2xl p-6 text-left align-middle",
                  "shadow-xl transition-all dark:bg-slate-900 bg-slate-50"
                )}
              >
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900 flex justify-between mb-2"
                >
                  <H3 className="inline-block text-center">{heading}</H3>
                  <button
                    className="text-gray-400 focus:outline-none"
                    onClick={closeModal}
                    aria-label="Close"
                  >
                    <div
                      className={clsxm(
                        "rounded-full w-8 h-8",
                        "dark:bg-slate-800 bg-slate-400/20",
                        "flex items-center justify-center"
                      )}
                    >
                      <XMarkIcon
                        className="h-6 w-6 text-slate-800 dark:text-slate-200"
                        aria-hidden="true"
                      />
                    </div>
                  </button>
                </Dialog.Title>
                {children}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};
