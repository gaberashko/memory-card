import "./FloatButton.scss";
import type { buttonProps } from "./Button";

type floatButtonProps = buttonProps & {
    imgSrc: string;
    alt: string;
    hidden: boolean;
}

export default function FloatButton(props: floatButtonProps) {
    return (
        <button className={`button--float--${props.type} ` + (props.hidden? "hidden" : "")} onClick={props.onClick} style={props.styles}>{props.text} <img src={props.imgSrc} alt={props.alt}/></button>
        )
}