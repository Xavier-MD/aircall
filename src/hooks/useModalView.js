import { useState, useRef, useEffect } from 'react';

const useModalView = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const descriptionElementRef = useRef(null);

  useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  return {
    open,
    setOpen,
    handleClickOpen,
    handleClose,
    descriptionElementRef
  }

};

export default useModalView;