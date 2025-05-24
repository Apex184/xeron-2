import React, { useState } from "react";
import Card from "../ui/Card";
import Button from "../ui/Button";
import { useLanguage } from "../../context/LanguageContext";
import { Send, MessageSquare, CheckCircle2 } from "lucide-react";

const ContactForm: React.FC = () => {
  const { getTranslation } = useLanguage();
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    setSuccessMessage("");

    try {
      const response = await fetch("https://xerion.onrender.com/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to send message.");
      }

      const data = await response.json();
      setSuccessMessage(data.message || "Message sent successfully!");
      setIsSubmitted(true);
      setMessage("");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
            {getTranslation("contactTitle")}
          </h2>
          <p className="text-xl text-gray-700 dark:text-gray-300">
            Have questions or feedback? We'd love to hear from you!
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card variant="frosted" className="overflow-hidden">
            <div className="p-8">
              {isSubmitted ? (
                <div className="text-center py-6">
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
                      "Thank you for reaching out. We'll get back to you as soon as possible."}
                  </p>
                  <Button
                    onClick={() => setIsSubmitted(false)}
                    variant="secondary">
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="flex items-center justify-center mb-6">
                    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400">
                      <MessageSquare size={24} />
                    </div>
                  </div>

                  <div className="mb-6">
                    <textarea
                      id="message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      required
                      rows={5}
                      placeholder={getTranslation("contactPlaceholder")}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none transition-colors"
                    />
                  </div>

                  {error && (
                    <p className="text-red-600 dark:text-red-400 text-sm mb-4">
                      {error}
                    </p>
                  )}

                  <Button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2"
                    disabled={isLoading}>
                    {isLoading ? (
                      "Sending..."
                    ) : (
                      <>
                        <Send size={18} />
                        {getTranslation("contactButton")}
                      </>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
