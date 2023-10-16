import classes from './newsletter-registration.module.css';
import { useRef } from 'react';

function NewsletterRegistration() {
    const emailInput = useRef(null);

    function registrationHandler(event) {
        event.preventDefault();

        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const email = emailInput.current.value;

        if (regex.test(email)) {
            console.log('Valid email');

            fetch('/api/newsletter', {
                method: 'POST',
                body: JSON.stringify(email),
                headers: { 'Content-Type': 'application/json' },
            })
                .then((res) => res.json())
                .then((data) => console.log(data))
                .catch((err) => console.log(err.message));
        } else {
            console.log('Invalid email');
        }
    }

    return (
        <section className={classes.newsletter}>
            <h2>Sign up to stay updated!</h2>
            <form onSubmit={registrationHandler}>
                <div className={classes.control}>
                    <input
                        type="email"
                        id="email"
                        placeholder="Your email"
                        aria-label="Your email"
                        ref={emailInput}
                    />
                    <button>Register</button>
                </div>
            </form>
        </section>
    );
}

export default NewsletterRegistration;
