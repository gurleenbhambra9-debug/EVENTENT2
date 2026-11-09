
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import API from "../Api/Api";
import "../assets/styles/Auth.css";

function Register() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
    });

    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        if (formData.password !== formData.confirmPassword) {
            setError("Passwords do not match.");
            return;
        }

        try {
            setLoading(true);

            const response = await API.post("/api/register", {
                name: formData.name.trim(),
                email: formData.email.trim().toLowerCase(),
                password: formData.password
            });

            alert(
                response.data.message ||
                "Registration successful! Please login."
            );

            navigate("/login");

        } catch (error) {
            setError(
                error.response?.data?.message ||
                "Registration failed. Please try again."
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="auth-page">
            <div className="auth-wrapper">

                <div className="auth-visual">
                    <Link to="/" className="auth-brand">
                        EVENTENT<span>.</span>
                    </Link>

                    <div className="visual-content">
                        <p className="visual-small">
                            LET'S CREATE SOMETHING BEAUTIFUL
                        </p>

                        <h1>
                            Every occasion deserves to be unforgettable.
                        </h1>

                        <p>
                            Join EVENTENT and take the first step towards
                            creating moments worth remembering.
                        </p>
                    </div>

                    <div className="visual-footer">
                        <span>DESIGNED TO CELEBRATE LIFE</span>
                        <span>01 / EVENTENT</span>
                    </div>
                </div>

                <div className="auth-form-section">
                    <div className="auth-form-container">

                        <p className="form-eyebrow">CREATE YOUR ACCOUNT</p>

                        <h2>Join EVENTENT</h2>

                        <p className="form-description">
                            Create an account to manage your event enquiries.
                        </p>

                        <form onSubmit={handleSubmit}>

                            <div className="form-group">
                                <label>Full Name</label>

                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Enter your full name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label>Email Address</label>

                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Enter your email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label>Password</label>

                                <div className="password-field">
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        name="password"
                                        placeholder="Create a password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        required
                                        minLength={8}
                                    />

                                    <button
                                        type="button"
                                        className="password-toggle"
                                        onClick={() =>
                                            setShowPassword(!showPassword)
                                        }
                                    >
                                        {showPassword ? "Hide" : "Show"}
                                    </button>
                                </div>
                            </div>

                            <div className="form-group">
                                <label>Confirm Password</label>

                                <input
                                    type="password"
                                    name="confirmPassword"
                                    placeholder="Confirm your password"
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            {error && (
                                <p className="auth-error">{error}</p>
                            )}

                            <button
                                type="submit"
                                className="auth-submit"
                                disabled={loading}
                            >
                                {loading ? "Creating Account..." : "Create Account"}
                                <span>→</span>
                            </button>

                        </form>

                        <p className="auth-switch">
                            Already have an account?
                            <Link to="/login"> Login</Link>
                        </p>

                        <Link to="/" className="back-home">
                            ← Back to Home
                        </Link>

                    </div>
                </div>

            </div>
        </div>
    );
}

export default Register;
