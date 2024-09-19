const queryKey = {
  default: {
    speedMeets: (page) => [`speedMeets${page}`],
    speedMeet: (id) => `speedMeet${id}`,
    attendee: ['attendee']
  }
}
export default queryKey;