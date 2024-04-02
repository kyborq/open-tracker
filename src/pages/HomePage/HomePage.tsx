import { useForm } from "react-hook-form";

import { ActionButton, Card, Field, PageHeader } from "../../components";
import { View } from "../../components/View";
import { ListCard } from "./components";

export const HomePage = () => {
  const {
    register,
    formState: { isValid },
  } = useForm<{ listName: string }>();

  return (
    <View direction="column" gap={32}>
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
      <PageHeader title="Explore" text="0" />
      <View gap={16} wrap>
        <ListCard title="My list" tasks={125} path="/list/1" />
      </View>
    </View>
  );
};
