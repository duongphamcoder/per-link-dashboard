import { ReactElement, MouseEvent, memo } from 'react';

// Components
import {
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  InputElementProps,
} from '@chakra-ui/react';

interface InputBaseProps extends InputElementProps {
  leftIcon?: ReactElement;
  rightIcon?: ReactElement;
  leftIconEvent?: (_event: MouseEvent) => void;
  rightIconEvent?: (_event: MouseEvent) => void;
}

const InputBase = memo((props: InputBaseProps) => {
  const { leftIcon, rightIcon, leftIconEvent, rightIconEvent, ...rest } = props;

  return (
    <InputGroup color="gray.400" w="fit-content">
      {leftIcon && (
        <InputLeftElement onClick={leftIconEvent}>{leftIcon}</InputLeftElement>
      )}

      <Input
        variant="custom"
        placeholder="Type here..."
        borderRadius="15px"
        border="1px solid"
        borderColor="gray.200"
        fontSize="12px"
        _placeholder={{
          fontWeight: '600',
        }}
        {...rest}
      />

      {rightIcon && (
        <InputRightElement onClick={rightIconEvent}>
          {rightIcon}
        </InputRightElement>
      )}
    </InputGroup>
  );
});

export default InputBase;
