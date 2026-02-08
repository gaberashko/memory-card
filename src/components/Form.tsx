
import "./Form.scss";
import InputField from './InputField';
import Button from "./Button";
import Accordion from './Accordion';

type educationData = {
    [key: string]: string;
    id: string;
    school: string;
    degree: string;
    major: string;
    location: string;
    startDate: string;
    endDate: string;
}

type experienceData = {
    [key: string]: string | string[];
    id: string;
    company: string;
    position: string;
    location: string;
    responsibilities: string;
    startDate: string;
    endDate: string;
}

type projectData = {
    [key: string]: string | string[];
    id: string;
    name: string;
    techStack: string;
    startDate: string;
    endDate: string;
    responsibilities: string;
}

type skillData = {
    [key: string]: string | string[];
    id: string;
    category: string;
    skills: string;
}

type formData = {
    [key: string]: string | educationData[] | experienceData[] | projectData[] | skillData[];
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    educations: educationData[];
    experiences: experienceData[];
    projects: projectData[];
    skills: skillData[];
}

const initialData: formData = {
    firstName: "John",
    lastName: "Smith",
    email: "JohnSmith83@gmail.com",
    phone: "(582) 398-6845",
    educations: [
        {
            id:"edex1",
            school: "Vanderbilt University",
            degree:"Bachelor's Degree",
            major: "Computer Science",
            location: "Nashville, TN",
            startDate: "2021-08-02",
            endDate: "2025-05-09"
        },
        {
            id:"edex2",
            school: "Vanderbilt University",
            degree:"Bachelor's Degree",
            major: "Mathematics",
            location: "Nashville, TN",
            startDate: "2021-08-02",
            endDate: "2025-05-09"
        },
    ],
    experiences: [
        {
            id:"expex1",
            company:"Champion Maid Service",
            position:"Frontend Developer",
            location: "Buffalo, NY",
            responsibilities:"Established online presence with a business website using Astro, TailwindCSS, and TypeScript.\nCollaborated directly with business owner to translate requirements into client-ready solution.\nBuilt modular, scalable UI components and implemented SEO optimization for discoverability.\nIntegrated email service via FormSubmit API for business lead generation.",
            startDate:"2025-08-02",
            endDate:"2026-02-02",
        },
        {
            id:"expex2",
            company:"Vanderbilt University",
            position:"Campus Dining Student Coordinator",
            location: "Nashville, TN",
            responsibilities:"Streamlined dining hall operation by coordinating transactions and food-prep in fast-paced college environment.\nTrained 5+ staff personnel, logged inventory of 50+ products & fostered 1,000+ positive work interactions. ",
            startDate:"2022-08-02",
            endDate:"2024-08-02",
        },
    ],
    projects: [
        {
            id: "projex1",
            name: "CV Generator",
            techStack: "React, TypeScript, SCSS, Vite",
            startDate: "2026-01-26",
            endDate: "2026-01-31",
            responsibilities: "Developed a Cloudflare-deployed site allowing users to generate CV files with React, TypeScript, and Vite.\nEmphasizes sharing, and management of dynamic state between modular React components.\nExport functionality allowing users to preview CVs, download generated CVs as PDFs, and print out CVs.\nMobile-friendly, and keyboard-accessible UI for easy navigation for users of various devices, and abilities.",
        },
        {
            id: "projex2",
            name: "Battleship",
            techStack: "TypeScript, HTML, SCSS, Jest, Webpack",
            startDate: "2025-11-17",
            endDate: "2026-01-06",
            responsibilities: "Created re-imagined Battleship experience for desktop & mobile with TypeScript, HTML5, and SCSS.\nImplemented 2,200+ lines of modular TypeScript ship, player, game controller, and renderer classes.\nDeveloped support for local pass-and-play & AI combat with adjustable difficulty, and intelligent attack algorithms utilizing sessionStorage API.",
        },
    ],
    skills: [
        {
            id: "skillex1",
            category: "Languages",
            skills: "HTML5, CSS3, SCSS/SASS, TypeScript, JavaScript (ES6+), C, C++, C#, Python, Java, MATLAB ",
        },
        {
            id: "skillex2",
            category: "Frameworks/Libraries",
            skills: "React, Astro, Jest, Tailwind CSS",
        },
        {
            id: "skillex3",
            category: "Content Management Systems (CMS)",
            skills: "Framer, WordPress",
        },
        {
            id: "skillex4",
            category: "Tools/Platforms",
            skills: "Git, GitHub, Vite, Webpack, Linux, Unity, Figma, Mathematica, AutoCAD, Blender",
        },
    ],
}
    

const defaultEducationData: Partial<educationData> = {
    school: "",
    degree: "",
    major: "",
    location: "",
    startDate: "",
    endDate: "",
}

