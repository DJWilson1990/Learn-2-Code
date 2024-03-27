export default async function Render({ text, language }) {
  const apiKey = process.env.deepLapikey;

  const response = await fetch("https://api-free.deepl.com/v2/translate", {
    method: "POST",
    headers: {
      Authorization: `DeepL-Auth-Key ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ text: [text], target_lang: language }),
  });

  const translation = await response.json();

  const outputText = translation.translations[0].text;

  return <>{outputText}</>;
}
