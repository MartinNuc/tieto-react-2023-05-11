import { PropsWithChildren, useState } from "react";
import { Button } from "./button"
import { Content } from "./content"

export const Dropdown = ({children, buttonTitle}: PropsWithChildren<{ buttonTitle: string}>) => {
  const [isContentVisible, setIsContentVisible] = useState(false);

  function handleButtonClick() {
    setIsContentVisible(!isContentVisible);
  }

  return <>
    <Button title={buttonTitle} onOurButtonClicked={handleButtonClick} />
    <div style={{ position: 'relative' }}>
      {isContentVisible && <Content>{children}</Content>}
    </div>
  </>
}