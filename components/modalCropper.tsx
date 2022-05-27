import React, { Fragment, useRef, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import XIcon from '@heroicons/react/outline/XIcon';
import cn from 'classnames';
import type Cropper from 'cropperjs';
import { getRefValue } from '../lib/hooks';
import { getCropperJs } from '../lib/imports';
import Button from './button';
import LoaderBubbles from './loaderBubbles';
import Alert from './alert';
import { ButtonVariant, ErrorMessage, FetchState } from '../lib/types';
import { IMAGE_GENERATED_TYPE } from '../lib/constants';

type Props = {
  isOpen: boolean;
  imageDataUrl: string;
  onClose: () => void;
  onCrop: (dataUrl: string) => void;
};

export default function ModalCropper({
  isOpen,
  imageDataUrl,
  onClose,
  onCrop,
}: Props) {
  const [fetchState, setFetchState] = useState(FetchState.DEFAULT);
  const isLoading = fetchState === FetchState.LOADING;
  const isSuccess = fetchState === FetchState.SUCCESS;
  const hasError = fetchState === FetchState.ERROR;
  const cropperRef = useRef<Cropper | null>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const cancelButtonRef = useRef(null);
  const initiateCropper = async () => {
    try {
      setFetchState(FetchState.LOADING);

      const imageEl = getRefValue(imageRef);
      const Cropper = await getCropperJs();

      cropperRef.current = new Cropper(imageEl, {
        viewMode: 3,
        aspectRatio: 1,
        minCropBoxWidth: 50,
        minCropBoxHeight: 50,
      });

      setFetchState(FetchState.SUCCESS);
    } catch (err) {
      setFetchState(FetchState.ERROR);
    }
  };
  const afterLeave = () => {
    window.requestAnimationFrame(() => {
      const cropper = getRefValue(cropperRef);

      if (cropper) {
        cropper.destroy();
        cropperRef.current = null;
      }
    });
  };
  const cropOnClick = () => {
    const cropper = getRefValue(cropperRef);
    const dataUrl = cropper.getCroppedCanvas().toDataURL(IMAGE_GENERATED_TYPE);

    onCrop(dataUrl);
    onClose();
  };

  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        initialFocus={cancelButtonRef}
        onClose={onClose}
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
          <div className="fixed inset-0 bg-black bg-opacity-75 transition-opacity" />
        </Transition.Child>
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div
            className={cn(
              'flex items-center justify-center min-h-full p-4',
              'sm:p-0'
            )}
          >
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4"
              enterTo="opacity-100 translate-y-0"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-4"
              beforeEnter={initiateCropper}
              afterLeave={afterLeave}
            >
              <Dialog.Panel
                className={cn(
                  'relative w-full max-w-[500px] bg-white text-gray-750 overflow-hidden shadow-xl',
                  'transform transition-all',
                  'sm:my-8'
                )}
              >
                <div className="flex justify-between p-[15px] border-b-[1px] border-b-gray-200">
                  <h3 className="text-xl font-bold">Crop Image</h3>
                  <button type="button" aria-label="Close" onClick={onClose}>
                    <XIcon
                      className={cn(
                        'h-6 w-6 text-black opacity-30',
                        'transition-opacity hover:opacity-50 active:opacity-100'
                      )}
                      aria-hidden="true"
                    />
                  </button>
                </div>
                <div className="p-[15px] select-none">
                  <div className="relative">
                    {(isLoading || hasError) && (
                      <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center ">
                        {isLoading ? (
                          <LoaderBubbles className="absolute inset-0 z-10" />
                        ) : (
                          <div className="flex flex-col items-center gap-[30px]">
                            <Alert className="px-[15px] select-text">
                              {ErrorMessage.UNEXPECTED}
                            </Alert>
                            <Button
                              variant={ButtonVariant.DEFAULT}
                              onClick={initiateCropper}
                            >
                              Retry
                            </Button>
                          </div>
                        )}
                      </div>
                    )}
                    <img
                      ref={imageRef}
                      src={imageDataUrl}
                      alt="attached photo"
                    />
                  </div>
                </div>
                <div className="border-t-[1px] border-t-gray-200 p-[15px] text-center">
                  <Button
                    variant={ButtonVariant.PRIMARY}
                    disabled={!isSuccess}
                    onClick={cropOnClick}
                  >
                    Crop
                  </Button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
