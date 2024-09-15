const queryKey = {
  default: {
    speedMeets: ['speedMeets'],
    speedMeet: (id) => `speedMeet${id}`,
    attendee: ['attendee']
  }
}
export default queryKey;