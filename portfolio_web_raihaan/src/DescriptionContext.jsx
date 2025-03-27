import { supabase } from "./supabaseClient";
import { createContext, useContext, useEffect, useState } from "react";

const DescriptionContext = createContext();

export const DescriptionProvider = ({ children }) => {
  const [description, setDescription] = useState([]);

  useEffect(() => {
    const fetchDescription = async () => {
      let { data, error } = await supabase.from("description").select("*");
      if (error) console.error("Error fetching description: ", error);
      else setDescription(data[0]);
    };

    fetchDescription();
  }, []);

  return (
    <DescriptionContext.Provider value={{ description }}>
      {children}
    </DescriptionContext.Provider>
  );
};

export const useDescription = () => useContext(DescriptionContext);