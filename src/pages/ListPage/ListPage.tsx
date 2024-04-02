import { useParams } from "react-router-dom";

import { OvalLoader } from "../../assets/icons";
import { PageHeader, View } from "../../components";
import { useGetList } from "./hooks/useGetList";

export const ListPage = () => {
  const { id } = useParams();
  const { list, isLoading } = useGetList(id);

  if (isLoading) {
    return (
      <View centered>
        <OvalLoader />
      </View>
    );
  }

  if (!list) {
    return null;
  }

  return (
    <>
      <PageHeader title={list.title} />
    </>
  );
};
