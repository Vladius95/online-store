export function loadResource(url: string) {
  return new Promise<string>((resolve, reject) => {
    const request: XMLHttpRequest = new XMLHttpRequest();
    request.open("GET", url, true);
    request.onload = () => {
      if (request.status >= 200 && request.status < 300) {
        resolve(request.responseText);
      } else {
        reject(`Error: HTTP Status ${request.status} on resource ${url}`);
      }
    };
    request.send();
  });
}

export function imageFullPath(name: string) {
  return `data/images/goods/${name}`;
}
