import React, {useState} from 'react'

function App() {

    const [name, setName] = useState(["Carlos", "Francisco", "Carla", "Monica"])
    return (
        <div>
            <h1>ListName</h1>
            {
                name.map((item, index) => (
                    <li className="ml-3" key={index}>{item}</li>
                ))
            }
        </div>
    )
}

export default App
