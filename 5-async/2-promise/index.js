function fetchData(url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    // <-- start
    // TODO 22: 通过Promise实现异步请求
    xhr.open('get', url, true);
    xhr.onload = () => {
      if (xhr.status === 200) {
        resolve(xhr.responseText);
      } else {
        reject(new Error(xhr.responseText));
      }
    };
    xhr.onerror = () => {
      reject(new Error(xhr.statusText));
    };
    xhr.send();
    // end -->
  });
}

const URL = 'http://localhost:3000/api';
fetchData(URL)
  .then(result => {
    document.writeln(JSON.parse(result).name);
  })
  .catch(error => {
    console.error(error);
  });
