const hasmeeting = false;

const meeting = new Promise((resolve, reject) => {
  // do some stuff
  if (!hasmeeting) {
    const meetingDetails = {
      name: "Technical Meeting",
      location: "Google Meet",
      time: "10 pm",
    };
    resolve(meetingDetails);
  } else {
    reject(new Error("Meeting Already Sehedule"));
  }
});

const addToCalander = (meetingDetails) => {
  return new Promise((resolve, reject) => {
    const calander = `${meetingDetails.name} will start ${meetingDetails.location} at ${meetingDetails.time}`;
    return resolve(calander);
  });
};

//  async await full conception
async function myMeeting() {
  try {
    const meetingDetails = await meeting;
    const calander = await addToCalander(meetingDetails);
    console.log(calander);
  } catch (error) {
    console.log(error);
  }
}
myMeeting();

// meeting
//  .then(addToCalander)
//  .then((res) => {
//     // resolve
//     // console.log(JSON.stringify(res))
//     console.log(res)

//  }).catch((err) => {
//     // rejected
//     console.log(err.message);
//  })
