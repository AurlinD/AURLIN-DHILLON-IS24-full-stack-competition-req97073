const NewProductInput = ({
  label,
  setProduct,
  isRequired,
  property,
  productValue,
  placeholder,
}) => {
  //tests
  const onChangeHandler = (val) => {
    setProduct((prev) => ({
      ...prev,
      [property]: val,
    }));
  };

  return (
    <div>
      <label htmlFor="label">{label} : </label>
      <input
        type="text"
        required={isRequired}
        value={productValue}
        placeholder={placeholder}
        onChange={(event) => onChangeHandler(event.target.value)}
      />
    </div>
  );
};

export default NewProductInput;
