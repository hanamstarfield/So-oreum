import create from 'zustand';

const useSpeedMeetStore = create((set) => ({
  formState: null,
  // formState: {
  //   title: "",
  //   date: "",
  //   mntnid: "",
  //   mntnnm: "",
  //   capacity: "",
  //   content: "",
  //   chatLink: "",
  //   attendance: 0
  // },
  setFormState: (data) => {
    console.log('data', data);


    set((state) => ({
      formState: {
        ...state.formState,
        ...data
      }
    }))
  }
}));

export default useSpeedMeetStore;
