
type Props = {
  title: string;
  onOurButtonClicked: () => void;
}

export const Button = ({title, onOurButtonClicked}: Props) => {
  return <button onClick={onOurButtonClicked}>{title}</button>
}