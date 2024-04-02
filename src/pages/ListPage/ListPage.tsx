import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";

import { OvalLoader, SendIcon, TimeIcon } from "../../assets/icons";
import {
  ActionButton,
  EmptyView,
  Field,
  PageHeader,
  View,
} from "../../components";
import { useGetList } from "./hooks/useGetList";

export const ListPage = () => {
  const { id } = useParams();
  const { list, isLoading } = useGetList(id);
  const {
    register,
    formState: { isValid },
  } = useForm<{ estimate: number; title: string }>();

  if (isLoading) {
    return (
      <View centered>
        <OvalLoader />
      </View>
    );
  }

  if (!list) {
    return (
      <View centered>
        <EmptyView text="Look's like there is no list, that's saaad ;(" />
      </View>
    );
  }

  return (
    <View gap={32} direction="column">
      <PageHeader title={list.title} />
      <Field
        placeholder="Enter Task"
        right={
          <View gap={4}>
            <ActionButton label="00:00" icon={<TimeIcon />} />
            <ActionButton icon={<SendIcon />} primary disabled={!isValid} />
          </View>
        }
        {...register("title", { required: true })}
      />
    </View>
  );
};
