import * as ai from '../services/ai.service.js'

export const getResult = async (req, res) => {
    try {
        const { prompt } = req.body;
        if (!prompt) {
            return res.status(400).json({ error: "Prompt is required" });
        }
        const result = await ai.generateResult(prompt);
        return res.status(200).json({ result });
    } catch (err) {
        console.error("Error in getResult:", err);
        return res.status(500).json({ error: "Internal server error" });
    }
}