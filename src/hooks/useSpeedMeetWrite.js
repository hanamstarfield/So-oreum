import useGetMountainQuery from "@/queries/useGetMountainQuery";
import { useState } from "react";

const useSpeedMeetWrite = () => {
  const [formState, setFormState] = useState({
    title: "",
    date: "",
    mntnid: "",
    mntnnm: "",
    capacity: "",
    content: "",
    chatLink: "",
    attendance: 0
  });

  const [selectedMountain, setSelectedMountain] = useState(null);
  const [searchBoxVisible, setSearchBoxVisible] = useState(false);
  const [mountainSearchResult, setMountainSearchResult] = useState(null);

  const { data: mountains = [], isPending } = useGetMountainQuery();

  console.log('mountains', mountains);

  const handleMountainChange = (e) => {
    const mntnnm = e.target.value;
    setFormState((prev) => {
      return {
        ...prev,
        mntnnm
      };
    });
    if (mountains.length > 0) {
      const result = mountains.filter((mountain) => mountain.mntnnm.includes(mntnnm));
      setMountainSearchResult(result);

      const condition = !!mntnnm;
      setSearchBoxVisible(condition);
      setSelectedMountain(null);
    }
  }

  const handleMountainNameBlur = () => {
    if (!searchBoxVisible) {
      return;
    }

    setFormState((prev) => {
      setSelectedMountain(mountainSearchResult[0]);
      setSearchBoxVisible(false);

      return {
        ...prev,
        mntnnm: mountainSearchResult[0].mntnnm,
        mntnid: mountainSearchResult[0].mntnid,
      };

    });
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
        mntnnm: mountain.mntnnm,
        mntnid: mountain.mntnid,
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