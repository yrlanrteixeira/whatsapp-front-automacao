import { FormItemProps, InputProps } from "antd";
import { ChangeEvent } from "react";

export interface InputAntdProps extends FormItemProps {
  placeholder?: string | undefined;
  placeholderPicker?: [string, string];
  fontWeight?: 400 | 600;
  size?: "small" | "middle" | "large" | undefined;
  fontSize?: string;
  labelColor?: string;
  addonAfter?: React.ReactNode;
  addonBefore?: React.ReactNode;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  value?: string;
}

export interface InputAreaProps extends FormItemProps {
  autoSize?: boolean | { minRows?: number; maxRows?: number };
  placeholder?: string | undefined;
  onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  value?: string;
}

export interface CustomInputProps extends InputProps {}
