import "./Button.scss";

export type buttonProps = {
    text?: string;
    id?: string;
    type?: "primary" | "secondary";
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    styles?: React.CSSProperties;
}

export default function Button({text, id, type="primary", onClick = () => {}, styles}: buttonProps) {
    return (
        <button id={id} className={`button--${type}`} onClick={onClick} style={styles}>{text}</button>
    )
}