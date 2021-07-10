import { Field, ErrorMessage, useField } from 'formik';
import React, { HTMLAttributes } from 'react';
import { IconType } from 'react-icons';
import {
  FaDailymotion,
  FaExclamation,
  FaExclamationCircle,
} from 'react-icons/fa';

import { ContentInput, Container, MessageError } from './style';

interface InputProps extends HTMLAttributes<HTMLInputElement> {
  Icon?: IconType;
  label: string;
  name: string;
  type?: string;
  errors?: any;
  disabled?: string;
  cursor?: string;
}

const Input: React.FC<InputProps> = ({
  disabled,
  cursor,
  children,
  label,
  Icon,
  ...rest
}) => {
  const [field, meta, helpers] = useField({
    ...rest,
  });

  return (
    <>
      <Container>
        <label>{label}</label>
        <MessageError>
          <ErrorMessage name={rest.name} />
        </MessageError>

        <ContentInput error={!!meta.error}>
          <Field cursor="not-allowed" disabled={disabled} {...rest} />

          <FaExclamationCircle
            size={24}
            color="red"
            visibility={meta.error ? 'visible' : 'hidden'}
          />
        </ContentInput>
      </Container>
    </>
  );
};

export default Input;