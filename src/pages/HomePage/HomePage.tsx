import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { CreateList } from "../../api/models/list.model";
import { OvalLoader } from "../../assets/icons";
import {
  ActionButton,
  Card,
  EmptyView,
  Field,
  PageHeader,
  View,
} from "../../components";
import { ListCard } from "./components";
import { useCreateList } from "./hooks/useCreateList";
import { useLists } from "./hooks/useLists";

export const HomePage = () => {
  const {
    register,
    formState: { isValid },
    handleSubmit,
    reset,
  } = useForm<CreateList>({
    defaultValues: { title: "" },
  });

  const navigate = useNavigate();
  const { lists, isLoading, total } = useLists();
  const { createList, createdList, isCreating } = useCreateList();

  const handleCreateList = (list: CreateList) => {
    createList(list);
  };

  useEffect(() => {
    if (createdList) {
      reset();
      navigate(`/list/${createdList.id}`);
    }
  }, [createdList]);

  return (
    <View direction="column" gap={32} flex={1}>
      <Card
        title="Create, assign, and track"
        text="We will create public list, that can view by anyone, that’s cost of free usage"
      >
        <Field
          placeholder="List name"
          right={
            <ActionButton
              label="Let's go!"
              disabled={!isValid}
              isLoading={isCreating}
              onClick={handleSubmit(handleCreateList)}
            />
          }
          {...register("title", {
            required: true,
            minLength: 3,
            maxLength: 16,
          })}
        />
      </Card>
      <PageHeader title="Explore" text={total.toString()} />
      <View gap={16} wrap centered={!lists.length}>
        {lists.map((list) => (
          <ListCard
            key={list.id}
            title={list.title}
            path={`/list/${list.id}`}
          />
        ))}
        {isLoading && <OvalLoader />}
        {!isLoading && !lists.length && (
          <EmptyView text="Will you be my first?" />
        )}
      </View>
    </View>
  );
};
