import { useMemo, useState } from "react";
import { useUrlQueryParam } from "utils/url";

// 项目列表搜索的参数
export const useProjectsSearchParams = () => {
  const [param, setParam] = useUrlQueryParam(["name", "personId"]);
  return [
    useMemo(
      () => ({ ...param, personId: Number(param.personId) || undefined }),
      [param]
    ),
    setParam,
  ] as const;
};

export const useProjectModal = () => {
  const [{ projectCreate }, setProjectCreate] = useUrlQueryParam([
    "projectCreate",
  ]);
  const [{ editingProjectId }, setEditingProjectId] = useUrlQueryParam([
    "editingProjectId",
  ]);
  // const setUrlParams = useSetUrlSearchParam();
  // const { data: editingProject, isLoading } = useProjects(
  //   Number(editingProjectId)
  // );

  const open = () => setProjectCreate({ projectCreate: true });
  // const close = () => setUrlParams({ projectCreate: "", editingProjectId: "" });
  const close = () => {};
  const startEdit = (id: number) =>
    setEditingProjectId({ editingProjectId: id });

  return {
    projectModalOpen: projectCreate === "true" || Boolean(editingProjectId),
    open,
    close,
    startEdit,
    // editingProject,
    // isLoading,
  };
};
