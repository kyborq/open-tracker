import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";

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
import { useGetList } from "./hooks/useGetList";

export const ListPage = () => {
  const { id } = useParams();
  const { list, isLoading } = useGetList(id);
  const {
    register,
    watch,
    formState: { isValid },
  } = useForm<{ estimate: number; title: string }>({
    values: {
      estimate: 0,
      title: "",
    },
  });

  const timePopup = useModal();
  const estimate = watch("estimate");

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
            <ActionButton
              label={convertEstimate(estimate)}
              icon={<TimeIcon />}
              onClick={timePopup.open}
            />
            <ActionButton icon={<SendIcon />} primary disabled={!isValid} />
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