const defaultExperienceData: Partial<experienceData> = {
    id: "",
    company: "",
    position: "",
    location: "",
    responsibilities: "",
    startDate: "",
    endDate: "",
}

const defaultProjectData: Partial<projectData> = {
    id: "",
    name: "",
    techStack: "",
    startDate: "",
    endDate: "",
    responsibilities: "",
}

const defaultSkillData: Partial<skillData> = {
    id: "",
    category: "",
    skills: "",
}


export default function Form({title, data, onChange, onSubmit}: {title: string, data:formData, onChange: (data: formData) => void, onSubmit: (e: React.MouseEvent<HTMLButtonElement>) => void}) {

    function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, id?: string): void {
        const newData = {...data};
        // We do grab an ID here
        console.log(id);

        if (id) {
            newData.educations = newData.educations.map(ed => ed.id === id ? {...ed, [e.target.id]: e.target.value} : ed);
            newData.experiences = newData.experiences.map(ex => ex.id === id ? {...ex, [e.target.id]: e.target.value} : ex);
            newData.projects = newData.projects.map(proj => proj.id === id ? {...proj, [e.target.id]: e.target.value} : proj);
            newData.skills = newData.skills.map(skill => skill.id === id ? {...skill, [e.target.id]: e.target.value} : skill);
            console.log(newData);
        } else {
            newData[e.target.id as keyof formData] = e.target.value;
        }
        onChange(newData);
    }


    function addEducation(): void {
        const newEducationData = {...defaultEducationData, id: crypto.randomUUID()} as educationData;
        const newData = {...data};
        
        newData.educations.push(newEducationData);
        
        onChange(newData);
    }

    function removeEducation(id: string) {
        const newData = {...data, educations: data.educations.filter(e => e.id !== id)};
        onChange(newData);
    }

    function addExperience(): void {
        const newExperienceData = {...defaultExperienceData, id: crypto.randomUUID()} as experienceData;
        const newData = {...data};
        
        newData.experiences.push(newExperienceData);
        
        onChange(newData);
    }

    function removeExperience(id: string): void {
        const newData = {...data, experiences: data.experiences.filter(e => e.id !== id)};
        onChange(newData);
    }

    function addProject(): void {
        const newProjectData = {...defaultProjectData, id: crypto.randomUUID()} as projectData;
        const newData = {...data};
        
        newData.projects.push(newProjectData);
        
        onChange(newData);
    }

    function removeProject(id: string): void {
        const newData = {...data, projects: data.projects.filter(e => e.id !== id)};
        onChange(newData);
    }

    function addSkill(): void {
        const newSkillData = {...defaultSkillData, id: crypto.randomUUID()} as skillData;
        const newData = {...data};
        
        newData.skills.push(newSkillData);
        
        onChange(newData);
    }

    function removeSkill(id: string): void {
        const newData = {...data, skills: data.skills.filter(e => e.id !== id)};
        onChange(newData);
    }


    
    return (
    <form>
        <h1>{title}</h1>
        <Accordion title="General info" img="person.svg">
            <InputField id="firstName" label="First Name" value={data.firstName}
            placeholder={initialData.firstName} required onChange={handleChange}/>
            <InputField id="lastName" label="Last Name" value={data.lastName}
            placeholder={initialData.lastName} required onChange={handleChange}/>
            <InputField id="email" label="Email Address" type="email" value={data.email}
            placeholder={initialData.email} required onChange={handleChange}/>
            <InputField id="phone" label="Phone Number" type="tel" value={data.phone}
            placeholder={initialData.phone} required onChange={handleChange}/>
        </Accordion>
        <Accordion title="Education" img="graduation-cap.svg">
            {data.educations.map((ed, i) =>  
                <fieldset className="educationSection">
                    <legend>Education {i+1}</legend>
                    <InputField id="school" label="School Name" value={ed.school}
                    placeholder={initialData.educations[i].school} onChange={(e) => {handleChange(e, ed.id)}}/>
                    <InputField id="degree" label="Degree" value={ed.degree}
                    placeholder={initialData.educations[i].degree} onChange={(e) => {handleChange(e, ed.id)}}/>
                    <InputField id="major" label="Major of Study" value={ed.major}
                    placeholder={initialData.educations[i].major} onChange={(e) => {handleChange(e, ed.id)}}/>
                    <InputField id="location" label="Location" value={ed.location}
                    placeholder={initialData.educations[i].location} onChange={(e) => {handleChange(e, ed.id)}}/>
                    <InputField id="startDate" label="Start Date" type="date" value={ed.startDate}
                    placeholder={initialData.educations[i].startDate} onChange={(e) => {handleChange(e, ed.id)}}/>
                    <InputField id="endDate" label="Graduation Date" type="date" value={ed.endDate}
                    placeholder={initialData.educations[i].endDate} onChange={(e) => {handleChange(e, ed.id)}}/>
                    <Button id="removeEducation" text="Remove Education" type="secondary" onClick={(e) => {
                    e.preventDefault();
                    removeEducation(ed.id);}}/>
                </fieldset>)
            }
            <Button id="addEducation" text="Add Education" onClick={(e) => {
                e.preventDefault();
                addEducation();}}/>
        </Accordion>
        <Accordion title="Work Experience" img="employee.svg">
            {data.experiences.map((ex, i) =>  
               <fieldset className="experienceSection">
                    <legend>Experience {i+1}</legend>
                    <InputField id="company" label="Company" value={ex.company}
                    placeholder={initialData.experiences[i].company} onChange={(e) => {handleChange(e, ex.id)}}/>
                    <InputField id="position" label="Position" value={ex.position}
                    placeholder={initialData.experiences[i].position} onChange={(e) => {handleChange(e, ex.id)}}/>
                    <InputField id="location" label="Location" value={ex.location}
                    placeholder={initialData.experiences[i].location} onChange={(e) => {handleChange(e, ex.id)}}/>
                    <InputField id="responsibilities" label="Responsibilities" type="textarea" value={ex.responsibilities}
                    placeholder={initialData.experiences[i].responsibilities} onChange={(e) => {handleChange(e, ex.id)}}/>
                    <InputField id="startDate" label="Start Date" type="date" value={ex.startDate}
                    placeholder={initialData.experiences[i].startDate} onChange={(e) => {handleChange(e, ex.id)}}/>
                    <InputField id="endDate" label="End Date" type="date" value={ex.endDate}
                    placeholder={initialData.experiences[i].endDate} onChange={(e) => {handleChange(e, ex.id)}}/>
                    <Button id="removeExperience" text="Remove Experience" type="secondary" onClick={(e) => {
                    e.preventDefault();
                    removeExperience(ex.id);}}/>
                </fieldset>)
            }
            <Button id="addEducation" text="Add Experience" onClick={(e) => {
                e.preventDefault();
                addExperience();}}/>
        </Accordion>
        <Accordion title="Projects" img="hammer.svg">
            {data.projects.map((proj, i) =>  
               <fieldset className="projectSection">
                    <legend>Project {i+1}</legend>
                    <InputField id="name" label="Project Name" value={proj.name}
                    placeholder={initialData.projects[i].name} onChange={(e) => {handleChange(e, proj.id)}}/>
                    <InputField id="techStack" label="Technologies" value={proj.techStack}
                    placeholder={initialData.projects[i].techStack} onChange={(e) => {handleChange(e, proj.id)}}/>
                    <InputField id="startDate" label="Start Date" type="date" value={proj.startDate}
                    placeholder={initialData.projects[i].startDate} onChange={(e) => {handleChange(e, proj.id)}}/>
                    <InputField id="endDate" label="End Date" type="date" value={proj.endDate}
                    placeholder={initialData.projects[i].endDate} onChange={(e) => {handleChange(e, proj.id)}}/>
                    <InputField id="responsibilities" label="Responsibilities" type="textarea" value={proj.responsibilities}
                    placeholder={initialData.projects[i].responsibilities} onChange={(e) => {handleChange(e, proj.id)}}/>
                    <Button id="removeProject" text="Remove Project" type="secondary" onClick={(e) => {
                    e.preventDefault();
                    removeProject(proj.id);}}/>
                </fieldset>)
            }
            <Button id="addProject" text="Add Project" onClick={(e) => {
                e.preventDefault();
                addProject();}}/>
        </Accordion>
        <Accordion title="Skills" img="star.svg">
               {data.skills.map((s, i) =>  
                <fieldset className="skillSection">
                    <legend>Skill {i+1}</legend>
                    <InputField id="category" label="Category" value={s.category}
                    placeholder={initialData.skills[i].category} onChange={(e) => {handleChange(e, s.id)}}/>
                    <InputField id="skills" label="Skills" value={s.skills}
                    placeholder={initialData.skills[i].skills} onChange={(e) => {handleChange(e, s.id)}}/>
                    <Button id="removeSkill" text="Remove Category" type="secondary" onClick={(e) => {
                    e.preventDefault();
                    removeSkill(s.id);}}/>
                </fieldset>)
            }
             <Button id="addSkill" text="Add Category" onClick={(e) => {
                e.preventDefault();
                addSkill();}}/>
        </Accordion>
        <Button id="submit" text="Preview" onClick={onSubmit}/>
    </form>)
}

export {initialData};
export type {formData};