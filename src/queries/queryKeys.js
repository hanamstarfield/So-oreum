const queryKey = {
  default: {
    speedMeets: (page) => [`speedMeets${page}`],
    speedMeet: (id) => `speedMeet${id}`,
    mountains: ['mountains'],
    attendee: ['attendee']
  }
}
export default queryKey;