import { useSearchParams } from "react-router-dom";
import Select from "./Select";

const SortBy = ({ options }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const sortBy = searchParams.get("sortBy") || "";

  function handleChange(e) {
    searchParams.set("sortBy", e.target.value);
    setSearchParams(searchParams);
    // console.log(e.target.value);
  }
  return (
    <Select
      options={options}
      value={sortBy}
      onChange={handleChange}
      type="white"
    />
  );
};

export default SortBy;
