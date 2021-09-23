import { Checkbox as ChakraCheckbox } from "@chakra-ui/checkbox";
import React, { useState } from "react";

export const Checkbox = React.forwardRef(({ indeterminate, checked, ...rest }, ref) => {
  const defaultRef = React.useRef();
  const resolvedRef = ref || defaultRef;
  const [isIndeterminate, setIsIndeterminate] = useState(false);

  React.useEffect(() => {
    setIsIndeterminate(indeterminate);
  }, [resolvedRef, indeterminate]);

  return (
    <>
      <ChakraCheckbox
        ref={resolvedRef}
        isChecked={checked}
        isIndeterminate={isIndeterminate}
        {...rest}
      />
    </>
  );
});
