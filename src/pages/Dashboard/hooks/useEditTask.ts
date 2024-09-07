import { db } from "@/firebase";
import { Task } from "@/types";
import { doc, updateDoc } from "firebase/firestore";

export const useEditTask = (onSuccess: (editedTask: Task) => void) => {
  const editTask = async (taskToEdit: Task) => {
    try {
      const docRef = doc(db, "tasks", taskToEdit.id);
      await updateDoc(docRef, {
        description: taskToEdit.description,
        isCompleted: taskToEdit.isCompleted,
      });
      onSuccess(taskToEdit);
    } catch (error) {
      console.log(error);
    }
  }

  return {
    editTask
  };
}
