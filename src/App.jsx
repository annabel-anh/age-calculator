/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { DateTime } from 'luxon';
import Form from './components/Form.jsx'
import Result from './components/Result.jsx'
import './styles/App.css'

function App() {
    const [birthday, setBirthDay] = useState(
        {
            day: "",
            month: "",
            year: "",
        }
    )
    const [age, setAge] = useState({})

    const [errorMsg, setErrorMsg] = useState({})
    const [isDateValid, setIsDateValid] = useState(false)

    function handleChange(event) {
        setBirthDay(prevBirthDay => {
            return {
                ...prevBirthDay,
                [event.target.name]: event.target.value
            }
        })
    }

    function handleSubmit(event) {
        // prevent form from reloading
        event.preventDefault()

        // check if the inputs are valid
        let newError = {}

        const bdDay = birthday.day.replace(/\s/g, '')
        const bdMonth = birthday.month.replace(/\s/g, '')
        const bdYear = birthday.year.replace(/\s/g, '')

        const todayDate = DateTime.local()
        const todayYear = todayDate.get("year")

        const emptyErrorMsg = "This field is required"
        !bdDay ?
            newError.day = emptyErrorMsg :
            ((bdDay > 0) && (bdDay < 32) ? null : "Must be a valid day")

        !bdMonth ?
            newError.month = emptyErrorMsg :
            ((bdMonth > 0) && (bdMonth < 13) ? null : "Must be a valid month")

        !bdYear ?
            newError.year = emptyErrorMsg :
            (bdYear <= todayYear ? null : "Must be in the past")

        // Check if the whole date is valid
        if (bdDay && bdMonth && bdYear) {
            const formInput = `${birthday.year}-${birthday.month}-${birthday.day}`
            const inputBirthDate = DateTime.fromISO(formInput)

            if (!inputBirthDate.isValid) {
                newError = { wholeDate: `${formInput} is not a valid date`}
            }
            else {
                if (inputBirthDate > todayDate) {
                    newError = { year: "Must be in the past" }
                }
                else {
                    const duration = todayDate.diff(inputBirthDate, ["years", "months", "days"])
                    setAge(duration.toObject())
                }
            }

        }
        setErrorMsg(newError)

        if (Object.keys(newError).length === 0) {
            setIsDateValid(true)
        }
        else {
            setIsDateValid(false)
        }
    }


    return (
        <div className="app">
                <Form
                    birthday={{
                        day: birthday.day,
                        month: birthday.month,
                        year: birthday.year
                    }}
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                    errors={errorMsg}
                />
                <Result age={age} isDateValid={isDateValid} ></Result>
        </div>
    )
}

export default App
