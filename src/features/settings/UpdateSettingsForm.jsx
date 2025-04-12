import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import { useSetting } from "./useSetting";
import Spinner from "./../../ui/Spinner";
import { useUpdateSetting } from "./useUpdateSetting";

function UpdateSettingsForm() {
  const {
    isLoading,

    settings: {
      minBookingLength,
      maxBookingLength,
      maxGuestsPerBooking,
      breakfast,
    } = {},
  } = useSetting();

  const { isUpdating, updateSetting } = useUpdateSetting();

  if (isLoading) return <Spinner />;

  function handleBlur(e, field) {
    const { value } = e.target;
    console.log(value);

    updateSetting({ [field]: value });
  }

  return (
    <Form>
      <FormRow label="Minimum nights/booking">
        <Input
          type="number"
          id="min-nights"
          disabled={isUpdating}
          onBlur={(e) => handleBlur(e, "minBookingLength")}
          defaultValue={minBookingLength}
        />
      </FormRow>
      <FormRow label="Maximum nights/booking">
        <Input
          type="number"
          id="max-nights"
          disabled={isUpdating}
          onBlur={(e) => handleBlur(e, "maxBookingLength")}
          defaultValue={maxBookingLength}
        />
      </FormRow>
      <FormRow label="Maximum guests/booking">
        <Input
          type="number"
          id="max-guests"
          disabled={isUpdating}
          onBlur={(e) => handleBlur(e, "maxGuestsPerBooking")}
          defaultValue={maxGuestsPerBooking}
        />
      </FormRow>
      <FormRow label="Breakfast price">
        <Input
          type="number"
          id="breakfast-price"
          disabled={isUpdating}
          onBlur={(e) => handleBlur(e, "breakfast")}
          defaultValue={breakfast}
        />
      </FormRow>
    </Form>
  );
}

export default UpdateSettingsForm;
