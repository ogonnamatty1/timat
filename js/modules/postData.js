 async function postusers(url, studentData) {
    // // Default options are marked with *
    // const response = fetch(await url, {
    //   method: "POST", // *GET, POST, PUT, DELETE, etc.
    //   mode: "no-cors", // no-cors, *cors, same-origin
    // //   cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    //   credentials: "same-origin", // include, *same-origin, omit
    //   headers: {
    //     "Content-Type": "application/json",
    //     // 'Content-Type': 'application/x-www-form-urlencoded',
    //   },
    // //   redirect: "follow", // manual, *follow, error
    //   referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    //   body: JSON.stringify(data), // body data type must match "Content-Type" header
    // });
    // return response.json(); // parses JSON response into native JavaScript objects

    try {
      const res = await fetch(await url, {
        method: 'POST',
        mode: "no-cors",
        credentials: "omit", 
        body: JSON.stringify(studentData),
        cache: "no-cache",
        headers: {
          'Content-type': 'application/json',
        },
      })
      if(res.ok || res.status === 200) {
        return res.json().then((json) => json);
      }
    } catch (error) {
      throw new Error(error.message | undefined)
    }
  }
export default postusers