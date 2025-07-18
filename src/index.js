export default {
  async fetch(request) {
    const url = new URL(request.url);
    // Change hostname to your ngrok URL hostname
    url.hostname = "01e2d532d41f.ngrok-free.app";
    url.protocol = "https:";

    // Forward the original path and query string to ngrok URL
    const proxyRequest = new Request(url.toString(), {
      method: request.method,
      headers: request.headers,
      body: request.body,
      redirect: 'follow',
    });

    return fetch(proxyRequest);
  }
}
