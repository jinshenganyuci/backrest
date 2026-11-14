import * as m from "../../paraglide/messages";
import type { ButtonProps } from "@chakra-ui/react";
import { IconButton as ChakraIconButton } from "@chakra-ui/react";
import { FiX } from "react-icons/fi";
import * as React from "react";

export interface CloseButtonProps extends ButtonProps {}

export const CloseButton = React.forwardRef<
  HTMLButtonElement,
  CloseButtonProps
>(function CloseButton(props, ref) {
  return (
    <ChakraIconButton variant="ghost" aria-label={m.ui_close()} ref={ref} {...props}>
      <FiX />
    </ChakraIconButton>
  );
});
