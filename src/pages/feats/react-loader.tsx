import { CSSProperties, useState } from 'react'
import {
  BarLoader,
  BeatLoader,
  BounceLoader,
  ClockLoader,
} from 'react-spinners'

const override: CSSProperties = {
  display: 'block',
  margin: '0 auto',
  borderColor: 'red',
}

function App() {
  let [loading, setLoading] = useState(true)
  let [color, setColor] = useState('#ffffff')

  return (
    <div className="sweet-loading">
      <button onClick={() => setLoading(!loading)}>Toggle Loader</button>
      <input
        value={color}
        onChange={(input) => setColor(input.target.value)}
        placeholder="Color of the loader"
      />

      <ClockLoader />
      <BarLoader />

      <BeatLoader />

      <BounceLoader />
      <h1>More</h1>
    </div>
  )
}

export default App
