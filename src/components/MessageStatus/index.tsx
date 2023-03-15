import React from "react";
import { P } from "./styles";

export type PropsMessage = {
  text?: string;
  messageError?: string;
  messageSuccess?: string;
  isSuccess: boolean | null;
  isValidated: boolean | null;
};

const MessageStatus: React.FC<PropsMessage> = ({
  text,
  isSuccess,
  messageSuccess,
  messageError,
  isValidated,
}) => {
  const message =
    messageSuccess && isSuccess === true ? messageSuccess : messageError;
  const messageType = isSuccess === true ? "Success: " : "Error:";

  return (
    <>
      {isValidated === false ? (
        <P isValidated={isValidated} isSuccess={isSuccess}>
          blank spaques in the form or the form has already been sent
        </P>
      ) : (
        <P isValidated={isValidated} isSuccess={isSuccess}>
          {message ? message : `${messageType}${text}`}
        </P>
      )}
    </>
  );
};

export default MessageStatus;
