import "./Main.scss";

export default function Main({children, styles}: {children?: React.ReactNode, styles?:React.CSSProperties}) {
    return (
        <main style={styles}>
            {children}
        </main>
    )
}