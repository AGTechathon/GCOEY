"use client";
import ChatBot from "@/app/components/ChatBot";
import dynamic from "next/dynamic";
import { useSearchParams } from "next/navigation";

const componentMap = {
  DepartmentJobRoles: dynamic(() =>
    import("@/app/careerplanning/components/DepartmentJobs")
  ),
  RoleRoadMap: dynamic(() =>
    import("@/app/careerplanning/components/RoleRoadMap")
  ),

  MoreInfoRole: dynamic(() =>
    import("@/app/careerplanning/components/MoreInfoRole")
  ),

  CourseRoadmap: dynamic(() =>
    import("@/app/careerplanning/components/CourseRoadmap")
  ),
  CompetitiveExamsDashboard: dynamic(() =>
    import("@/app/careerplanning/components/ExamForJobs")
  ),
  TopCompany: dynamic(() =>
    import("@/app/careerplanning/components/TopCompany")
  ),
};

const carreplanning = () => {
  const searchParams = useSearchParams();
  const page_name = searchParams.get("page");
  const Component =
    componentMap[page_name] ||
    dynamic(() => import("@/app/components/Instruction"));
  return (
    <>
      <Component />
      <ChatBot />
    </>
  );
};

export default carreplanning;
