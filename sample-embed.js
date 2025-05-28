document.body.style.fontFamily = "Arial, sans-serif";

const container = document.createElement('div');
container.style.padding = '20px';
container.style.textAlign = 'center';
container.innerHTML = `
  <h2>Hello from GitHub JavaScript!</h2>
  <p>This JavaScript file was embedded via &lt;iframe&gt;.</p>
`;

document.body.appendChild(container);