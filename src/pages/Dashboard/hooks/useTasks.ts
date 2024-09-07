import { converter, db } from "@/firebase";
import { Task } from "@/types";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";

export const useTasks = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(false);
  const [ error, setError ] = useState<string | null>(null);

  useEffect(() => {
    const getTasks = async () => {
      try {
        setLoading(true)
        setError(null);
        const taskCollectionRef = collection(db, "tasks").withConverter(converter<Task>());
        if (!taskCollectionRef) throw new Error("Collection reference not initialized");
        const data = await getDocs(taskCollectionRef);
        setTasks(data.docs.map((doc) => doc.data()) as Task[]);
      } catch (error) {
        if (typeof error === "string") {
          setError(error);
        }
        return Promise.reject(error);
      } finally {
        setLoading(false);
      }
    }
    getTasks();
  }, []);

  return {
    tasks,
    setTasks,
    loading,
    error,
  }
}