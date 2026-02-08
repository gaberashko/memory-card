import "./FloatContainer.scss"

type floatContainerProps = {
    children: React.ReactNode;
}

export default function FloatContainer(props: floatContainerProps) {
    return (
        <div className="floatContainer">
            {props.children}
        </div>
    )
}