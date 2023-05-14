document.addEventListener(  "keydown",(event) => {

  
    const keyName = event.key;

    if (keyName === "f") {
      // do not alert when only Control key is pressed.
      return alert('Ola')
    }
  }
)