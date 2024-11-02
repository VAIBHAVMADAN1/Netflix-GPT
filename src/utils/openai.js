
export const openai = async (prompt)=>{
    const p = await fetch("https://openrouter.ai/api/v1/chat/completions", {
        method: "POST",
        headers: {
            "Authorization": `Bearer ${process.env.REACT_APP_OPENROUTER_API_KEY}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "model": "openai/gpt-3.5-turbo-16k",
            // "model": "openai/gpt-4o-2024-08-06",
            "messages": [
                {
                    "role": "user",
                    "content": `Act as a movie recommendation system. Suggest some movies for the query: ${prompt}. Only give names of 5 movies, comma seperated like the example result given ahead- 3 Idiots, PK, Dangal, Kabir Singh, Joker`
                }
            ]
        })
    });
    console.log(prompt);
    const json = await p.json();
    return json.choices[0]?.message?.content.split(", ");
}