import { useState, useMemo } from 'react'

const App = () => {
  return (
    <div className="bg-blue-100 items-center justify-center text-center min-h-screen">
      <nav>
        <h1 className="bg-blue-900 text-white text-xl font-bold py-2">
          Project 7: BMI CALCULATOR
        </h1>
      </nav>
      <Bmi />
    </div>
  )
}

const Bmi = () => {
  const [weight, setWeight] = useState(50)
  const [height, setHeight] = useState(180)

  const calcBMI = useMemo(() => {
    return (weight / ((height / 100) * (height / 100))).toFixed(2)
  }, [weight, height])

  return (
    <div className="bg-blue-100 text-center space-y-8 p-8 min-h-screen">
      <div className="space-y-2">
        <label htmlFor="weight" className="text-lg font-semibold block">
          Kilo: {weight} kg
        </label>
        <input
          type="range"
          id="weight"
          min="5"
          max="175"
          value={weight}
          onChange={(e) => setWeight(Number(e.target.value))}
          className="w-1/2"
        />
      </div>
      <div className="space-y-2">
        <label htmlFor="height" className="text-lg font-semibold block">
          Boy: {height} cm
        </label>
        <input
          type="range"
          min="30"
          max="230"
          value={height}
          onChange={(e) => setHeight(Number(e.target.value))}
          className="w-1/2"
        />
      </div>
      <footer className="text-lg font-semibold space-y-2">
        <h3>
          BMI:
          <span className="bg-blue-900 text-white py-1 px-4 rounded-full ml-2">
            {calcBMI}
          </span>
        </h3>
        <p>
          {calcBMI < 18.5
            ? 'Zayıf'
            : calcBMI >= 18.5 && calcBMI < 25
            ? 'Sağlıklı'
            : calcBMI >= 25 && calcBMI < 30
            ? 'Aşırı Kilolu'
            : 'Obez'}
        </p>
      </footer>
    </div>
  )
}

export default App
