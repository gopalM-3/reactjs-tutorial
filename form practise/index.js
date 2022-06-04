import React from "react";
import ReactDOM from "react-dom/client";

function Page() {
    const [formData, setFormData] = React.useState({
        emailID: "",
        password: "",
        passwordConfirm: "",
        newsletterSub: true,
    });
    function handleChange(event) {
        const {name, type, value, checked} = event.target;
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
        if (formData.password === formData.passwordConfirm) {
            console.log("Successfully signed up!");
            if (formData.newsletterSub) {
                console.log("Thank you for signing up to our newsletter!");
            }
        } else {
            console.log("Entered passwords don't match.");
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="email"
                id="emailID"
                name="emailID"
                placeholder="Enter email"
                value={formData.emailID}
                onChange={handleChange}
            />
            <br />
            <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter password"
                value={formData.password}
                onChange={handleChange}
            />
            <br />
            <input
                type="password"
                id="passwordConfirm"
                name="passwordConfirm"
                placeholder="Confirm password"
                value={formData.passwordConfirm}
                onChange={handleChange}
            />
            <br />
            <input
                type="checkbox"
                id="newsletterSub"
                name="newsletterSub"
                checked={formData.newsletterSub}
                onChange={handleChange}
            />
            <label htmlFor="newsletterSub">I want to join the newsletter</label>
            <br />
            <button>Sign up</button>
        </form>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Page />);
