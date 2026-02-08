import "./Card.scss";

type cardProps = {
    hidden?: boolean;
    children?: React.ReactNode;
    styles?: React.CSSProperties;
    ref?: React.RefObject<null>;
}

export default function Card({children, hidden, styles}: cardProps) {
    return (
        <div className={"card " + (hidden? "hidden" : "")} style={styles}>
            {children}
        </div>
    );
}