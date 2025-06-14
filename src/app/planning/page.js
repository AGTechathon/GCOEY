"use client";
import dynamic from "next/dynamic";
import { useSearchParams } from "next/navigation";

const componentMap = {
  DepartmentJobRoles: dynamic(() =>
    import("@/app/planning/components/DepartmentJobs")
  ),
  RoleRoadMap: dynamic(() => import("@/app/planning/components/RoleRoadMap")),

  MoreInfoRole: dynamic(() => import("@/app/planning/components/MoreInfoRole")),

  CourseRoadmap: dynamic(() =>
    import("@/app/planning/components/CourseRoadmap")
  ),
};

const carreplanning = () => {
  const searchParams = useSearchParams();
  const page_name = searchParams.get("page");
  const Component =
    componentMap[page_name] ||
    dynamic(() => import("@/app/planning/components/CourseRoadmap"));
  return (
    <>
      <Component />
    </>
  );
};

export default carreplanning;
