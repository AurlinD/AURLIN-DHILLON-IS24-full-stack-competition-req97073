import onChangeHandler from "../helpers/onChangeHandler";

const NewProductInput = ({
  label,
  setProduct,
  isRequired,
  property,
  productValue,
  placeholder,
}) => {
  return (
    <div>
      <label htmlFor="label">{label} : </label>
      <input
        type="text"
        required={isRequired}
        value={productValue}
        placeholder={placeholder}
        onChange={(event) =>
          onChangeHandler(event.target.value, setProduct, property)
        }
      />
    </div>
  );
};

export default NewProductInput;
