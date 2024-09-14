import meetApi from "@/api/meet";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useRef, useState } from "react";

const useSpeedMeetWrite = (mountainInputRef) => {
  const [formState, setFormState] = useState({
    title: "",
    date: "",
    mountainName: "",
    capacity: "",
    content: "",
    chatLink: ""
  });

  const [selectedMountain, setSelectedMountain] = useState(null);
  const [searchBoxVisible, setSearchBoxVisible] = useState(false);
  const [mountainSearchResult, setMountainSearchResult] = useState(null);

  const { data: mountains = [], isPending } = useQuery({
    queryKey: ["dummy-mountain"],
    queryFn: () => meetApi.getDummyMountain()
  });

  const handleBlur = () => {
    if (mountainSearchResult) {
      console.log('mountainSearchResult', mountainSearchResult[0]);
      handleSetMountain(mountainSearchResult[0])
    }
  };

  useEffect(() => {
    const inputElement = mountainInputRef?.current;

    if (inputElement) {
      inputElement.addEventListener('blur', handleBlur);
    }

    return () => {
      inputElement.removeEventListener('blur', handleBlur);
    }

  }, []);

  useEffect(() => {
    if (mountains.length > 0) {
      const result = mountains.filter((mountain) => mountain.mntnnm.includes(formState.mountainName));
      console.log('result', result);
      setMountainSearchResult(result);

      const condition = !!formState.mountainName;

      setSearchBoxVisible(condition);
    }
  }, [formState.mountainName]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState((prev) => {
      return {
        ...prev,
        [name]: value
      };
    });

    if (name === "mountainName") {
      setSelectedMountain(null);
    }
  };

  const handleSetMountain = (mountain) => {
    setFormState((prev) => {
      return {
        ...prev,
        mountainName: mountain.mntnnm
      };
    });

    setSelectedMountain(mountain);
    setSearchBoxVisible(false);
    console.log("mountain", mountain);
  };


  return {
    formState,
    selectedMountain,
    searchBoxVisible,
    mountainSearchResult,
    handleChange,
    handleSetMountain,
  }
}

export default useSpeedMeetWrite;