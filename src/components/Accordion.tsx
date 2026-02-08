import { useLayoutEffect, useState } from "react";
import { useRef } from "react";

import "./Accordion.scss";

type accordionProps = {
    title?: string;
    children?: React.ReactNode | React.ReactNode[];
    open?: boolean
    img?: string
}

export default function Accordion({title = "Title", children, img, open = false}: accordionProps) {
    const accordionContent = useRef<HTMLDivElement>(null);
    const [isOpen, setIsOpen] = useState<boolean>(open);
    const [contentHeight, setContentHeight] = useState("0px");

    function toggle() {
        setIsOpen(!isOpen);
    }

    useLayoutEffect(() => {
        if (!accordionContent.current) return;

        if (isOpen) {
            setContentHeight(accordionContent.current.scrollHeight + "px");
        } else {
            setContentHeight("0px");
        }
    }, [isOpen, children])

    return (
        <div className={"accordion " + (isOpen? "open" : "closed")}>
            <div className="accordion__header" tabIndex={0} onClick={toggle} onKeyDown={(e) => {
                if (e.repeat) return;
                if (e.key == "Enter" || e.key == " ") toggle();}}>
                <h2 draggable="false"><span className="caret">&gt;</span>{title}</h2>
                {img && <img className="accordion__icon" src={img} alt="" />}
            </div>
            <div className="accordion__content" ref={accordionContent} style={{maxHeight: `${contentHeight}`}}>
                {children}
            </div>
        </div>
    )
}