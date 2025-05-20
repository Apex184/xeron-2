import React, { useState } from "react";
import Button from "../ui/Button";
import Card from "../ui/Card";
import { countryList } from "../../data/languageData";
import { useLanguage } from "../../context/LanguageContext";
import { CheckCircle2 } from "lucide-react";
// const BASE_URL = import.meta.env.VITE_API_BASE_URL;

const WaitlistForm: React.FC = () => {
    const { getTranslation } = useLanguage();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        country: "US",
    });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [successMessage, setSuccessMessage] = useState<string>(""); // ✅ Added

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError(null);
        setSuccessMessage("");

        try {
            const response = await fetch(
                "https://xerion.onrender.com/api/waitlist",
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(formData),
                }
            );

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(
                    errorData.message || "Failed to submit the form."
                );
            }

            const data = await response.json();

            setSuccessMessage(
                data.message || "Successfully joined the waitlist."
            ); // ✅ Use backend message
            setIsSubmitted(true);
        } catch (err) {
            setError(
                err instanceof Error ? err.message : "Something went wrong."
            );
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <section
            id="waitlist-form"
            className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-indigo-950"
        >
            <div className="container mx-auto px-4 sm:px-6">
                <div className="max-w-2xl mx-auto">
                    <Card variant="frosted" className="overflow-hidden">
                        {isSubmitted ? (
                            <div className="p-10 text-center">
                                <div className="w-16 h-16 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <CheckCircle2
                                        size={32}
                                        className="text-green-600 dark:text-green-400"
                                    />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                                    {getTranslation("formSuccess")}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400 mb-6">
                                    {successMessage ||
                                        "Thank you for joining our waitlist! We'll notify you when early access becomes available."}
                                </p>
                                <Button
                                    onClick={() => setIsSubmitted(false)}
                                    variant="secondary"
                                >
                                    Back to Form
                                </Button>
                            </div>
                        ) : (
                            <div className="p-8">
                                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                                    Join Our Waitlist
                                </h2>
                                <form onSubmit={handleSubmit}>
                                    <div className="space-y-4">
                                        <div>
                                            <label
                                                htmlFor="name"
                                                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                                            >
                                                {getTranslation("formName")}
                                            </label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                                            />
                                        </div>

                                        <div>
                                            <label
                                                htmlFor="email"
                                                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                                            >
                                                {getTranslation("formEmail")}
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                                            />
                                        </div>

                                        <div>
                                            <label
                                                htmlFor="country"
                                                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                                            >
                                                {getTranslation("formCountry")}
                                            </label>
                                            <select
                                                id="country"
                                                name="country"
                                                value={formData.country}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                                            >
                                                {countryList.map((country) => (
                                                    <option
                                                        key={country.code}
                                                        value={country.code}
                                                    >
                                                        {country.name}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>

                                        {error && (
                                            <p className="text-red-600 dark:text-red-400 text-sm mt-2">
                                                {error}
                                            </p>
                                        )}

                                        <div className="pt-4">
                                            <Button
                                                type="submit"
                                                variant="primary"
                                                className="w-full"
                                                disabled={isLoading}
                                            >
                                                {isLoading
                                                    ? "Processing..."
                                                    : getTranslation(
                                                          "formSubmit"
                                                      )}
                                            </Button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        )}
                    </Card>
                </div>
            </div>
        </section>
    );
};

export default WaitlistForm;
