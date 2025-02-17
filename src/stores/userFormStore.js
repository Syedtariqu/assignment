import { create } from "zustand";

const useUserFormStore = create((set) => ({
  userData: JSON.parse(localStorage.getItem("userData")) || {},
  setUserData: (data) => set(() => {
    localStorage.setItem("userData", JSON.stringify(data)); 
    return { userData: data };
  }),
}));

export { useUserFormStore };

