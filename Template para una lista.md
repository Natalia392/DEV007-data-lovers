# Template para una lista

const app = document.getElementById("app");

getUsers().then(res => {
  const elements = res.reduce((acc, user) => acc + userTemplate(user), "");

  const list = `
    <ul class="user-list">
      ${elements}
    </ul>
  `;

  app.innerHTML = list;
});

function userTemplate(user) {
  const { city, street, suite } = user.address;

  return `
    <li class="user" id="user${user.id}">
      <p class="user-name">
        <b>${user.name}</b><span> -- ${user.username}</span>
      </p>
      <address class="user-address">${street} ${suite}, ${city}</address>
    </li>
  `;
}

function getUsers() {
  return fetch("https://jsonplaceholder.typicode.com/users").then(res =>
    res.json()
  );
}