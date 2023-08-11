/* eslint-disable react/prop-types */
import '../styles/Result.css'

export default function Result(props) {
    const years = Math.round(props.age.years)
    const months = Math.round(props.age.months)
    const days = Math.floor(props.age.days)
    const isDateValid = props.isDateValid

    return (
        <div className="age">
            <p>
                <span className="age-value">{isDateValid && !isNaN(years) ? years : "--" } </span>
                {years === 1 ? "year" : "years"}
            </p>
            <p>
                <span className="age-value">{isDateValid && !isNaN(months) ? months : "--"} </span>
                {months === 1 ? "month" : "months"}
            </p>
            <p>
                <span className="age-value">{isDateValid && !isNaN(days) ? days : "--"} </span>
                {days === 1 ? "day" : "days"}
            </p>
        </div>
    )
}