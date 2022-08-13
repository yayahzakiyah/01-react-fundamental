function InputText(props) {
    const {label, value, onChange} = props;
    return (
        <label>
            <span>{label}</span>
            <input type='text' name='name' value={value} onChange={e => onChange(id, e.target.value)}/>
        </label>
    )
}