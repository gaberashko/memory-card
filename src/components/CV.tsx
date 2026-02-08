import "./CV.scss";
import type { formData } from "./Form"

type cvProps = {
    data: formData;
    contentRef?: React.RefObject<null>
}

function formatDate(str: string): string {
    console.log("Initial date string:", str);
    
    if (str === "") return str;
    
    const date = new Date(str);
    console.log("Date object created:", date);

    const formattedDate: string = date.toLocaleString("en-US", {month: "long", year: "numeric"});
    

    return formattedDate;
}

export default function CV({data, contentRef}: cvProps) {
    return (
        <div className="CV" ref={contentRef}>
            <div className="CV__header">
                <h1>{data.firstName + " " + data.lastName}</h1>
                <div id="contact" className="CV__contact">
                    <p>{(data.email? data.email : "") + (data.phone && data.email? " | " : "") + (data.phone? data.phone : "")}</p>
                </div>
            </div>
            {(data.firstName || data.lastName) && <br/>}
            <div className="CV__content">
                <section id="skills" className="CV__skills">
                    {data.skills.length > 0 && <><h2>SKILLS</h2><hr></hr></>}
                    {data.skills.map((s, i) =>
                        <article id={`skill${i}`}>
                            <p><b>{s.category + (s.category !== "" ? ": " : "")}</b>{s.skills}</p>
                        </article>
                    )}
                </section>
                <section id="education" className="CV__education">
                    {data.educations.length > 0 && <><h2>EDUCATION</h2><hr></hr></>}
                    {data.educations.map((ed, i) =>
                        <article id={`education${i}`}>
                            <h3><b>{ed.school}</b></h3>
                            <p className="justify-end">{formatDate(ed.startDate) + ((ed.startDate || ed.endDate) ? " - " : "") + formatDate(ed.endDate)}</p>
                            <p><i>{ed.degree + (ed.degree ? " in " : "") + ed.major}</i></p>
                            <p className="justify-end"><i>{ed.location}</i></p>
                        </article>
                    )}
                </section>
                <section id="experience" className="CV__experience">
                    {data.experiences.length > 0 && (<><h2>WORK EXPERIENCE</h2><hr></hr></>)}
                    {data.experiences.map((ex, i) =>
                        <article id={`experience${i}`}>
                            <h3><b>{ex.position}</b></h3>
                            <p className="justify-end">{formatDate(ex.startDate) + ((ex.startDate || ex.endDate) ? " - " : "") + formatDate(ex.endDate)}</p>
                            <p><i>{ex.company}</i></p>
                            <p className="justify-end"><i>{ex.location}</i></p>
                            {ex.responsibilities != "" && <ul>{ex.responsibilities.split(/\n/).map(line => <li>{line}</li>)}</ul>}
                        </article>
                    )}
                </section>
                <section id="projects" className="CV__projects">
                    {data.projects.length > 0 && (<><h2>PROJECTS</h2><hr></hr></>)}
                    {data.projects.map((proj, i) =>
                        <article id={`project${i}`}>
                            <h3><b>{proj.name}</b></h3>
                            <p className="justify-end">{formatDate(proj.startDate) + ((proj.startDate || proj.endDate) ? " - " : "") + formatDate(proj.endDate)}</p>
                            <p><i>{proj.techStack}</i></p>
                            {proj.responsibilities != "" && <ul>{proj.responsibilities.split(/\n/).map(line => <li>{line}</li>)}</ul>}
                        </article>
                    )}
                </section>
            </div>
        </div>
    )
}