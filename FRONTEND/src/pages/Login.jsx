import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import API from "../Api/Api";
import "../assets/styles/Auth.css";

function Login() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: "",
        password: ""
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

        try {
            setLoading(true);

            const response = await API.post("/api/login", {
                email: formData.email.trim().toLowerCase(),
                password: formData.password
            });

            // Extract token and flexible user/role payloads from server response
            const resData = response.data;
            const token = resData.token;
            
            // Look for role inside user object, data object, or root level
            const userObj = resData.user || resData.data || resData;
            const role = userObj?.role || resData.role;

            if (!token || !role) {
                setError("Invalid response from server: Missing token or role.");
                return;
            }

            // Clear any previous login information
            localStorage.removeItem("token");
            localStorage.removeItem("user");

            // Store current login information
            localStorage.setItem("token", token);
            localStorage.setItem("user", JSON.stringify(userObj));

            // Redirect according to user role
            if (role === "admin") {
                alert("Admin login successful!");
                navigate("/admin-dashboard", { replace: true });
            } else if (role === "user") {
                alert("User login successful!");
                navigate("/user-dashboard", { replace: true });
            } else {
                localStorage.removeItem("token");
                localStorage.removeItem("user");
                setError(`Unknown user role: ${role}`);
            }

        } catch (error) {
            setError(
                error.response?.data?.message ||
                "Login failed. Please check your credentials."
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
                        <p className="visual-small">WELCOME BACK</p>

                        <h1>
                            Let's make your next celebration extraordinary.
                        </h1>

                        <p>
                            Sign in to explore your event journey and
                            stay connected with everything you have planned.
                        </p>
                    </div>

                    <div className="visual-footer">
                        <span>YOUR MOMENTS, OUR PASSION</span>
                        <span>02 / EVENTENT</span>
                    </div>
                </div>

                <div className="auth-form-section">
                    <div className="auth-form-container">

                        <p className="form-eyebrow">WELCOME TO EVENTENT</p>

                        <h2>Sign In</h2>

                        <p className="form-description">
                            Enter your account details to continue.
                        </p>

                        <form onSubmit={handleSubmit}>

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
                                        placeholder="Enter your password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        required
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

                            {error && (
                                <p className="auth-error">{error}</p>
                            )}

                            <button
                                type="submit"
                                className="auth-submit"
                                disabled={loading}
                            >
                                {loading ? "Signing In..." : "Sign In"}
                                <span>→</span>
                            </button>

                        </form>

                        <p className="auth-switch">
                            Don't have an account?
                            <Link to="/register"> Create Account</Link>
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

export default Login;