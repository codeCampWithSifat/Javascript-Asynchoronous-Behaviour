const hasmeeting = true;

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

meeting
 .then((res) => {
    // resolve
    // console.log(JSON.stringify(res))
    console.log(res)

 } )
 .catch((err) => {
    // rejected
    console.log(err.message);
 })
