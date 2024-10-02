import React, { useCallback, useImperativeHandle } from 'react';

interface ModalProps {
  id: string;
  title?: string;
  children: React.ReactNode;
  onClose?: () => void;
}

export interface ModalRef {
  openModal: () => void;
}

export const Modal = React.forwardRef<ModalRef, ModalProps>(({ id, children, onClose = () => null }, ref) => {
  const modalRef = React.useRef<HTMLDialogElement>(null);
  useImperativeHandle(ref, () => ({
    openModal: () => modalRef.current?.showModal(),
  }));

  const handleOnClose = useCallback(() => {
    onClose();
  }, [onClose]);

  return (
    <dialog id={id} ref={modalRef} className='modal modal-bottom sm:modal-middle' onClose={handleOnClose}>
      <div className='modal-box !max-w-[80%]'>
        {children}
        <div className='mt-4 flex items-center justify-center'>
          <span className='text-base-content text-xs italic'>
            Press <kbd className='kbd kbd-xs'>ESC</kbd> or click the background to close
          </span>
        </div>
      </div>
      <form method='dialog' className='modal-backdrop border-transparent'>
        <button type='submit'>close</button>
      </form>
    </dialog>
  );
});

export default Modal;
