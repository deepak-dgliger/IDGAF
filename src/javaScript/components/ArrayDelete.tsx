import React from 'react'

const ArrayDelete: React.FC<any> = () => {

    const dummyData = {
        "Motor": [
            { name: "Four Wheeler" },
            { name: "Two Wheeler" },
            { name: "PCCV Wheeler" },
            { name: "GCCV" },
            { name: "StandAlone CPA" },
        ],
        "Health Policy": [
            { name: "Health1" },
            { name: "Health2" },
            { name: "Health3" },
            { name: "Health4" },
            { name: "Health5" },
        ],
        "Travel": [
            { name: "Health1" },
            { name: "Health2" },
            { name: "Health3" },
            { name: "Health4" },
            { name: "Health5" },
        ],
        "Rural": [
            { name: "Health1" },
            { name: "Health2" },
            { name: "Health3" },
            { name: "Health4" },
            { name: "Health5" },
        ]
    }

    const preData = () => {
        console.log('dummyData', dummyData);
    }

    const currentData = () => {
        delete dummyData['Health Policy']
        let motorData = dummyData['Motor'].filter((item) => (item?.name == 'GCCV'))
        dummyData['Motor'] = dummyData['Motor'].filter((item) => (item?.name != 'GCCV'))
        console.log('motorData',motorData);
        dummyData['Rural'].push(...motorData)
        console.log('currentData', dummyData);
    }

    return (
        <div>
            <button onClick={preData}>Prev Data</button> <br /><br />
            <button onClick={currentData}>Current Data</button>
        </div>
    )
}

export default ArrayDelete