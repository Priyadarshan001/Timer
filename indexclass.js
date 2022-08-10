import React, { useEffect } from 'react'

function Timer() {
    const [sec,setSec] = useState(0);
    const [min,setMin] = useState(0);
    const [hr,setHr] = useState(0);

    var timer;
    useEffect(()=>
        timer= setInterval(()=>
            setSec(sec+1);
            if(sec==59){
                setMin(min+1);
                setSec(0);
            }
            if(min==59){
                setHr(hr+1);
                setMin(0);
            }
        )
    )


  return (
    <div>
        <h2>Timer</h2>

    </div>
  )
}

export default Timer