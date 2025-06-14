"use client";
import { useEffect, useState } from "react";
import LoadingDialog from "../../components/LoadingDialog";
import StudentRoadMap from "./RoadMap";
import {
  collection,
  query,
  where,
  getDocs,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";
import {
  AiGenerateRollRoadmap,
  AiPreRole,
} from "../../../../config/AllAiModels";

import { db } from "@/lib/firebaseConfig";
import Precourse from "./Precourse";

export default function RoleRoadMap() {
  const [inputValue, setInputValue] = useState("");
  const [submittedValue, setSubmittedValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [tree, setTree] = useState(false);
  const [roadmap, setRoadmap] = useState("");
  const [branch, setBranch] = useState("");
  const [level, setLevel] = useState("");
  const [pre, setPre] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Check if roadmap already exists
      const roadmapRef = collection(db, "careerlunch");
      const q = query(
        roadmapRef,
        where("role", "==", inputValue),
        where("branch", "==", branch),
        where("level", "==", level)
      );
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        // If exists, use the first matched document
        const existingDoc = querySnapshot.docs[0].data();
        setSubmittedValue(existingDoc.roadmap);
        setPre(existingDoc.precourse);
        setTree(true);
        setLoading(false);
        return;
      }

      // If not exists, generate roadmap via AI
      const BASIC_PROMPT = `generate Simple,Focused,Progressive, and Outcome-Oriented roadmap for ${inputValue} of branch ${branch},include introducation,goal,objective,stages,topic,subtopics,time required,real worldprojects,challenges,resources,skill required to master.in json formate.`;
      const roadmapResult = await AiGenerateRollRoadmap.sendMessage(
        BASIC_PROMPT
      );
      const roadmapText = await roadmapResult.response.text();
      const roadmapJSON = JSON.parse(roadmapText);
      setSubmittedValue(roadmapJSON);
      // localStorage.setItem("roadmap", JSON.stringify(roadmapJSON));

      const prePrompt = `give me list of things i want know about befor start courses in "${inputValue}".include .in json formate.`;
      const preResult = await AiPreRole.sendMessage(prePrompt);
      const preText = await preResult.response.text();
      const preJSON = JSON.parse(preText);
      setPre(preJSON);

      // Save new data to Firebase
      await addDoc(roadmapRef, {
        role: inputValue,
        branch: branch,
        level: level,
        roadmap: roadmapJSON,
        precourse: preJSON,
        createdAt: serverTimestamp(),
      });

      setTree(true);
    } catch (error) {
      console.error("Error:", error);
    }

    setLoading(false);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-200 to-blue-400">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-xl w-full max-w-md mt-8"
      >
        <h1 className="text-2xl font-semibold text-center text-gray-800 mb-6">
          Find Your Best Roadmap
        </h1>
        <div className="mb-6">
          <div className="mb-2">
            <label
              htmlFor="userInput"
              className="block text-gray-600 text-sm font-medium mb-2"
            >
              Just Give Me Your Role:
            </label>
            <input
              type="text"
              id="userInput"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
              placeholder="Enter your topic here..."
            />
          </div>
          <select
            onChange={(e) => setLevel(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
            value={level}
          >
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="advanced">Advanced</option>
          </select>
        </div>
        <button
          type="submit"
          className={`w-full py-3 rounded-lg text-white font-semibold transition duration-200 ${
            loading
              ? "bg-blue-400 cursor-not-allowed"
              : "bg-blue-500 hover:bg-blue-600"
          }`}
          disabled={loading}
        >
          {loading ? "Generating..." : "Check Out"}
        </button>
      </form>
      {loading && <LoadingDialog loading={loading} />}

      {tree && (
        <div className="mt-8 w-full max-w-4xl">
          {pre && <Precourse pre={pre} inputValue={inputValue} />}
          <StudentRoadMap roadmap={submittedValue} setTree={setTree} />
        </div>
      )}
    </div>
  );
}
