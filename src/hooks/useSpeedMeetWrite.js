import meetApi from "@/api/meet";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

const useSpeedMeetWrite = () => {
  const [formState, setFormState] = useState({
    title: "",
    date: "",
    mountainId: "",
    mountainName: "",
    capacity: "",
    content: "",
    chatLink: "",
    attendance: 0
  });

  const [selectedMountain, setSelectedMountain] = useState(null);
  const [searchBoxVisible, setSearchBoxVisible] = useState(false);
  const [mountainSearchResult, setMountainSearchResult] = useState(null);

  const { data: mountains = [], isPending } = useQuery({
    queryKey: ["dummy-mountain"],
    queryFn: () => meetApi.getDummyMountain()
  });

  const handleMountainChange = (e) => {
    const mountainName = e.target.value;
    setFormState((prev) => {
      return {
        ...prev,
        mountainName: mountainName
      };
    });
    if (mountains.length > 0) {
      const result = mountains.filter((mountain) => mountain.mntnnm.includes(mountainName));
      setMountainSearchResult(result);

      const condition = !!mountainName;
      setSearchBoxVisible(condition);
      setSelectedMountain(null);
    }
  }

  const handleMountainNameBlur = () => {
    if (!searchBoxVisible) {
      return;
      //   handleSetMountain(mountainSearchResult[0]);
    }

    // handleSetMountain(mountainSearchResult[0]);

    setFormState((prev) => {
      // console.log('first', first)
      // const isExist = mountainSearchResult.some(mountain => mountain.mntnid === prev.mountainId);

      // if (isExist) {
      //   return prev;
      // }
      setSelectedMountain(mountainSearchResult[0]);
      setSearchBoxVisible(false);

      return {
        ...prev,
        mountainName: mountainSearchResult[0].mntnnm,
        mountainId: mountainSearchResult[0].mntnid,
      };

    });
    // setSelectedMountain(mountainSearchResult[0]);
    // setSearchBoxVisible(false);
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState((prev) => {
      return {
        ...prev,
        [name]: value
      };
    });
  };

  const handleSetMountain = (mountain) => {
    console.log('mountain', mountain);
    setFormState((prev) => {
      return {
        ...prev,
        mountainName: mountain.mntnnm,
        mountainId: mountain.mntnid,
      };
    });

    setSelectedMountain(mountain);
    setSearchBoxVisible(false);
  };



  return {
    formState,
    handleMountainChange,
    selectedMountain,
    searchBoxVisible,
    mountainSearchResult,
    handleChange,
    handleSetMountain,
    handleMountainNameBlur
  }
}

export default useSpeedMeetWrite;