import React from "react";
import ReactDOM from "react-dom/client";

function Page() {
    const [formData, setFormData] = React.useState({
        firstName: "",
        lastName: "",
        emailID: "",
        comment: "",
        isFriendly: true,
        employment: "",
        favColor: "",
    });
    function handleChange(event) {
        const {name, value, type, checked} = event.target;
        setFormData((prevState) => {
            return {
                ...prevState,
                [name]: type === "checkbox" ? checked : value,
            };
        });
    }
    function handleSubmit(event) {
        event.preventDefault();
        console.log(formData);
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="First name"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                />
                <br />
                <input
                    type="text"
                    placeholder="Last name"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                />
                <br />
                <input
                    type="email"
                    placeholder="Email ID"
                    name="emailID"
                    value={formData.emailID}
                    onChange={handleChange}
                />
                <br />
                <textarea
                    placeholder="Comment"
                    name="comment"
                    value={formData.comment}
                    onChange={handleChange}
                />
                <br />
                <input
                    type="checkbox"
                    id="isFriendly"
                    name="isFriendly"
                    checked={formData.isFriendly}
                    onChange={handleChange}
                />
                <label htmlFor="isFriendly">Are you friendly?</label>
                <br />
                <fieldset>
                    <legend>Current employment status</legend>
                    <input
                        type="radio"
                        id="un"
                        name="employment"
                        value="un"
                        checked={formData.employment === "un"}
                        onChange={handleChange}
                    />
                    <label htmlFor="un">Unemployed</label>
                    <br />
                    <input
                        type="radio"
                        id="pt"
                        name="employment"
                        value="pt"
                        checked={formData.employment === "pt"}
                        onChange={handleChange}
                    />
                    <label htmlFor="pt">Part-time</label>
                    <br />
                    <input
                        type="radio"
                        id="ft"
                        name="employment"
                        value="ft"
                        checked={formData.employment === "ft"}
                        onChange={handleChange}
                    />
                    <label htmlFor="ft">Full-time</label>
                    <br />
                </fieldset>
                <label htmlFor="favColor">What's your favourite color? </label>
                <select
                    id="favColor"
                    name="favColor"
                    value={formData.favColor}
                    onChange={handleChange}
                >
                    <option value="">--- Choose ---</option>
                    <option value="red">Red</option>
                    <option value="green">Green</option>
                    <option value="blue">Blue</option>
                </select>
                <br />
                <button>Submit</button>
            </form>
            <p>
                Name: {formData.firstName} {formData.lastName}
            </p>
            <p>Email: {formData.emailID}</p>
            <p>Comment: {formData.comment}</p>
        </>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Page />);
