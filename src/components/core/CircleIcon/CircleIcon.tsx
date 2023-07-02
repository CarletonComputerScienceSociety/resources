import "./CircleIcon.style.scss";

interface CircleIconProps {
  icon: string;
  size: string;
  colorSet: string;
}

export default function CircleIcon(props: CircleIconProps) {
  return (
    <div className={`circle-icon ${props.size} ${props.colorSet}`}>
      <i className={`${props.icon}`}></i>
    </div>
  );
}
