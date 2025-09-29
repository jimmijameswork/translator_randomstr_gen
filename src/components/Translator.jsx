import { useState } from "react";
import axios from "axios";
import Loading from "./Loading";

export default function Translator() {
    const [text, setText] = useState("");
    const [translated, setTranslated] = useState("");
    const [language, setLanguage] = useState("es"); // default Spanish
    const [loading, setLoading] = useState(false);



    const handleTranslate = async () => {
        try {
            setLoading(true);
            const options = {
                method: 'POST',
                url: 'https://free-google-translator.p.rapidapi.com/external-api/free-google-translator',
                params: {
                    from: 'en',
                    to: language,
                    query: text
                },
                headers: {
                    'x-rapidapi-key': import.meta.env.VITE_RAPIDAPI_KEY,
                    'x-rapidapi-host': 'free-google-translator.p.rapidapi.com',
                    'Content-Type': 'application/json'
                },
                data: {
                    translate: 'rapidapi'
                }
            };

            const response = await axios.request(options);
            setTranslated(response.data.translation);
        } catch (error) {
            console.error(error);
        }
        setLoading(false);
    };

    return (
        <div className="max-w-md mx-auto p-6 bg-white shadow rounded mt-6">
            <textarea
                className="w-full p-2 border rounded mb-2 focus-within:outline-blue-500"
                placeholder="Enter English text..."
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <select
                className="w-full p-2 border rounded mb-2 focus-within:outline-blue-500"
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
            >
                <option value="es" className="text-gray-700">Spanish</option>
                <option value="fr" className="text-gray-700">French</option>
                <option value="de" className="text-gray-700">German</option>
                <option value="hi" className="text-gray-700">Hindi</option>
                <option value="zh" className="text-gray-700">Chinese</option>
            </select>
            <button
                className="w-full bg-blue-500 text-white p-2 rounded cursor-pointer hover:bg-blue-600"
                onClick={handleTranslate}
            >
                Translate
            </button>
            {loading ? <Loading /> :
            translated && <p className="mt-4 font-semibold">{translated}</p>
            }
        </div>
    );
}
