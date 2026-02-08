import "./InputField.scss";

type inputProps = {
    type?: "text" | "email" | "tel" | "date" | "textarea";
    value?: string;
    label?: string;
    id?: string;
    placeholder?: string;
    required?: boolean;
    onChange?: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
    singleLine?: boolean;
};

export default function InputField({type="text", value, label, required = false, id, placeholder, singleLine = true, onChange}: inputProps) {
    console.log(value?.toString());
    return (
        <div className={`inputField ${singleLine ? "--flex" : ""}`}>
            <label htmlFor={id}>{label}{required && <sup className="requiredField">*</sup>}</label>
            {type === "textarea" ? <textarea id={id} placeholder={placeholder} required={required} value={value} onChange={onChange}></textarea>

            : 
            
            <input id={id} type={type} pattern={type === "tel" ? "\\([0-9]{3}\\) [0-9]{3}-[0-9]{4}" : undefined}
             placeholder={placeholder} required={required} value={value} onChange={onChange} />}
        </div>
    )
}