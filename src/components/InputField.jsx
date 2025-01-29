export default function InputField({ id, label, type = "text", value, onChange,}) {
    if (type === "file") {
      return (
        <label htmlFor={id}>
          {label} <br />
          <input
            id={id}
            name={id}
            type="file"
            onChange={onChange}
          />
        </label>
      );
    }
  
    return (
      <label htmlFor={id}>
        {label} <br />
        {type === "textarea" ? (
          <textarea
            id={id}
            name={id}
            rows={4} 
            value={value}
            onChange={onChange}
          />
        ) : (
          <input
            id={id}
            name={id}
            type={type}
            value={value}
            onChange={onChange}
          />
        )}
      </label>
    );
  }