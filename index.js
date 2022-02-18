addEventListener("scheduled", event => {
  event.waitUntil(handle(event));
});

async function handle(event) {
  const url = `https://api.netlify.com/api/v1/sites/${NETLIFY_SITE_ID}`;
  const headers = new Headers({
    Authorization: `Bearer ${NETLIFY_ACCESS_TOKEN}`,
    "Content-Type": "application/json",
  });
  const body = JSON.stringify({
    build_settings: {
      stop_builds: true,
    },
  });
  const init = {
    method: "PATCH",
    headers,
    body,
  };
  await fetch(url, init);
}
