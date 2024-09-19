const queryKey = {
  default: {
    speedMeets: (page) => [`speedMeets${page}`],
    speedMeet: (id) => `speedMeet${id}`,
    mountains: ['mountains'],
    mountain: (id) => [`mountain${id}`],
    attendee: ['attendee']
  }
}
export default queryKey;