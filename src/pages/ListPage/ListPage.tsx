import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";

import { CreateTask } from "../../api/models/task.model";
import { OvalLoader, SendIcon, TimeIcon } from "../../assets/icons";
import {
  ActionButton,
  EmptyView,
  Field,
  PageHeader,
  Popup,
  View,
} from "../../components";
import { useModal } from "../../hooks/useModal";
import { convertEstimate } from "../../utils/estimate.utils";
import { TaskCard } from "./components";
import { useCreateTask } from "./hooks/useCreateTask";
import { useGetList } from "./hooks/useGetList";
import { useGetTasks } from "./hooks/useGetTasks";

export const ListPage = () => {
  const { id } = useParams();
  const { list, isLoading } = useGetList(id);
  const {
    register,
    watch,
    formState: { isValid },
    handleSubmit,
    reset,
  } = useForm<CreateTask>({
    values: {
      estimate: 0,
      title: "",
      list: id || "",
    },
  });

  const timePopup = useModal();
  const { createTask, isTaskCreating } = useCreateTask();
  const { tasks, total, isTasksLoading } = useGetTasks(id);

  const estimate = watch("estimate");

  const handleCreateTask = (data: CreateTask) => {
    createTask(data);
    reset();
  };

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
      <PageHeader title={list.title} text={total.toString()} />

      <View direction="column" gap={8}>
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
        {!tasks.length && <EmptyView text="There is no tasks" />}
        {isTasksLoading && <OvalLoader />}
      </View>

      <Field
        placeholder="Enter Task"
        right={
          <View gap={4}>
            <ActionButton
              label={convertEstimate(estimate)}
              icon={<TimeIcon />}
              onClick={timePopup.open}
            />
            <ActionButton
              icon={<SendIcon />}
              primary
              disabled={!isValid}
              isLoading={isTaskCreating}
              onClick={handleSubmit(handleCreateTask)}
            />
            <Popup state={timePopup} width={220} title="Estimate">
              <Field
                type="number"
                padding={0}
                placeholder="Hours"
                min={0}
                max={200}
                {...register("estimate", {
                  valueAsNumber: true,
                  setValueAs: (v) => (v === "" ? 0 : parseInt(v)),
                })}
              />
            </Popup>
          </View>
        }
        {...register("title", { required: true })}
      />
    </View>
  );
};
