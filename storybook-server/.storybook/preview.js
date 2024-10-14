
// Customise fetch so that it uses a relative URL.
const fetchStoryHtml = async (url, path, params, context) => {
  const qs = new URLSearchParams(params);
  const response = await fetch("/storybook_preview/" + path + "?" + qs.toString());
  return response.text();
};

export const parameters = {
  server: {
    url: "http://localhost/storybook_preview", // Ignored by fetchStoryHtml.
    fetchStoryHtml,
  },
};
