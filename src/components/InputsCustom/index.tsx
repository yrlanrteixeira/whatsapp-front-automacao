import { StyledItem, StyledInput, StyTextArea, StyCustomInput } from "./styles";
import {
  InputAntdProps,
  CustomInputProps,
  InputAreaProps,
} from "@global/interface/inputs";

export const Input = ({
  value,
  onChange,
  placeholder,
  size,
  addonAfter,
  addonBefore,
  disabled,
  ...rest
}: InputAntdProps) => (
  <StyledItem {...rest}>
    <StyledInput
      value={value}
      placeholder={placeholder}
      size={size}
      addonAfter={addonAfter}
      addonBefore={addonBefore}
      onChange={onChange}
      disabled={disabled}
    />
  </StyledItem>
);

export const InputPasswordForm = ({
  value,
  placeholder,
  size,
  onChange,
  ...rest
}: InputAntdProps) => (
  <StyledItem {...rest}>
    <StyledInput.Password
      value={value}
      placeholder={placeholder}
      size={size}
      onChange={onChange}
    />
  </StyledItem>
);

export const InputAreaForm = ({
  value,
  autoSize,
  placeholder,
  onChange,
  ...rest
}: InputAreaProps) => (
  <StyledItem {...rest}>
    <StyTextArea
      value={value}
      autoSize={autoSize}
      placeholder={placeholder}
      onChange={onChange}
    />
  </StyledItem>
);

export const InputAntdSimple = ({ name, ...rest }: CustomInputProps) => (
  <StyCustomInput id={name} name={name} {...rest} />
);
