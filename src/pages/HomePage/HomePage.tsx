import { useForm } from "react-hook-form";

import { ActionButton, Card, Field } from "../../components";

export const HomePage = () => {
  const {
    register,
    formState: { isValid },
  } = useForm<{ listName: string }>();

  return (
    <>
      <Card
        title="Create, assign, and track"
        text="We will create public list, that can view by anyone, that’s cost of free usage"
      >
        <Field
          placeholder="List name"
          right={<ActionButton label="Let's go!" disabled={!isValid} />}
          {...register("listName", {
            required: true,
            minLength: 3,
            maxLength: 16,
          })}
        />
      </Card>
    </>
  );
};
