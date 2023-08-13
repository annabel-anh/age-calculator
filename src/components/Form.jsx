/* eslint-disable react/prop-types */
import '../styles/Form.css'

export default function Form(props) {
    const {day, month, year} = props.birthday
    const handleChange = props.handleChange
    const errors = props.errors

    const labelErrorStyle = { color: "var(--primary-light-red)" }


    return (
        <form className="form flex" onSubmit={props.handleSubmit}>
            <div className="form--input-container flex">
                <div>
                    <label htmlFor="day"
                           className="uppercase block form--label"
                           style={errors.day || errors.wholeDate ? labelErrorStyle : null}
                    >
                        Day
                    </label>
                    <input
                        type="text"
                        placeholder="DD"
                        name="day"
                        id="day"
                        value={day}
                        onChange={props.handleChange}
                        className="form--input"
                    />
                    {errors.day && <p className="error-msg">{errors.day}</p>}
                </div>
                <div>
                    <label htmlFor="month"
                           className="uppercase block form--label"
                           style={errors.month || errors.wholeDate ? labelErrorStyle : null}
                    >
                        Month
                    </label>
                    <input
                        type="text"
                        placeholder="MM"
                        name="month"
                        id="month"
                        value={month}
                        onChange={handleChange}
                        className="form--input"
                    />
                    {errors.month && <p className="error-msg">{errors.month}</p>}
                </div>
                <div>
                    <label htmlFor="year"
                           className="uppercase block form--label"
                           style={errors.year || errors.wholeDate ? labelErrorStyle : null}
                    >
                        Year
                    </label>
                    <input
                        type="text"
                        placeholder="YYYY"
                        name="year"
                        id="year"
                        value={year}
                        onChange={handleChange}
                        className="form--input"
                    />
                    {errors.year && <p className="error-msg">{errors.year}</p>}
                </div>
            </div>
            {errors.wholeDate && <p className="error-msg error-msg-whole-date">{errors.wholeDate}</p>}
            <div className="button-container flex">
                <div className="line"></div>
                <button className="button"></button>
            </div>
        </form>
    )
}